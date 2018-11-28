import { Order } from '../interfaces'
import * as XLSX from 'xlsx'
// import { sheet } from './template'

export default (orders: Order[], filename: string) => {

  const workbook = XLSX.readFile('/Users/zhaozhe/Documents/new-tem.xls')
  const sheet = workbook.Sheets.填写模板

  orders.forEach((order, index) => {
    sheet[`F${index + 3}`] = {
      v: order.id + '号单',
      t: 's'
    }
    sheet[`G${index + 3}`] = sheet[`H${index + 3}`] = {
      v: order.senderName || '王源',
      t: 's'
    }
    sheet[`I${index + 3}`] = {
      v: order.senderTelephone || '18613109175',
      t: 's'
    }
    sheet[`J${index + 3}`] = {
      v: order.senderAddress || '广东省 广州市 白云区 金钟横路',
      t: 's'
    }
    sheet[`K${index + 3}`] = sheet[`L${index + 3}`] = {
      v: order.receiverName,
      t: 's'
    }
    sheet[`M${index + 3}`] = {
      v: order.receiverTelephone,
      t: 's'
    }
    sheet[`N${index + 3}`] = {
      v: order.receiverAddress,
      t: 's'
    }
    sheet[`O${index + 3}`] = {
      v: order.goods.reduce((str, good) => {
        let pre = ''
        if (str) {
          pre = str + ' '
        }

        let goodText = good.name + (good.size || '')
        if (good.amount > 1) {
          goodText += '/' + good.amount
        }
        if (good.specialStatus) {
          goodText += '(' + good.specialStatus + ')'
        }

        return pre + goodText
      }, ''),
      t: 's'
    }
    sheet[`U${index + 3}`] = {
      v: 1,
      t: 'n'
    }
    sheet[`V${index + 3}`] = {
      v: order.expressType,
      t: 's'
    }
    sheet[`W${index + 3}`] = {
      v: order.payType,
      t: 's'
    }
  })

  sheet['!ref'] = `A1:AW${orders.length + 2}`

  // XLSX.utils.book_append_sheet(wb, sheet, '填写模板')
  XLSX.writeFile(workbook, filename)
}
