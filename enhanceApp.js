import { addHeaderScript } from '@theme/helpers/utils'

export default ({
    Vue,
    options,
    router,
    siteData
}) => {
    addHeaderScript('https://lib.baomitu.com/parallax/3.1.0/parallax.min.js')
}