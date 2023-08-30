/**
 * 后端域名
 */
const DEV_ENV = '/api' //dev 环境
const TEST_ENV = 'https://test.com' //test环境
const PRE_ENV = 'https://pre.com' //pre 环境
const PROD_ENV = 'https://prod.com' //生产环境

/**
 * 前端跳转域名
 * const DEV_URL = 'https://dev.com' //dev 环境
 * const TEST_URL = 'https://test.com' //test环境
 * const PRE_URL = 'https://pre.com' //pre 环境
 * const PROD_URL = 'https://prod.com' //生产环境
 */

/** 后端apiUrl */
export const apiUrl = {
  dev: DEV_ENV,
  alpha: TEST_ENV,
  pre: PRE_ENV,
  prod: PROD_ENV,
}[process.env.REACT_APP_MODE || 'dev']
