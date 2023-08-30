declare module '*.png'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.styl'

// eslint-disable-next-line no-unused-vars, no-redeclare
declare interface Window {
  android: {
    jsTest: Function
    jsParamTest: Function
  }
  handleAndroidTest: Function
  webkit: {
    messageHandlers: {
      __NFKNative__: {
        postMessage: Function
      }
    }
  }
}
