import CacheJs from "../src/index.js";
import MapCache from "../src/MapCache.js";

// const cache = CacheJs
const cache = CacheJs.session
// const cache = new MapCache()

test()

function textFn(key,value,type,expire=0){
  cache.set(key, value,expire);
  let getValue = cache.get(key)
  console.log(key,getValue,getValue === value,typeof getValue === type)
}

function test() {
  let str = "abc";
  let num = 123;
  let boofalse = false;
  let booTrue = true;
  let obj = {
    str,
    num,
    boofalse,
    booTrue,
  };
  let arr = [str, num, boofalse, booTrue, obj];


  console.log("========string===========")
  textFn("str","abc","string")
  textFn("str-expire-yes","str-expire-yes","object",new Date().getTime()-1000)
  textFn("str-expire-no","str-expire-no","string",new Date().getTime()+1000)


  console.log("========number===========")
  textFn("num",123,"number")

  console.log("========boolean===========")
  textFn("boofalse",false,"boolean")
  textFn("booTrue",true,"boolean")

  console.log("========object===========")
  textFn("obj",obj,"object")

  console.log("========array===========")
  textFn("arr",arr,"object")
}