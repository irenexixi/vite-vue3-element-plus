export default {
    /**
     * 获取url指定参数
     * @param {*} key
     */
    getSearchParam(key) {
        const reg = new RegExp('(?:&?)' + key + '=([^&]*)(?:&?)', 'g')
    }
}
