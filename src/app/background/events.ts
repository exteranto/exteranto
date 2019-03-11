import { ListenerBag, Class, Event } from '@exteranto/core'

/**
 * Events.
 */

import { AppBootedEvent, Exception } from '@exteranto/core'

/**
 * Listeners.
 */

import { Handler } from '@/exceptions/Handler'
import { ShowWelcomeMessage } from './listeners/ShowWelcomeMessage'
import { BootMessageListener } from './listeners/BootMessageListener'

export default (touch: (event: Class<Event>) => ListenerBag) => {

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
