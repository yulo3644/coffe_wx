
# 基于Vue3.0+TypeScript物语咖啡店API接口说明

## 关于POST请求参数问题
```
参数格式为: 参数1=值1&参数2=值2&....
```

## 关于上传头像和上传背景问题
```
需要将图片转换为base64, 并且去除base64的标记
例如: data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD..........
去除base64标记后得到结果: /9j/4AAQSkZJRgABAQEASABIAAD..........
```

```txt
邮箱正则：/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
```

```txt
登录怎么实现的？
登录后怎么存储数据的？（如何保持登录状态）

前后端分离， 使用token验证登录

前端后端混合，服务器生成一个session(会话), 服务器返回一个sessionId给前端，前端使用cookie将sessionId保存，后面每次访问有关于用户信息的页面，都必须携带sessionId到后台验证，如果验证通过，则允许访问，否则直接拦截

token是一个加密字符串
前端使用一个正确的账号和密码跟服务器换取一个合法token，服务器将token返回给前端，前端将token保存在cookie或者本地存储，后面每次访问有关于用户信息的页面，都必须携带token到后台验证，如果验证通过，则允许访问，否则直接拦截
```



# appkey 
```txt
  U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=
```

```txt

  注册接口
  请求地址：http://www.kangliuyong.com:10002/register
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    nickName: 昵称,
    password: 密码,
    phone: 手机号
  }

```

```txt

  登录接口
  请求地址：http://www.kangliuyong.com:10002/login
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    password: 密码,
    phone: 手机号
  }


  返回数据含有token
    token: 一个加密字符串
    token一般用于身份验证(登录验证)

    前端使用一个正确的账号和正确密码，向后台服务器换取一个合法token, 然后服务器将token返回到前端，前端将token保存在cookie、sessionStorage、localStorage中，然后如果访问有关于用户个人信息的页面时，必须携带token到后台服务器验证，后台服务器验证通过，则放行，否则，则拦截操作
```

```txt
  搜索商品接口
  请求地址：http://www.kangliuyong.com:10002/search
  请求类型： GET
  请求参数： {
    appkey: 你的appkey,
    name: 商品关键字
  }
```

```txt

  banner接口
  请求地址：http://www.kangliuyong.com:10002/banner
  请求类型： GET
  请求参数： {
    appkey: 你的appkey
  }

```

```txt

  商品类型接口
  请求地址：http://www.kangliuyong.com:10002/type
  请求类型： GET
  请求参数： {
    appkey: 你的appkey
  }

```

```txt

  根据商品类型获取商品接口
  请求地址：http://www.kangliuyong.com:10002/typeProducts
  请求类型： GET
  请求参数： {
    appkey: 你的appkey,
    key: '商品类型键名',
    value: '商品类型值'
  }

  例如查看最新推荐商品(热卖推荐)
    {
      appkey: 你的appkey,
      key: 'isHot',
      value: 1
    },

  例如查看咖啡类型商品
    {
      appkey: 你的appkey,
      key: 'type',
      value: 'coffee'
    }
```
```txt
  查看商品详情接口
  请求地址：http://www.kangliuyong.com:10002/productDetail
  请求类型： GET
  请求参数： {
    appkey: 你的appkey,
    pid: 商品pid
  }
```

```txt
  收藏商品接口
  请求地址：http://www.kangliuyong.com:10002/like
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    pid: 商品pid,
    tokenString: token字符串
  }
```

```txt
  取消(删除)收藏商品接口
  请求地址：http://www.kangliuyong.com:10002/notlike
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    pid: 商品pid,
    tokenString: token字符串
  }
```

```txt
  查询收藏商品接口
  请求地址：http://www.kangliuyong.com:10002/findlike
  请求类型： GET
  请求参数： {
    appkey: 你的appkey,
    pid: 商品pid,
    tokenString: token字符串
  }
```

```txt
  查询用户所有收藏商品接口
  请求地址：http://www.kangliuyong.com:10002/findAllLike
  请求类型： GET
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串
  }
```

```txt
  添加购物车商品接口
  请求地址：http://www.kangliuyong.com:10002/addShopcart
  请求类型： POST
  请求参数： {
    pid: 商品pid,
    count: 商品数量,
    rule: 商品规格,
    appkey: 你的appkey,
    tokenString: token字符串
  }

  其中商品rule格式为: 无糖/默认奶油,

  返回值的
    {
      msg: '',
      code: '',
      status: '',
      sid: ''
    }

  其中status = 0, 表示修改数量
      status = 1, 添加一条新的数据

  sid: 购物袋的唯一标识
```

```txt
  查询购物车商品总数量接口
  请求地址：http://www.kangliuyong.com:10002/shopcartCount
  请求类型： GET
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串
  }

```

```txt
  查询用户所有购物车条数接口
  请求地址：http://www.kangliuyong.com:10002/findAllShopcart
  请求类型： GET
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串
  }

```

```txt
  修改购物车商品数量接口
  请求地址：http://www.kangliuyong.com:10002/modifyShopcartCount
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串,
    sid: 购物车唯一标识,
    count: 商品数量
  }

```

```txt

  删除 一个或者多个 购物车商品接口 该接口为：逻辑删除(假删除，数据仍在数据库中，但不能查询，以便后续客服手动恢复)
  请求地址：http://www.kangliuyong.com:10002/removeShopcart
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串,
    sids: sid购物车唯一标识集合字符串
  }

  其中 sids 值为 JSON.stringify([sid1, sid2, sid3])

```

```txt

  删除 一个或者多个 购物车商品接口 该接口为：物理删除(真删除，数据不在数据库中)
  请求地址：http://www.kangliuyong.com:10002/deleteShopcart
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串,
    sids: sid购物车唯一标识集合字符串
  }

  其中 sids 值为 JSON.stringify([sid1, sid2, sid3])

```

```txt
  获取购物车商品条目 (不是商品总数量)
  请求地址：http://www.kangliuyong.com:10002/shopcartRows
  请求类型： GET
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串
  }

```

```txt
  新增地址接口
  请求地址：http://www.kangliuyong.com:10002/addAddress
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串,
    name: 姓名,
    tel: 电话,
    province: 省份,
    city: 市,
    county: 区县,
    addressDetail: 详细地址,
    areaCode: 地区编号,
    postalCode: 邮政编码,
    isDefault: 默认地址
  }

  其中 isDefault 的值只能为 0 或者 1, ==> 0: 非默认地址, 1: 默认地址

```

```txt
  删除地址接口
  请求地址：http://www.kangliuyong.com:10002/deleteAddress
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串,
    aid: 地址唯一标识
  }

```

```txt
  查询地址接口
  请求地址：http://www.kangliuyong.com:10002/findAddress
  请求类型： GET
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串
  }

```

```txt
  编辑地址接口
  请求地址：http://www.kangliuyong.com:10002/editAddress
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串
    aid: 地址的唯一标识
    name: 姓名,
    tel: 电话,
    province: 省份,
    city: 市,
    county: 区县,
    addressDetail: 详细地址,
    areaCode: 地区编号,
    postalCode: 邮政编码,
    isDefault: 默认地址
  }

  其中 isDefault 的值只能为 0 或者 1, ==> 0: 非默认地址, 1: 默认地址

```

```txt
  根据地址aid查询地址接口
  请求地址：http://www.kangliuyong.com:10002/findAddressByAid
  请求类型： GET
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串,
    aid: 地址的唯一标识
  }

```
```txt
  提交订单页面查询需要购买商品接口
  请求地址：http://www.kangliuyong.com:10002/commitShopcart
  请求类型： GET
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串,
    sids: 购物车唯一标识集合
  }
  其中 sids 值为 JSON.stringify([sid1, sid2, sid3])
```

```txt
  立即结算接口
  请求地址：http://www.kangliuyong.com:10002/pay
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串,
    sids: 购物车唯一标识集合,
    phone: 手机号,
    address: 收货地址,
    receiver: 收货人
  }

  其中 sids 值为 JSON.stringify([sid1, sid2, sid3])
```

```txt
  查询订单接口
  请求地址：http://www.kangliuyong.com:10002/findOrder
  请求类型： GET
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串,
    status: 订单状态
  }


  其中 status 值为 0, 1, 2 ==> 0: 全部，1: 进行中，2: 已完成
```

```txt
  确认收货接口
  请求地址：http://www.kangliuyong.com:10002/receive
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串,
    oid: 订单oid
  }

```

```txt
  删除订单接口
  请求地址：http://www.kangliuyong.com:10002/removeOrder
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串,
    oid: 订单oid
  }

```
```txt
  我的接口
  请求地址：http://www.kangliuyong.com:10002/findMy
  请求类型： GET
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串
  }

```

```txt
  个人资料接口
  请求地址：http://www.kangliuyong.com:10002/findAccountInfo
  请求类型： GET
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串
  }

```

```txt
  修改昵称接口
  请求地址：http://www.kangliuyong.com:10002/updateNickName
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串,
    nickName: 你的昵称
  }

```

```txt
  修改简介接口
  请求地址：http://www.kangliuyong.com:10002/updateDesc
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串,
    desc: 简介
  }

```

```txt
  修改密码接口
  请求地址：http://www.kangliuyong.com:10002/updatePassword
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串,
    password: 新密码
    oldPassword: 旧密码
  }

```

```txt
  退出登录接口
  请求地址：http://www.kangliuyong.com:10002/logout
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串
  }

```

```txt
  注销账号接口
  请求地址：http://www.kangliuyong.com:10002/destroyAccount
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串
  }

```

```txt
  上传头像接口
  请求地址：http://www.kangliuyong.com:10002/updateAvatar
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串,
    imgType: 图片类型jpg,jpeg,png.....
    serverBase64Img: 图片base64码
  }
  
```

```txt
  上传用户背景接口
  请求地址：http://www.kangliuyong.com:10002/updateUserBg
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    tokenString: token字符串,
    imgType: 图片类型jpg,jpeg,png.....
    serverBase64Img: 图片base64码
  }

```

```txt
  获取邮箱验证码接口
  请求地址：http://www.kangliuyong.com:10002/emailValidCode
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    email: 接收验证码邮箱
  }

```

```txt
  验证码验证接口
  请求地址：http://www.kangliuyong.com:10002/checkValidCode
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    validCode: 你的验证码
  }

```

```txt
  找回密码接口
  请求地址：http://www.kangliuyong.com:10002/retrievePassword
  请求类型： POST
  请求参数： {
    appkey: 你的appkey,
    phone: 注册时的手机号,
    password: 新密码
  }

```