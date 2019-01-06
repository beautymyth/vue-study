Vue.component('blog-post', {
    props: {
        // 基础的类型检查 (`null` 匹配任何类型)
        propA: Number,
        // 多个可能的类型
        propB: [String, Number],
        // 必填的字符串
        propC: {
            type: String,
            required: true
        },
        // 带有默认值的数字
        propD: {
            type: Number,
            default: 100
        },
        // 带有默认值的对象
        propE: {
            type: Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function() {
                return { message: 'hello' }
            }
        },
        // 自定义验证函数
        propF: {
            validator: function(value) {
                // 这个值必须匹配下列字符串中的一个
                return ['success', 'warning', 'danger'].indexOf(value) !== -1
            }
        }
    },
    template: `<div>
        <h3>propA:{{propA}}</h3>   
        <h3>propB:{{propB}}</h3>
        <h3>propC:{{propC}}</h3>   
        <h3>propD:{{propD}}</h3>   
        <h3>propE:{{propE}}</h3>   
        <h3>propF:{{propF}}</h3>      
    </div>`
})

var app = new Vue({
    el: '#app',
    data: {
        blog: {
            propA: 11,
            propC: '11',
            propF: 'warning'
        }
    }
});








console.log(app);