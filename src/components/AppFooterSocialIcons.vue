<template>
  <ul class="social-links">
    <li
      v-for="{ src, img } of socialLinks"
      :key="img"
      class="social-links__item"
    >
      <a class="social-links__item-link" :href="src">
        <img
          class="footer-coords__social-img"
          :src="require(`@/assets/image/socials/${img}`)"
          :alt="getSocialName(img)"
          :title="getSocialName(img)"
        >
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppFooterIcons',
  props: {
    socialLinks: {
      type: Array,
      required: true
    }
  },
  methods: {
    getSocialName(str) {
      return str.split('.')[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (min-width: 876px) {
    justify-content: flex-start;
  }

  &__item {
    max-width: 40px;

    &:not(:last-child) {
      margin-right: 16px;
    }
  }
}
</style>
