package docs

import "github.com/gin-gonic/gin"

var ui = `
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <title>接口文档</title>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css" >
    <link rel="icon" type="image/png" href="./favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="./favicon-16x16.png" sizes="16x16" />
    <style>
      html
      {
        box-sizing: border-box;
        overflow: -moz-scrollbars-vertical;
        overflow-y: scroll;
      }
      *,
      *:before,
      *:after
      {
        box-sizing: inherit;
      }
      body
      {
        margin:0;
        background: #fafafa;
      }
    </style>
  </head>

  <body>
    <div id="swagger-ui"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js"> </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js"> </script>
    <script>
    function getBaseURL() {
      var path = window.location.pathname
      path = path.substr(0, path.lastIndexOf('/')+1)
      return window.location.host + path;
    }
    function applyTranslations() {
      var map = new Map([
        ['Schemas', '模型'],
        ['Servers', '服务'],
        ['Authorize', '授权'],
        ['Try it out', '试一试'],
        ['Execute', '执行'],
        ['Clear', '清除'],
        ['Parameters', '参数'],
        ['Description', '说明'],
        ['Request URL', '请求地址'],
        ['Responses', '响应'],
        ['Response body', '响应体'],
        ['Response headers', '响应头'],
        ['Example Value', '示例值'],
        ['Model', '模型结构'],
        ['Download', '下载'],
        ['Method', '方法'],
        ['Status Code', '状态码'],
        ['Media type', '媒体类型'],
        ['Base URL:', '基础地址：'],
        ['Gotify REST-API.', 'Gotify 接口文档。'],
      ]);
      var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      var node;
      while ((node = walker.nextNode())) {
        var t = node.nodeValue.trim();
        if (map.has(t)) {
          node.nodeValue = node.nodeValue.replace(t, map.get(t));
        }
      }
    }
    function observeAndTranslate() {
      applyTranslations();
      var obs = new MutationObserver(function() { applyTranslations(); });
      obs.observe(document.body, {childList: true, subtree: true});
    }
    window.onload = function() {
      // Begin Swagger UI call region
      const ui = SwaggerUIBundle({
        url: "swagger?base="+encodeURIComponent(getBaseURL()),
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        plugins: [
          SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "StandaloneLayout"
      })
      // End Swagger UI call region
      window.ui = ui
      observeAndTranslate()
    }
  </script>
  </body>
</html>
`

// UI serves the swagger ui.
func UI(ctx *gin.Context) {
	ctx.Writer.WriteString(ui)
}
