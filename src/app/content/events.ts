import { ListenerBag, Class, Event } from '@exteranto/core'

/**
 * Events.
 */

import { AppBootedEvent, Exception } from '@exteranto/core'

/**
 * Listeners.
 */

import { Handler } from '@/exceptions/Handler'
import { BootMessageListener } from './listeners/BootMessageListener'
import { BootBaseVueInstance } from './listeners/BootBaseVueInstance'

export default (touch: (event: Class<Event>) => ListenerBag) => {

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
