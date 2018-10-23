<template>
<div class="menu__container">
     <!--菜单-->
     <div v-show="this.$store.state.menu.menuList" class="v-side" :style="'background-color:'+this.$store.state.color">
         <el-menu router default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :background-color="this.$store.state.color" text-color="#f1f1f1">
            <el-submenu :index="el.subIndex" v-for="(el,index) in menuList" :key="index">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{el.subtitle}}</span>
            </template>
            <el-menu-item :index="ele.index" :key="ind" v-for="(ele,ind) in el.menuItems">{{ele.name}}</el-menu-item>
           
        </el-submenu>
        </el-menu>
    </div>
     <!--采访-->
     <div v-show="this.$store.state.menu.interview" class="v-side" :style="'background-color:'+this.$store.state.color">
         <el-menu router default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :background-color="this.$store.state.color" text-color="#f1f1f1">
            <el-submenu :index="el.subIndex" v-for="(el,index) in interview" :key="index">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{el.subtitle}}</span>
            </template>
            <el-menu-item :index="ele.index" :key="ind" v-for="(ele,ind) in el.menuItems">{{ele.name}}</el-menu-item>
           
        </el-submenu>
        </el-menu>
    </div>
    <!--编目-->
     <div v-show="this.$store.state.menu.catalogue" class="v-side" :style="'background-color:'+this.$store.state.color">
         <el-menu router default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :background-color="this.$store.state.color" text-color="#f1f1f1">
            <el-submenu :index="el.subIndex" v-for="(el,index) in catalogue" :key="index">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{el.subtitle}}</span>
            </template>
            <el-menu-item :index="ele.index" :key="ind" v-for="(ele,ind) in el.menuItems">{{ele.name}}</el-menu-item>
           
        </el-submenu>
        </el-menu>
    </div>
    <!--典藏-->
     <div v-show="this.$store.state.menu.breservation" class="v-side" :style="'background-color:'+this.$store.state.color">
         <el-menu router default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :background-color="this.$store.state.color" text-color="#f1f1f1">
            <el-submenu :index="el.subIndex" v-for="(el,index) in breservation" :key="index">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{el.subtitle}}</span>
            </template>
            <el-menu-item :index="ele.index" :key="ind" v-for="(ele,ind) in el.menuItems">{{ele.name}}</el-menu-item>
           
        </el-submenu>
        </el-menu>
    </div>
     
      <!--期刊-->
     <div  v-show="this.$store.state.menu.periodical" class="v-side" :style="'background-color:'+this.$store.state.color">
         <el-menu router default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :background-color="this.$store.state.color" text-color="#f1f1f1">
            <el-submenu :index="el.subIndex" v-for="(el,index) in periodical" :key="index">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{el.subtitle}}</span>
            </template>
            <el-menu-item :index="ele.index" :key="ind" v-for="(ele,ind) in el.menuItems">{{ele.name}}</el-menu-item>
           
        </el-submenu>
        </el-menu>
    </div>
      <!--流通-->
     <div v-show="this.$store.state.menu.circulate" class="v-side" :style="'background-color:'+this.$store.state.color">
         <el-menu router default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :background-color="this.$store.state.color" text-color="#f1f1f1">
            <el-submenu :index="el.subIndex" v-for="(el,index) in circulate" :key="index">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{el.subtitle}}</span>
            </template>
            <el-menu-item :index="ele.index" :key="ind" v-for="(ele,ind) in el.menuItems">{{ele.name}}</el-menu-item>
           
        </el-submenu>
        </el-menu>
    </div>
      <!--设置-->
     <div v-show="this.$store.state.menu.settings" class="v-side" :style="'background-color:'+this.$store.state.color">
         <el-menu router default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :background-color="this.$store.state.color" text-color="#f1f1f1">
            <el-submenu :index="el.subIndex" v-for="(el,index) in settings" :key="index">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{el.subtitle}}</span>
            </template>
            <el-menu-item :index="ele.index" :key="ind" v-for="(ele,ind) in el.menuItems">{{ele.name}}</el-menu-item>
        </el-submenu>
        </el-menu>
    </div>
    
</div>
   
</template>
<script>
import menuMap from '@/assets/aside.json'
export default {
    name:'vside',
     data(){
        return {
            //菜单
            menuList:[],
            interview:[],
            catalogue:[],
            breservation:[],
            periodical:[],
            circulate:[],
            settings:[],

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
         this.settings = menuMap.settings;
         this.interview = menuMap.interview;
         this.catalogue = menuMap.catalogue;
         this.breservation = menuMap.breservation;
         this.periodical = menuMap.periodical;
         this.circulate = menuMap.circulate;
    }
   
}
</script>
<style lang="less">
.menu__container{
    height: 100%;
    display: inline-block;
        width: 160px;
        height: 100%;
        float: left;
     .v-side{
        height: 100%;
        .el-menu {
            border: none;
            .el-menu-item{
                min-width: 0;
            }
            .is-active{
                
            }
        }
    }
}
   
</style>

