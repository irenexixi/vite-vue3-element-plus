// self.postMessage('123')
// foo.worker.js
// 用一个匿名函数自调用
;(function() {
    self.onmessage = e => {
        // e是 事件对象 MessageEvent
        // e.data是从外面传进worker的内容,假如传了 { a: 1 }
        console.log('从外部传到线程', e.data) // { a: 1 }
        /* do something */
    }

    setTimeout(() => {
        self.postMessage({ b: 1 })
    }, 3000)
})()
