<template>
  <div class="side-bar">
    <el-row>
      <el-col>
        <el-menu
          default-active="2"
          class="side-bar_menu"
          @open="handleOpen"
          @close="handleClose"
          background-color="#143B52"
          text-color="#FFF"
          active-text-color="#BF195E"
        >
          <router-link class="side-bar_menu_item-link" to="/">
            <el-menu-item index="1">
              <i class="el-icon-house"></i>
              <span>Home</span>
            </el-menu-item>
          </router-link>
          <router-link class="side-bar_menu_item-link" to="/about">
            <el-menu-item index="2">
              <i class="el-icon-document"></i>
              <span>CSS</span>
            </el-menu-item>
          </router-link>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class SideBar extends Vue {}
</script>

<style scoped lang="scss">
.side-bar {
  &_menu {
    min-height: 93vh;
    border-right: none;

    &_item-link {
      text-decoration: none;
    }
  }
}
</style>
