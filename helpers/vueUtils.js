/**
 * 
 * @param {HTMLElement} dom 
 */
 export const eventScrollInject = (dom, delay) => {
    let lastTop = 0;
    const DOMHeight = dom.clientHeight;
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

// 监听window变化
export const onWindowSizeChange = (fn, delay) => {
    window.onresize = throttle(() => {
        fn({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }, delay || 300)
}

// 根据修改DOM元素到顶部的位置来修改布局方式
/**
 * 
 * @param {HTMLElement} dom 
 */
export const onDOMChange = (fn, dom) => {
    // 为了保持六十帧的滑动，这里不能用节流，否则会卡顿
    const temp = () => {
        const {top, bottom, left, right} = dom.getBoundingClientRect()
        fn({
            top,
            bottom,
            left,
            right
        })
    }

    addEventListener('scroll', temp)
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
