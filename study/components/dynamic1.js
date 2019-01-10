Vue.component('tab-home', {
    template: '<div>Home component</div>',
    mounted:function(){
      //组件切换后会触发
      console.log('tab-home mounted');
    }
})
Vue.component('tab-posts', {
    template: '<div>Posts component</div>',
    mounted:function(){
      //组件切换后会触发
      console.log('tab-posts mounted');
    }
})
Vue.component('tab-archive', {
    template: '<div>Archive component</div>',
    mounted:function(){
      //组件切换后会触发
      console.log('tab-archive mounted');
    }
})


var app = new Vue({
    el: '#app',
    data: {
        currentTab: 'Home',
        tabs: ['Home', 'Posts', 'Archive']
    },
    computed: {
        currentTabComponent: function() {
            return 'tab-' + this.currentTab.toLowerCase()
        }
    }
});








console.log(app);