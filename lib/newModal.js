/*
 * @Author: qqli
 * @Date: 2022-07-15 16:50:35
 * @Last Modified by: qqli
 * @Last Modified time: 2022-07-15 17:31:26
 * // 创建 /template/Modal.vue 的副本
 * // 特点1：文件名根据配置生成
 * // 特点2：正则匹配文件内的 TemplateModal 替换成 参数中的命名 e.g. SearchModal
 * // 在views目录下执行脚本 npm run newModal, 需要传递目标路径和目标文件命名
 * // e.g. node src/lib/newModal.js src/views/ Person
 */

const path = require('path')
const fs = require('fs')

// console.log('__dirname', __dirname) 执行的脚本所在的目录 src/lib
// console.log(process.argv) 返回参数数组，[0]node程序路径 [1]执行的脚本路径 其余为脚本参数
const params = process.argv.splice(2)
const src = path.join(__dirname, './template/Modal.vue')
const dest = params[0] + params[1] + 'Modal.vue'

// 读取文件内容
fs.readFile(src, 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    // replace 用法介绍 https://blog.csdn.net/qq_40713392/article/details/103378282
    // data = data.replace('TemplateModal', params[1] + 'Modal')
    data = data.replace(/TemplateModal/g, params[1] + 'Modal')

    // 写入文件
    fs.writeFile(dest, data, err => {
        if (err) {
            console.log('err')
        }
        console.log('写入成功')
    })
})
