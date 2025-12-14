<script>
        import { Toaster } from 'svelte-sonner';
        import { browser } from '$app/environment';

        import { onMount, setContext } from 'svelte';
        import {
                config,
                user,
                settings,
                theme,
                WEBUI_NAME,
                mobile,
                models
        } from '$lib/stores';

        import i18n, { initI18n } from '$lib/i18n';

        import '../tailwind.css';
        import '../app.css';

        const NVIDIA_MODELS = [
                {
                        id: 'nvidia:moonshotai/kimi-k2-instruct-0905',
                        name: 'Kimi K2 Instruct',
                        owned_by: 'openai',
                        external: true,
                        source: 'nvidia'
                }
        ];

        setContext('i18n', i18n);

        const BREAKPOINT = 768;

        const staticConfig = {
                status: true,
                name: 'Open WebUI',
                version: '0.6.40',
                default_locale: 'pl-PL',
                default_models: 'nvidia:moonshotai/kimi-k2-instruct-0905',
                default_prompt_suggestions: [
                        { content: 'Help me study', title: ['Help me study', 'vocabulary for a college entrance exam'] },
                        { content: 'Give me ideas', title: ['Give me ideas', 'for what to do with my kids art'] },
                        { content: 'Tell me a fun fact', title: ['Tell me a fun fact', 'about the Roman Empire'] },
                        { content: 'Show me a code snippet', title: ['Show me a code snippet', 'of a website sticky header'] }
                ],
                features: {
                        auth: false,
                        auth_trusted_header: false,
                        enable_api_keys: false,
                        enable_signup: false,
                        enable_login_form: false,
                        enable_web_search: false,
                        enable_google_drive_integration: false,
                        enable_onedrive_integration: false,
                        enable_image_generation: false,
                        enable_admin_export: false,
                        enable_admin_chat_access: true,
                        enable_community_sharing: true,
                        enable_autocomplete_generation: false,
                        enable_direct_connections: false,
                        enable_version_update_check: false
                },
                oauth: {
                        providers: {}
                }
        };

        const defaultUser = {
                id: 'default',
                name: 'User',
                role: 'admin',
                profile_image_url: '/static/favicon.png',
                permissions: {
                        chat: {
                                temporary_enforced: false,
                                multiple_models: true
                        },
                        features: {
                                image_generation: true,
                                code_interpreter: true,
                                web_search: true
                        }
                }
        };

        const staticModels = NVIDIA_MODELS.map(m => ({
                ...m,
                info: {
                        meta: {
                                capabilities: {
                                        vision: false,
                                        usage: true
                                }
                        }
                }
        }));

        function getSystemTheme() {
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        function applyTheme(themeValue) {
                let themeToApply = themeValue;
                
                if (themeValue === 'system') {
                        themeToApply = getSystemTheme();
                } else if (themeValue === 'oled-dark') {
                        themeToApply = 'dark';
                }
                
                document.documentElement.classList.remove('dark', 'light', 'oled-dark');
                document.documentElement.classList.add(themeToApply);
                
                if (themeValue === 'oled-dark') {
                        document.documentElement.style.setProperty('--color-gray-800', '#101010');
                        document.documentElement.style.setProperty('--color-gray-850', '#050505');
                        document.documentElement.style.setProperty('--color-gray-900', '#000000');
                        document.documentElement.style.setProperty('--color-gray-950', '#000000');
                } else if (themeToApply === 'dark') {
                        document.documentElement.style.setProperty('--color-gray-800', '#333');
                        document.documentElement.style.setProperty('--color-gray-850', '#262626');
                        document.documentElement.style.setProperty('--color-gray-900', '#171717');
                        document.documentElement.style.setProperty('--color-gray-950', '#0d0d0d');
                }
                
                const metaThemeColor = document.querySelector('meta[name="theme-color"]');
                if (metaThemeColor) {
                        metaThemeColor.setAttribute('content', themeToApply === 'light' ? '#ffffff' : themeValue === 'oled-dark' ? '#000000' : '#171717');
                }
        }

        if (browser) {
                initI18n('pl-PL');
                
                config.set(staticConfig);
                WEBUI_NAME.set(staticConfig.name);
                user.set(defaultUser);
                models.set(staticModels);
                
                const savedTheme = localStorage.getItem('theme') ?? 'light';
                theme.set(savedTheme);
                applyTheme(savedTheme);
                
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
                        const currentTheme = localStorage.getItem('theme') ?? 'system';
                        if (currentTheme === 'system') {
                                applyTheme('system');
                        }
                });
                
                mobile.set(window.innerWidth < BREAKPOINT);
        }

        onMount(() => {
                settings.set({});

                const onResize = () => mobile.set(window.innerWidth < BREAKPOINT);
                window.addEventListener('resize', onResize);
                return () => window.removeEventListener('resize', onResize);
        });
</script>

<svelte:head>
        <title>{$WEBUI_NAME}</title>
        <link crossorigin="anonymous" rel="icon" href="/static/favicon.png" />
</svelte:head>

<slot />

<Toaster theme="light" richColors position="top-right" />
