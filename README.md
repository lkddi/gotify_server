<p align="center">
    <a href="https://github.com/gotify/logo">
        <img height="275px" src="https://raw.githubusercontent.com/gotify/logo/master/gotify-logo.png" />
    </a>
</p>

<h1 align="center">gotify/server（服务端）</h1>

<p align="center">
    <a href="https://github.com/gotify/server/actions/workflows/build.yml">
        <img alt="Build Status" src="https://github.com/gotify/server/actions/workflows/build.yml/badge.svg">
    </a>
    <a href="https://codecov.io/gh/gotify/server">
        <img alt="codecov" src="https://codecov.io/gh/gotify/server/branch/master/graph/badge.svg">
    </a>
    <a href="https://goreportcard.com/report/github.com/gotify/server">
        <img alt="Go Report Card" src="https://goreportcard.com/badge/github.com/gotify/server">
    </a>
    <a href="https://matrix.to/#/#gotify:matrix.org">
        <img alt="Matrix" src="https://img.shields.io/matrix/gotify:matrix.org.svg">
    </a>
    <a href="https://hub.docker.com/r/gotify/server">
        <img alt="Docker Pulls" src="https://img.shields.io/docker/pulls/gotify/server.svg">
    </a>
    <a href="https://github.com/gotify/server/releases/latest">
        <img alt="latest release" src="https://img.shields.io/github/release/gotify/server.svg">
    </a>
</p>

## 简介
我们希望拥有一个简单的消息推送服务端：通过 REST 发送消息、通过 WebSocket 实时接收消息；能够自托管；并且有活跃维护的开源实现。基于这些目标，我们构建了 Gotify Server。

## 功能特性

<img alt="Gotify UI screenshot" src="ui.png" align="right" width="500px"/>

* 通过 REST API 发送消息
* 通过 WebSocket 实时接收消息
* 管理用户、客户端与应用
* [插件机制](https://gotify.net/docs/plugin)
* Web 管理界面 -> [./ui](ui)
* 命令行发送工具 -> [gotify/cli](https://github.com/gotify/cli)
* Android 客户端 -> [gotify/android](https://github.com/gotify/android)

[<img src="https://play.google.com/intl/en_gb/badges/images/generic/en_badge_web_generic.png" alt="Get it on Google Play" width="150" />][playstore]
[<img src="https://f-droid.org/badge/get-it-on.png" alt="Get it on F-Droid" width="150"/>][fdroid]

<sub>(Google Play and the Google Play logo are trademarks of Google LLC.)</sub>

---

**[文档](https://gotify.net/docs)**

[安装](https://gotify.net/docs/install) ᛫
[配置](https://gotify.net/docs/config) ᛫
[REST API](https://gotify.net/api-docs) ᛫
[开发环境搭建](https://gotify.net/docs/dev-setup)

## 参与贡献

欢迎各种形式的贡献，包括但不限于：问题反馈、功能建议、文档改进、界面优化等。请参阅 [CONTRIBUTING.md](CONTRIBUTING.md) 获取贡献指南。

## 版本管理
本项目遵循 [SemVer](http://semver.org/) 语义化版本。所有版本请查看
[仓库标签](https://github.com/gotify/server/tags)。

## 许可证
本项目基于 MIT 许可证发布，详情见 [LICENSE](LICENSE)。

 [playstore]: https://play.google.com/store/apps/details?id=com.github.gotify
 [fdroid]: https://f-droid.org/de/packages/com.github.gotify/


[![build](https://github.com/lkddi/gotify_server/actions/workflows/build.yml/badge.svg?branch=master&event=push)](https://github.com/lkddi/gotify_server/actions/workflows/build.yml)