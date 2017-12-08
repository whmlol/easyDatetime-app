// pages/details/details.js
const Toptips = require('../../zanui-weapp/dist/toptips/index');
var Zan = require('../../zanui-weapp/dist/index');
Page(Object.assign({}, Toptips,Zan.Field, {

    /**
     * 页面的初始数据
     */
    data: {
        name: '',
        wechatNumber: '',
        age: '',
        height: '',
        weight: '',
        signature:'',
        region: ['山东省', '烟台市', '芝罘区'],
        tempFilePaths: [],
        imageCountMax: 4
    },

    bindRegionChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            region: e.detail.value
        })
    },

    chooseImage: function() {
        wx.chooseImage({
            count: this.data.imageCountMax, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: res => {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                let paths = this.data.tempFilePaths
                if (this.data.tempFilePaths.length + res.tempFilePaths.length <= this.data.imageCountMax) {
                    for (var i = res.tempFilePaths.length - 1; i >= 0; i--) {
                        paths.push(res.tempFilePaths[i])
                    }
                    this.setData({
                        tempFilePaths: paths
                    })
                } else {
                    let now = this.data.imageCountMax - this.data.tempFilePaths.length
                    this.showZanTopTips('您只能选择' + now + '张图片');
                }
            }
        })
    },

    previewImage: function(e) {
        wx.previewImage({
            current: this.data.tempFilePaths[e.target.dataset.index], // 当前显示图片的http链接
            urls: this.data.tempFilePaths // 需要预览的图片http链接列表
        })
    },

    longPress: function(e) {
        let index = e.target.dataset.index
        let currentIndex = parseInt(index) + 1
        wx.showModal({
            title: '删除',
            content: '确定删除第张' + currentIndex + '照片吗',
            success: res => {
                if (res.confirm) {
                    this.data.tempFilePaths.splice(index, 1)
                    this.setData({
                        tempFilePaths: this.data.tempFilePaths
                    })
                } else if (res.cancel) {

                }
            }
        })
    },

    handleZanFieldChange(e) {
        const { componentId, detail } = e;
        var param = {};
        param[componentId] = detail.value
        this.setData(param);
        // console.log('[zan:field:change]', componentId, detail);
        // console.log(this.data.name)
        // console.log(this.data.wechatNumber)
        // console.log(this.data.age)
        // console.log(this.data.height)
        // console.log(this.data.weight)
        // console.log(this.data.signature)
    },

    onAreaChange(e) {
      this.setData({
        signature: e.detail.value
      });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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
}))