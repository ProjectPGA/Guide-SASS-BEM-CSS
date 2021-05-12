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
        <span class="side-bar_menu_item_title">{{
          $t("components.sideBar.home")
        }}</span>
      </el-menu-item>
      <el-menu-item class="side-bar_menu_item" index="/about">
        <i class="side-bar_menu_item_icon bx bxl-css3" />
        <span class="side-bar_menu_item_title">{{
          $t("components.sideBar.css")
        }}</span>
      </el-menu-item>
      <el-menu-item class="side-bar_menu_item" index="4">
        <i class="side-bar_menu_item_icon bx bxl-sass" />
        <span class="side-bar_menu_item_title">{{
          $t("components.sideBar.sass")
        }}</span>
      </el-menu-item>
      <el-menu-item class="side-bar_menu_item" index="5">
        <i class="side-bar_menu_item_icon bx bxs-chip" />
        <span class="side-bar_menu_item_title">{{
          $t("components.sideBar.bem")
        }}</span>
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
    min-height: calc(100vh - 3.75rem);
    border-right: none;

    ::v-deep .is-active {
      font-weight: 500;
      letter-spacing: 0.047rem;
    }

    &_item {
      text-align: left;
      &:hover {
        background-color: $secondary-color !important;
      }

      &_icon {
        font-size: 1.438rem;
        color: #c4c4c4;
        &:active {
          color: $main-color;
        }
      }

      &_title {
        display: inline-block;
        height: 3.188rem;
        margin-left: 0.188rem;
      }
    }
  }
}
</style>
