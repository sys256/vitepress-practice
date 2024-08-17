import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig( {
    title: "VitePress Practice",
    description: "This is a VitePress sandbox project created for learning and experimentation purposes only.",

    // https://vitepress.dev/reference/default-theme-config
    themeConfig: {
        logo: '/sys256.png',

        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/markdown-examples' }
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    { text: 'Markdown Examples', link: '/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/api-examples' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/sys256/vitepress-practice' }
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023–present sys256'
        },

        externalLinkIcon: true
    }
} );
