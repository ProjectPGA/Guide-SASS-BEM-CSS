<template>
  <div class="side-bar">
    <el-menu
      class="side-bar_menu"
      default-active="/"
      background-color="#D4E2EA"
      text-color="#143b52"
      active-text-color="#143b52"
      :router="true"
    >
      <el-menu-item class="side-bar_menu_item" index="/">
        <i class="side-bar_menu_item_icon bx bxs-home" />
        <span class="side-bar_menu_item_title">Home</span>
      </el-menu-item>
      <el-menu-item class="side-bar_menu_item" index="/about">
        <i class="side-bar_menu_item_icon bx bxl-css3" />
        <span class="side-bar_menu_item_title">CSS</span>
      </el-menu-item>
      <el-menu-item class="side-bar_menu_item" index="4">
        <i class="side-bar_menu_item_icon bx bxl-sass" />
        <span class="side-bar_menu_item_title">Sass</span>
      </el-menu-item>
      <el-menu-item class="side-bar_menu_item" index="5">
        <i class="side-bar_menu_item_icon bx bxs-chip" />
        <span class="side-bar_menu_item_title">BEM</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "SideBar",
})
export default class SideBar extends Vue {}
</script>

<style scoped lang="scss">
.side-bar {
  &_menu {
    min-height: 93vh;
    border-right: none;

    &_item {
      text-align: left;
      &:hover {
        background-color: $secondary-color !important;
      }

      &_icon {
        font-size: 23px;
        color: #c4c4c4;
        &:active {
          color: $main-color;
        }
      }

      &_title {
        display: inline-block;
        height: 51px;
        margin-left: 3px;
      }
    }
  }
}

::v-deep .is-active {
  font-weight: bold;
  letter-spacing: 0.75px;
}
</style>
