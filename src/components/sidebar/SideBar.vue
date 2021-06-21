<template>
  <div class="sidebar">
    <el-menu class="sidebar__menu" default-active="/" :router="true">
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

import SidebarItem from "@/components/sidebar/SidebarItem.vue";

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
  &__menu {
    min-height: calc(100vh - 3.75rem);
    border-right: none;
    background-color: $secondary-color;

    ::v-deep .is-active {
      font-weight: 500;
      letter-spacing: 0.047rem;
      color: $main-color;
    }
  }
}
</style>
