import { useRef, useState } from 'react'
/**
 * 双击hooks
 * @abstract
 */
export function useDoubleClick() {
  const [lastClickTime, setClickTime] = useState(0)
  /** 用来存储单击事件 */
  const clickTimeout = useRef() as any

  const clearClickTimeout = () => {
    if (clickTimeout) {
      clearTimeout(clickTimeout.current)
      clickTimeout.current = null
    }
  }

  return (click?: Function, doubleClick?: Function) =>
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const currentTime = e.timeStamp
      const gap = currentTime - lastClickTime
      if (gap > 0 && gap < 300) {
        clearClickTimeout()
        // eslint-disable-next-line no-unused-expressions
        doubleClick && doubleClick(e)
      } else {
        clearClickTimeout()
        clickTimeout.current = setTimeout(() => {
          // eslint-disable-next-line no-unused-expressions
          click && click(e)
        }, 200)
      }

      setClickTime(currentTime)
    }
}
