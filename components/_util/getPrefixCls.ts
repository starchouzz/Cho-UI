const prefixCls = 'cho'

export function getPrefixCls (suffixCls: string): string {
  return suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls
}
