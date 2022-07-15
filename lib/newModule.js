/*
 * @Author: qqli
 * @Date: 2022-07-15 17:08:54
 * @Last Modified by: qqli
 * @Last Modified time: 2022-07-15 17:33:18
 * @Desc: 生成特定结构的模块目录，具体逻辑还需要更具实际的使用场景进行调整
 */
const fs = require('fs')

const params = process.argv[2]
const dest = params
const destViews = dest + '/views'
const destRouter = dest + '/router'
const destComponents = dest + '/components'
const destAssets = dest + '/assets'

try {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest)
        fs.mkdirSync(destViews)
        fs.mkdirSync(destRouter)
        fs.mkdirSync(destComponents)
        fs.mkdirSync(destAssets)
    } else {
        console.error('请勿重复创建模块')
    }
} catch (error) {
    console.error(error)
}
