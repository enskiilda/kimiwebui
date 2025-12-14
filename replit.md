# Open WebUI - Frontend Only Version

## Overview

Open WebUI is a comprehensive web-based user interface for interacting with AI language models. Built with SvelteKit 5, it provides a feature-rich chat interface with support for multiple AI providers, rich text editing, code highlighting, internationalization, and extensive customization options. **This is a frontend-only version** designed to run as a static SPA without a backend server.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **SvelteKit 5**: Primary framework with static adapter for SPA deployment
- **Vite**: Build tool and development server (port 5000)
- **TypeScript**: Type-safe development with strict mode enabled
- **Tailwind CSS 4**: Utility-first styling with custom color system and typography plugins

SvelteKit was chosen for its excellent developer experience, performance, and built-in SSR/SSG capabilities. The static adapter enables deployment as a pure SPA while maintaining routing capabilities.

**Key Configuration Files**
- `vite-main/svelte.config.js`: SvelteKit configuration with static adapter
- `vite-main/vite.config.ts`: Vite configuration with ONNX runtime WASM files copied for WebGPU/WASM support
- `vite-main/tailwind.config.js`: Custom gray color scale using CSS variables for theming
- `vite-main/tsconfig.json`: TypeScript configuration extending SvelteKit defaults

**State Management**
- **Svelte Stores**: Native reactive state management using writable stores in `src/lib/stores/index.ts`
- Key stores: `user`, `config`, `settings`, `models`, `chatId`, `mobile`, `theme`, `WEBUI_NAME`
- Default configuration includes disabled auth features for frontend-only mode

**Routing Structure**
- `/(app)` - Main application routes (chat, workspace, admin, notes, playground)
- `/c/[id]` - Individual chat pages
- `/channels/[id]` - Channel pages
- `/workspace/*` - Knowledge, models, prompts, tools, functions management
- `/admin/*` - Admin settings, analytics, evaluations, users
- `/s/[id]` - Shared chat pages

### UI Components & Libraries

**Rich Content Editing**
- **TipTap**: Rich text editor for notes and content creation with extensive extensions (tables, code blocks, mentions, file handling)
- **CodeMirror 6**: Code editing with syntax highlighting for multiple languages including Elixir and HCL

**Visualization & UI**
- **Chart.js**: Data visualization for analytics
- **XYFlow**: Node-based workflow/diagram visualization
- **bits-ui**: Accessible UI component primitives
- **panzoom**: Image pan and zoom functionality

**Utilities**
- **DOMPurify**: HTML sanitization for security
- **marked**: Markdown parsing with custom extensions
- **dayjs**: Date/time formatting with extensive locale support
- **Fuse.js**: Fuzzy search functionality
- **file-saver**: Client-side file downloads

### Styling & Theming

**CSS Architecture**
- Custom CSS variable system for theming (`--color-gray-*`, `--app-text-scale`)
- Dark mode support via class-based toggling
- Responsive design with mobile-first approach
- Custom font loading: Inter, Archivo, Mona Sans, InstrumentSerif, Vazirmatn
- Theme files in `static/themes/` (Rose Pine variants)

**Text Scaling**
- Global text scale controlled via `--app-text-scale` CSS variable
- Applied to entire document via `html { font-size: calc(1rem * var(--app-text-scale, 1)); }`
- Sidebar chat items scale proportionally

### Internationalization (i18n)

- **i18next**: Translation framework with browser language detection
- **i18next-parser**: Extraction tool for translation keys
- Dynamic locale loading from `src/lib/i18n/locales/{locale}/translation.json`
- Default locale: `pl-PL` (Polish)
- Extensive dayjs locale imports for date formatting

### Web Workers

- **Kokoro TTS Worker**: Text-to-speech using Kokoro-82M model via ONNX runtime
- WebGPU detection with WASM fallback
- ONNX runtime WASM files served from `/wasm/` directory

## External Dependencies

### AI/ML Integrations
- **Hugging Face Transformers**: Client-side ML inference via `@huggingface/transformers`
- **ONNX Runtime Web**: Neural network inference in browser (WebGPU/WASM)
- **Kokoro-js**: Text-to-speech synthesis

### Cloud Storage (Stubbed)
- **Google Drive**: Integration stubbed out (`google-drive-picker.ts` returns null/false)
- **OneDrive**: Integration stubbed out (`onedrive-file-picker.ts` returns null/throws)
- **Azure MSAL**: Microsoft authentication library included but not active

### API Structure
- Base URLs defined in `src/lib/constants.ts` - all set to empty strings for frontend-only mode
- `WEBUI_API_BASE_URL`, `OLLAMA_API_BASE_URL`, `OPENAI_API_BASE_URL` configured for external backend connection
- `localStorage.ts` provides stub implementations for chat CRUD operations

### File Support
- Supported file types: PDF, EPUB, plain text, CSV, XML, HTML, Python, CSS, DOCX, Markdown
- Audio formats: MP3, WAV, OGG, M4A
- HEIC to JPEG conversion via heic2any
- PDF processing via pdfjs-dist

### Build Outputs
- Static build output to `build/` directory
- Fallback to `index.html` for SPA routing
- Version polling every 60 seconds for update detection