import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess()],
    kit: {
        adapter: adapter(), // Configures Vercel as the deployment target

        alias: {
            // Adjust as per your project's directory structure
            "@/*": "./src/lib/*",
        },
    }
};

export default config;
