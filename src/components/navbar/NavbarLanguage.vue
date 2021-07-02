<template>
  <el-dropdown class="dropdown" trigger="click" @command="changeLanguage">
    <i class="dropdown__title bx bx-world bx-tada-hover" />
    <el-dropdown-menu class="dropdown__menu" slot="dropdown">
      <el-dropdown-item
        :disabled="currentLanguage === 'es'"
        command="es"
        class="dropdown__menu__item"
        >{{ $t("components.navbarLanguage.spanish") }}</el-dropdown-item
      >
      <el-dropdown-item
        :disabled="currentLanguage === 'en'"
        command="en"
        class="dropdown__menu__item"
        >{{ $t("components.navbarLanguage.english") }}
      </el-dropdown-item>
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
.dropdown {
  &__title {
    line-height: 3.75rem;
    cursor: pointer;
    font-size: 1.75rem;
    color: $secondary-color-light;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    @include touch {
      font-size: 1.25rem;
      height: 3.125rem;
      line-height: 3.125rem;
    }

    &:hover {
      color: $secondary-color;
    }
  }
  &__menu {
    background-color: $secondary-color;
    box-shadow: 0rem 0.125rem 0.188rem gray;
    border: none;

    &__item {
      font-family: "Lexend", Helvetica, Arial, sans-serif;
      color: $main-color;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

      &:hover {
        color: $secondary-color-light !important;
      }
    }

    ::v-deep .el-dropdown-menu__item:not(.is-disabled):hover {
      background-color: $secondary-color;
    }
    ::v-deep .popper__arrow::after {
      border-bottom-color: $secondary-color !important;
    }
  }
}
</style>
