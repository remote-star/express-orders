const XLSX = require('xlsx')

// const wb = XLSX.utils.book_new()
// var ws_data = [
//   [ "S", "h", "e", "e", "t", "J", "S" ],
//   [  1 ,  2 ,  3 ,  4 ,  5 ]
// ];
// var ws = XLSX.utils.aoa_to_sheet(ws_data);
// XLSX.utils.book_append_sheet(wb, ws, 'whatever');
// XLSX.writeFile(wb, 'out.xlsx')

// var workbook = XLSX.readFile('/Users/zhaozhe/Documents/new-tem.xls')
// console.info(workbook.Sheets['填写模板'])

const sheet = { '!margins':
{ left: 0.699305555555556,
  right: 0.699305555555556,
  top: 0.75,
  bottom: 0.75,
  header: 0.3,
  footer: 0.3 },
  G1: { v: '寄件方信息', t: 's', w: '寄件方信息' },
  K1: { v: '收件方信息', t: 's', w: '收件方信息' },
  O1: { v: '商品信息', t: 's', w: '商品信息' },
  U1: { v: '发货信息', t: 's', w: '发货信息' },
  A2: { v: '序号', t: 's', w: '序号' },
  B2: { v: '订单号', t: 's', w: '订单号' },
  C2: { v: '运单号', t: 's', w: '运单号' },
  D2: { v: '子单号', t: 's', w: '子单号' },
  E2: { v: '签回单号', t: 's', w: '签回单号' },
  F2: { v: '寄方备注', t: 's', w: '寄方备注' },
  G2: { v: '寄方公司', t: 's', w: '寄方公司' },
  H2: { v: '寄方姓名', t: 's', w: '寄方姓名' },
  I2: { v: '寄方联系方式', t: 's', w: '寄方联系方式' },
  J2: { v: '寄方地址', t: 's', w: '寄方地址' },
  K2: { v: '收方公司', t: 's', w: '收方公司' },
  L2: { v: '收方姓名', t: 's', w: '收方姓名' },
  M2: { v: '收方联系方式', t: 's', w: '收方联系方式' },
  N2: { v: '收方地址', t: 's', w: '收方地址' },
  O2: { v: '商品名称', t: 's', w: '商品名称' },
  P2: { v: '商品编码', t: 's', w: '商品编码' },
  Q2: { v: '商品数量', t: 's', w: '商品数量' },
  R2: { v: '商品单价/元', t: 's', w: '商品单价/元' },
  S2: { v: '商品货号', t: 's', w: '商品货号' },
  T2: { v: '商品属性', t: 's', w: '商品属性' },
  U2: { v: '包裹件数', t: 's', w: '包裹件数' },
  V2: { v: '业务类型', t: 's', w: '业务类型' },
  W2: { v: '付款方式', t: 's', w: '付款方式' },
  X2: { v: '第三方付月结卡号', t: 's', w: '第三方付月结卡号' },
  Y2: { v: '包裹重量/KG', t: 's', w: '包裹重量/KG' },
  Z2: { v: '代收金额', t: 's', w: '代收金额' },
  AA2: { v: '代收卡号', t: 's', w: '代收卡号' },
  AB2: { v: '保价金额', t: 's', w: '保价金额' },
  AC2: { v: '是否签回单', t: 's', w: '是否签回单' },
  AD2: { v: '派送日期', t: 's', w: '派送日期' },
  AE2: { v: '派送时段', t: 's', w: '派送时段' },
  AF2: { v: '是否自取', t: 's', w: '是否自取' },
  AG2: { v: '是否保单配送', t: 's', w: '是否保单配送' },
  AH2: { v: '是否票据专送', t: 's', w: '是否票据专送' },
  AI2: { v: '是否易碎宝', t: 's', w: '是否易碎宝' },
  AJ2: { v: '易碎宝服务费/元', t: 's', w: '易碎宝服务费/元' },
  AK2: { v: '是否口令签收', t: 's', w: '是否口令签收' },
  AL2: { v: '标准化包装（元）', t: 's', w: '标准化包装（元）' },
  AM2: { v: '个性化包装（元）', t: 's', w: '个性化包装（元）' },
  AN2: { v: '其它费用（元）', t: 's', w: '其它费用（元）' },
  AO2: { v: '超长超重服务费', t: 's', w: '超长超重服务费' },
  AP2: { v: '是否双人派送', t: 's', w: '是否双人派送' },
  AQ2: { v: '长(cm)', t: 's', w: '长(cm)' },
  AR2: { v: '宽(cm)', t: 's', w: '宽(cm)' },
  AS2: { v: '高(cm)', t: 's', w: '高(cm)' },
  AT2: { v: '扩展字段1', t: 's', w: '扩展字段1' },
  AU2: { v: '扩展字段2', t: 's', w: '扩展字段2' },
  AV2: { v: '扩展字段3', t: 's', w: '扩展字段3' },
  AW2: { v: '扩展字段4', t: 's', w: '扩展字段4' },

  H3: { v: 'sss', t: 's' },
  I3: { v: 'ssdsfdfdf', t: 's' },
  K3: { v: 'fdsssfeefef', t: 's' },
  L3: { v: '23d32', t: 's' },
  M3: { v: '23d32', t: 's' },
  N3: { v: '23d32', t: 's' },
  O3: { v: '23d32', t: 's' },
  U3: { v: '1', t: 'n' },
  V3: { v: '顺丰特惠', t: 's' },
  W3: { v: '第三方付', t: 's' },

  '!ref': 'A1:AW3',
}

// const json = XLSX.utils.sheet_to_json(workbook.Sheets['导入数据表'], {header:"A"})

// console.info(json)

// const ws = XLSX.utils.json_to_sheet(json)
// console.info(ws)

const wb = XLSX.utils.book_new()
XLSX.utils.book_append_sheet(wb, sheet, '填写模板');
XLSX.writeFile(wb, 'out.xls')