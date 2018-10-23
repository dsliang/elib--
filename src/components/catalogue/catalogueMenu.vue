<template>
    <div class="v-side" :style="'background-color:'+this.$store.state.color">
         <el-menu
         router
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :background-color="this.$store.state.color"
        text-color="#f1f1f1">
        <el-submenu router :index="el.subIndex" v-for="(el,index) in menuList" :key="index">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{el.subtitle}}</span>
            </template>
            <el-menu-item :index="ele.index" :key="ind" v-for="(ele,ind) in el.menuItems">{{ele.name}}</el-menu-item>
           
        </el-submenu>
        </el-menu>
    </div>
</template>
<script>
import menuMap from '@/assets/aside.json'

export default {
    name:'catalogueMenu',
     data(){
        return {
            menuList:[]
        }
    },
    methods:{
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    mounted(){
         this.menuList = menuMap.catalogue;

    }
}
</script>
