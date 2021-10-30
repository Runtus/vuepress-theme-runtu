export const addHeaderScript = (url) => {
    const iconLink = document.createElement('script')

    iconLink.src = url
    document.head.append(iconLink)
}