<template>
<div class="v-index">
    <v-Header></v-Header>
    <div class="v-container">
      <v-Side></v-Side>
        <div class="content-wrapper">
            <div class="v-tabBar">
                <div class="v-tabBar-arena" id="v-tabBar-arena">
                   <div class="el-breadcrumb-box" >
                        <el-breadcrumb separator="/" id="el-breadcrumb">
                        <el-breadcrumb-item  :id="el.path"  :key="index" v-for=" (el,index) in this.$store.state.routerList" :to="{ path: el.path }">{{el.name}}</el-breadcrumb-item>
                    </el-breadcrumb>
                   </div>
                    
                </div>
                <el-button @click="flowTabs('left')" class="left" icon="el-icon-arrow-left"></el-button>
                <el-button @click="flowTabs('right')" class="right" icon="el-icon-arrow-right"></el-button>
                <el-dropdown @command="handleCommand" trigger="click">
                <span class="el-dropdown-link">
                    导航操作<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu  slot="dropdown" :hide-on-click="true" >
                    <el-dropdown-item command="closeAll">关闭所有选项</el-dropdown-item>
                    <el-dropdown-item command="closeOther">显示当前选项</el-dropdown-item>
                    <!-- <el-dropdown-item></el-dropdown-item> -->
                   
                </el-dropdown-menu>
                </el-dropdown>
            </div>
            <router-view name="wrapper"></router-view>
        </div>
    </div>
</div>
    
</template>
<script>
import VHeader from '@/components/common/vHeader.vue'
import VSide from '@/components/common/vSide.vue'

export default {
    name:'vIndex',
    data(){
        return {
            tempIndex:true,
            temp:1,
            offsetLeft:0
        }
    },
    components:{
        VHeader,
        VSide
    },
    methods:{
        routerHander(){
            this.$store.state._route = this.$route; 
            this.$store.commit('dealRouter');
        },
        /**面包屑操作**/
        flowTabs(val){
            let width_box
            = document.querySelector('#v-tabBar-arena').offsetWidth;
            let width_bar
            = document.querySelector('#el-breadcrumb').offsetWidth;
            let time 
            = Math.ceil(width_bar/width_box);
            if(time == 1)
            {
                return;
            }
            else
            {
                
                if(val === 'left')
                {
                    if(this.temp == 1)
                    {
                        return;
                    }else{
                        this.offsetLeft += width_box;
                        document.querySelector('#el-breadcrumb').style.marginLeft = this.offsetLeft +'px';
                        this.temp--;
                    }
                }
                else
                {
                    if(this.temp == time)
                    {
                        return;
                    }
                    else
                    {
                        this.offsetLeft  -= width_box;
                        document.querySelector('#el-breadcrumb').style.marginLeft = this.offsetLeft +'px';
                        this.temp++;
                    }
                };
            }
            

        },
        handleCommand(command) {
           if(command == 'closeAll'){
               this.$store.state.routerList = [
                   {
                        path:'/',
                        fullPath:'/',
                        name:'首页'
                    }
               ];
               this.$router.push('/')
           }else if(command == 'closeOther'){
               let delRoter=()=>{
                    for(var i = 0; i < this.$store.state.routerList.length ; i++){
                    if(!(this.$store.state.routerList[i].path == '/' 
                    || 
                    this.$store.state.routerList[i].path 
                    == this.$store.state._route.path)){
                       this.$store.state.routerList.splice(i, 1);
                       
                       delRoter(); 
                       break;
                    }else{
                    }
                }
               }
              delRoter()
           }
           console.log(document.getElementById(this.$store.state._route.path).children[0]);
            document.getElementById(this.$store.state._route.path)
                        .children[0].style.color 
                        = 'rgb(64, 158, 255)';
        },
       

    },
    watch:{
        "$route": "routerHander"
    }  
}
</script>
<style lang="less">
.v-index{
    height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient:vertical
    ;-webkit-flex-direction:column;
    -ms-flex-direction:column;
    flex-direction:column;
    .v-container{
        height: calc(100% - 50px);
        .content-wrapper{
            display: inline-block;
            width: calc(100% - 160px);
            height: 100%;
            float: left;
            overflow: auto;
            .v-tabBar{
                width: 100%;
               padding: 0 120px 0 40px;
               box-sizing: border-box;
               position: relative;
               .el-button{
                   padding: 6px 10px;
                   border: none;
               }
               .left{
                   position: absolute;
                   left: 0;
                   top: 10px;
               }
               .right{
                   position: absolute;
                   right: 86px;
                   top: 10px;
               }
               .el-dropdown{
                   position: absolute;
                   right: 4px;
                   top: 10px;
                   cursor: pointer;
                   padding: 4px 10px;
               }
               .v-tabBar-arena{
                    width:100%;
                    overflow: hidden;
                   .el-breadcrumb-box{
                     width: 10000%;
                     overflow: hidden;
                    .el-breadcrumb{
                        // width: 9999px;
                        display: inline-block;
                        height: 50px;
                        line-height: 50px;
                        font-size: 14px;
                        .el-breadcrumb__item:last-child .el-breadcrumb__inner,
                        .el-breadcrumb__item:last-child .el-breadcrumb__inner a{
                            font-weight: 700;
                            text-decoration: none;
                            -webkit-transition: color .2s cubic-bezier(.645,.045,.355,1);
                            transition: color .2s cubic-bezier(.645,.045,.355,1);
                            color: #409EFF;
                            cursor: pointer;
                        }
                        .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, 
                        .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
                            color: #409EFF;
                            cursor: pointer;
                        }
                    }
                   }
               }
                
            }
        }
    }
}
    
</style>
