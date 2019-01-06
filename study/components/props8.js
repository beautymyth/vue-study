

Vue.component('blog-post', {
    inheritAttrs: false,
    props: {
        propA: String
    },
    data:function(){
        return {
            other1:'other1old'
        };
    },
    template: `<div>
        <h3 v-bind='$attrs' :other1='other1'>propA:{{propA}}</h3>      
        <input type="date" class="form-control">
    </div>`
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