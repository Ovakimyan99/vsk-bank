<template>
  <input
    v-bind="$attrs"
    v-if="format === $options.formTypes.input"
    :value="modelValue"
    :placeholder="setPlaceholder"
    @input="$emit('update:modelValue', $event.target.value)"
    class="custom-input"
    :class="{error}"
    type="text"
  >
  <div
    v-else-if="format === $options.formTypes.choice"
    class="custom-input-choice-title"
  >
    <div
      @click="showSelect = !showSelect"
      class="custom-input"
      :class="{error}"
      :style="{
        'z-index': showSelect ? 7 : 1
      }"
    >
      {{ setPlaceholder }}
      <indicator-arrow class="custom-input__arrow" :rotate="showSelect" />
    </div>
    <div
      class="custom-input-select__dropdown custom-input"
      v-show="showSelect"
    >
      <template v-for="(value, idx) of valuesList" :key="value">
        <div
          class="custom-input-select__group">
          <input
            class="custom-input-select__input"
            type="radio"
            :id="placeholder + idx"
            :value="value"
            v-model="choiceValue"
            @change="selectListItem(value)"
          />
          <label
            class="custom-input-select__label"
            :for="placeholder + idx"
          >
            {{ value }}
          </label>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { FORM_TYPE_INPUT, FORM_TYPE_CHOICE } from '@/consts'
import IndicatorArrow from '@/components/IndicatorArrow'

export default {
  name: 'AppCustomInput',
  formTypes: {
    input: FORM_TYPE_INPUT,
    choice: FORM_TYPE_CHOICE
  },
  components: {
    IndicatorArrow
  },
  props: {
    error: {
      type: Boolean,
      default: false
    },
    modelValue: [String, Array],
    format: {
      validator(value) {
        return [FORM_TYPE_INPUT, FORM_TYPE_CHOICE].includes(value)
      }
    },
    required: {
      type: Boolean,
      default: false
    },
    value: [String, Object],
    placeholder: {
      type: String,
      default: ''
    },
    valuesList: {
      type: Array,
      default: () => ([])
    }
  },
  emits: {
    'update:modelValue': v => typeof v === 'string'
  },
  data() {
    return {
      choiceValue: null,
      showSelect: false
    }
  },
  computed: {
    setPlaceholder() {
      return `${this.placeholder}${this.required && this.format === this.$options.formTypes.input ? '*' : ''}`
    }
  },
  methods: {
    selectListItem(value) {
      this.showSelect = !this.showSelect
      this.$emit('update:modelValue', value)
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/_mixins.scss';
@use '@/assets/styles/colors';

.custom-input {
  position: relative;
  border: 2px solid #94C7E9;
  border-radius: 30px;
  background-color: colors.$textWhite;
  padding: 21px 27px;
  width: calc(100% - 54px);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-choice-title {
    position: relative;
  }

  &__arrow {
    width: 8px;
    height: 8px;

    &:after {
      border-color: colors.$textAccentDark;
    }
  }

  &.error {
    border: 2px solid red;
  }

  &::-webkit-input-placeholder,
  &::-moz-placeholder,
  &:-moz-placeholder,
  &:-ms-input-placeholder  {color:#C5C5C5;}

  color: colors.$textDark;

  &-select {
    &__group {
      @include mixins.setFontParams(400, 18px);

      &:not(:last-child) {
        margin-bottom: 13px;
      }
    }

    &__dropdown {
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      width: calc(100% - 53px);
      top: 2px;
      left: -1px;
      padding-top: 90px;
      z-index: 6;
    }

    &__input {
      display: none;
    }

    &__input:checked + &__label:before {
      display: block;
    }

    &__label {
      margin-left: 19px;
      position: relative;
      display: inline-block;

      &:after, &:before {
        content: '';
        position: absolute;
        left: -14px;
        top: 10px;
        transform: translate(-100%, -50%);
        border-radius: 50%;
      }

      &:after {
        width: 21px;
        height: 21px;
        background: colors.$textAccent;
      }

      &:before {
        display: none;
        width: 9px;
        height: 9px;
        background: colors.$textWhite;
        z-index: 1;
        transform: translate(-160%, -50%);
      }
    }
  }
}
</style>
