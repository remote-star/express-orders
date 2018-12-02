<template>
  <el-dialog
    title="扫描条形码"
    top="30px"
    :visible.sync="dialogVisible"
    width="80%">

    <div id="interactive" class="viewport"></div>

  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Good, Order } from '../interfaces'
import Quagga from 'quagga'

@Component
export default class App extends Vue {
  private dialogVisible = false

  private state = {
    inputStream: {
        type : "LiveStream",
        constraints: {
            width: {min: 640},
            height: {min: 480},
            facingMode: "environment",
            aspectRatio: {min: 1, max: 2}
        },
        target: null
    },
    locator: {
        patchSize: "medium",
        halfSample: true
    },
    numOfWorkers: 2,
    frequency: 10,
    decoder: {
        readers : [{
            format: "code_128_reader",
            config: {}
        }]
    },
    locate: true
}

  public open() {
    this.dialogVisible = true
    setTimeout(this.init)
  }

  private init() {
    (this.state.inputStream as any).target = document.querySelector('#interactive')
    alert(this.state.inputStream.target)
    Quagga.init(this.state, (err: any) => {
        if (err) {
          alert(err)
        }
        Quagga.start()
        Quagga.onProcessed((data: any) => {
          alert(data)
          if (data && data.codeResult) {
            alert(data.codeResult.code)
            Quagga.stop()
            this.dialogVisible = false
          }
        })
    })
  }
}
</script>

<style scoped lang="stylus">
#interactive
  width 100%
  height 200px
  >>> video
    width 100%
    height 100%

</style>
