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
    connect() {
        if (!window.WebSocket) {
            return console.log('浏览器不支持WebSocket')
        }
        this.ws = new WebSocket("ws://123.207.136.134:9010/ajaxchattest")
        this.ws.onopen = () => {
            console.log('连接服务端成功')
            this.connected = true
        }
        this.ws.onclose = () => {
            console.log('连接服务端失败')
        }
        this.ws.onmessage = (msg) => {
            console.log('接受数据')
            console.log(msg)
        }
    }
    send(data) {
        if (this.connected) {
            this.ws.send(data)
        }
    }
}