import Vue from 'vue'
import { expect } from 'chai'
import Home from '../../src/popup/components/Home.vue'

Vue.config.productionTip = false

describe('Home.vue', () => {
  it('should print dashboard.', () => {
    const Compoment = Vue.extend(Home)
    const vm = new Compoment().$mount()

    expect(vm.$el.querySelector('span.app-title').textContent).to.equal('Dashboard')
  })
})
