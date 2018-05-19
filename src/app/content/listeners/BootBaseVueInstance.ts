import Vue from 'vue'
import App from '../App.vue'
import { Listener } from '@exteranto/events'

export class BootBaseVueInstance implements Listener {
  /**
   * Handle the fired event.
   *
   * @param {any} payload
   */
  public handle (payload: any) {
    const component: Vue = new Vue({
      render: h => h(App),
    }).$mount('#app')

    document.querySelector('body').appendChild(component.$el)
  }
}
