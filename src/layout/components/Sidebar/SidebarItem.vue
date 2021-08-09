<template>
  <div class="nav_div" v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&item.hidden == false" @click="aa(index)">
    <!--    没有下拉箭头-->
<!--    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">-->
    <template>
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">

        <div class="nav_li f14 bold text-center" :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}" :data-id="onlyOneChild.noShowingChildren">
<!--          <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />-->
          <!--<img  :src="activeIndex == index ? navListActive[onlyOneChild.meta.icon||(item.meta&&item.meta.icon)] : navList[onlyOneChild.meta.icon||(item.meta&&item.meta.icon)]">-->
          <img class="nav_img" :src="navList[onlyOneChild.meta.icon||(item.meta&&item.meta.icon)]">
          <img class="nav_active_img" :src="navListActive[onlyOneChild.meta.icon||(item.meta&&item.meta.icon)]">
          <p class="mt_5" v-if="onlyOneChild.meta.icon||(item.meta&&item.meta.icon) != 0">{{onlyOneChild.meta.title}}</p>
        </div>


      </app-link>
    </template>
    <div class="line"></div>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
import Item from './Item'
import AppLink from './Link'
import FixiOSBug from './FixiOSBug'
import nav_01 from '@/assets/image/nav_01.png'
import nav_02 from '@/assets/image/nav_02.png'
import nav_03 from '@/assets/image/nav_03.png'
import nav_04 from '@/assets/image/nav_04.png'
import nav_05 from '@/assets/image/nav_05.png'
import nav_06 from '@/assets/image/nav_06.png'
import nav_07 from '@/assets/image/nav_07.png'
import nav_08 from '@/assets/image/nav_08.png'
import nav_09 from '@/assets/image/nav_09.png'
import nav_10 from '@/assets/image/nav_10.png'
import nav_11 from '@/assets/image/nav_11.png'
import nav_01Active from '@/assets/image/nav_01.png'
import nav_02Active from '@/assets/image/nav_02_active.png'
import nav_03Active from '@/assets/image/nav_03_active.png'
import nav_04Active from '@/assets/image/nav_04_active.png'
import nav_05Active from '@/assets/image/nav_05_active.png'
import nav_06Active from '@/assets/image/nav_06_active.png'
import nav_07Active from '@/assets/image/nav_07_active.png'
import nav_08Active from '@/assets/image/nav_08_active.png'
import nav_09Active from '@/assets/image/nav_09_active.png'
import nav_10Active from '@/assets/image/nav_10_active.png'
import nav_11Active from '@/assets/image/nav_11_active.png'

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      required: true
    },
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null
    return {
      activeIndex:0,
      navList:[nav_01,nav_02,nav_03,nav_04,nav_05,nav_06,nav_07,nav_08,nav_09,nav_10,nav_11],
      navListActive:[nav_01Active,nav_02Active,nav_03Active,nav_04Active,nav_05Active,nav_06Active,nav_07Active,nav_08Active,nav_09Active,nav_10Active,nav_11Active],
    }
  },

  methods: {
    aa(routeIndex){
      console.log(routeIndex)
      // this.activeIndex = routeIndex - 5
      this.activeIndex = routeIndex
      console.log( this.activeIndex )
    },
    hasOneShowingChild(children = [], parent) {
      // if(children.length > 0){
      //   console.log('arr')
      //   console.log(children)
      //
      //   const arr = children.filter(item=>item.hidden == false)
      //   console.log(arr)
      //   if(arr.length>0){
      //     this.onlyOneChild = null
      //     return true
      //   }
      //
      // }else{

        const showingChildren = children.filter(item => {
          // console.log(item)
          if (item.hidden) {
            return false

          }else {
            // Temp set(will be used if only has one showing child)
            this.onlyOneChild = item
            return true
          }
        })

        // When there is only one child router, the child router is displayed by default
        if (showingChildren.length === 1) {
          return true
        }

        // Show parent if there are no child router to display
        if (showingChildren.length === 0) {
          this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
          return true
        }
        return false


      // }
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
<style lang="scss" scoped>
  .nav_img{
    display: block;
  }
  .nav_active_img{
    display: none;
  }
  .router-link-active{
    .nav_img{
      display: none;
    }
    .nav_active_img{
      display: block;
    }
  }

</style>
