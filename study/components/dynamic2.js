/**
 * 选项对象
 */
var tabs = [{
        name: 'Home',
        component: {
            template: '<div>Home component</div>',
            mounted: function() {
                //组件切换后会触发
                console.log('tab-home mounted');
            }
        }
    },
    {
        name: 'Posts',
        component: {
            template: '<div>Posts component</div>',
            mounted: function() {
                //组件切换后会触发
                console.log('tab-posts mounted');
            }
        }
    },
    {
        name: 'Archive',
        component: {
            template: '<div>Archive component</div>',
            mounted: function() {
                //组件切换后会触发
                console.log('tab-archive mounted');
            }
        }
    }
]


var app = new Vue({
    el: '#app',
    data: {
        tabs: tabs,
        currentTab: tabs[0]
    }
});








console.log(app);