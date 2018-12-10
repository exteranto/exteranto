import { TabsProvider } from '@exteranto/tabs'
import { StorageProvider } from '@exteranto/storage'
import { MessagingProvider } from '@exteranto/messaging'

import { AppProvider } from '@/providers/AppProvider'

export default {

  providers: [

    /**
     * All Exteranto framework service providers are specified here. This part
     * should not be edited.
     */

    StorageProvider,
    MessagingProvider,

    /**
     * All plugin service providers are specified here.
     */

    // PluginProvider,

    /**
     * All application service providers are specified here.
     */

    AppProvider,

  ],

  aspects: [

    /**
     * All aspects for the application should be declared here.
     */

    // LoggingAspect,

  ],

  /**
   * All parameters that are here are accessible from the application container
   * using `Container.resolveParam()` or the @Param annotations.
   */

  bound: {
    app: {
      name: 'Exteranto',
      version: '1.0.0'
    },

    cache: {
      timeout: 600,
      forfeit: false,
      driver: 'local'
    }
  }
}
