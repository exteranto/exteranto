import config from 'config'
import events from './events'
import { App, Script } from '@exteranto/core'

const app: App = new App(
  Script.CONTENT,
  config,
  events
)

app.start()
app.boot()
