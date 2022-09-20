import {FINANCE,WEATHER,EMOTIONS} from './consts.js';

const handleComplaints = function(complaint) {
  if (complaint.type === FINANCE) {
    console.log("Money doesnt grow on trees, you know");
  } else if (complaint.type === WEATHER) {
    console.log("It is the way of nature. Not much to be");
  } else if (complaint.type === EMOTIONS) {
    console.log("Itll pass, as all things do, with time");
  }
}

export {handleComplaints}
