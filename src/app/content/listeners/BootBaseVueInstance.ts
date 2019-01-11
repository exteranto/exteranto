import Vue from 'vue'
import App from '../App.vue'
import router from '../router'
import { Param } from '@exteranto/ioc'
import { Listener } from '@exteranto/events'

export class BootBaseVueInstance implements Listener {
  /**
   * The application name.
   *
   * @var {string}
   */
  @Param('app.name')
  private name: string

  /**
   * Handle the fired event.
   *
   * @param {any} payload
   */
  public handle (payload: any) {
    const component: Vue = new Vue({
      router,
      render: h => h(App),
    }).$mount(`#${this.name}`)

    document.querySelector('body').appendChild(component.$el)
  }
}
