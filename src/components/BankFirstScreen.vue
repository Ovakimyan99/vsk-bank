<template>
  <div class="insurance-products">
    <img src="@/assets/image/guarantees-fon-opacity.png" class="insurance-products--fon">
    <section class="container">
      <slot name="header" />
      <h2 class="insurance-products__title">
        <slot name="title" />
        <!--        <span class="insurance-products__descr">для участников<br>госсзаказа</span>-->
      </h2>
      <app-button v-if="slotBtn" class="insurance-products-procurement">
        <slot name="subtitle" />
      </app-button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BankFirstScreen',
  computed: {
    slotBtn() {
      return this.$slots.subtitle().length
    }
  }
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/_mixins.scss";
@use "@/assets/styles/_colors.scss";

.insurance-products {
  overflow: hidden;
  padding-top: 30px;
  background: linear-gradient(101.7deg, #B8E3FF -2.28%, #88CFFA 134.55%);
  position: relative;
  padding-bottom: 100px;

  @media (min-width: 1335px) {
    padding-bottom: 0;
    overflow: visible;
  }

  &--fon {
    position: absolute;
    bottom: -50%;
    right: 0;

    @media (min-width: 768px) {
      bottom: 0;
    }
  }

  &__title {
    margin-top: 115px;
    padding-bottom: 50px;
    margin-bottom: 0;
    text-align: left;
    @include mixins.setFontParams(800, 50px);
    color: colors.$textWhite;
    line-height: 1;

    @media (min-width: 560px) {
      margin-top: 140px;
      font-size: 67px;
    }

    @media (min-width: 1100px) {
      margin-top: 170px;
      font-size: 90px;
    }
  }

  &__descr {
    @include mixins.setFontParams(500, 30px);
    display: block;

    @media (min-width: 560px) {
      font-size: 40px;
    }

    @media (min-width: 786px) {
      font-size: 45px;
    }
  }

  &-procurement {
    margin-top: 50px;
    cursor: default !important;
    font-size: 21px !important;

    @media (min-width: 560px) {
      font-size: 24px !important;
    }

    @media (min-width: 786px) {
      font-size: 30px !important;
    }

    @media (min-width: 1335px) {
      transform: translate(27px, 13px) scale(1.5);
    }
  }
}
</style>
