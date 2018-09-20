import Menu from './Menu.vue'
import { RouterLinkStub, shallowMount } from '@vue/test-utils'

test('renders router-link to /login page when signedIn is false', () => {
  const wrapper = shallowMount(Menu, {
    propsData: {
      signedIn: true
    },
    stubs: {
      'router-link': RouterLinkStub
    }
  })

  expect(wrapper.text()).toContain('Sign in')
  expect(wrapper.text()).not.toContain('Sign out')
  expect(wrapper.find(RouterLinkStub).props('to')).toBe('/login')
})

test('renders <a> that signs user out if signedIn is true', () => {
  const wrapper = shallowMount(Menu, {
    propsData: {
      signedIn: true
    },
    stubs: {
      'router-link': RouterLinkStub
    }
  })

  expect(wrapper.text()).toContain('Sign out')
  expect(wrapper.text()).not.toContain('Sign in')
})
