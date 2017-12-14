var Zan = require('../../zanui-weapp/dist/index');

Page(Object.assign({}, Zan.Switch, {
  data: {
    sync: {
      checked: false
    },
    async: {
      checked: false,
      loading: false
    },
    sync:false,
    checked:false
  },

  handleZanSwitchChange(e) {
    var componentId = e.componentId;
    var checked = e.checked;
    var param = {};
    param[componentId] = checked
    param[this.data.checked] = checked
    this.setData(param);
    console.log(this.data.sync)
    console.log(checked)
    console.log(componentId)
    console.log(param['${componentId}.checked'])
    // if (componentId == 'sync') {
    //   // 同步开关
    //   this.setData({
    //     [`${componentId}.checked`]: checked
    //   });
    // } else if (componentId == 'async') {
    //   // 异步开关
    //   this.setData({
    //     [`${componentId}.loading`]: true
    //   });
    //   setTimeout(() => {
    //     this.setData({
    //       [`${componentId}.loading`]: false,
    //       [`${componentId}.checked`]: checked
    //     });
    //   }, 500);
    // }
  }
}));