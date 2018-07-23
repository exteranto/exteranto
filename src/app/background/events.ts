import { BootMessageListener } from './listeners/BootMessageListener'
import { ShowWelcomeMessage } from './listeners/ShowWelcomeMessage'
import { Handler } from '@exteranto/exceptions'

/**
 * All script-specific events and their listeners are defined here. Consider
 * this a routing file for the application.
 */
export default {

  'app.booted': [
    BootMessageListener,
    ShowWelcomeMessage,
  ],

  /**
   * The default implementation of the exception handler only rethrows the
   * exception. Feel free to extend the handler and implement your own exception
   * handling logic. Just make sure to call the `super.handle()` method in your
   * subclasses to rethrow the error.
   */
  'app.exception': Handler,

}
