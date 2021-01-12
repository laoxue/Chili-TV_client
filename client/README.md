### 唤醒百度云

<div align=center><img src="http://aladjs.cn/demo.gif" height="500"/></div>

![Build Status](https://img.shields.io/badge/build-passing-green.svg)
![Version 1.0.0](https://img.shields.io/badge/version-2.0.0-yellow.svg)
[![License](https://img.shields.io/badge/license-GPL3.0-blue.svg)]()

这个项目是无聊的时候做的，主要客户端为移动端，利用唤醒URL schema原理, 可以将自己喜欢的资源通过百度云分享上传到平台 利用平台的共享性 或许自己的所需资源，相当于一个百度云盘的集合，整体项目分三部分 采用前后端分离处理。

- [移动客户端页面 Chili-TV_client](https://github.com/laoxue/Chili-TV_client)  (基于Vue全家桶)
- [服务端接口API Chili-TV_api](https://github.com/laoxue/Chili-TV_api) (基于Node Hapi框架 + Mongodb + Redis)
- [PC后台管理页面 Chili-TV_web](https://github.com/laoxue/Chili-TV_client) (基于React + React-router + Ant-design)


Vue 版本线上预览地址：[http://fantuan.wooyun.icu](http://47.99.134.126:5000)，账号可自行注册，建议使用手机模式打开(最近没时间维护可能会部分出错)。

# 目标功能
- [x] 登录功能 -- 完成
- [x] 添加资源 -- 完成
- [x] 实时搜索 -- 完成
- [x] Excel批量导入 -- 完成
- [x] 注册账号 -- 完成
- [x] 删除资源 -- 完成
- [x] 上传更换头像 -- 完成
- [x] 文章阅读功能 -- 完成
- [x] 帐户信息 -- 完成
- [x] 搜索影片资源，爬取豆瓣内容后接口化返给页面
- [x] 资源简介，评论 -- 完成
- [x] 单个资源详情页面 -- 完成
- [x] excel 批量导入资源
- [x] 自动打开百度云 -- 完成
- [ ] 在线群组聊天 -- 待优化已关闭

## 开发及部署文档


## 联系作者

> 大家有任何问题或者建议都可以在 [issues](https://github.com/laoxue/Chili-TV_client/issues) 中反馈给我，我会慢慢完善这个项目。

- 我的邮箱：762452134@qq.com
- 我的微信: zxqsychen2010

## 功能页面

### 注册 & 登录 & 资源推荐

<img src="http://aladjs.cn/chili_client_design.png" height="500"/><img src="http://aladjs.cn/br.png" height="500" width="50"/><img src="http://aladjs.cn/chili_client_login.png" height="500"/><img src="http://aladjs.cn/br.png" height="500" width="50"/><img src="http://aladjs.cn/index01.png" height="500"/>

###  资源集合分享 & 资源详情 & 资源评论

<img src="http://aladjs.cn/index02.png" height="500"/><img src="http://aladjs.cn/br.png" height="500" width="50"/><img src="http://aladjs.cn/film01.png" height="500"/><img src="http://aladjs.cn/br.png" height="500" width="50"/><img src="http://aladjs.cn/film02.png" height="500"/>

### 类型检索 & 导入资源方式 & 手动录入资源

    - 手动录入利用爬虫 爬取豆瓣资源 返回影片封面 简介以及名称 手动填写百度云分享链接后保存即可。

<img src="http://aladjs.cn/type.png" height="500"/><img src="http://aladjs.cn/br.png" height="500" width="50"/><img src="http://aladjs.cn/exporthole.png" height="500"/><img src="http://aladjs.cn/br.png" height="500" width="50"/><img src="http://aladjs.cn/chili_client_savebaidu.png" height="500"/>

### 通过Excel模板导入

    - 通过excel可 实现批量导入资源功能，便捷操作。

<img src="http://aladjs.cn/excel.png"/>

# 总结

1、其实页面很多地方还是需要优化整理的，工作时间较忙 业余时间搞的项目 图一方便，开发时本着功能至上先实现功能 后优化项目代码的想法开发的，所以代码抽时间会优化维护

2.本身其实还有很多好玩的功能框架已经勾勒出来了,但苦于时间问题 待后续慢慢实现。

3.这个项目本身作为自我技术迭代，也希望能成为很多人入门的选择。项目本身不难，我希望通过用自己的想法想这个项目有趣起来。

## 感谢

所有项目中使用到的模块开发者
