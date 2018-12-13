var userMethod = {
    changeMessage: function () {
        //this.data.title?
        console.log(this);
        alert(this.title);
        this.message = this.message + new Date().getMilliseconds()
    }
};
var data = {
    title: '标题1',
    message: 'Hello World!',
    isShow: {
        p1: true,
        p2: true
    },
    todos: [
        {text: '早饭'},
        {text: '中饭'},
        {text: '晚饭'}
    ],
    useinfo: {
        cname: '小王',
        age: 10
    },
    todoList: [
        {id: 0, text: '早饭'},
        {id: 1, text: '中饭'},
        {id: 2, text: '晚饭'}
    ]
};

/*
组件需要在使用前定义
 */
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
});
var app = new Vue({
    el: '#app',
    data: data,
    methods: userMethod
});

console.log(app);