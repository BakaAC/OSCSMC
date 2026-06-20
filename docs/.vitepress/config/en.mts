import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  title: "Minecraft All in One Solution",
  description: "Minecraft All in One Solution",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Get Started', link: '/en/guide/' },
      { text: 'Launcher Collection', link: '/en/launchers/' },
      { text: 'Contribution Guidelines', link: '/en/contribute/contributing' },
      { text: 'AFDian', link: 'https://afdian.net/a/BakaInfinityHub' }
    ],

    sidebar: [
      {
        text: 'Getting started with Minecraft',
        items: [
          { text: 'Brief introduction', link: '/en/guide/' },
        ]
      },
      {
        text: 'Launcher Collection',
        items: [
          { text: 'Launcher Collection', link: '/en/launchers/' },
          { text: 'Minecraft Launcher', link: '/en/launchers/minecraft-launcher' },
          { text: 'PCL (Plain Craft Launcher)', link: '/en/launchers/plain-craft-launcher' },
          { text: 'PCL Community Edition', link: '/en/launchers/pcl-community-edition' },
          { text: 'HMCL (Hello Minecraft! Launcher)', link: '/en/launchers/hello-minecraft-launcher' },
          { text: 'BakaXL', link: '/en/launchers/bakaxl' },
          { text: 'MultiMC', link: '/en/launchers/multimc' },
          { text: 'SKCraft Launcher', link: '/en/launchers/skcraft-launcher' },
          { text: 'Helios Launcher', link: '/en/launchers/helios-launcher' },
          { text: 'Prism Launcher', link: '/en/launchers/prism-launcher' },
          { text: 'PolyMC', link: '/en/launchers/polymc' },
          { text: 'GDLauncher', link: '/en/launchers/gdlauncher' },
          { text: 'X Minecraft Launcher', link: '/en/launchers/x-minecraft-launcher' },
          { text: 'ATLauncher', link: '/en/launchers/atlauncher' },
          { text: 'PandoraLauncher', link: '/en/launchers/pandoralauncher' },
        ]
      },
      {
        text: 'Resource Website',
        items: [
          { text: 'Resource sites', link: '/en/addons/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BakaInstitute/OSCSMC' }
    ]
  }
})
