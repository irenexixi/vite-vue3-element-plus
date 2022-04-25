/*
 * @Author: qqli
 * @Date: 2021-12-17 10:19:25
 * @Last Modified by: qqli
 * @Last Modified time: 2022-04-24 18:32:05
 * @Desc: 打包下载 https://juejin.cn/post/7026571407215558687
 */
<template>
    <div>jszip</div>
    <el-button
        style="margin-top: 20px; margin-bottom: 20px;"
        type="primary"
        @click="downloadZip">
        zip打包下载
    </el-button>
    <div class="video-wrap">
        <video
            class="video"
            controls
            src="/assets/mp4/哈哈哈.mp4">
        </video>
        <img
            src="/assets/mp4/哈哈哈-封面.png"
            alt="">
    </div>
</template>

<script>
import { saveAs } from 'file-saver'
import { downloadFile } from '../utils/api'
export default {
    name: 'Jszip',
    data() {
        return {
        }
    },
    mounted() {
        // data是个数组
        // 数组项结构 {id: "icon-xxx", svgHTML: "<svg>..."}
        // ignore
    },
    methods: {
        downloadZip() {
            /**
             *  使用fetch 下载单个文件
             * 返回 对象 包含 文件名称和二进制文件Blob对象
             *
             */
            const download = (url) => {
                console.log('url', url, url.lastIndexOf('.'), url.substring(url.lastIndexOf('.') + 1, url.length))
                let type = ''
                if (url.substring(url.lastIndexOf('.') + 1, url.length) === 'mp4') {
                    type = 'video'
                } else {
                    type = 'image'
                }
                return downloadFile({ url: url, type: type }).then((res) => {
                    console.log('downloadFile res', res)
                    return {
                        name: url.substring(url.lastIndexOf('/') + 1, url.length),
                        blob: res.data
                    }
                })
            }

            /**
             * 使用bluebird 扩展方法 扩展Promise
             * 优化GET请求
             */
            const downloadGroup = (urls, groupSize) => {
                return Promise.map(urls, async(url) => await download(url), {
                    concurrency: groupSize
                })
            }

            /**
             * 使用JSZip压缩 文件
             * 使用blob模式
             *
             */
            const generateZIP = async(files) => {
                const zip = new JSZip() // eslint-disable-line
                files.forEach((item) => {
                    zip.file(item.name, item.blob, { binary: true })
                })
                const content = await zip.generateAsync({ type: 'blob' })
                const currentDate = new Date().getTime()
                const fileName = `zipped-${currentDate}.zip`

                return saveAs(content, fileName) // eslint-disable-line
            }

            const downloadAndZip = async(urls) => {
                // setGenerate(true)
                const loading = this.$loading({ text: '下载中...' })
                const files = await downloadGroup(urls, 5)
                console.log('files', files)
                loading.close()
                const loading2 = this.$loading({ text: '压缩中...' })
                await generateZIP(files)
                loading2.close()
                // setGenerate(false)
            }
            const urls = ['http://192.168.141.81:3000/assets/mp4/1.mp4', 'http://192.168.141.81:3000/assets/mp4/哈哈哈-封面.png']
            downloadAndZip(urls)
        }
    }
}
</script>
<style lang="scss" scoped>
.video-wrap {
    width: 500px;
    height: auto;

    video {
        width: 100%;
        height: auto;
    }
}
</style>
