<template>
  <el-dialog
    title="扫描条形码"
    top="30px"
    :visible.sync="dialogVisible"
    width="80%">

    <p>{{message}}</p>

    <div class="button-area">
      <input
        placeholder="请输入内容"
        type="file"
        @change="onShot"
        accept="image/*"
        capture="camera" />

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
import Quagga from 'quagga'

@Component
export default class App extends Vue {
  private dialogVisible = false
  private message = '对准二维码拍照以识别单号'

  public open() {
    this.dialogVisible = true
  }

  private onShot(e: any) {
    Quagga.decodeSingle({
      inputStream: {
        size: 800,
        singleChannel: false
      },
      locator: {
          patchSize: "medium",
          halfSample: true
      },
      decoder: {
          readers: [{
              format: "code_128_reader",
              config: {}
          }]
      },
      locate: true,
      src: URL.createObjectURL(e.target.files[0])
    }, (result: any) => {
      alert(JSON.stringify(result))
      if (result.codeResult) {
        this.message = result.codeResult.code
      } else {
        this.message = '未能成功解析，请重新拍照'
      }
    })
  }
}
</script>

<style scoped lang="stylus">
.button-area
  position relative
  input
    z-index 1
    opacity 0
    height 40px
  .el-button.fake
    position absolute
    top 0
    left 50%
    transform translateX(-50%)
    user-select none
</style>
