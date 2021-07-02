<template>
  <div id="app">
    <main-layout>
      <template v-slot:navbar>
        <nav-bar />
      </template>
      <template v-slot:sidebar>
        <side-bar />
      </template>
      <template v-slot:main>
        <router-view />
      </template>
    </main-layout>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

import mainStore from "@/store/main-store/MainStore";

import NavBar from "@/components/navbar/NavBar.vue";
import SideBar from "@/components/sidebar/SideBar.vue";
import MainLayout from "@/components/mainLayout/MainLayout.vue";

@Component({
  name: "App",
  components: {
    NavBar,
    SideBar,
    MainLayout,
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
