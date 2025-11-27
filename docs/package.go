// Package docs Gotify 接口文档。
//
// 这是 Gotify 的 REST 接口文档。
//
//	# 认证说明
//	Gotify 中有两种令牌类型：
//	__clientToken__：客户端令牌用于接收消息并管理资源，例如创建新令牌、删除消息（如 Android 应用应使用此令牌）。
//	__appToken__：应用令牌用于发送消息（如 Shell 脚本应使用此令牌）。
//
//	令牌可通过以下方式传递：请求头 `X-Gotify-Key`，或查询参数 `token`；也可通过请求头 `Authorization` 携带 `Bearer <token>`。
//	此外也支持 Basic 认证，但仅建议用于创建客户端令牌。
//
//	\---
//
//	发现问题或有疑问？请在 GitHub 提交 Issue：[在 GitHub 创建 Issue](https://github.com/gotify/server/issues)
//
//	    Schemes: http, https
//	    Host: localhost
//	    Version: 2.0.2
//	    License: MIT https://github.com/gotify/server/blob/master/LICENSE
//
//	    Consumes:
//	    - application/json
//
//	    Produces:
//	    - application/json
//
//	    SecurityDefinitions:
//	       appTokenQuery:
//	          type: apiKey
//	          name: token
//	          in: query
//	       clientTokenQuery:
//	          type: apiKey
//	          name: token
//	          in: query
//		      appTokenHeader:
//	          type: apiKey
//	          name: X-Gotify-Key
//	          in: header
//		      clientTokenHeader:
//	          type: apiKey
//	          name: X-Gotify-Key
//	          in: header
//		      appTokenAuthorizationHeader:
//	          type: apiKey
//	          name: Authorization
//	          in: header
//	          description: >-
//	              Enter an application token with the `Bearer` prefix, e.g. `Bearer Axxxxxxxxxx`.
//		      clientTokenAuthorizationHeader:
//	          type: apiKey
//	          name: Authorization
//	          in: header
//	          description: >-
//	              Enter a client token with the `Bearer` prefix, e.g. `Bearer Cxxxxxxxxxx`.
//	       basicAuth:
//	          type: basic
//
//	swagger:meta
package docs
