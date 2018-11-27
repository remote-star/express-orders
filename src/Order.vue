<template>
  <el-dialog
    title="新建订单"
    top="30px"
    :visible.sync="dialogVisible"
    width="600px">
    <el-form
      ref="form"
      :rules="rules"
      :model="form"
      label-width="80px">
      <el-form-item
        label="原始文本"
        :style="{
          marginBottom: 0
        }">
        <el-input
          type="textarea"
          @keyup.enter.native="recognize"
          v-model="form.originalText"
          size="small"
          rows="4">
        </el-input>
      </el-form-item>

      <el-form-item
        :style="{
          marginBottom: 0
        }">
        <el-button
          type="primary"
          size="mini"
          @click="recognize">
          识别
        </el-button>
      </el-form-item>

      <div class="line"></div>

      <el-row
        :gutter="20">
        <el-col :span="10">
          <el-form-item
            label="订单号"
            prop="id">
            <el-input
              type="number"
              size="small"
              v-model="form.id">
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :span="14">
          <el-form-item label="邮寄方式">
            <el-select
              v-model="form.payType"
              :style="{
                width: '50%',
                paddingRight: '10px'
              }"
              size="small"
              placeholder="付款方式">
              <el-option
                label="到付现结"
                value="到付现结">
              </el-option>
              <el-option
                label="寄付现结"
                value="寄付现结">
              </el-option>
            </el-select>

            <el-select
              v-model="form.expressType"
              :style="{
                width: '50%',
                paddingLeft: '10px'
              }"
              size="small"
              placeholder="业务类型">
              <el-option
                label="顺丰标快"
                value="顺丰标快">
              </el-option>
              <el-option
                label="顺丰特惠"
                value="顺丰特惠">
              </el-option>
              <el-option
                label="物流普运"
                value="物流普运">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row
        :gutter="20">
        <el-col :span="10">
          <el-form-item
            label="收件人"
            prop="receiverName">
            <el-input
              size="small"
              v-model="form.receiverName">
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :span="14">
          <el-form-item
            label="电话"
            prop="receiverTelephone">
            <el-input
              size="small"
              v-model="form.receiverTelephone">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item
        label="收件地址"
        prop="receiverAddress">
        <el-input
          size="small"
          v-model="form.receiverAddress">
        </el-input>
      </el-form-item>

      <div class="line"></div>

      <el-row
        :gutter="20">
        <el-col :span="10">
          <el-form-item label="寄件人">
            <el-input
              size="small"
              v-model="form.senderName">
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :span="14">
          <el-form-item label="电话">
            <el-input
              size="small"
              v-model="form.senderTelephone">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="寄件地址">
        <el-input
          size="small"
          v-model="form.senderAddress">
        </el-input>
      </el-form-item>

      <div class="line"></div>

      <el-form-item
        v-for="(good, index) in form.goods"
        label-width="0"
        :key="index"
      >
        <el-row
          :gutter="8">
          <el-col :span="10">
            <el-form-item
              :label="'商品' + (form.goods.length > 1 ? index : '')"
              :prop="'goods.' + index + '.name'"
              :rules="{
                required: true,
                message: '商品名不能为空',
                trigger: 'blur'
              }">
              <el-input
                size="small"
                placeholder="商品名"
                v-model="good.name">
              </el-input>
            </el-form-item>
          </el-col>

          <el-col :span="4">
            <el-form-item
              label-width="0">
              <el-input
                size="small"
                placeholder="尺寸"
                v-model="good.size">
              </el-input>
            </el-form-item>
          </el-col>

          <el-col :span="3">
            <el-form-item
              label-width="0"
              :prop="'goods.' + index + '.amount'">
              <el-input
                type="number"
                min="1"
                size="small"
                placeholder="数量"
                v-model="good.amount">
              </el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item
              label-width="0"
              :prop="'goods.' + index + '.amount'">
              <el-input
                v-model="good.specialStatus"
                size="small"
                placeholder="标记">
              </el-input>
            </el-form-item>
          </el-col>

          <el-col
            :span="1"
            :style="{
              textAlign: 'right'
            }">
            <el-button
              size="mini"
              type="text"
              @click.prevent="form.goods.splice(index, 1)">
              <i class="el-icon-delete"></i>
            </el-button>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item>
        <el-button
          type="success"
          size="mini"
          :style="{
            marginRight: '10px'
          }"
          @click="addGood">
          添加商品
        </el-button>
        <el-button
          type="primary"
          size="mini"
          @click="save">
          保存
        </el-button>
        <el-button
          size="mini"
          @click="dialogVisible = false">
          取消
        </el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Good, Order } from './interfaces'
import moment from 'moment'

@Component
export default class App extends Vue {
  private dialogVisible = false
  private form: Order = this.getDefaultForm()
  private mode: 'create' | 'edit' = 'create'
  private rules = {
    id: [
      { required: true, message: '请输入订单号', trigger: 'change' }
    ],
    receiverName: [
      { required: true, message: '请输入收件人姓名', trigger: 'change' }
    ],
    receiverTelephone: [
      { required: true, message: '请输入收件人电话', trigger: 'change' },
      { min: 11, max: 11, message: '请输入11位电话号码', trigger: 'blur' }
    ],
    receiverAddress: [
      { required: true, message: '请输入收件人地址', trigger: 'change' }
    ],
    date2: [
      { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
    ],
    type: [
      { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
    ],
    resource: [
      { required: true, message: '请选择活动资源', trigger: 'change' }
    ],
    desc: [
      { required: true, message: '请填写活动形式', trigger: 'blur' }
    ]
  }

  public open() {
    this.dialogVisible = true
    this.mode = 'create'
  }

  public edit(form: Order) {
    this.form = {
      ...form,
      goods: form.goods.map(good => ({
        ...good
      }))
    }
    this.dialogVisible = true
    this.mode = 'edit'
  }

  private recognize() {
    if (!this.form.originalText) {
      return
    }
    let segments = this.form.originalText!.replace(/(\d{11})/, ' $1 ').split(/[\s，。、：,.:]+/).filter(v => v)

    // 识别单号
    const idMather = segments[0].match(/\d+/)
    if (idMather) {
      this.form.id = Number.parseInt(idMather[0])
      segments.splice(0, 1)
    }

    // 识别邮寄信息
    segments.forEach((segment, index) => {
      const keywords = ['顺丰', '到付', '包邮', '陆运']
      if (keywords.some(keyword => segment.indexOf(keyword) >= 0)) {
        if (segment.indexOf('到付') >= 0) {
          this.form.payType = '到付现结'
        } else {
          this.form.payType = '寄付现结'
        }

        if (segment.indexOf('陆运') >= 0) {
          this.form.expressType = '顺丰特惠'
        } else if (segment.indexOf('普运') >= 0) {
          this.form.expressType = '物流普运'
        } else {
          this.form.expressType = '顺丰标快'
        }
        segments.splice(index, 1)
      }
    })

    // 判断是否存在发货人信息
    segments.forEach((segment, index) => {
      const keywords = ['发货', '发件', '寄货', '寄件']
      if (keywords.some(keyword => segment.indexOf(keyword) >= 0)) {
        const senderInfoSegments = segments.splice(index)
        for (const senderInfoSegment of senderInfoSegments) {
          if (/^\d+$/.test(senderInfoSegment)) {
            this.form.senderTelephone = senderInfoSegment
          } else {
            if (senderInfoSegment.length > 8) {
              this.form.senderAddress = senderInfoSegment
            } else {
              this.form.senderName = senderInfoSegment.replace('收', '')
            }
          }
        }
      }
    })

    // 提取收件人信息
    const receiverInfoSegments = segments.splice(-3)
    for (const receiverInfoSegment of receiverInfoSegments) {
      if (/^\d+$/.test(receiverInfoSegment)) {
        this.form.receiverTelephone = receiverInfoSegment
      } else {
        if (receiverInfoSegment.length > 8) {
          this.form.receiverAddress = receiverInfoSegment
        } else {
          this.form.receiverName = receiverInfoSegment.replace('收', '')
        }
      }
    }

    segments = segments.filter(segment => {
      return ['地址'].some(keyword => segment.indexOf(keyword) < 0)
    })

    // 提取货物信息
    const goods = []
    for (const goodText of segments) {
      const good: Good = {
        name: '',
        amount: 1
      }
      let text = goodText
      // let queue = false

      // 排单检查
      // if (goodText.includes('(排单)') || goodText.includes('（排单）')) {
      //   queue = true
      //   text = text.substr(0, text.length - 4)
      // }

      const specialStatusMatcher = goodText.match(/[\(（](.+)[\)）]/)
      if (specialStatusMatcher) {
        good.specialStatus = specialStatusMatcher[1]
        text = goodText.replace(/[\(（].+[\)）]/, '')
      }


      // 提取数量
      const sizeAndAmount = text.split('/')
      text = sizeAndAmount[0]
      good.amount = Number.parseInt(sizeAndAmount[1]) || 1

      // 提取尺码
      let size
      if (/\d/.test(text[text.length - 1])) {
        // 尺码为数字格式
        size = text.match(/\d+$/)![0]
      } else if (/[a-zA-Z]/.test(text[text.length - 1])) {
        // 尺码为字母格式
        size = text.match(/[a-zA-Z]+$/)![0]
      }
      if (size) {
        good.size = size
        text = text.substr(0, text.length - size.length)
      }

      // 提取商品名
      // const nameMatcher = text.match(/^.+?(?=\w+)/)
      // if (nameMatcher) {
      //   good.name = nameMatcher[0]
      //   text = text.substr(good.name.length)
      // }
      good.name = text || goods[goods.length - 1].name
      // if (queue) {
      //   good.name += '（排单）'
      // }

      goods.push(good)
    }
    this.form.goods = goods
  }

  private getDefaultForm(): Order {
    return {
      id: 1,
      payType: '到付现结',
      expressType: '顺丰标快',
      receiverName: '',
      receiverTelephone: '',
      receiverAddress: '',
      senderName: '王源',
      senderTelephone: '18613109175',
      senderAddress: '广东省 广州市 白云区 金钟横路',
      goods: [
        {
          name: '',
          size: '',
          amount: 1
        }
      ]
    }
  }

  private addGood() {
    this.form.goods.push({
      name: '',
      size: '',
      amount: 1
    })
  }

  private save() {
    if (!this.form.goods.length) {
      (this as any).$message({
          message: '请添加商品',
          type: 'warning'
        })
      return
    }

    (this.$refs.form as any).validate((valid: boolean) => {
      if (valid) {
        if (this.mode === 'create') {
          this.form._id = `${+ new Date()}`
          this.form.createTime = moment().format('YYYY-MM-DD HH:mm:ss')
        }
        this.form.modifyTime = moment().format('YYYY-MM-DD HH:mm:ss')
        if (this.mode === 'create') {
          this.$emit('create', this.form)
        } else {
          this.$emit('save', this.form)
        }
        this.dialogVisible = false
        this.form = this.getDefaultForm()
      } else {
        return false
      }
    })
  }
}
</script>

<style scoped lang="stylus">
>>> .el-form-item__content
  text-align left

.line
  width 100%
  border-bottom 1px solid #f
  margin 15px 0
</style>
