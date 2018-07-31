/// <reference types="mocha" />
/// <reference types="chai" />
/// <reference types="chai-as-promised" />

require('jsdom-global')()
require('vue').config.productionTip = false

import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);
