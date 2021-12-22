import Cache from "./Cache.js";


export default class MapCache extends Cache{

  constructor() {
    super(null);
    this._map = new Map()
  }

  set(key, value, expire) {
    this._map.set(this._getKey(key), this._getSetValue(value, expire));
  }

  get(key, defaultValue = null) {
    let value = this._map.get(this._getKey(key))
    if (value === undefined || value === null){
      return defaultValue
    }
    return this._getExpireValue(key,value,defaultValue);
  }

  delete(key) {
    this._map.delete(this._getKey(key));
  }

  clear() {
    this._map.clear();
  }

}