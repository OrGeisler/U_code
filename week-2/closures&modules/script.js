//1)

// function StringFormatter() {
//   function capitalizeFirst(string) {
//     console.log(string.charAt(0).toUpperCase() + string.slice(1).toLowerCase());
//   }
//   function skewerCase(string) {
//     console.log(string.replace(" ", "-"));
//   }

//   return {
//     capitalizeFirst: capitalizeFirst,
//     skewerCase: skewerCase,
//   };
// }

// const formatter = StringFormatter();

// formatter.capitalizeFirst("dorothy"); //should print Dorothy
// formatter.skewerCase("blue box"); //should print blue-box

//2

// function Bank() {
//     let money = 500
//     function depositCash  (cash) {
//         money += cash
//     }
//     checkBalance  = () => console.log(money)

//     return {
//         deposit:depositCash,
//         showBalance:checkBalance
//     }
// }
// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950

//3)

// function SongsManager() {
//   const songs = {};
//   addSong = (name, url) => {
//     songs[name] = url.substring(url.indexOf("=") + 1);
//   };
//   getSong = (name) => {
//     console.log(`https://www.youtube.com/watch?v${songs[name]}`);
//   };
//   return {
//     addSong: addSong,
//     getSong: getSong,
//   };
// }

// const songsManager = SongsManager();
// songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
// songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
// songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

// songsManager.getSong("sax"); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ

let _memories = ["that time at band camp", "yesterday's breakfast"]
    
const Brain = function(){
    const dayDream = () => _memories
    const experience = memory => _memories.push(memory)
    const forget = memory => _memories.splice(_memories.indexOf(memory), 1)
    const spazz = () => console.log("bleurg")

    return{
        reminisce: dayDream,
        live: experience,
        blank: forget,
        freakOut: spazz
    }
}

const brain = Brain()
brain.reminisce()