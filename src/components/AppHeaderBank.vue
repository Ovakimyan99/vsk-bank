<template>
  <header class="header">
    <slot name="image">
      <img class="header-logo" src="@/assets/image/vsk-logo.png" alt="страховой дом VSK" title="страховой дом VSK">
    </slot>
    <div @click="burgerActive = !burgerActive" class="header-burger" :class="{active: burgerActive}">
      <div class="header-burger-line header-burger-top" />
      <div class="header-burger-line header-burger-middle" />
      <div class="header-burger-line header-burger-bottom" />
    </div>
    <Teleport to="body" :disabled="!isMobile">
      <nav class="header-links" :class="{active: burgerActive}">
        <ul class="header-links-wrapper">
          <li
            class="header-links__route"
            v-for="{ name, path } of links"
            :key="name"
            :to="`/#${path}`"
          >
            {{ name }}
          </li>
        </ul>
      </nav>
    </Teleport>
  </header>
</template>

<script>
import { disableScroll, enablesScroll } from '@/windowScroll'

export default {
  name: 'AppHeaderBank',
  data() {
    return {
      links: [
        {
          name: 'Страховые продукты',
          path: 'insurance-products'
        },
        {
          name: 'О нас',
          path: 'about-us'
        },
        {
          name: 'Партнеры',
          path: 'partners'
        },
        {
          name: 'Контакты',
          path: 'contacts'
        }
      ],
      burgerActive: false,
      windowWidth: document.documentElement.clientWidth
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 820
    }
  },
  watch: {
    burgerActive(oldValue) {
      if (oldValue) {
        disableScroll()
      } else {
        enablesScroll()
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.getDimensions)
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions)
  },
  methods: {
    getDimensions() {
      this.windowWidth = document.documentElement.clientWidth
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/colors';
@use '@/assets/styles/mixins';

.header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: colors.$textDark;
  z-index: 2;
  border-radius: 0 0 30px 30px;
  border-top: none;
  padding: 30px;
  margin: 0;
  position: absolute;
  width: calc(100% - 60px);

  @media (min-width: 820px) {
    width: auto;
    position: relative;
    border: 1px solid #A5DCFE;
    margin: 0 20px 24px;
    justify-content: flex-start;
  }

  @media (min-width: 1100px) {
    padding: 55px 103px 34px 116px;
    margin: 0 20px 24px;
  }

  &-logo {
    height: 48px;
  }

  &-burger {
    z-index: 2;
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 6px;
    flex: 0 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s ease;
    cursor: pointer;

    @media (min-width: 820px) {
      display: none;
    }

    &-line {
      transition: transform .3s ease,background .3s ease,opacity .3s ease,top .3s ease;
      width: 30px;
      height: 4px;
      border-radius: 10px;
      background: colors.$textAccent;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    }

    &-top {
      top: -14px;
    }

    &.active &-top {
      top: 0;
      transform: rotate(45deg);
    }

    &.active &-middle {
      opacity: 0;
    }

    &-bottom {
      top: 14px;
    }

    &.active &-bottom {
      top: 0;
      transform: rotate(-45deg);
    }
  }

  &-links {
    display: none;

    &.active {
      display: block;
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      right: 0;
      background-color: white;
      z-index: 0;
      padding-top: 160px;
      background-image: url("@/assets/image/guarantees-fon.png");
      background-repeat: no-repeat;
      background-position-y: 40vh;
    }

    @media (min-width: 820px) {
      display: block;
      width: 100%;
      margin-left: 50px;
    }

    @media (min-width: 1100px) {
      margin-left: 135px;
    }

    &-wrapper {
      padding: 0;
      margin: 0;
      list-style-type: none;
      display: flex;
      justify-content: space-between;
    }

    &.active &-wrapper {
      flex-direction: column;
    }

    &__route {
      cursor: pointer;
      @include mixins.setFontParams(400, 18px);

      &:not(:first-child) {
        margin-left: 28px;
      }
    }

    &.active &__route {
      margin: 0;
      color: colors.$textDark;
      @include mixins.setFontParams(500, 26px);
      text-align: right;
      display: inline-block;
      padding-right: 30px;

      &:not(:last-child) {
        margin-bottom: 52px;
      }
    }
  }
}
</style>
