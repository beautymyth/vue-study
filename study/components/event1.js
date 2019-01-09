

Vue.component('blog-post', {
    inheritAttrs: false,//控制根元素是否设置$attrs
    props: {
        propA: String
    },
    methods:{
        /**
         * 组件事件
         */
        childEvent:function($event){
            console.log('childEvent');
            console.log($event);
            //触发实例方法，同时传递参数
            this.$emit('parent',[1,2,3],11);
        }
    },
    template: `
    <div type='test'>
        <h3 v-bind='$attrs'>propA:{{propA}}</h3>      
        <input type="date" class="form-control">
        <button @click='childEvent'>组件内按钮</button>
    </div>
    `
})

var app = new Vue({
    el: '#app',
    data: {
        blog: {
            propA: '11',
            other2: 'other2'//other2为非prop特性
        }
    },
    methods:{
        /**
         * vue实例的事件
         * $event1,$event2:事件参数，在子组件中传递
         */
        parentEvent:function($event1,$event2){
            console.log('parentEvent');
            console.log($event1);
            console.log($event2);
        }
    }
});








console.log(app);