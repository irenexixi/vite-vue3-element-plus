/*
 * @Author: qqli
 * @Date: 2021-12-17 10:19:25
 * @Last Modified by: qqli
 * @Last Modified time: 2021-12-22 20:29:04
 * @Desc: 图片单个下载、批量下载
 * @Desc: 图片下载 https://github.com/yywang95/h5ImageUploader/blob/master/components/Images.vue
 * @Desc: 图片下载 https://juejin.cn/post/6844904050148786184
 */
<template>
    <div>Image list</div>
    <div
        v-for="item in imageList"
        :key="item.id"
        class="image-list">
        <img
            class="image"
            :src="item.url">
        <el-button
            type="primary"
            @click="downloadImg(item.url)">
            下载
        </el-button>
    </div>
    <div>
        <el-button
            type="primary"
            @click="downloadAlImg">
            全部下载
        </el-button>
    </div>
</template>

<script>
import { saveAs } from 'file-saver'
export default {
    name: 'ImageDownload',
    data() {
        return {
            imageList: [{
                id: 1,
                url: '/assets/img/imageDownload/1.png'
            }, {
                id: 2,
                url: '/assets/img/imageDownload/2.png'
            }]
        }
    },
    methods: {
        downloadAlImg() {
            const len = this.imageList.length
            for (let i = 0; i < len; i++) {
                console.log('downloadAlImg', this.imageList[i])

                ;(setTimeout((i) => {
                    this.downloadImg(this.imageList[i].url)
                }, (i + 1) * 400))(i)
            }
        },
        // 图片下载
        downloadImg(url) {
            const imgName = url.split('/').slice(-1)[0] || ''
            console.log('downloadImg', url, imgName)
            this.downloadImage(url, imgName)
        },
        // 下载图片地址和图片名
        downloadImage(imgsrc, name) {
            try {
                console.log('try')
                const image = new Image()
                // 解决跨域 Canvas 污染问题
                image.setAttribute('crossOrigin', 'anonymous')
                image.onload = () => {
                    console.log('onload')
                    // 将图片绘制在canvas上
                    const canvas = document.createElement('canvas')
                    canvas.width = image.width
                    canvas.height = image.height
                    const context = canvas.getContext('2d')
                    context.drawImage(image, 0, 0, image.width, image.height)
                    // 将canvas转为base64, 得到图片的base64编码数据
                    const url = canvas.toDataURL('image/png')
                    // 图片太大，base64会很大，导致a.href放不下，下载网络错误，所以将base64转为本地文件
                    const imageFile = this.dataURLtoFile(url, name)
                    const imageBlob = URL.createObjectURL(imageFile)
                    // 生成一个a元素, 创建一个单击事件
                    const a = document.createElement('a')
                    const event = new MouseEvent('click')
                    a.download = name // 设置图片名称
                    a.href = imageBlob // 将生成的URL设置为a.href属性
                    a.dispatchEvent(event) // 触发a的单击事件
                }
                image.src = imgsrc
            } catch (e) {
                console.error(`下载图片失败：${e.toString()}`)
                window.open(imgsrc)
            }
        },
        downloadImage2(imgsrc, name) {
            try {
                const image = new Image()
                // 解决跨域 Canvas 污染问题
                image.setAttribute('crossOrigin', 'anonymous')
                image.onload = () => {
                // 将图片绘制在canvas上
                    const canvas = document.createElement('canvas')
                    canvas.width = image.width
                    canvas.height = image.height
                    const context = canvas.getContext('2d')
                    context.drawImage(image, 0, 0, image.width, image.height)
                    canvas.toBlob(function(blob) {
                        saveAs(blob, name)
                    })
                }
                image.src = imgsrc
            } catch (e) {
                console.error(`下载图片失败：${e.toString()}`)
                window.open(imgsrc)
            }
        },
        dataURLtoFile(dataUrl) {
            const filename = `img${Date.now()}`
            const arr = dataUrl.split(',')
            const mime = arr[0].match(/:(.*?);/)[1]
            const bstr = atob(arr[1])
            let n = bstr.length
            const u8arr = new Uint8Array(n)
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n)
            }
            return new File([u8arr], filename, { type: mime })
        }
    }
}
</script>

<style lang="scss" scoped>
.image-list {
    background: #fff;

    .image {
        width: 100px;
        height: 100px;
    }
}
</style>
