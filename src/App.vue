<template>
  <div id="app">
    <navbar />
    <el-row>
      <el-col :span="2">
        <sidebar />
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

import Navbar from "@/components/NavBar/Navbar.vue";
import Sidebar from "@/components/SideBar/Sidebar.vue";

@Component({
  name: "App",
  components: {
    Navbar,
    Sidebar,
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
