<template>
  <div class="home">
    <el-row>
      <el-col :span="24"
        ><h2>
          Bienvenido a la documentación de reglass CSS de Open Slot Studio
        </h2></el-col
      >
    </el-row>
    <el-row type="flex" justify="space-between" class="container">
      <el-col :span="10" class="container__left">
        <div class="description">
          <p class="description__text">
            La <strong>primera regla de oro</strong> de nuestro equipo son las
            buenas prácticas cuando elaboramos cualquier proyecto. Es por ello
            por lo que hemos decidido detallar todas las reglas definidas por el
            equipo, para que se más fácil comprenderlas y poder consultarlas
            cuando sea necesario.
          </p>
          <div>
            <p class="description__text">
              Antes de empezar a documentarte ten en cuenta lo siguiente:
            </p>
            <ul class="description__list">
              <li>
                Las reglas son revisadas por todo el equipo antes de ser
                aplicadas y documentadas
              </li>
              <li>
                Cualquier sugerencia de mejora y/o actualización será bienvenida
              </li>
              <li>
                Cada sugerencia será revisada por todo el equipo antes de ser
                aplicada y documentada
              </li>
            </ul>
          </div>

          <p class="description__text">
            A continuación, detallamos las reglas definidas para
            <strong>CSS, SASS y BEM.</strong> Si es la primera vez que te
            documentas sobre nuestras reglas es recomendable seguir el orden
            para que sea más sencillo de comprenderlas.
          </p>
        </div>
        <div class="img">
          <div class="img__box">
            <img class="img__item" src="@/assets/img/css-icon.png" />
          </div>
          <div class="img__box">
            <img class="img__item" src="@/assets/img/sass-icon.png" />
          </div>
          <div class="img__box">
            <img class="img__item" src="@/assets/img/bem-icon.png" />
          </div>
        </div>
      </el-col>
      <el-col class="container__right" :span="12">
        <transition
          name="slide-fade"
          appear
          appear-class="container__image-enter"
          appear-active-class="container__image-active"
        >
          <img class="container__img" src="@/assets/img/image-programmer.png" />
        </transition>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Home",
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.test {
  font-size: 50px !important;
}

.home {
  width: 95%;
  margin: 0 auto;

  .container {
    min-height: calc(100vh - 180px);

    &__left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__right {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__image {
      &-active {
        transition: all 0.8s ease;
      }
      &-enter {
        transform: translateY(25px);
        opacity: 0;
      }
    }

    &__img {
      margin-top: 16px;
    }
  }
  .description {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 0.5;

    &__text {
      line-height: 25px;
      font-size: 17px;
    }

    &__list {
      line-height: 25px;
    }
  }
  .img {
    display: flex;
    justify-content: space-between;

    &__box {
      height: 150px;
      width: 150px;
      border-radius: 5px 5px 5px 5px;
      border: 1px solid #8080801c;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05),
        0px 2px 4px rgba(0, 0, 0, 0.05), 0px 4px 8px rgba(0, 0, 0, 0.05),
        0px 8px 10px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.1s linear 0.1s, box-shadow 0.1s linear 0.1s;

      &:hover {
        cursor: pointer;
        transform: translateY(-15px);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03),
          0px 8px 8px rgba(0, 0, 0, 0.03), 0px 16px 16px rgba(0, 0, 0, 0.03),
          0px 20px 20px rgba(0, 0, 0, 0.1);
      }
    }

    &__item {
      height: 120px;
    }
  }
}
</style>
