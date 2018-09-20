import { shallowMount, createLocalVue } from '@vue/test-utils'
import ErrorModal from './ErrorModal.vue'
import Vuex from 'vuex'

test('adds is-active class when state.error is set', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  const store = new Vuex.Store({
    state: {
      error: false
    }
  })
  const wrapper = shallowMount(ErrorModal, {
    localVue,
    store
  })

  expect(wrapper.element.classList).not.toContain('is-active')

  store.state.error = true

  expect(wrapper.element.classList).toContain('is-active')
})

test('commits setError with null when close button is clicked', () => {
  const commitMock = jest.fn()
  const wrapper = shallowMount(ErrorModal, {
    mocks: {
      $store: {
        state: {
          error: 1
        },
        commit: commitMock
      }
    }
  })

  wrapper.find('button').trigger('click')

  expect(commitMock).toHaveBeenCalledWith('setError', null)
})
