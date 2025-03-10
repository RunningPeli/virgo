import { expect, it } from 'vitest'
import { components } from './components'
import * as virgo from './index'

it('should expose the correct components', () => {
  expect(Object.keys(virgo)).toEqual(Object.values(components))
})
