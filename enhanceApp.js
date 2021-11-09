import { addHeaderScript, addHeaderLink } from '@theme/helpers/utils'
import '@theme/style/global.styl'
import 'animate.css'

export default ({
    Vue,
    options,
    router,
    siteData
}) => {
    addHeaderScript('https://lib.baomitu.com/parallax/3.1.0/parallax.min.js')
    addHeaderLink('https://lib.baomitu.com/font-awesome/5.15.4/css/all.min.css')
}
