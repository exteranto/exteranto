import { ListenerBag } from '@exteranto/core'

import { AppBootedEvent } from '@exteranto/core'
import { Exception } from '@exteranto/exceptions'

import { Handler } from '@/exceptions/Handler'
import { ShowWelcomeMessage } from './listeners/ShowWelcomeMessage'
import { BootMessageListener } from './listeners/BootMessageListener'

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
  //   .addMiddleware(new MyMiddleware)
  //   .addListener(new MyReceiver)
}
