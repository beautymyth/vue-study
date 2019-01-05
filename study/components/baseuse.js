/**
 *  定义一个名为 button-counter 的新组件
 */
Vue.component('button-counter', {
    data: function() {
        return {
            count: 0
        }
    },
    methods:{
        addCount:function(){
            this.count++;
        }
    },
    template: '<button v-on:click="addCount">You clicked me {{ count }} times.</button>'
});

var app = new Vue({
    el: '#app'
});








console.log(app);