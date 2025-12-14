import { browser } from '$app/environment';

export const APP_NAME = 'Open WebUI';

export const WEBUI_HOSTNAME = browser ? `${location.host}` : '';
export const WEBUI_BASE_URL = '';
export const WEBUI_API_BASE_URL = '';
export const OLLAMA_API_BASE_URL = '';
export const OPENAI_API_BASE_URL = '';
export const AUDIO_API_BASE_URL = '';
export const IMAGES_API_BASE_URL = '';
export const RETRIEVAL_API_BASE_URL = '';

export const WEBUI_VERSION = '0.6.40';
export const WEBUI_BUILD_HASH = 'frontend-only';

export const SUPPORTED_FILE_TYPE = [
        'application/epub+zip',
        'application/pdf',
        'text/plain',
        'text/csv',
        'text/xml',
        'text/html',
        'text/x-python',
        'text/css',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/octet-stream',
        'application/x-javascript',
        'text/markdown',
        'audio/mpeg',
        'audio/wav',
        'audio/ogg',
        'audio/x-m4a'
];

export const SUPPORTED_FILE_EXTENSIONS = [
        'md',
        'rst',
        'go',
        'py',
        'java',
        'sh',
        'bat',
        'ps1',
        'cmd',
        'js',
        'ts',
        'css',
        'cpp',
        'hpp',
        'h',
        'c',
        'cs',
        'htm',
        'html',
        'sql',
        'log',
        'ini',
        'pl',
        'pm',
        'r',
        'dart',
        'dockerfile',
        'env',
        'php',
        'hs',
        'hsc',
        'lua',
        'nginxconf',
        'conf',
        'm',
        'mm',
        'plsql',
        'perl',
        'rb',
        'rs',
        'db2',
        'scala',
        'bash',
        'swift',
        'vue',
        'svelte',
        'doc',
        'docx',
        'pdf',
        'csv',
        'txt',
        'xls',
        'xlsx',
        'pptx',
        'ppt',
        'msg'
];

export const PASTED_TEXT_CHARACTER_LIMIT = 1000;
