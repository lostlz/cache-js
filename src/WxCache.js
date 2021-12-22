import Cache from "./Cache.js";


export default class WxCache extends Cache{

  constructor() {
    super(null);
  }

  set(key, value, expire) {
    try {
      wx.setStorageSync(this._getKey(key), this._getSetValue(value, expire))
    } catch (e) {
      // Do something when catch error
    }
  }

  get(key, defaultValue = null) {
    try {
      const value = wx.getStorageSync(this._getKey(key))
      return value ? this._getExpireValue(key,value,defaultValue) : defaultValue
    } catch (e) {
      // Do something when catch error
      return null
    }
  }

  delete(key) {
    try {
      wx.removeStorageSync(this._getKey(key))
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