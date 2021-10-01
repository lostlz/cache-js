# CacheJs

简易版缓存js，兼容微信小程序和web，支持基本类型、及能够通过JSON.stringify序列化的对象，支持设置默认值和过期时间。

## Api

| 方法                  | 说明         | 参数                                                         |
| :-------------------- | ------------ | ------------------------------------------------------------ |
| set(key,value,expire) | 添加一个缓存 | key：关键字<br />value：需要存储的内容。支持基本类型、及能够通过JSON.stringify序列化的对象。 <br />expire：超过expire(时间戳/ms)清除缓存,默认永久 |
| get(key,defaultValue) | 获取一个缓存 | key：关键字<br />defaultValue：默认值，如果缓存不存在，返回此值 |
| delete(key)           | 删除一个缓存 | key：关键字                                                  |
| clear()               | 清空全部缓存 |                                                              |

