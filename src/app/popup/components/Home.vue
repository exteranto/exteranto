<template>
  <div class="message">
    {{ message }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Autowired } from '@exteranto/ioc'
import { Cache } from '@exteranto/cache'

@Component({})
export default class Home extends Vue {
  public message: string = 'Hello World!'

  @Autowired
  private cache: Cache

  mounted () {
    console.log(this.cache)
  }
}
</script>

<style lang="sass">

</style>
