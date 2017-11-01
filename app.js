App({
  onLaunch: function () {
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 登录
              wx.login({
                success: res => {
                  // 发送 res.code 到后台换取 openId, sessionKey, unionId
                  if (res.code) {
                            //发起网络请求
                            wx.request({
                              url: `${this.globalData.host}/api/wechatLogin`,
                              method:'post',
                              data:{
                                'code':res.code,
                                'nick_name':this.globalData.userInfo.nickName
                              },
                              success:res=>{
                                this.globalData.sessionId=res.data.ssid
                              }

                            })
                          } else {
                            console.log('获取用户登录态失败！' + res.errMsg)
                          }
                }
              })

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
  },
  globalData: {
    userInfo: null,
    sessionId:'',
    host:,
  }
})