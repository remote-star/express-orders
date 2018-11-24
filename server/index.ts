import * as Koa from 'koa'
import * as KoaCompress from 'koa-compress'
import * as KoaStatic from 'koa-static'


const app = new Koa()


app.use(KoaCompress({
  filter: (content_type: string) => {
    return /text/i.test(content_type)
  },
  threshold: 2048,
  flush: require('zlib').Z_SYNC_FLUSH
}))
app.listen(3000)
