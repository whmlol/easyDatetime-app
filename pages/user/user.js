// pages/user/user.js
var app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        avatar: '',
        name: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

        app.userInfoReadyCallback = res => {  
            app.globalData.userInfo = res.userInfo
        } 

    },
    setting: function() {
        wx.openSetting({
            success: (res) => {

            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        wx.getSetting({
            success: (res) => {
                if (!res.authSetting['scope.userInfo']) {
                    wx.authorize({
                        scope: 'scope.userInfo',
                        success: (res) => {
                            this.setData({
                                avatar: app.globalData.userInfo.avatarUrl,
                                name: app.globalData.userInfo.nickName
                            })
                        },
                        fail() {

                            console.log("拒绝收取那")
                            wx.openSetting({
                                success: (res) => {

                                }
                            })

                        },
                        complete: res => {

                            console.log("完成") 
                            console.log(res)

                        }
                    })
                }else{
                    this.setData({
                        avatar: app.globalData.userInfo.avatarUrl,
                        name: app.globalData.userInfo.nickName
                    })
                }
            }
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})