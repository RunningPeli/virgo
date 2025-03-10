import type { } from '@nuxt/schema' // Mandatory to avoid a bug when building
import { addComponent, defineNuxtModule } from '@nuxt/kit'

import { components } from './components'

export interface ModuleOptions {
  prefix: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@runningpeli/virgo',
    configKey: 'virgo',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  defaults: {
    prefix: '',
  },
  async setup(options) {
    for (const component of components) {
      addComponent({
        name: `${options.prefix}${component}`,
        export: component,
        filePath: '@runningpeli/virgo',
      })
    }
  },
})
