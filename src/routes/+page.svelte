<script>
  import { CldImage } from 'svelte-cloudinary';
  import { Button } from "$lib/components/ui/button";
  import { Sun, Moon } from "radix-icons-svelte";
  import { toggleMode } from "mode-watcher";
</script>


<h1 class="text-3xl font-bold text-red-500 dark:text-blue-500 underline">
  Hello world!
</h1>


<CldImage
  width="960"
  height="600"
  src="shinkirin/CCCD-Jamaica/project-logo.webp"
  sizes="100vw"
  alt="Description of my image"
/>

<Button on:click={toggleMode} variant="outline" size="icon">
  <Sun
    class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
  />
  <Moon
    class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
  />
  <span class="sr-only">Toggle theme</span>
</Button>