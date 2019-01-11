import { Listener } from '@exteranto/events'

export class ShowWelcomeMessage implements Listener {
  /**
   * Handle the fired event.
   *
   * @param {any} payload
   */
  public handle (payload: any) {
    console.log(`
     _______  ___  ___  ___________  _______   _______        __      _____  ___  ___________  ______
    /"     "||"  \\/"  |("     _   ")/"     "| /"      \\      /""\\    (\\"   \\|"  \\("     _   ")/    " \\
   (: ______) \\   \\  /  )__/  \\\\__/(: ______)|:        |    /    \\   |.\\\\   \\    |)__/  \\\\__/// ____  \\
    \\/    |    \\\\  \\/      \\\\_ /    \\/    |  |_____/   )   /' /\\  \\  |: \\.   \\\\  |   \\\\_ /  /  /    ) :)
    // ___)_   /\\.  \\      |.  |    // ___)_  //      /   //  __'  \\ |.  \\    \\. |   |.  | (: (____/ //
   (:      "| /  \\   \\     \\:  |   (:      "||:  __   \\  /   /  \\\\  \\|    \\    \\ |   \\:  |  \\        /
    \\_______)|___/\\___|     \\__|    \\_______)|__|  \\___)(___/    \\___)\\___|\\____\\)    \\__|   \\"_____/
  _                                         _               _             __                                   _
 | |__ _ _ _____ __ _____ ___ _ _   _____ _| |_ ___ _ _  __(_)___ _ _    / _|_ _ __ _ _ __  _____ __ _____ _ _| |__
 | '_ \\ '_/ _ \\ V  V (_-</ -_) '_| / -_) \\ /  _/ -_) ' \\(_-< / _ \\ ' \\  |  _| '_/ _\` | '  \\/ -_) V  V / _ \\ '_| / /
 |_.__/_| \\___/\\_/\\_//__/\\___|_|   \\___/_\\_\\\\__\\___|_||_/__/_\\___/_||_| |_| |_| \\__,_|_|_|_\\___|\\_/\\_/\\___/_| |_\\_\\


 - Docs: http://exteranto.github.io/
 - Issues: https://github.com/exteranto/exteranto/issues

 v1.1.1, maintained by Pavel Koch (https://github.com/kouks, https://pavelkoch.io)
    `)
  }
}
