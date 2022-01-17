const words = {
    subjects: ["Mummy", "Puppy", "Lion", "Whale", "Bear", "Michael", "Cary", "Bobby", "Jack", "Sarah"],
    verbs:[
      ["is", "was", "seems", "feels"], // used with adjectives
      ["eats", "cooks"], // used with fruits and vegetables
      ["is sleeping", "is running", "is tired"] // used alone
    ],
    objects: [
      ["angry", "happy", "sleepy", "strong", "polite"], // adjectives
      ["apples", "bananas", "oranges", "broccoli", "carrots", "onions"], // fruits and vegetables
      [""]
    ],
    addOns: ["sometimes", "everyday", "rarely", "every month"] 
}

//create a random number based on the input array
let getRandomNum = arr => {
    return Math.floor(Math.random() * arr.length);
};

//choose random indexes from the different arrays
function chooseItem(list) {
    return list[getRandomNum(list)];
};

function generateMessage() {
    let subject = chooseItem(words["subjects"]);

    let randomIndex = getRandomNum(words["verbs"]);
    let verb = chooseItem(words["verbs"][randomIndex]);
    let object = chooseItem(words["objects"][randomIndex]);
    let addOn = chooseItem(words["addOns"]);

    console.log(`${subject} ${verb} ${object}.`);
    console.log(`${subject} ${verb} ${object}${(object ? " " : "") + addOn}`);
};

function generateRandomMessages(times) {
  for(let i = 0;i < times; i++) {
    generateMessage();
  }
};

function generateTimingRandomMessages(times) {
  // call the generateMessage each 0.5 of a second
  let id = setInterval(function() {
    if(times-- === 1) {
      clearInterval(id);
    }
    generateMessage();
  }, 2000);
};

generateTimingRandomMessages(15);
