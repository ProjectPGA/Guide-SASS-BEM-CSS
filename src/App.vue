<template>
  <div id="app">
    <nav-bar />
    <el-row>
      <el-col :span="2">
        <side-bar />
      </el-col>
      <el-col :span="20">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

import mainStore from "@/store/main-store/MainStore";

import NavBar from "@/components/NavBar/Navbar.vue";
import SideBar from "@/components/SideBar/Sidebar.vue";

@Component({
  name: "App",
  components: {
    NavBar,
    SideBar,
  },
})
export default class App extends Vue {
  private mainStore = mainStore.context(this.$store);

  private get currentLanguage(): string {
    return this.mainStore.state.currentLanguage;
  }

  @Watch("currentLanguage")
  private onChangeLanguage(): void {
    this.$i18n.locale = this.currentLanguage;
  }
}
</script>
<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
