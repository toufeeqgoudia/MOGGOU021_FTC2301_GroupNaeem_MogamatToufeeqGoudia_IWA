// scripts.js

import { company } from "/IWA3/challenge1/configuration.js";
import { year } from "/IWA3/challenge1/configuration.js";

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message