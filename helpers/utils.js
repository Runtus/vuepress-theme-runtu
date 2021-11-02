// script标签
export const addHeaderScript = (url) => {
    const iconLink = document.createElement('script')
    iconLink.src = url
    document.head.append(iconLink)
}

// link - css
export const addHeaderLink = (url) => {
    const iconLink = document.createElement('link')
    iconLink.rel = 'stylesheet'
    iconLink.href = url
    document.head.append(iconLink)
}