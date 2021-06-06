<template>
  <div class="sidebar">
    <el-menu
      class="sidebar_menu"
      default-active="/"
      background-color="#D4E2EA"
      text-color="#143b52"
      active-text-color="#143b52"
      :router="true"
    >
      <sidebar-item
        icon="bx bxs-home"
        index="/"
        text="components.sidebar.home"
      />
      <sidebar-item
        icon="bx bxl-css3"
        index="/about"
        text="components.sidebar.css"
      />
      <sidebar-item
        icon="bx bxl-sass"
        index="4"
        text="components.sidebar.sass"
      />
      <sidebar-item
        icon="bx bxs-chip"
        index="5"
        text="components.sidebar.bem"
      />
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import SidebarItem from "@/components/SideBar/SidebarItem.vue";

@Component({
  name: "SideBar",
  components: {
    SidebarItem,
  },
})
export default class SideBar extends Vue {}
</script>

<style scoped lang="scss">
.sidebar {
  &_menu {
    min-height: calc(100vh - 3.75rem);
    border-right: none;

    ::v-deep .is-active {
      font-weight: 500;
      letter-spacing: 0.047rem;
    }
  }
}
</style>
