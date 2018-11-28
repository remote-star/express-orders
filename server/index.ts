import * as Koa from 'koa'
import * as KoaCompress from 'koa-compress'
import * as KoaStatic from 'koa-static'
import * as zlib from 'zlib'
import * as historyApiFallback from 'koa2-connect-history-api-fallback'
import * as Router from 'koa-router'
import * as BodyParser from 'koa-bodyparser'
import * as send from 'koa-send'
import * as moment from 'moment'

import exportExcel from './exporter'

const app = new Koa()
const router = new Router()

router.post('/api/export', async (ctx, next) => {
  const fileName = `${moment().format('YYYY年MM月DD日寄件单')}.xls`
  exportExcel(ctx.request.body.orders, '../dist/' + fileName)
  ctx.body = fileName
})

app
  .use(BodyParser({
    formLimit: '10mb',
    jsonLimit: '10mb'
  }))
  .use(router.routes())
  .use(router.allowedMethods())
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
