export default class SocketService {
    static instance = null
    static get Instance() {
        if (!this.instance) {
            this.instance = new SocketService()
        }
        return this.instance
    }
    ws = null
    connected = false
    sendRetryCount = 0
    callBackMapping = {}
    connect() {
        if (!window.WebSocket) {
            return console.log('浏览器不支持WebSocket')
        }
        this.ws = new WebSocket("ws://47.106.75.208:9502")
        this.ws.onopen = () => {
            console.log('连接服务端成功')
            this.connected = true
        }
        this.ws.onclose = () => {
            console.log('连接服务端失败')
            this.connected = false
        }
        this.ws.onmessage = (msg) => {
            console.log('接受数据')
            const recvData = JSON.parse(msg.data)
            const socketType = recvData.tag
            if (this.callBackMapping[socketType]) {
                const realData = recvData.data
                this.callBackMapping[socketType].call(this, realData)
            }
        }
    }
    registerCallBack(socketType, callBack) {
        this.callBackMapping[socketType] = callBack
    }
    unRegisterCallBack(socketType) {
        this.callBackMapping[socketType] = null
    }
    send(data) {
        if (this.connected) {
            this.sendRetryCount = 0
            this.ws.send(JSON.stringify(data))
        } else {
            this.sendRetryCount++
            setTimeout(() => {
                this.ws.send(JSON.stringify(data))
            }, this.sendRetryCount * 500);
        }
    }
}