
export default class Cache {
  /**
   * @param type localStorage/sessionStorage
   */
  constructor(type = "localStorage") {
    if(type){
      this._storage = window[type]
    }

    this._prefixKey = null
  }

  /**
   * 设置key的前缀
   * @param prefixKey
   */
  setPrefixKey(prefixKey){
    this._prefixKey = prefixKey
  }

  /**
   *
   * @param key
   * @param value 需要存储的内容。支持基本类型、及能够通过JSON.stringify序列化的对象。
   * @param expire 超过expire(时间戳/ms)清除缓存,默认永久
   */
  set(key, value, expire) {
    this._storage.setItem(this._getKey(key), JSON.stringify(this._getSetValue(value, expire)));
  }

  /**
   *
   * @param key
   * @param defaultValue 默认值，如果没有缓存，返回此值
   * @returns {null|any}
   */
  get(key, defaultValue = null) {
    let value = this._storage.getItem(this._getKey(key))

    if (value === undefined || value === null){
      return defaultValue
    }

    try {
      value = JSON.parse(value);
    } catch (e) {
      console.log(e)
      // 不是json对象格式
      return value
    }

    return this._getExpireValue(key,value,defaultValue);
  }

  /**
   * 删除键值为key的缓存
   * @param key
   */
  delete(key) {
    this._storage.removeItem(this._getKey(key));
  }

  /**
   * 清空存储中的所有键名
   */
  clear() {
    this._storage.clear();
  }

  _getKey(key){
    return this._prefixKey === null ? key : this._prefixKey + key
  }

  /**
   * 如果设置了过期时间,用object格式保存
   * @param value
   * @param expire
   */
  _getSetValue(value, expire){
    if (expire && expire > 0) {
      value = {
        data: value,
        __expire__: expire,
      };
    }
    return value
  }

  /**
   * 根据过期时间获取value
   * @param value
   */
  _getExpireValue(key,value,defaultValue){
    if(!value.__expire__){
      // 没有设置过期时间
      return value
    }

    // 过期了
    if (value.__expire__ <= new Date().getTime()) {
      this.delete(key)
      return defaultValue;
    }

    return value.data;
  }
}



