/**
 * 
 * @param {HTMLElement} dom 
 */
 export const eventScrollInject = (dom, delay) => {
    let lastTop = 0;
    window.onscroll = throttle(() => {
        const scrollTop = document.documentElement.scrollTop;
        if(lastTop > scrollTop){
            // 上滑
            dom.style.top = '0';
        } else {
            // 下滑
            dom.style.top = '-60px'
        }
        lastTop = scrollTop
    }, delay)
}

function throttle(fn, delay){
    let valid = true;

    return function(){
        if(!valid){
            return
        } else {
            valid = false;
            setTimeout(() => {
                fn()
                valid = true;
            }, delay)
        }
    }
}