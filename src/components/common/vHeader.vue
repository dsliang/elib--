<template>
    <div class="v-header" :style="'background-color:'+this.$store.state.color">
        <div class="logo">
            <img src="../../assets/logo.png" alt="智慧图书馆">
        </div>
        <div class="frist__menu">
            <el-menu  style="'background-color:'+this.$store.state.color" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="/menuList">菜单</el-menu-item>
                <el-menu-item index="/interview">采访</el-menu-item>
                <el-menu-item index="/catalogue">编目</el-menu-item>
                <el-menu-item index="/breservation">典藏</el-menu-item>
                <el-menu-item index="/periodical">期刊</el-menu-item>
                <el-menu-item index="/circulate">流通</el-menu-item>
                <el-menu-item index="/settings">设置</el-menu-item>
            </el-menu>
        </div>
        <div class="header__tool">
            <el-button type="text">用户</el-button>
            <el-button type="text">主页</el-button>
            <el-button type="text">菜单</el-button>
            <el-button type="text">通知</el-button>
            <el-popover
            placement="bottom"
            width="240px"
            trigger="click">
            <el-row>
                <el-col :span="12">
                    <el-color-picker color-format="hex" v-model="themeColor" @active-change="headleChangeColor"></el-color-picker>
                </el-col>
                <el-col :span="12">
                    <span>自定义主题颜色</span>
                </el-col>
            </el-row>
            <el-button type="text" slot="reference">主题</el-button>
            </el-popover>
            <el-button type="text">退出</el-button>
        </div>
        <!-- 主题颜色设置界面 -->
       
    </div>
</template>
<script>


export default {
    name:'vheader',
    data(){
        return {
            activeIndex:'menuList',
            themeColor:'#0079FE'
        }
    },
    methods:{
        handleSelect(key, keyPath) {
            this.$store.state.activeMenu 
            = 
            (key.replace(/\//g,''));
            this.$store.commit('getActiveMenu');
        },
        //
         handleClose(done) {
        
        },
        headleChangeColor(value){
            this.$store.state.color = value;
        }
    }
}
</script>
<style lang="less" scoped>

    .v-header{
        height: 50px;
        
        line-height: 50px;
        .logo{
            display: inline-block;
            float: left;
            margin-left:15px;
            img{
                width:220px;
                height: 40px;
                padding: 5px;
            }
        }
        .frist__menu{
            display: inline-block;
            margin-left: 100px;
            .el-menu{
                border: none;
                .el-menu-item{
                    height: 50px;
                    line-height: 50px;
                    color: #C5E1FF;
                    border: none;
                    min-width: 0;
                }
                .is-active{
                     background-color: #73B5FF;
                }
            }
        }
        /* 一级导航栏行为样式 */
        .el-dropdown-menu__item--divided:before, 
        .el-menu,
        .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, 
        .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,
        .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
            background-color: transparent;
            
        }
        .el-menu--horizontal>.el-menu-item.is-active {
            border:none;
            color: #fff;
        }
        /* 头部工具栏 */
        .header__tool{
            display: inline-block;
            float: right;
            margin-right: 15px;
            .el-button--text{
                color:#f1f1f1
            }
        }
        .el-dialog__wrapper{
            position: fixed;
            top: -20px;
            right: 0;
            bottom: 0;
            left: 0;
            overflow: auto;
            margin: 0;
            .el-dialog{
            margin: 0;
            float:right;
       }
        }
        
    }
</style>
