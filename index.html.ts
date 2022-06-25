import path from 'path'
import fs from 'fs'

export default function replaceIndexTemplate() {
  fs.writeFileSync(path.resolve('./.nuxt/views/document.template.mjs'), `export default ${html.toString()}`)
}

const html = (params: any) => `<!DOCTYPE html>
<html ${params.HTML_ATTRS}>
  <head ${params.HEAD_ATTRS}>
    ${params.HEAD}
    <!-- 测试代码 -->
    <script>
      console.log(1)
    </script>
  </head>
  <body ${params.BODY_ATTRS}>${params.BODY_PREPEND}${params.APP}</body>
</html>
`
