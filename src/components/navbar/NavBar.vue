<template>
  <el-container class="container">
    <el-header class="container__header">
      <el-row type="flex" justify="space-between">
        <el-col :span="0.5">
          <img
            class="container__header__img"
            src="../../assets/img/LogoOSS.svg"
          />
        </el-col>
        <el-col :span="8">
          <span class="container__header__title">{{
            $t("components.navbar.title")
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

import NavbarLanguage from "@/components/navbar/NavbarLanguage.vue";

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
  &__header {
    background-color: $main-color;
    padding-left: 0.625rem;
    padding-right: 0.625rem;

    &__title {
      line-height: 3.75rem;
      color: $secondary-color-light;
      font-weight: 500;
      font-size: 1.25rem;
    }

    &__img {
      height: 2.6rem;
      padding-top: 0.6rem;
    }
  }
}
</style>
