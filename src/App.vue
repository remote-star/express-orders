<template>
  <div id="app">
    <header>
      <el-input placeholder="输入关键词搜索" v-model="keyword" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>

      <div class="btns">
        <el-button
          type="primary"
          @click="$refs.form.open()">
          新增
        </el-button>

        <el-button
          type="danger"
          :disabled="selectedOrders.length === 0"
          @click="deleteAll">
          删除
        </el-button>

        <el-button
          type="success"
          @click="exportOrders"
          :disabled="selectedOrders.length === 0">
          导出
        </el-button>
      </div>
    </header>

    <el-table
      :data="filteredTableData"
      @selection-change="onTableSelected"
      stripe
      border
      style="width: 100%">
      <el-table-column
        type="selection"
        width="36">
      </el-table-column>

      <el-table-column
        prop="id"
        width="50"
        label="单号">
      </el-table-column>

      <el-table-column
        prop="goods"
        width="300"
        label="商品">
        <template slot-scope="scope">
          <el-table
            :data="scope.row.goods"
            :show-header="false"
            border
            size="mini">
            <el-table-column
              prop="name">
            </el-table-column>
            <el-table-column
              width="40"
              prop="size">
            </el-table-column>
            <el-table-column
              width="40"
              :formatter="row => row.amount + '件'">
            </el-table-column>
            <el-table-column
              prop="specialStatus">
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column
        prop="receiverName"
        width="80"
        label="收件人">
      </el-table-column>
      <el-table-column
        prop="receiverTelephone"
        width="110"
        label="收件电话">
      </el-table-column>
      <el-table-column
        prop="receiverAddress"
        width="250"
        label="收件地址">
      </el-table-column>
      <el-table-column
        prop="payType"
        width="100"
        label="付款方式">
      </el-table-column>
      <el-table-column
        prop="expressType"
        width="100"
        label="业务类型">
      </el-table-column>
      <el-table-column
        prop="senderName"
        width="80"
        label="寄件人">
      </el-table-column>
      <el-table-column
        prop="senderTelephone"
        width="110"
        label="寄件电话">
      </el-table-column>
      <el-table-column
        prop="senderAddress"
        width="250"
        label="寄件地址">
      </el-table-column>
      <el-table-column
        prop="createTime"
        width="160"
        label="创建时间">
      </el-table-column>
      <el-table-column
        width="85"
        label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$refs.form.edit(scope.row)">
            编辑
          </el-button>
          <el-button
            type="text"
            @click="deleteOrder(scope.$index)"
            size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      layout="total"
      :total="filteredTableData.length">
    </el-pagination>

    <Order
      ref="form"
      @create="onCreated"
      @save="onSaved"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Good, Order as OrderInterface } from '../interfaces'
import Order from './Order.vue'
import XLSX from 'xlsx'

@Component({
  components: {
    Order
  }
})
export default class App extends Vue {
  private keyword: string = ''
  private tableData: OrderInterface[] = []
  private selectedOrders: OrderInterface[] = []

  private get filteredTableData() {
    if (!this.keyword) {
      return this.tableData
    }

    return this.tableData.filter(order => {
      for (const value of Object.values(order)) {
        if (`${value}`.indexOf(this.keyword) >= 0) {
          return true
        }
      }
      for (const good of order.goods) {
        for (const value of Object.values(good)) {
          if (`${value}`.indexOf(this.keyword) >= 0) {
            return true
          }
        }
      }
    })
  }

  private onCreated(order: OrderInterface) {
    this.tableData.push(order)
    window.localStorage.orders = JSON.stringify(this.tableData)
  }

  private onSaved(order: OrderInterface) {
    this.tableData.some((row, index) => {
      if (row._id === order._id) {
        this.tableData.splice(index, 1, order)
        return true
      }
      return false
    })
    window.localStorage.orders = JSON.stringify(this.tableData)
  }

  private deleteOrder(index: number) {
    (this as any).$confirm('确定删除订单？', '确认删除？', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this.tableData.splice(index, 1)
      window.localStorage.orders = JSON.stringify(this.tableData)
    })
  }

  private deleteAll() {
    (this as any).$confirm('确定删除全部所选订单？', '确认删除？', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this.tableData = this.tableData.filter(row => !this.selectedOrders.some(sr => sr._id === row._id))
      window.localStorage.orders = JSON.stringify(this.tableData)
    })
  }

  private onTableSelected(rows: OrderInterface[]) {
    this.selectedOrders = rows
  }

  private async exportOrders() {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const result = await fetch('/api/export', {
      method: 'POST',
      body: JSON.stringify({
        orders: this.selectedOrders
      }),
      headers: myHeaders
    })
    if (result) {
      const fileName = await result.text()

    //   const h = this.$createElement;
    //   (this as any).$msgbox({
    //     title: '消息',
    //     message: h('a', {
    //       attrs: {
    //         href: location.origin + '/' + fileName
    //       }
    //     }, [
    //       location.origin + '/' + fileName
    //     ]),
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //   })
      window.open(location.origin + '/' + fileName)
    }

  }

  private created() {
    const storedOrders = window.localStorage.orders
    if (storedOrders) {
      try {
        this.tableData = JSON.parse(storedOrders)
      } catch(e) {
        this.tableData = []
      }
    }
  }
}
</script>

<style scoped lang="stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding 20px
  background #deeaef
  min-height 100%

header
  display flex
  justify-content space-between
  margin-bottom 20px
  .el-input
    width auto

>>> .el-table__header-wrapper tr th
  background #9aaaad
  color #f
  font-size 900

.el-pagination
  text-align right
</style>

<style lang="stylus">
*
  box-sizing border-box

html, body
  height 100%
  min-width 800px
  padding 0
  margin 0
</style>
