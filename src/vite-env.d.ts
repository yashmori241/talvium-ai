/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORM_URL: string;
  readonly VITE_FORM_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
