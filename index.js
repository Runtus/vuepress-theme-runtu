

module.exports = (options, ctx) => {

    return {
        plugins: [
            ['reading-progress'],
            ['@vuepress/back-to-top'],
            ['@vuepress/search', {
                searchMaxSuggestions: 10,
                test: '/blogs/'
            }],
            ['vuepress-plugin-right-anchor',{
                showDepth: 1000
            }],
            ['@vuepress/plugin-blog', {
                frontmatters: [
                    {
                        id: 'archive',
                        keys: ['archive'],
                        path: '/archive/',
                        layout: 'HalfL'
                    },
                    {
                        id: 'friend',
                        keys: ['friend'],
                        path: '/friend/',
                        layout: 'HalfL'
                    }
                ],
                directories: [
                    {
                        id: 'blogs',
                        dirname: 'blogs',
                        path: '/blogs/',
                        // page分页
                        pagination: {
                            lengthPerPage: 5
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
        ]  
    }
}