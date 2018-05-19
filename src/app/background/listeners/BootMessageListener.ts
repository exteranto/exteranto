import { Messaging } from '@exteranto/messaging'
import { Listener } from '@exteranto/events'
import { Autowired } from '@exteranto/ioc'
import { Script } from '@exteranto/support'

export class BootMessageListener implements Listener {
  /**
   * The messaging API implementation.
   *
   * @var {Messaging}
   */
  @Autowired
  private messaging: Messaging

  /**
   * Handle the fired event.
   *
   * @param {any} payload
   */
  public handle (payload: any) {
    this.messaging.listen()
  }
}
