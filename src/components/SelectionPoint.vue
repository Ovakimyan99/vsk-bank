<template>
  <div class="paragraph">
    <img class="paragraph-icon" src="@/assets/image/icons/message.svg">
    <p class="paragraph-text" v-html="text" />
  </div>
</template>

<script>
export default {
  name: 'SelectionPoint',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/mixins';
@use '@/assets/styles/colors';

.paragraph {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  &-icon {
    height: 52px;
    margin-right: 18px;
  }

  &-text {
    @include mixins.setFontParams(500, 30px);
    color: colors.$textDark;
    margin: 0 0 28px;
  }
}
</style>
