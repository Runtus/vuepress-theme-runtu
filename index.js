const path = require('path')

module.exports = (options, ctx) => {

    return {
        plugins: [
            '@vuepress/back-to-top',
            ['@vuepress/plugin-blog', {
                frontmatters: [
                    {
                        id: 'tags',
                        keys: ['tags'],
                        path: '/tags/',
                        layout: 'Tags'
                    }
                ]
            }],
            ['@vuepress/active-header-links', {
                headerAnchorSelector: '.header-anchor'
            }]
        ]
    }

}