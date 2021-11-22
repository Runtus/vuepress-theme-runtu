/**
 * @description YY-MM-DD
 * @param {string} time 
 * @returns string
 */
export const YMDFormat = (time, space) => {
    if(!time){
        return ''
    }
    const tempSpace = space ? space : '-'
    const date = new Date(time)
    const month = date.getMonth() + 1
    const day = date.getDate()
    return date.getFullYear() + tempSpace + unitsFormat(month) + tempSpace + unitsFormat(day);
}


export const unitsFormat = (num) => num >= 10 ? '' + num : '0' + num