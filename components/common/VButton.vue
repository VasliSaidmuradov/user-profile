<template>
  <button
    :href="link"
    class="button"
    :style="{
      borderRadius: borderRadius,
      backgroundColor: backgroundColor,
      width: width,
    }"
  >
    <span class="button__text">
      <slot></slot>
    </span>
    <div v-if="icon" class="button__icon">
      <arrow-right v-if="iconType === 'arrow'" />
      <icon-reload v-if="iconType === 'reload'" />
      <cart v-if="iconType === 'cart'" />
      <login v-if="iconType === 'login'" />
    </div>
  </button>
</template>

<script>
import ArrowRight from '@/static/icons/arrow-right-white.svg'
import iconReload from '@/static/icons/reload.svg'
import cart from '@/static/icons/cart-white.svg'
import login from '@/static/icons/login.svg'

export default {
  components: {
    ArrowRight,
    iconReload,
    cart,
    login,
  },
  props: {
    link: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    borderRadius: {
      type: String,
      default: '10px',
    },
    backgroundColor: {
      type: String,
      default: 'var(--color-purple)',
    },
    icon: {
      type: Boolean,
      default: true,
    },
    iconType: {
      type: String,
      default: 'arrow',
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  // background-color: var(--color-purple);
  color: var(--color-base);
  width: fit-content;
  height: 48px;
  line-height: 48px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &__text {
    color: inherit;
    padding: 0 32px;
    margin: 0 auto;
    white-space: nowrap;
  }
  &__icon {
    width: 48px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid var(--color-base);
    svg {
      width: 24px;
      height: 24px;
      fill: var(--color-base);
    }
  }
}
</style>
