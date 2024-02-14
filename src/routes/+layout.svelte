<script>
    import "../app.css";
    import { ModeWatcher } from "mode-watcher";
    import Nav from "$lib/Nav.svelte";
    import Footer from "$lib/Footer.svelte";
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';

    inject({ mode: dev ? 'development' : 'production' });
</script>

<Nav />
<ModeWatcher />
    <main>
        <slot />
    </main>
    <Footer />