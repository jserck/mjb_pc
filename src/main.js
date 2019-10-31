import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import Axios from './assets/js/axios'
// import FastClick from 'fastclick'
import {
    url
} from './assets/js/urlLocation'
import './assets/css/common.css'
import 'element-ui/lib/theme-chalk/index.css'
//引入element ui 框架
import {
    Row,
    Col,
    Container,
    Header,
    Main,
    Footer,
    Tabs,
    TabPane,
    Loading,
    InfiniteScroll,
    Progress,
    Image,
    Input,
    Form,
    FormItem,
    Button,
    Select,
    Option
} from 'element-ui';

//挂载全局
Vue.use(Option)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Select)
Vue.use(Input)
Vue.use(Col)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Loading);
Vue.use(InfiniteScroll);
Vue.use(Progress);
Vue.use(Image);
//为vue实例添加自定义的全局属性
Vue.prototype.$http = Axios;
Vue.prototype.$url = url;
//实例化vue
Vue.config.productionTip = false;
// FastClick.attach(document.body)
//路由器导航后置守卫
// router.afterEach((to, from, next) => {

// })
var vm = new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})