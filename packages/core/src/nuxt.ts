import type { } from '@nuxt/schema' // Mandatory to avoid a bug when building
import { addComponent, defineNuxtModule } from '@nuxt/kit'

import { componentList } from './component-list';

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
    console.log(`[ virgo ] Nuxt module setup with options:`, JSON.stringify(options, null, 2));
    
    componentList.forEach((component) => {
      addComponent({
        name: component,
        export: component,
        filePath: '@runningpeli/virgo',
      })
    })
    console.log(`[ virgo ] module setup complete with components:`, componentList.join(', '));
    console.log(`[ virgo ] Total components added:`, componentList.length);
  },
})
