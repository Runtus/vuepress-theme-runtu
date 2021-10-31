/**
 * 
 * @param {HTMLElement} dom 
 */
 export const eventScrollInject = (dom, delay) => {
    let lastTop = 0;
    const DOMHeight = dom.clientHeight;
    console.log(DOMHeight)
    window.onscroll = throttle(() => {
        const scrollTop = document.documentElement.scrollTop;
        if(lastTop > scrollTop){
            // 上滑
            dom.style.top = '0';
        } else {
            // 下滑
            dom.style.top = `-${DOMHeight}px`
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