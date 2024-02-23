<script>
  let open = false;
  let productFly = false;
  let subproductFly = false;
  import { cubicOut, quintOut } from 'svelte/easing';
  import { fly, slide } from 'svelte/transition';
  import { Button } from "$lib/components/ui/button";
  import { Sun, Moon } from "radix-icons-svelte";
  import { toggleMode } from "mode-watcher";
</script>
<!-- Start of Navigation -->
<header class="sticky top-0 isolate z-20 bg-white dark:bg-black">
  <nav class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
    <div class="flex lg:flex-1">
      <a href="/" class="-m-1.5 p-1.5">
        <span class="sr-only">Caribbean Christian Centre for the Deaf</span>
        <img class="h-16 rounded-md w-auto" src="https://res.cloudinary.com/shinkirin/image/upload/v1707878487/shinkirin/CCCD-Jamaica/cccdHeaderlogo.svg" alt="CCCD logo">
      </a>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <div>
        <!-- Product menu dropdown button-->
        <button
          on:click={() => productFly = !productFly} 
          type="button" 
          class="flex items-center gap-x-1 text-md font-semibold leading-6 text-blue-900 hover:text-blue-600 dark:text-blue-100  dark:hover:underline" 
          aria-expanded="false">
          Product
          <svg class="h-5 w-5 flex-none text-blue-400 dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </button>
        <!-- End of product menu dropdown button -->
        <!-- Product menu dropdown with svelte/transitions and svelte/easing -->
        {#if productFly}
          <div 
            transition:fly={{ delay: 50, duration: 250, x: 0, y: 1, opacity: 0.5, easing: quintOut }}
            class="absolute inset-x-0 top-0 -z-10 bg-white  dark:bg-black pt-14 shadow-lg ring-1 ring-blue-900/5"
          >
            <div class="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
              <div class="group relative rounded-lg p-6 text-md leading-6 hover:bg-gray-50 dark:hover:bg-blue-700">
                <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <svg class="h-6 w-6 text-blue-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>
                </div>
                <a href="/a" class="mt-6 block font-semibold text-blue-900 dark:text-blue-100">
                  Analytics
                  <span class="absolute inset-0"></span>
                </a>
                <p class="mt-1 text-blue-600 dark:text-white">Get a better understanding where your traffic is coming from</p>
              </div>
              <div class="group relative rounded-lg p-6 text-md leading-6 hover:bg-blue-50 dark:hover:bg-blue-700">
                <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-white">
                  <svg class="h-6 w-6 text-blue-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                  </svg>
                </div>
                <a href="/e" class="mt-6 block font-semibold text-blue-900 dark:text-blue-100">
                  Engagement
                  <span class="absolute inset-0"></span>
                </a>
                <p class="mt-1 text-blue-600 dark:text-white">Speak directly to your customers with our engagement tool</p>
              </div>
              <div class="group relative rounded-lg p-6 text-md leading-6 hover:bg-blue-50 dark:hover:bg-blue-700">
                <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-white">
                  <svg class="h-6 w-6 text-blue-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                  </svg>
                </div>
                <a href="/s" class="mt-6 block font-semibold text-blue-900 dark:text-blue-100">
                  Security
                  <span class="absolute inset-0"></span>
                </a>
                <p class="mt-1 text-blue-600 dark:text-white">Your customers’ data will be safe and secure</p>
              </div>
              <div class="group relative rounded-lg p-6 text-md leading-6 hover:bg-blue-50 dark:hover:bg-blue-700">
                <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-white">
                  <svg class="h-6 w-6 text-blue-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <a href="/i" class="mt-6 block font-semibold text-blue-900 dark:text-blue-100">
                  Integrations
                  <span class="absolute inset-0"></span>
                </a>
                <p class="mt-1 text-blue-600 dark:text-white">Your customers’ data will be safe and secure</p>
              </div>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900">
              <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="grid grid-cols-3 divide-x divide-blue-900/5 border-x border-blue-900/5">
                  <a href="w" class="flex items-center justify-center gap-x-2.5 p-3 text-md font-semibold leading-6 text-blue-900 dark:text-blue-100 hover:bg-blue-100 dark:hover:bg-blue-700">
                    <svg class="h-5 w-5 flex-none text-blue-400 dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z" clip-rule="evenodd" />
                    </svg>
                    Watch demo
                  </a>
                  <a href="/contact" class="flex items-center justify-center gap-x-2.5 p-3 text-md font-semibold leading-6 text-blue-900 dark:text-blue-100 hover:bg-blue-100 dark:hover:bg-blue-700">
                    <svg class="h-5 w-5 flex-none text-blue-400 dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
                    </svg>
                    Contact sales
                  </a>
                  <a href="/v" class="flex items-center justify-center gap-x-2.5 p-3 text-md font-semibold leading-6 text-blue-900 dark:text-blue-100 hover:bg-blue-100 dark:hover:bg-blue-700">
                    <svg class="h-5 w-5 flex-none text-blue-400 dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M2.5 3A1.5 1.5 0 001 4.5v4A1.5 1.5 0 002.5 10h6A1.5 1.5 0 0010 8.5v-4A1.5 1.5 0 008.5 3h-6zm11 2A1.5 1.5 0 0012 6.5v7a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0017.5 5h-4zm-10 7A1.5 1.5 0 002 13.5v2A1.5 1.5 0 003.5 17h6a1.5 1.5 0 001.5-1.5v-2A1.5 1.5 0 009.5 12h-6z" clip-rule="evenodd" />
                    </svg>
                    View all products
                  </a>
                </div>
              </div>
            </div>
        </div>
        {/if}<!-- End of Product menu dropdown.-->
      </div>

      <a href="/fea" class="text-md font-semibold leading-6 text-blue-900 hover:text-blue-600 dark:text-blue-100 dark:hover:underline">Features</a>
      <a href="/mar" class="text-md font-semibold leading-6 text-blue-900 hover:text-blue-600 dark:text-blue-100 dark:hover:underline">Marketplace</a>
      <a href="/com" class="text-md font-semibold leading-6 text-blue-900 hover:text-blue-600 dark:text-blue-100 dark:hover:underline">Company</a>

    </div>

    <div class="flex flex-1 items-center justify-end gap-x-6">
      <a href="/login" class="hidden lg:block lg:text-md lg:font-semibold lg:leading-6 lg:text-blue-900 hover:text-blue-600 dark:text-blue-100 dark:hover:underline">Log in</a>
      <a href="/donate" class="rounded-md bg-green-600 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Donate</a>
      <Button on:click={toggleMode} variant="outline" size="icon">
        <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </div>
    <!-- Mobile menu button -->
    <div class="flex lg:hidden">
      <button
          on:click={() => open = !open} 
          type="button" 
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-green-600 hover:text-green-500 dark:text-white dark:hover:text-green-600"
          aria-expanded="false">
            <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
      </button>
    </div>
    <!-- End of Mobile menu button -->
  </nav>
  {#if open}<!-- Mobile menu with svelte/transitions and svelte/easing  -->
  <div 
    transition:slide={{ delay: 50, duration: 300, easing: cubicOut, axis: "x" }}
    class="lg:hidden" 
    role="dialog" 
    aria-modal="true"
  >
    <div class="fixed inset-0 z-10"></div>
    <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-blue-900/10">
      <div class="flex items-center gap-x-6">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Caribbean Christian Centre for the Deaf</span>
          <img class="h-16 w-auto" src="https://res.cloudinary.com/shinkirin/image/upload/v1707878487/shinkirin/CCCD-Jamaica/cccdHeaderlogo.svg" alt="CCCD logo">
        </a>
        <a href="/donate" class="ml-auto rounded-md bg-green-600 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Donate</a>
        <Button on:click={toggleMode} variant="outline" size="icon">
          <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span class="sr-only">Toggle theme</span>
        </Button>
        <button
          on:click={() => open = !open} 
            class:block={open} 
            class:hidden={!open} 
            type="button" 
            class="-m-2.5 rounded-md p-2.5 text-green-600 hover:text-green-500 dark:text-white dark:hover:text-green-600">
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-blue-500/10 dark:divide-white">
          <div class="space-y-2 py-6">
              <!-- Mobile menu Product menu dropdown. -->
              <button 
                on:click={() => subproductFly = !subproductFly} 
                type="button" 
                class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-blue-900 dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-green-600" 
                aria-controls="disclosure-1" aria-expanded="false">
                Product

                <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
              <!-- End of Mobile menu Product menu dropdown. -->
              <!-- 'Product' sub-menuwith svelte/transitions and svelte/easing -->
              {#if subproductFly}
              <div class="mt-2 space-y-2" id="disclosure-1">
                <a href="/a" class="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-blue-900 dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-green-600">Analytics</a>
                <a href="/e" class="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-blue-900 dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-green-600">Engagement</a>
                <a href="/s" class="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-blue-900 dark:text-blue-100 hover:bg-gray-50 dark:hover:bg-green-600">Security</a>
                <a href="/i" class="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-blue-900 dark:text-blue-100 hover:bg-gray-50 dark:hover:bg-green-600">Integrations</a>
                <a href="/w" class="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-blue-900 dark:text-blue-100 hover:bg-gray-50 dark:hover:bg-green-600">Watch demo</a>
                <a href="/contact" class="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-blue-900 dark:text-blue-100 hover:bg-gray-50 dark:hover:bg-green-600">Contact sales</a>
                <a href="/v" class="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-blue-900 dark:text-blue-100 hover:bg-gray-50 dark:hover:bg-green-600">View all products</a>
              </div>
              {/if}<!-- End of 'Product' sub-menu. -->
            <a href="/fea" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-900 dark:text-blue-100 hover:bg-gray-50 dark:hover:bg-green-600">Features</a>
            <a href="/mar" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-900 dark:text-blue-100 hover:bg-gray-50 dark:hover:bg-green-600">Marketplace</a>
            <a href="/com" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-900 dark:text-blue-100 hover:bg-gray-50 dark:hover:bg-green-600">Company</a>
          </div>
          <div class="py-6">
            <a href="/login" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-blue-900   dark:text-blue-100 hover:bg-gray-50 dark:hover:bg-green-600">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/if}<!-- End of mobile menu -->
</header>
