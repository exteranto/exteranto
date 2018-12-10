import { Listener } from '@exteranto/events'

export class TestListener implements Listener {
  /**
   * Handle the fired event.
   *
   * @param {any} tab
   */
  public handle (tab: any) {
    tab.close()
  }
}
