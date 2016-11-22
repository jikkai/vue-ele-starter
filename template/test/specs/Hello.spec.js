import Vue from 'vue'
import Hello from 'components/Hello'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Hello)
    })

    expect(vm.$el.querySelector('#hello').textContent)
      .to.equal('Hello World')
  })
})