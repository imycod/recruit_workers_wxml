/*
 * @Author: sikonggpw 1327325804@qq.com
 * @Date: 2023-02-25 15:14:22
 * @LastEditors: sikonggpw 1327325804@qq.com
 * @LastEditTime: 2023-03-10 11:14:54
 * @FilePath: \weixin\pages\index\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// index.js
Page({
    data: {
        // text:"这是一个页面"
        text: "这是一个页面",
        array: [{msg: '1'}, {msg: '2'}],
        object: {
            key: 'Hello World'
        },
        disabled:false,
        loading:false,
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        this.requestTest()
    },


    // 请求测试 wx.request发送get的请求
    requestTest: function () {
        wx.request({
            url: 'http://localhost:3000/users',
            header: {
                'content-type': 'application/json'
            },
            method: 'GET',
            success: function (res) {
                console.log('res.data---->', res)
            }
        })
    },

    // 跳转页面
    onTap: function (event) {
        const type = event.currentTarget.dataset.type; // 获取传递过来的参数
        // 根据type跳转页面
        if (type === 'recruit') {
            wx.navigateTo({
                url: '/pages/recruit-workers/index'
            })
        }
        if (type === 'apply') {
            wx.navigateTo({
                url: '/pages/apply-job/index'
            })
        }
    }
})
