<template>
  <li
    class="item"
    :class="{
      active: exceptionIdx === idx,
      'item--border': !(idx === listLength - 1 || idx === listLength - 2)
    }"
    @click="setActiveItem"
  >
    <span v-html="text"></span>
    <b
      :class="{ active: exceptionIdx === idx}"
      class="item-num"
    >{{ idx + 1 }}</b>
  </li>
</template>

<script>
export default {
  name: 'CheckList',
  emits: {
    'update:modelValue': v => typeof v === 'number'
  },
  props: {
    exceptionIdx: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: ''
    },
    idx: {
      type: Number,
      required: true
    },
    listLength: {
      type: Number,
      required: true
    }
  },
  methods: {
    setActiveItem() {
      this.$emit('update:modelValue', this.idx)
    }
  }
}
</script>

<style lang="scss" scoped>
@use "@/assets/styles/_mixins.scss";
@use "@/assets/styles/_colors.scss";

.item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 17px 14px 15px 20px;
  flex-basis: calc(50% - 34px);
  color: colors.$textDark;
  box-shadow: 0 -3px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &.active {
    color: colors.$textWhite;
    background-color: colors.$accentDark;
    box-shadow: -6px 0 24px rgba(0, 111, 186, 0.3);
  }

  &--border {
    border-bottom: 2px solid #E5E5E5;
  }

  &-num {
  color: colors.$textGray;
  @include mixins.setFontParams(800, 70px);
  line-height: 1;

    &.active {
      color: colors.$textLighten;
    }
  }
}
</style>
