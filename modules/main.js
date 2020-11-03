//exercise 1
const StringFormatter = function () {
  const capitalizeFirst = function (str) {
    console.log(`${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`);
  };
  const skewerCase = function (str) {
    console.log(str.replace(" ", "-"));
  };
  return { capitalizeFirst, skewerCase };
};
const formatter = StringFormatter();
formatter.capitalizeFirst("dorothy"); //should print Dorothy
formatter.skewerCase("blue box"); //should print blue-box

//exercise 2
// A private money variable which starts off at 500
// A depositCash function which takes a cash parameter and uses it to increase money
// A checkBalance function which logs the money
const Bank = function () {
  let money = 500;
  const depositCash = function (cash) {
    money += cash;
  };
  const checkBalance = function () {
    console.log(money);
  };
  return { deposit: depositCash, showBalance: checkBalance };
};
const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); //should print 950

//exercise 3
const SongsManager = function(){
    let songs = {}
    const addSong = function(name, url){
        const index = url.indexOf("=")+1
        songs[name]= url.slice(index)
    }
    const getSong = function(name){
        console.log("https://www.youtube.com/watch?v="+songs[name]);
    }
    return {addSong, getSong}
}
const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.addSong("Hathehi Lailaty", "https://www.youtube.com/watch?v=mBbLQ_7UevY&ab_channel=UmmKulthum-%D8%A7%D9%85%D9%83%D9%84%D8%AB%D9%88%D9%85")
songsManager.getSong("Hathehi Lailaty")

