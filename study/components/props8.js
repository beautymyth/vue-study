

Vue.component('blog-post', {
    inheritAttrs: false,//控制根元素是否设置$attrs
    props: {
        propA: String
    },
    template: `
    <div type='test'>
        <h3 v-bind='$attrs'>propA:{{propA}}</h3>      
        <input type="date" class="form-control">
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
    }
});








console.log(app);