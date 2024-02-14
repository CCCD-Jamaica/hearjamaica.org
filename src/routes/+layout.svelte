<script>
    import "../app.css";
    import { ModeWatcher } from "mode-watcher";
    import Nav from "$lib/Nav.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<Nav />
<ModeWatcher />
    <main>
        <slot />
    </main>
    <Footer />