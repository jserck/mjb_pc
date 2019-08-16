import Vue from 'vue'
import Router from 'vue-router'
import * as routerComponents from './routerComponents'
Vue.use(Router)

export default new Router({
    //     mode: 'history',
    routes: [{
            path: '/error',
            name: '',
            component: routerComponents["ERROR"]['component'],
            meta: {
                index: 1
            }
        },
        {
            path: '*',
            component: routerComponents["ERROR"]['component'],
            meta: {
                index: 99
            }
        },
        //开放工地
        {
            path: '/openTheSite/:id',
            name: 'OPENTHESITE',
            component: routerComponents["OPENTHESITE"]['component']
        },
        //地图可视化
        {
            path: '/bmap/:id',
            name: 'bmap',
            component: routerComponents["BMAP"]['component']
        },
        //try
        {
            path: '/try',
            name: 'try',
            component: routerComponents["TRY"]['component']
        }
    ]
})