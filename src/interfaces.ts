export interface Good {
  name: string
  size?: string
  amount: number
}

export interface Order {
  _id?: string
  originalText?: string
  id: number
  payType: '到付现结' | '寄付现结'
  expressType: '顺丰次日' | '顺丰隔日'
  receiverName: string
  receiverTelephone: string
  receiverAddress: string
  senderName?: string
  senderTelephone?: string
  senderAddress?: string
  goods: Good[]
  createTime?: string
  modifyTime?: string
}
