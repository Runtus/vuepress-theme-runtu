import { addHeaderScript, addHeaderLink } from '@theme/helpers/utils'
import DarkMode from 'darkmode-js'
import '@theme/styles/global.styl'
import 'animate.css'



export default ({
    Vue,
    options,
    router,
    siteData
}) => {
    const darkmode = new DarkMode({
        bottom: '64px',
        right: 'unset',
        // backgroundColor: '#1F2937',
        mixColor: '#DDD',
        buttonColorDark: '#1F2937',
        left: '32px',
        time: '0.5s',
        saveInCookies: false,
        label: '🌓'
    })
    darkmode.showWidget();
    addHeaderScript('https://lib.baomitu.com/parallax/3.1.0/parallax.min.js')
    addHeaderLink('https://lib.baomitu.com/font-awesome/5.15.4/css/all.min.css')
}
