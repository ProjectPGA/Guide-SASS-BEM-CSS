<template>
  <el-container class="container">
    <el-header class="container_header">
      <el-row type="flex" justify="space-between">
        <el-col :span="0.5">
          <img
            class="container_header_img"
            src="../../assets/img/LogoOSS.svg"
          />
        </el-col>
        <el-col :span="8">
          <span class="container_header_title">OpenSlot-Guide-CSS</span>
        </el-col>
        <el-col :span="0.5">
          <nav-bar-language />
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import NavBarLanguage from "@/components/NavBar/NavbarLanguage.vue";

@Component({
  name: "NavBar",
  components: {
    NavBarLanguage,
  },
})
export default class NavBar extends Vue {}
</script>

<style scoped lang="scss">
.container {
  &_header {
    background-color: $main-color;
    font-size: 12px;

    &_title {
      line-height: 60px;
      color: $secondary-color-light;
      font-weight: 500;
      font-size: 20px;
    }

    &_img {
      height: 35px;
      padding-top: 12px;
    }
  }
}
</style>
