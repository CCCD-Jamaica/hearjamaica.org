# CCCD Jamaica / VSP Peace Corps Project

<p align="center">
    <img 
        style="display: block; 
            margin-left: auto;
            margin-right: auto;
            width: 80%;"
        src="https://res.cloudinary.com/shinkirin/image/upload/v1707677503/shinkirin/CCCD-Jamaica/project-logo.webp" 
        alt="CCCD Jamaica and PC Jamaica VSP Project logo">
    </img>
</p>

## CCCD Jamaica project website

- <b>Release Version</b>: 1.0.0-alpha.
- <b>Website</b>: [https://hearjamaica.org](https://hearjamaica.org).
    - **Note**: This URL will be used for development only!
- <b>Vercel Team</b>: [https://vercel.com/shinkirin](https://vercel.com/shinkirin).
    - Shinkirin is VSP Kevin Miller, Jr.'s Vercel Team which will be used to donate the static hosting for the SvelteKit website hosting.
- <b>Vercel Project URL</b>: [https://cccdjamaica.vercel.app](https://cccdjamaica.vercel.app).
- <b>GitHub Project URL</b>: [https://github.com/CCCD-Jamaica](https://github.com/CCCD-Jamaica/).
- <b>Repository</b>: [https://github.com/CCCD-Jamaica/hearjamaica.org](https://github.com/CCCD-Jamaica/hearjamaica.org).

### Description

This is a [US Peace Corps Virtual Service Pilot](https://www.peacecorps.gov/volunteer/virtual-service-pilot/) (VSP) project that started on November, 2023. It is not a US Peace Corps Volunteer project. The current project is a collaboration between CCCD Jamaica and [Peace Corps Jamaica](https://www.peacecorps.gov/jamaica/). 

**Note**: VSP Participants are currently Returned Peace Corps Volunteers and private US citizens donating their time each week in service of the Peace Corps mission. They are not Peace Corps Volunteers.

Project status and updates can be found on the main GitHub Project page: [https://github.com/CCCD-Jamaica](https://github.com).

The initial website will be developed in SvelteKit to speed up the project. We will add Drupal, or another web editing solution, during the later phases.

All content will be provided by CCCD Jamaica with efforts to incorporate content from their Deaf students. IT teachers, students, and staff will take part in the development of the project.

We will add a Jamaican Sign Language Resource component during Milestone 4 of this project.

### Licenses

Unless otherwise mentioned below, all source code will abide by the BSD 3-Clause License (See [LICENSE](LICENSE)). The following components are subject to their own licenses:

- [TailwindUI License](https://tailwindui.com/license).
    - Applies to TailwindUI components. 
    - Will be asking TailwindUI to donate several licenses to CCCD Jamaica.

The TailwindUI components cannot be redistributed, used, or edited without using the proper licenses.

### Team

- Lead Developer: VSP Participant Kevin Miller, Jr. (RPCV Kazakhtan).
- VSPP Host Country Counterpart: John Meeks, Social Enterprise Officer (CCCD Jamaica).

## Developing Tools

- [SvelteKit](https://kit.svelte.dev) Framework.
    - [Iconify for Svelte](https://iconify.design/docs/icon-components/svelte/) - native icon components.
    - [Simple Icons](https://simpleicons.org/) free SVG icons library.
    - [shadcn-svelte](https://www.shadcn-svelte.com) Svelte component library.
    - [melt-ui](https://melt-ui.com) Svelte component library.
    - [bits-ui](https://www.bits-ui.com) Svelte headless components.
- [Storybook](https://storybook.js.org) UI components (Will be implemented in a later phase).
- [Tailwind CSS](https://tailwindcss.com) Framework.
    - [Tailwind UI](https://tailwindui.com) Tailwind CSS components.
    - [Tailwind CSS Color Generator](https://uicolors.app/create) - used to create color palettes for project.
- Images and Graphics:
    - Official Logo: Provided by CCCD Jamaica.
    - [Pixelmator Pro](https://www.pixelmator.com/pro/) for image editing.
    - [Undraw](https://undraw.co) - Free SVG illustrations.
    - [Unplash](https://unsplash.com) - Free images for sample content.
- [Visual Studio Code](https://code.visualstudio.com/) - Development IDE.
    - [CodyAI](https://sourcegraph.com/cody) - AI Assistant in VS Code.
    - [ESLint](https://eslint.org/) code checker.
    - [Prettier](https://prettier.io/) code formatter.
    - [iTerm2](https://iterm2.com/) - macOS terminal emulator.
- [ChatGPT](https://chat.openai.com/) - Content generation, editing, debugging, and color recommendations.
- Hosting:
    - [Github](https://github.com) - Code repository.
    - [Vercel](https://vercel.com) - Static hosting for SvelteKit website.
    - [Linode](https://linode.com) - Software is installed on server.
        - [Uptime Kuma](https://github.com/louislam/uptime-kuma) - Self-hosted website monitoring.
        - [Plausible](https://plausible.io/) - Self-hosted Analytics for website meeting compliance with GDPR, CCPA, and PECR.
        - Future: Drupal.
    - [Cloudflare](https://cloudflare.com) - CDN and Nameserver to manage domains.
    - [Cloudinary](https://cloudinary.com) - Image CDN to store images for optimization.

### Versioning

We use [SemVer](https://semver.org/) for versioning. SemVer consists of three components: major, minor, and patch versions, represented as MAJOR.MINOR.PATCH as defined below:

- Major Version (MAJOR): MUST be incremented if any backward incompatible changes are introduced to the web application. It MAY also include minor and patch level changes. Patch and minor versions MUST be reset to 0 when major version is incremented. 
- Minor Version (MINOR): MUST be incremented if new, backward compatible functionality is introduced to the web application. It MUST be incremented if any web application functionality is marked as deprecated. It MAY be incremented if substantial new functionality or improvements are introduced within the private code. It MAY include patch level changes. Patch version MUST be reset to 0 when minor version is incremented.
- Patch Version (PATCH): MUST be incremented if only backward compatible bug fixes are introduced. A bug fix is defined as an internal change that fixes incorrect behavior.

For this project, we will be using the following versioning scheme:
    - 1.0.0-alpha (Start of project versioning).
        - 1.0.0-alpha.1 (Patch fixes).
    - 1.0.0-beta (Start of beta versioning).
    - 1.0.0-rc.1 (Start of release candidate versioning).
    - 1.0.0 (Start of stable release).
        - 1.0.1 (Start of patch fixes).
    - 1.1.0-alpha (start of next minor versioning)

Version 2.0.0 will be the start of integrating the web application with Drupal or another headless content management system. All content will be added, edited, and updated from Drupal.

Version 3.0.0 will be the start of the Jamaican Sign Language Resource Page component.

## Accessibility Tools

The aim of this project is to make the site accessible to all users. The goal is to comply with all the [WCAG 2.2 Web Content Accessibility Guideline's](https://www.w3.org/TR/WCAG22/) [Level A and AA](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_customize&levels=aaa) success criteria. The project will also work to meeting with the [Level AAA](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_customize&levels=a%2Caa) success criteria. The following tools were used to test the site for accessibility:

- [WebAIM](https://webaim.org/resources/) - WCAG Accessibility Tools.
- [Svelte a11y Accessibility](https://svelte.dev/docs/accessibility-warnings) checks with [ESLint](https://eslint.org/).

# hearjamaica.org
