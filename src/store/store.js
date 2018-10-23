import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store =  new Vuex.Store({
    state:{
        color:'#1F5289',
        activeMenu:'menuList',
        menu:{
            menuList:true,
            interview:false,
            catalogue:false,
            breservation:false,
            periodical:false,
            circulate:false,
            settings:false,
        },
        _route:{},
        routerList:[
            {
                path:'/',
                fullPath:'/',
                name:'首页'
            }
        ],
    },
    mutations:{
        themeColor(state){
           
        },
        getActiveMenu(state){
           for(let key in state.menu){
            state.menu[key] = false;
           };
           state.menu[state.activeMenu] = true;
        },
        dealRouter(state){
            /*--一级路由不处理--*/
            let  partition_path = state._route.path.split('/');
            if( partition_path.length < 3 ){
                if(partition_path[1]){
                    return;
                }
            }
            let ishas = false;
            let _route_name = state._route.name;
            state.routerList.
            forEach( el => {
                if(el.name === _route_name)
                {
                    ishas = true;
                }
            })
            
            //tabs标签回复颜色状态
            let el_breadcrumb_item 
                = document.getElementById('el-breadcrumb').children;
                for(let i=0; i < el_breadcrumb_item.length;i++){
                    el_breadcrumb_item[i].children[0].style.color
                    = '#303133';
                }
            if(ishas){
                document.getElementById(state._route.path)
                .children[0].style.color 
                = '#409EFF';
            }else{
                state.routerList.push( state._route );
            };
        },
        
    }
});
export default store;