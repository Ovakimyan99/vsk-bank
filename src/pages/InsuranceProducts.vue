<template>
  <bank-first-screen>
    <template #header>
      <app-header class="insurance-products__header" />
    </template>
    <template #title>
      {{ pageData.title }}
    </template>
    <template #subtitle>
    </template>
  </bank-first-screen>

  <main class="insurance-products-main container">
    <h3 class="insurance-products-main-title">Страховые продукты</h3>
    <div class="insurance-products-card">
      <div class="insurance-products-card__left">
        <h1 class="insurance-products-card__left-title">{{ pageData.title }}</h1>
        <p class="insurance-products-card__left-text">
          {{ pageData.descr }}
        </p>
        <div class="insurance-products-card__left-treaty">
          <span class="insurance-products-card__left-treaty-text">Ознакомьтесь с примером договора:</span>
          <app-button @click="downloadFile" class="insurance-products-card__left-treaty-btn">Скачать .pdf файл договора</app-button>
        </div>
      </div>
      <img class="insurance-products-card__img" :src="require('@/assets/image/insurance-products/' + pageData.imgSrc)" :alt="pageData.title">
    </div>
    <div class="insurance-products-card__left-treaty mobile">
      <span class="insurance-products-card__left-treaty-text">Ознакомьтесь с примером договора:</span>
      <app-button class="insurance-products-card__left-treaty-btn">Скачать .pdf файл договора</app-button>
    </div>
    <a v-show="false" ref="downloadLink" target="_blank" :href="pageData.file" download="file"></a>
  </main>

  <app-footer />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import BankFirstScreen from '@/components/BankFirstScreen'
import sourceData from '@/assets/JSON/sourceData.json'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'InsuranceProducts',
  components: {
    AppHeader,
    AppFooter,
    BankFirstScreen
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    pageData() {
      return sourceData.pages.find(page => page.id === this.id)
    }
  },
  methods: {
    downloadFile() {
      this.$refs.downloadLink.click()
    }
  }
}
</script>

<style lang="scss" scoped>
@use "@/assets/styles/_mixins.scss";
@use "@/assets/styles/_colors.scss";

.insurance-products {
  &__header {
    justify-content: space-between;
    color: colors.$textWhite;
  }

  &-main {
    margin-top: 49px;
    padding-bottom: 69px;

    @media (min-width: 768px) {
      margin-top: 90px;
      padding-bottom: 120px;
    }

    &-title {
      @include mixins.setFontParams(600, 36px);
      line-height: 1;
      color: colors.$textDark;
      margin-top: 0;
      text-align: center;
      margin-bottom: 43px;

      @media (min-width: 768px) {
        margin-bottom: 57px;
        font-size: 48px;
        line-height: 1.2;
      }
    }
  }

  &-card {
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    align-items: center;
    border: 2px solid #DFDFDF;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.25);
    border-radius: 31px;
    padding: 47px 16px 40px;

    @media (min-width: 1100px) {
      flex-direction: row;
      padding: 50px 140px 60px 110px;
    }

    &__img {
      height: 80px;
      margin-bottom: 52px;

      @media (min-width: 640px) {
        height: 120px;
      }

      @media (min-width: 1100px) {
        height: 160px;
        margin-bottom: 0;
      }
    }

    &__left {
      width: 100%;

      @media (min-width: 786px) {
        width: auto;
      }

      &-title {
        position: relative;
        @include mixins.setFontParams(600, 22px);
        color: colors.$textAccent;
        margin-bottom: 23px;
        margin-top: 0;
        text-transform: uppercase;
        text-align: center;

        @media (min-width: 560px) {
          font-size: 27px;
        }

        @media (min-width: 1100px) {
          text-align: left;
          margin-bottom: 45px;
          text-transform: none;
          font-size: 36px;
        }

        &:after {
          display: none;
          content: '';
          position: absolute;
          width: 19px;
          height: 19px;
          background-image: url("@/assets/image/other/check-mark.png");
          background-size: cover;
          top: 10px;
          left: -35px;

          @media (min-width: 1100px) {
            display: block;
          }
        }
      }

      &-text {
        @include mixins.setFontParams(400, 18px);
        margin: 0 auto 27px;
        max-width: 500px;
        text-align: center;

        @media (min-width: 560px) {
          font-size: 20px;
        }

        @media (min-width: 1100px) {
          text-align: left;
          font-size: 24px;
          margin: 0;
        }
      }

      &-treaty {
        display: none;
        @media (min-width: 1100px) {
          display: block;
        }

        &-text {
          @include mixins.setFontParams(400, 24px);
          margin-bottom: 39px;
          display: block;
        }

        &-btn {
          transform: translateX(-10px);
        }

        &.mobile {
          display: block;
          @media (min-width: 1100px) {
            display: none;
          }
        }

        &.mobile &-text {
          font-size: 22px;
          text-align: center;
          font-weight: 600;
          color: #3F4042;
          margin: 44px auto 16px;

          @media (min-width: 560px) {
            font-size: 25px;
          }
        }

        &.mobile &-btn {
          transform: none;
          font-size: 18px !important;
          margin: 0 auto;
          display: block;

          @media (min-width: 560px) {
            font-size: 22px !important;
          }
        }
      }
    }
  }
}
</style>
