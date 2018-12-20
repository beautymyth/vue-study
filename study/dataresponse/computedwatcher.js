var app = new Vue({
    el: '#app',
    data: {
        a: 1
    },
    computed: {
        aDouble: function () {
            console.log('重新计算：a=' + this.a);
            return this.a * 2
        }
    }
});

/**
 * 设置新值
 * 输出：
 * 没有输出
 * 
 * Tips:
 * 1.此时只更新计算属性的dirty状态，不会重新计算值
 */
app.a = 2;

/**
 * 输出：
 * 重新计算：a=2
 * 
 * Tips：
 * 1.当获取值时才会重新计算
 */
app.aDouble;








console.log(app);