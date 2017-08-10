import Vue from 'vue'
import Hello from '~components/Hello'

describe('[components]Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#hello').textContent)
      .to.equal('Hello World')
  })
})
