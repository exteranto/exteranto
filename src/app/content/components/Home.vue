<template>
  <div class="message">
    {{ message }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {
  public message: string = 'Hello World!'
}
</script>

