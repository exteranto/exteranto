import config from 'config'
import events from './events'
import { App, Script } from '@exteranto/core'

/**
 * The content script entry point. Note that no functionality should be included
 * here as the container is not booted prior to the AppBootedEvent. Please
 * register a listener for this event for functionality that should be executed
 * upon application boot.
 *
 * Enjoy the awesomeness!
 *
 * @see https://github.com/exteranto
 * @author Pavel Koch <kouks.koch@gmail.com>
 * @author Michael Bausano <bausanomichal@gmail.com>
 */

// This is safari content script fix to avoid reinjecting the script over
// and over again.
if (window === window.top) {
  const app: App = new App(
    Script.CONTENT,
    config,
    events
  )

  app.bootstrap()
}
