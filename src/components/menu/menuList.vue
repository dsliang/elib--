<template>
    <div class="v-side" :style="'background-color:'+this.$store.state.color">
         <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :background-color="this.$store.state.color"
        text-color="#f1f1f1">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>菜单</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>
        </el-menu>
    </div>
</template>
<script>
export default {
    name:'menuList',
     data(){
        return {}
    },
    methods:{
       
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
        
    }
}
</script>
