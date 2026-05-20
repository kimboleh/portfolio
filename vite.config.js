import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'], // Optional but good to specify
        alias: {
        '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        preprocessorOptions: {
        scss: {
            // additionalData: `@use "@/styles/theme" as *;`,
        },
        },
    },
})
