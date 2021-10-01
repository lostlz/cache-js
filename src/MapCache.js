import Cache from "./Cache.js";


export default class MapCache extends Cache{

  constructor() {
    super(null);
    this._map = new Map()
  }

  set(key, value, expire) {
    this._map.set(key, this._getSetValue(key, value, expire));
  }

  get(key, defaultValue = null) {
    let value = this._map.get(key)
    if (value === undefined || value === null){
      return defaultValue
    }
    return this._getExpireValue(key,value,defaultValue);
  }

  delete(key) {
    this._map.delete(key);
  }

  clear() {
    this._map.clear();
  }

}