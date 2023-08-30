import { CSSProperties } from 'react'

/**
 * 通用组件props
 */
export interface ComponentProps {
  /**
   * 样式表
   * @type {string}
   * @memberof
   */
  className?: any
  /**
   * 内联样式
   * @type {CSSProperties}
   * @memberof
   */
  style?: CSSProperties
}

/**
 * mode 的合法值
 */
export interface ImageMode {
  /** 内容拉伸填满整个content box, 不保证保持原有的比例 */
  fill: string
  /** 保持原有尺寸比例。长度和高度中短的那条边跟容器大小一致，长的那条等比缩放，可能会有留白 */
  contain: string
  /** 保持原有尺寸比例。宽度和高度中长的那条边跟容器大小一致，短的那条等比缩放。可能会有部分区域不可见 */
  cover: string
  /** 保持原有尺寸比例。同时保持替换内容原始尺寸大小 */
  none: string
  'scale-down': string
  '-moz-initial': string
  inherit: string
  initial: string
  revert: string
  'revert-layer': string
  unset: string
}

/**
 * 将行内样式转换成vw,TODO:如果修改UI稿的宽度，需要修改这里的750,按照设计图 1vw = 7.5px
 * @param px
 * @returns
 */
export const px2vw = (px: number): string => `${px / 7.5}vw`
