import { addHeaderScript, addHeaderLink } from '@theme/helpers/utils'
import "highlight.js/styles/default.css"
import DarkMode from 'darkmode-js'
import '@theme/styles/darkmode.styl'
import 'animate.css'



export default ({
    Vue,
    options,
    router,
    siteData
}) => {
    // TODO 配置用户可自定义
    const darkmode = new DarkMode({
        bottom: '64px',
        left: 'unset',
        // backgroundColor: '#1F2937',
        mixColor: '#DDD',
        buttonColorDark: '#1F2937',
        right: '32px',
        time: '0.5s',
        saveInCookies: false,
        label: '🌓'
    })
    darkmode.showWidget();
    addHeaderScript('https://lib.baomitu.com/parallax/3.1.0/parallax.min.js')
    addHeaderLink('https://lib.baomitu.com/font-awesome/5.15.4/css/all.min.css')
    
}
