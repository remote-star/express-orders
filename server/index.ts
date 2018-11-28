import * as Koa from 'koa'
import * as KoaCompress from 'koa-compress'
import * as KoaStatic from 'koa-static'
import * as zlib from 'zlib'
import * as historyApiFallback from 'koa2-connect-history-api-fallback'

const app = new Koa()

app
  .use(historyApiFallback({ whiteList: ['/api'] }))
  .use(KoaCompress({
    filter: (contentType: string) => {
      return /(text)|(javascript)/i.test(contentType)
    },
    threshold: 2048,
    flush: zlib.Z_SYNC_FLUSH
  }))
  .use(KoaStatic('../dist'))
app.listen(1106)
