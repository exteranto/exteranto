import Vue from 'vue'
import App from '../App.vue'
import router from '../router'
import { Listener } from '@exteranto/events'

export class BootBaseVueInstance implements Listener {
  /**
   * Handle the fired event.
   *
   * @param {any} payload
   */
  public handle (payload: any) {
    return new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
}
