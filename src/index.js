import Cache from "./Cache.js";
import MapCache from "./MapCache.js";
import {isWxxcx, storageAvailable} from "./utils.js";
import WxCache from "./WxCache.js";


let CacheJs = null
if(isWxxcx){
  // 微信小程序环境
  CacheJs = new WxCache()
  CacheJs.session = new MapCache()
}else{
  CacheJs = storageAvailable("localStorage") ? new Cache("localStorage") : new MapCache()
  CacheJs.session = storageAvailable("sessionStorage") ? new Cache("sessionStorage") : new MapCache()
}

export {
  CacheJs
}



