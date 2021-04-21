<template>
  <el-dropdown trigger="click" @command="changeLanguage">
    <i class="language_title bx bx-world bx-tada-hover" />
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        :disabled="currentLanguage === 'es'"
        command="es"
        class="language_dropdown_item"
        >Spanish</el-dropdown-item
      >
      <el-dropdown-item
        :disabled="currentLanguage === 'en'"
        command="en"
        class="language_dropdown_item"
        >English</el-dropdown-item
      >
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import mainStore from "@/store/main-store/MainStore";

@Component({
  name: "NavbarLanguage",
  components: {},
})
export default class NavbarLanguage extends Vue {
  private mainStore = mainStore.context(this.$store);

  private get currentLanguage(): string {
    return this.mainStore.state.currentLanguage;
  }

  private changeLanguage(command: string): void {
    command == "es"
      ? this.mainStore.actions.changeLanguageToSpanish()
      : this.mainStore.actions.changeLanguageToEnglish();
  }
}
</script>

<style scoped lang="scss">
.language {
  &_title {
    line-height: 60px;
    cursor: pointer;
    font-size: 28px;
    color: $secondary-color-light;

    &:hover {
      color: $secondary-color;
    }
  }

  &_dropdown {
    &_item {
      font-family: "Lexend", Helvetica, Arial, sans-serif;
      color: $main-color;

      &:hover {
        color: $secondary-color-light !important;
      }
    }
  }
}
::v-deep .el-dropdown-menu,
.el-popper {
  background-color: $secondary-color;
}
::v-deep .el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: $secondary-color;
}
::v-deep .popper__arrow::after {
  border-bottom-color: $secondary-color !important;
}
</style>
