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
export default {
  name: 'AppHeader',
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
      return this.windowWidth <= 786
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
  color: #3F4042;
  z-index: 2;
  position: relative;

  @media (min-width: 786px) {
    justify-content: flex-start;
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

    @media (min-width: 786px) {
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

    @media (min-width: 786px) {
      display: block;
      margin-left: 50px;
    }

    @media (min-width: 1100px) {
      margin-left: 190px;
    }

    &-wrapper {
      padding: 0;
      margin: 0;
      list-style-type: none;
      display: flex;
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
