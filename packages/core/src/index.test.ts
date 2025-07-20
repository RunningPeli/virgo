import { expect, it } from 'vitest'
import { componentList } from './component-list'
import { components } from './index'

it('should expose the correct components', () => {
  expect(Object.keys(components)).toEqual(Object.values(componentList))
})
