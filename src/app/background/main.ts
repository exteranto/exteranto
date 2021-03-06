import config from 'config'
import events from './events'
import { App, Script } from '@exteranto/core'

/**
 * The background script entry point. Note that no functionality should be
 * included here as the container is not booted prior to the AppBootedEvent.
 * Please register a listener for this event for functionality that should be
 * executed upon application boot.
 *
 * Enjoy the awesomeness!
 *
 * @see https://github.com/exteranto
 * @author Pavel Koch <kouks.koch@gmail.com>
 * @author Michael Bausano <bausanomichal@gmail.com>
 */

const app: App = new App(
  Script.BACKGROUND,
  config,
  events
)

app.bootstrap()
