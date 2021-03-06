App({
    onLaunch: function () {
        // wx.getSetting({
        //     success: res => {
        //         if (res.authSetting['scope.userInfo']) {
        //             // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        //             wx.getUserInfo({
        //                 success: res => {
        //                     // 可以将 res 发送给后台解码出 unionId
        //                     this.globalData.userInfo = res.userInfo

        //                     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        //                     // 所以此处加入 callback 以防止这种情况
        //                     if (this.userInfoReadyCallback) {
        //                         this.userInfoReadyCallback(res)
        //                     }
        //                 }
        //             })
        //         }
        //     }
        // }),
            wx.login({
                success: res => {
                    // 发送 res.code 到后台换取 openId, sessionKey, unionId
                    if (res.code) {
                        //发起网络请求
                        wx.request({
                            url: `${this.globalData.host}/api/wechatLogin`,
                            method: 'post',
                            data: {
                                'code': res.code,
                                // 'nick_name': this.globalData.userInfo.nickName,
                                // 'icon': this.globalData.userInfo.avatarUrl,
                                // 'province': this.globalData.userInfo.province,
                                // 'city': this.globalData.userInfo.city
                            },
                            success: res => {
                                this.globalData.access_token = res.data.data.access_token
                                this.globalData.userId = res.data.data.userId
                            }

                        })
                    } else {
                        console.log('获取用户登录态失败！' + res.errMsg)
                    }
                }

            });
    },
    globalData: {
        userInfo: null,
        access_token: '',
        userId: '',
        host: 'http://127.0.0.1:8000',
    }
})