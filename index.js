const path = require('path')

module.exports = (options, ctx) => {

    return {
        plugins: [
            ['@vuepress/back-to-top'],
            ['vuepress-plugin-right-anchor',{
                showDepth: 1000
            }],
            ['@vuepress/plugin-blog', {
                frontmatters: [
                    {
                        id: 'tags',
                        keys: ['tags'],
                        path: '/tags/',
                        layout: 'Tags'
                    }
                ],
                directories: [
                    {
                        id: 'blogs',
                        dirname: 'blogs',
                        path: '/blogs/',
                        // page分页
                        pagination: {
                            lengthPerPage: 4
                        }
                    }
                ]
            }],
            ['@vuepress/active-header-links', {
                headerAnchorSelector: '.header-anchor'
            }],
            ['@vuepress/medium-zoom', {
                selector: '.theme-runtu-content :not(a) > img',
                options: {
                    margin: 16
                }
            }]
        ],
        extendMarkdown: md => {
            md.set({ breaks: true, linkify: true, typographer: true })
        },
    
    }

}