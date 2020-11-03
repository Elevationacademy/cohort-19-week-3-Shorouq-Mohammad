//exercise 1 callbacks
const push = function () {
  console.log("pushing it!");
};

const pull = function () {
  console.log("pulling it!");
};

const pushPull = function (fx) {
  fx();
};
pushPull(push); //should print "pushing it!"
pushPull(pull); //should print "pulling it!"

//exercise 2 callbacks
const returnTime = function (time) {
  alert("The current time is: " + time);
};
const getTime = function (fx) {
  fx(new Date());
};
getTime(returnTime);

//exercise 3 callbacks
const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};
const logData = function (data) {
  console.log(data);
};
displayData(alert, logData, "I like to party"); //the problem is that log data is not defined

//exercise 4 arrow functions
const sum = (x, y, z) => x + y + z;
console.log(sum(10, 15, 22));

//exercise 5 arrow functions
const capitalize = (name) =>
  `${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`;
console.log(capitalize("bOb")); // returns Bob
console.log(capitalize("TAYLOR")); // returns Taylor
console.log(capitalize("feliSHIA")); // returns Felishia

//exercise 6 arrow functions
const determineWeather = (temp) => {
  if (temp > 25) {
    return "hot";
  }
  return "cold";
};
const commentOnWeather = temp => `it's ${determineWeather(temp)}`
console.log(commentOnWeather(30)); //returns "It's hot"
console.log(commentOnWeather(22)); //returns "It's cold"


//exercise 7 arrow functions
const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")  //it will make the box div yellow and alert with BOOM
  