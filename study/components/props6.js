Vue.component('blog-post', {
    props: {
        'string': String,
        'number': Number,
        'bool': Boolean,
        'array': Array,
        'object': Object
    },
    data:function(){
        /**
         * 使用data固化prop值
         * Tips：
         * 1.改变父类的prop值不会影响此本地属性
         */
        return {
            numberLocal:this.number
        };
    },
    computed:{
        /**
         * 使用计算属性对prop值进行转换
         * Tips：
         * 1.改变父类的prop值会影响此计算属性的结果
         */
        numberComputed:function(){
            return this.number*2;
        }
    },
    methods:{
        /**
         * 对固化的值进行修改，对原值没有影响
         */
        addNumberLocal:function(){
            this.numberLocal++;
        }
    },
    template: `<div>
        <h3>string:{{string}}</h3>    
        <h3>number:{{number}}</h3>
        <h3>bool:{{bool}}</h3>
        <h3>array:{{array}}</h3>
        <h3>object:{{object}}</h3>
        <h3>numberLocal:{{numberLocal}}</h3>
        <h3>numberComputed:{{numberComputed}}</h3>
        <button @click="addNumberLocal">add number</button>
    </div>`
})

var app = new Vue({
    el: '#app',
    data: {
        blog: {
            string: '11',
            number: 11,
            bool: false,
            array: [1, 2],
            object: { a: 1, b: 2 }
        }
    }
});








console.log(app);