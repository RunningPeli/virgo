import type { } from '@nuxt/schema' // Mandatory to avoid a bug when building
import { addComponent, defineNuxtModule, useLogger } from '@nuxt/kit'

import { componentList } from './component-list'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@runningpeli/virgo',
    configKey: 'virgo',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  defaults: {},
  async setup(options) {
    const logger = useLogger(' virgo ')
    logger.info(`Nuxt module setup with options:`, JSON.stringify(options, null, 2))

    componentList.forEach((component) => {
      addComponent({
        name: component,
        export: component,
        filePath: '@runningpeli/virgo',
      })
    })
    logger.info(`module setup complete with components:`, componentList.join(', '))
    logger.info(`Total components added:`, componentList.length)
  },
})
