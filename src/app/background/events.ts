import { Handler } from '@/exceptions'
import { Event, ListenerBag } from '@exteranto/events'
import { ShowWelcomeMessage } from './listeners/ShowWelcomeMessage'
import { BootMessageListener } from './listeners/BootMessageListener'

import { Exception } from '@exteranto/exceptions'
import { ApplicationBootedEvent } from '@exteranto/core'

/**
 * All script-specific events and their listeners are defined here. Consider
 * this a routing file for the application.
 */
export default (touch: (e: typeof Event) => ListenerBag) => {
  /**
   * Register listeners and middleware for your application events.
   */
  touch(ApplicationBootedEvent)
    .addListener(new BootMessageListener)
    .addListener(new ShowWelcomeMessage)

  /**
   * The default implementation of the exception handler only rethrows the
   * exception. Feel free to extend the handler and implement your own exception
   * handling logic. Similarly, you can create a handler for any exception
   * thrown in the application.
   */
  touch(Exception)
    .addListener(new Handler)

  /**
   * You can also register message receivers and their listeners. Just make sure
   * to only assign one listener to each message if you expect a response.
   */
  // touch(MyMessage)
  //   .addMiddleware(MyMiddleware)
  //   .addListener(MyReceiver)
}
