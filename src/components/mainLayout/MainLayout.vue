<template>
  <div>
    <el-container class="layout">
      <el-header class="layout__header"><slot name="navbar" /></el-header>
      <el-container>
        <transition name="slide-sidebar">
          <aside class="layout__sidebar" v-if="isHidden">
            <slot name="sidebar" />
          </aside>
        </transition>
        <el-main><slot name="main" /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import mainStore from "@/store/main-store/MainStore";

import NavBar from "@/components/navbar/NavBar.vue";
import SideBar from "@/components/sidebar/SideBar.vue";

@Component({
  name: "MainLayout",
  components: {
    NavBar,
    SideBar,
  },
})
export default class MainLayout extends Vue {
  private mainStore = mainStore.context(this.$store);

  private get isHidden(): boolean {
    return this.mainStore.state.isHidden;
  }
}
</script>

<style scoped lang="scss">
.layout {
  &__header {
    padding: 0;

    @include touch {
      height: 3.125rem !important;
    }
  }

  &__sidebar {
    width: 9.688rem;

    @include touch {
      width: 6.687rem;
      overflow: auto;
      flex-shrink: 0;
    }
  }
}
</style>
