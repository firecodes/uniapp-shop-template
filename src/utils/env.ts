import pkg from '../../package.json'
import type { GlobEnvConfig } from '#/config'

import { warn } from '@/utils/log'



export function getCommonStoragePrefix() {
  const { VITE_GLOB_APP_SHORT_NAME } = getAppEnvConfig()
  return `${VITE_GLOB_APP_SHORT_NAME}__${getEnv()}`.toUpperCase()
}

// Generate cache key according to version
export function getStorageShortName() {
  return `${getCommonStoragePrefix()}${`__${pkg.version}`}__`.toUpperCase()
}

export function getAppEnvConfig() {
  // const ENV_NAME = 'vantMobile'

  // Get the global configuration (the configuration will be extracted independently when packaging)
  // const ENV = (import.meta.env.DEV
  //   ? (import.meta.env as unknown as GlobEnvConfig)
  //   : window[ENV_NAME as any]) as unknown as GlobEnvConfig
  const ENV = import.meta.env || {}
  // const S = {"VITE_USE_MOCK":"true","VITE_PUBLIC_PATH":"/","VITE_DROP_CONSOLE":"true","VITE_GLOB_API_URL":"","VITE_GLOB_UPLOAD_URL":"","VITE_GLOB_IMG_URL":"","VITE_GLOB_API_URL_PREFIX":"/api","VITE_BUILD_COMPRESS":"none","VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE":"false","BASE_URL":"./","MODE":"production","DEV":false,"PROD":true,"SSR":false} || {};
  // console.log("import.meta.env:", ENV)
  const {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_APP_TITLE_CN,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_UPLOAD_URL,
    VITE_GLOB_PROD_MOCK,
    VITE_GLOB_IMG_URL,
  } = ENV

  if (!/^[a-zA-Z\_]*$/.test(VITE_GLOB_APP_SHORT_NAME)) {
    warn(
      `VITE_GLOB_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running.`,
    )
  }
  let config = {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_APP_TITLE_CN,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_UPLOAD_URL,
    VITE_GLOB_PROD_MOCK,
    VITE_GLOB_IMG_URL,
  }
  console.log("getAppEnvConfig : config", config)
  return config
}

/**
 * @description: Development model
 */
export const devMode = 'development'

/**
 * @description: Production mode
 */
export const prodMode = 'production'

/**
 * @description: Get environment variables
 * @returns:
 * @example:
 */
export function getEnv(): string {
  return import.meta.env.MODE
}

/**
 * @description: Is it a development mode
 * @returns:
 * @example:
 */
export function isDevMode(): boolean {
  return import.meta.env.DEV
}

/**
 * @description: Is it a production mode
 * @returns:
 * @example:
 */
export function isProdMode(): boolean {
  return import.meta.env.PROD
}
