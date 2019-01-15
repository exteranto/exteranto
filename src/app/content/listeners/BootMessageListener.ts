import { Autowired } from '@exteranto/ioc'
import { Listener } from '@exteranto/events'
import { Messaging } from '@exteranto/messaging'
import { AppBootedEvent } from '@exteranto/core'

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
   * @param {AppBootedEvent} event
   */
  public handle (event: AppBootedEvent) {
    this.messaging.listen()
  }
}
