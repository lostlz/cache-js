# CacheJs

## 概述

一款简易版本地储存插件

- 支持基本类型、及能够通过JSON.stringify序列化的对象
- 支持设置默认值和过期时间
- 在web环境支持localStorage/sessionStorage
- 兼容微信小程序

## 安装

```shell
npm i @lostlz/cache-js -S
```

## 示例

```js
import CacheJs from "@lostlz/cache-js";

// 写入一个对象缓存
CacheJs.set("obj",{a:1,b:2,c:3});
// 写入一个对象并缓存一分钟
CacheJs.set("obj",{a:1,b:2,c:3},new Date().getTime()+60*1000);
// 获取一个缓存,如果缓存不存在，或者超时返回{d:4}
CacheJs.get("obj",{d:4});


```



## 方法

| 方法                  | 说明                                     | 参数                                                         |
| :-------------------- | ---------------------------------------- | ------------------------------------------------------------ |
| set(key,value,expire) | 添加一个缓存,如果存在会覆盖              | key：关键字<br />value：需要存储的内容。支持基本类型、及能够通过JSON.stringify序列化的对象。 <br />expire：超过expire(时间戳/ms)清除缓存,默认永久 |
| get(key,defaultValue) | 获取一个缓存，如果缓存不存在，返回默认值 | key：关键字<br />defaultValue：默认值，如果缓存不存在，返回此值 |
| delete(key)           | 删除一个缓存                             | key：关键字                                                  |
| clear()               | 清空全部缓存                             |                                                              |

