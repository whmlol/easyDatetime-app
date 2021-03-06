//index.js
//获取应用实例
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        winHeight: "", //窗口高度
        currentTab: 0, //预设当前项的值
        scrollLeft: 0, //tab标题的滚动条位置
        expertList: [
            { //假数据
                id:1,
                img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509684760991&di=f705b1a64a241a385430530855cef1f3&imgtype=0&src=http%3A%2F%2Ftvax2.sinaimg.cn%2Fcrop.0.0.1242.1242.1024%2Fb34eacb7ly8fhepiyrzp4j20yi0yidis.jpg",
                name: "欢顔",
                tag: "知名情感博主",
                age: 24,
                height: 180
            },{ //假数据
                id:1,
                img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509684760991&di=f705b1a64a241a385430530855cef1f3&imgtype=0&src=http%3A%2F%2Ftvax2.sinaimg.cn%2Fcrop.0.0.1242.1242.1024%2Fb34eacb7ly8fhepiyrzp4j20yi0yidis.jpg",
                name: "欢顔",
                tag: "知名情感博主",
                age: 24,
                height: 180
            },{ //假数据
                id:1,
                img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509684760991&di=f705b1a64a241a385430530855cef1f3&imgtype=0&src=http%3A%2F%2Ftvax2.sinaimg.cn%2Fcrop.0.0.1242.1242.1024%2Fb34eacb7ly8fhepiyrzp4j20yi0yidis.jpg",
                name: "欢顔",
                tag: "知名情感博主",
                age: 24,
                height: 180
            },{ //假数据
                id:1,
                img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509684760991&di=f705b1a64a241a385430530855cef1f3&imgtype=0&src=http%3A%2F%2Ftvax2.sinaimg.cn%2Fcrop.0.0.1242.1242.1024%2Fb34eacb7ly8fhepiyrzp4j20yi0yidis.jpg",
                name: "欢顔",
                tag: "知名情感博主",
                age: 24,
                height: 180
            },{ //假数据
                id:1,
                img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509684760991&di=f705b1a64a241a385430530855cef1f3&imgtype=0&src=http%3A%2F%2Ftvax2.sinaimg.cn%2Fcrop.0.0.1242.1242.1024%2Fb34eacb7ly8fhepiyrzp4j20yi0yidis.jpg",
                name: "欢顔",
                tag: "知名情感博主",
                age: 24,
                height: 180
            }     
        ]
    },
    //滚动切换标签样式
    switchTab: function(e) {
        this.setData({
            currentTab: e.detail.current,
            expertList:[{ //假数据
                id:1,
                img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509684760991&di=f705b1a64a241a385430530855cef1f3&imgtype=0&src=http%3A%2F%2Ftvax2.sinaimg.cn%2Fcrop.0.0.1242.1242.1024%2Fb34eacb7ly8fhepiyrzp4j20yi0yidis.jpg",
                name: "欢顔",
                tag: "知名情感博主",
                age: 24,
                height: 180
            },{ //假数据
                id:1,
                img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509684760991&di=f705b1a64a241a385430530855cef1f3&imgtype=0&src=http%3A%2F%2Ftvax2.sinaimg.cn%2Fcrop.0.0.1242.1242.1024%2Fb34eacb7ly8fhepiyrzp4j20yi0yidis.jpg",
                name: "欢顔",
                tag: "知名情感博主",
                age: 24,
                height: 180
            }]    
        });
        this.checkCor();
    },
    // 点击标题切换当前页时改变样式
    swichNav: function(e) {
        var cur = e.target.dataset.current;
        if (this.data.currentTaB == cur) { return false; } else {
            this.setData({
                currentTab: cur,
            })
        }
    },
    //判断当前滚动超过一屏时，设置tab标题滚动条。
    checkCor: function() {
        if (this.data.currentTab > 4) {
            this.setData({
                scrollLeft: 300
            })
        } else {
            this.setData({
                scrollLeft: 0
            })
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        //  高度自适应
        wx.getSystemInfo({
            success: res => {
                var clientHeight = res.windowHeight,
                    clientWidth = res.windowWidth,
                    rpxR = 750 / clientWidth;
                var calc = clientHeight * rpxR - 80;
                console.log(calc)
                this.setData({
                    winHeight: calc
                });
            }
        });
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