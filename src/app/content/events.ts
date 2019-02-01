import { ListenerBag } from '@exteranto/core'

import { AppBootedEvent } from '@exteranto/core'
import { Exception } from '@exteranto/exceptions'

import { Handler } from '@/exceptions/Handler'
import { BootMessageListener } from './listeners/BootMessageListener'
import { BootBaseVueInstance } from './listeners/BootBaseVueInstance'

/**
 * All script-specific events and their listeners are defined here. Consider
 * this a routing file for the application.
 */
export default (touch: (event: any) => ListenerBag) => {
  /**
   * Register listeners and middleware for your application events.
   */
  touch(AppBootedEvent)
    .addListener(new BootMessageListener)
    .addListener(new BootBaseVueInstance)

  /**
   * The default implementation of the exception handler only rethrows the
   * exception. Feel free to extend the handler and implement your own exception
   * handling logic. Similarly, you can create a handler for any exception
   * thrown in the application.
   */
  touch(Exception)
    .addListener(new Handler)
}
