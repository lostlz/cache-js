import Cache from "./Cache.js";


export default class WxCache extends Cache{

  constructor() {
    super(null);
    this._map = new Map()
  }

  set(key, value, expire) {
    try {
      wx.setStorageSync(key, this._getSetValue(key, value, expire))
    } catch (e) {
      // Do something when catch error
    }
  }

  get(key, defaultValue = null) {
    try {
      const value = wx.getStorageInfoSync()
      if (value === undefined || value === null){
        return defaultValue
      }
      return this._getExpireValue(key,value,defaultValue);
    } catch (e) {
      // Do something when catch error
      return null
    }
  }

  delete(key) {
    try {
      wx.removeStorageSync('key')
    } catch (e) {
      // Do something when catch error
    }
  }

  clear() {
    try {
      wx.clearStorage()
    } catch (e) {
      // Do something when catch error
    }
  }

}