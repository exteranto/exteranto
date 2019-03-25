import { Messaging } from '@exteranto/api'
import { Autowired, Listener } from '@exteranto/core'

export class BootMessageListener implements Listener {

  /**
   * The messaging API implementation.
   */
  @Autowired
  private messaging: Messaging

  /**
   * Handle the fired event.
   */
  public handle () : void {
    this.messaging.listen()
  }

}
