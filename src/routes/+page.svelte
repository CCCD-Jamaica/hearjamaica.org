<script>
  import { JsonLd, MetaTags } from 'svelte-meta-tags';
  let title="CCCD Jamaica";
</script>
<!-- Meta data for SEO -->
<MetaTags
  title="CCCD Jamaica homepage"
  titleTemplate="%s | Svelte Meta Tags"
  description="This example uses more of the available config options."
  canonical="https://www.canonical.ie/"
  openGraph={{
    url: 'https://www.url.ie/a',
    title: 'Open Graph Title',
    description: 'Open Graph Description',
    images: [
      {
        url: 'https://res.cloudinary.com/shinkirin/image/upload/v1707677503/shinkirin/CCCD-Jamaica/project-logo.webp',
        width: 800,
        height: 600,
        alt: 'Og Image Alt'
      },
      {
        url: 'https://res.cloudinary.com/shinkirin/image/upload/v1707677503/shinkirin/CCCD-Jamaica/project-logo.webp',
        width: 900,
        height: 800,
        alt: 'Og Image Alt Second'
      },
      { url: 'https://res.cloudinary.com/shinkirin/image/upload/v1707677503/shinkirin/CCCD-Jamaica/project-logo.webp' },
      { url: 'https://res.cloudinary.com/shinkirin/image/upload/v1707677503/shinkirin/CCCD-Jamaica/project-logo.webp' }
    ],
    siteName: 'CCCD Jamaica'
  }}
  twitter={{
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
    title: 'Using More of Config',
    description: 'This example uses more of the available config options.',
    image: 'https://www.example.ie/twitter-image.jpg',
    imageAlt: 'Twitter image alt'
  }}
  facebook={{
    appId: '1234567890'
  }}
/>
<!-- JSON for SEO -->
<JsonLd
  schema={[
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Books',
          item: 'https://example.com/books'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Science Fiction',
          item: 'https://example.com/books/sciencefiction'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Award Winners'
        }
      ]
    },
    {
      '@type': 'NewsArticle',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://google.com/article'
      },
      headline: 'Article headline',
      image: [
        'https://example.com/photos/1x1/photo.jpg',
        'https://example.com/photos/4x3/photo.jpg',
        'https://example.com/photos/16x9/photo.jpg'
      ],
      datePublished: '2015-02-05T08:00:00+08:00',
      dateModified: '2015-02-05T09:20:00+08:00',
      author: {
        '@type': 'Person',
        name: 'John Doe'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Google',
        logo: {
          '@type': 'ImageObject',
          url: 'https://google.com/logo.jpg'
        }
      }
    }
  ]}
/>
<!-- Start of content  of homepage -->
<div class="relative isolate overflow-hidden bg-blue-900 py-24 sm:py-32">
  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
  <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">{ title }</h1>
      <p class="mt-6 text-lg leading-8 text-gold-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
    </div>
    <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        <a href="/op">Open roles <span aria-hidden="true">&rarr;</span></a>
        <a href="/in">Internship program <span aria-hidden="true">&rarr;</span></a>
        <a href="/va">Our values <span aria-hidden="true">&rarr;</span></a>
        <a href="/me">Meet our leadership <span aria-hidden="true">&rarr;</span></a>
      </div>
      <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 text-gold-300">Offices worldwide</dt>
          <dd class="text-2xl font-bold leading-9 tracking-tight text-white">12</dd>
        </div>
        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 text-gold-300">Full-time colleagues</dt>
          <dd class="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
        </div>
        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 text-gold-300">Hours per week</dt>
          <dd class="text-2xl font-bold leading-9 tracking-tight text-white">40</dd>
        </div>
        <div class="flex flex-col-reverse">
          <dt class="text-base leading-7 text-gold-300">Paid time off</dt>
          <dd class="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
<div class="overflow-hidden bg-white dark:bg-black py-32">
  <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
      <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
        <h2 class="text-3xl font-bold tracking-tight text-blue-900 dark:text-yellow-300 sm:text-4xl">Our people</h2>
        <p class="mt-6 text-xl leading-8 text-gray-700 dark:text-white">Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.</p>
        <p class="mt-6 text-base leading-7 text-gray-800 dark:text-white">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.</p>
        <div class="mt-10 flex">
          <a href="/" class="rounded-md bg-gold-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-gold-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Join our team <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
        <div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
          <img src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80" alt="" class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-blue-50 object-cover">
        </div>
        <div class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
          <div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
            <img src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80" alt="" class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-blue-50 object-cover">
          </div>
          <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
            <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80" alt="" class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-blue-50 object-cover">
          </div>
          <div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
            <img src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80" alt="" class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-blue-50 object-cover">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="relative bg-gold-600">
  <div class="relative h-80 overflow-hidden bg-yellow-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
    <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply" alt="">
    <svg viewBox="0 0 926 676" aria-hidden="true" class="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]">
      <path fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)" fill-opacity=".4" d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z" />
      <defs>
        <linearGradient id="60c3c621-93e0-4a09-a0e6-4c228a0116d8" x1="926.392" x2="-109.635" y1=".176" y2="321.024" gradientUnits="userSpaceOnUse">
          <stop stop-color="#776FFF " />
          <stop offset="1" stop-color="#FF4694" />
        </linearGradient>
      </defs>
    </svg>
  </div>
  <div class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
    <div class="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
      <h2 class="text-base font-semibold leading-7 text-white">Award winning support</h2>
      <h3 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">We’re here to help</h3>
      <p class="mt-6 text-base leading-7 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.</p>
      <div class="mt-8">
        <a href="/help" class="inline-flex rounded-md bg-gold-700 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Visit the help center</a>
      </div>
    </div>
  </div>
</div>

