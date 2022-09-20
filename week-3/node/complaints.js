import {FINANCE,WEATHER,EMOTIONS} from './consts.js';
import {handleComplaints} from './complaintsHandler.js'


let complaint1 = {
    text: "I'm not getting enough money",
    type: FINANCE
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: FINANCE
}

let complaint3 = {
    text: "I'm always full of energy",
    type: EMOTIONS
}

handleComplaints(complaint1) //should print "Money doesn't grow on trees, you know."
handleComplaints(complaint2) //should print "Money doesn't grow on trees, you know."
handleComplaints(complaint3) //should print "It'll pass, as all things do, with time."