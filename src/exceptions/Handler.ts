import { Exception, Listener } from '@exteranto/core'

export class Handler implements Listener {

  /**
   * Generic exception listener, simply rethrows the exception. Implement your
   * own functionality here.
   *
   * @param event The event instance
   */
  public handle (event: Exception) {
    throw event
  }

}
