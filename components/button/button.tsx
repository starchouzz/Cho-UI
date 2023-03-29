import { defineComponent, PropType, computed } from 'vue'
import './style'
import { getPrefixCls } from '../_util/getPrefixCls'

const buttonTypes = {
  disabled: {
    type: Boolean,
    default: false
  },
  htmlType: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button'
  }
}

const prefixCls = getPrefixCls('btn')

export default defineComponent({
  name: 'HButton',
  props: buttonTypes,
  setup (props, { slots, emit }) {
    const classes = computed(() => [
      prefixCls
    ])
    return () => (
      <button
        class={classes.value}
        type={props.htmlType}
        disabled={props.disabled}
      >
        {slots.default?.()}
      </button>)
  }
})
