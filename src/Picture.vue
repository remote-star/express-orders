<template>
  <el-dialog
    title="拍照留底"
    top="30px"
    :visible.sync="dialogVisible"
    width="80%">

    <p>
      {{order && order.originalText}}
    </p>

    <el-carousel
      height="150px"
      trigger="click">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <div class="button-area">
      <el-input
        placeholder="请输入内容"
        type="file"
        accept="image/*"
        capture="camera">
      </el-input>

      <el-button
        class="fake">
        拍照
      </el-button>
    </div>

  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Good, Order } from '../interfaces'
import moment from 'moment'

@Component
export default class App extends Vue {
  private dialogVisible = false
  private order: Order | null = null

  public open(order: Order) {
    this.dialogVisible = true
    this.order = order
  }
}
</script>

<style scoped lang="stylus">
.button-area
  position relative
  .el-input
    z-index 1
    opacity 0
  .el-button.fake
    position absolute
    top 0
    left 50%
    transform translateX(-50%)
    user-select none
</style>
