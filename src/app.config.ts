export default defineAppConfig({
  pages: [
    'pages/main/home/index',
    'pages/main/mine/index',
    'pages/activity/index',
    'pages/car/add-car/index',
    'pages/car/car-list/index',
    'pages/car/car-verify/index',
    'pages/invoice/invoice-history/index',
    'pages/invoice/invoice-list/index',
    'pages/order/order-list/index'
  ],
  tabBar: {
    color: "#0D110F",
    list: [
      {
        pagePath: "pages/main/home/index",
        text: "首页",
        iconPath: "assets/tabbar/icon-home.png",
        selectedIconPath: "assets/tabbar/icon-home-selected.png",
      },
      {
        pagePath: "pages/activity/index",
        text: "活动",
        iconPath: "assets/tabbar/icon-activity.png",
        selectedIconPath: "assets/tabbar/icon-activity-selected.png",
      },
      {
        pagePath: "pages/order/order-list/index",
        text: "订单",
        iconPath: "assets/tabbar/icon-order.png",
        selectedIconPath: "assets/tabbar/icon-order-selected.png",
      },
      {
        pagePath: "pages/main/mine/index",
        text: "我的",
        iconPath: "assets/tabbar/icon-mime.png",
        selectedIconPath: "assets/tabbar/icon-mime-selected.png",
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
