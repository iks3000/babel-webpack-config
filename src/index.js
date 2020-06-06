import Log from './log';
import Calc from './calc';

import img from './death-star.png';

const log = new Log();
const calc = new Calc();

log.log(calc.add(1, 2, 3));

const el = document.createElement('img');
el.src = img;
document.body.appendChild(el);