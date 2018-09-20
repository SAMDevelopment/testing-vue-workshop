import { fetchItems } from './api'
import axios from 'axios'

jest.mock('axios')

test('resolves with data.items if /items returns 200', async () => {
  expect.assertions(1)
  axios.get.mockResolvedValue(['item-1', 'item-2'])

  const data = await fetchItems()
  expect(data).toHaveLength(2)
})

test('rejects with error if /items returns 500', () => {
  axios.get.mockRejectedValue(new Error('500'))

  expect(fetchItems()).rejects.toThrow('500')
})
