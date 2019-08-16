function replaceImgSrc(url) {
    let reg = new RegExp(/\?imageView2\/2\/\w\/300/);
    if (typeof url == 'string' && url) {
        return url.replace(reg, '');
    }
    return url;
}
export default replaceImgSrc;