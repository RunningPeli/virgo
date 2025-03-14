import type { ComponentResolver } from 'unplugin-vue-components'
import { componentList } from './component-list'

export interface ResolverOptions {}

export default function (options: ResolverOptions = {}): ComponentResolver {

  return {
    type: 'component',
    resolve: (name: string) => {
      if (componentList.includes(name)) {
        return {
          name: name,
          from: '@runningpeli/virgo',
        }
      }
    }
  }
}
