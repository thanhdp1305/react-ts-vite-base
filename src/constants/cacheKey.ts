const SYSTEM_NAME = 'REAC_TS_BASE'

class CacheKey {
  static TOKEN = `${SYSTEM_NAME}_token`
  static REFRESH_TOKEN = `${SYSTEM_NAME}_refreshToken`
  static USER_INFO = `${SYSTEM_NAME}_userInfo`
}

export default CacheKey
