import { Messaging } from '@exteranto/api'
import { Autowired, Listener } from '@exteranto/core'

import { AppBootedEvent } from '@exteranto/core'

export class BootMessageListener implements Listener {
  /**
   * The messaging API implementation.
   */
  @Autowired
  private messaging: Messaging

  /**
   * Handle the fired event.
   *
   * @param event The event instance
   */
  public handle (event: AppBootedEvent) : void {
    this.messaging.listen()
  }
}
