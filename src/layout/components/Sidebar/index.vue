<template>
  <div :class="{'has-logo':showLogo}">
<!--    <logo v-if="showLogo" :collapse="isCollapse" />-->
<!--    <el-scrollbar wrap-class="scrollbar-wrapper">-->
<!--      <el-menu-->
<!--        :default-active="activeMenu"-->
<!--        :collapse="isCollapse"-->
<!--        :background-color="variables.menuBg"-->
<!--        :text-color="variables.menuText"-->
<!--        :unique-opened="false"-->
<!--        :active-text-color="variables.menuActiveText"-->
<!--        :collapse-transition="false"-->
<!--        mode="vertical">-->
<!--        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />-->
<!--      </el-menu>-->
<!--    </el-scrollbar>-->

<!--    <div class="line"></div>-->
    <div class="flex baseColor nav">
      <div class="flex clr_white bold warning_num">
        <div class="flex-item">
          <span class="yellow_bg f16 block"><i class="el-icon-message-solid clr_white"></i> 22</span>
          <p class="f14">黄色预警</p>
        </div>
        <div class="flex-item">
          <span class="red_bg f16 block"><i class="el-icon-message-solid clr_white"></i> 22</span>
          <p class="f14">红色预警</p>
        </div>
      </div>
      <sidebar-item v-for="(route,index) in permission_routes" :key="route.path" :item="route" :index="index" :base-path="route.path" />
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    activeMenu() {

      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      // return !this.sidebar.opened
      return false
    }
  }
}
</script>
