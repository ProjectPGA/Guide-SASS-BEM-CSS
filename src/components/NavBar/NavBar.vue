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
          <span class="container_header_title">{{
            $t("components.navBar.title")
          }}</span>
        </el-col>
        <el-col :span="0.5">
          <navbar-language />
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import NavbarLanguage from "@/components/NavBar/NavbarLanguage.vue";

@Component({
  name: "NavBar",
  components: {
    NavbarLanguage,
  },
})
export default class NavBar extends Vue {}
</script>

<style scoped lang="scss">
.container {
  &_header {
    background-color: $main-color;

    &_title {
      line-height: 3.75rem;
      color: $secondary-color-light;
      font-weight: 500;
      font-size: 1.25rem;
    }

    &_img {
      height: 2.188rem;
      padding-top: 0.75rem;
    }
  }
}
</style>
