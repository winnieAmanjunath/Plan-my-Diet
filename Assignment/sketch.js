var canvas;
var backgroundImage;
var titleImg;
var apple, orange, banana;
var rice, potato, roti;
var fish, chicken;
var carbohydrate = 0, protein=0, fat=0, fibre=0, calories=0;
var numberApple = 0, numberOrange=0, numberBanana=0, numberRiceBowl=0, numberPotato=0, numberRoti = 0;
var numberFish = 0, numberPaneer = 0, numberEggs = 0, numberMilk = 0;
var numberleaves = 0, numberVeggies = 0;
var maxCarb = 325,maxProtein = 50, maxFat = 86, maxFibre=35;

function preload() {
 backgroundImage = loadImage("./assets/background1.jfif");
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  
  titleImg = createImg('./assets/title.PNG');
  titleImg.position(width/2-90,30);
  titleImg.size(400,50);

  
  //create apple
  apple = createImg('./assets/apple.jpg');
  apple.position(200,200);
  apple.size(100,100);
  apple.mouseClicked(addApple);

  //create orange
  orange = createImg('./assets/orange.jpg');
  orange.position(300,200);
  orange.size(100,100);
  orange.mouseClicked(addOrange);

  //create banana
  banana = createImg('./assets/banana.jpg');
  banana.position(400,200);
  banana.size(100,100);
  banana.mouseClicked(addBanana);

  //create rice
  rice = createImg('./assets/rice.jpg');
  rice.position(200,300);
  rice.size(100,100);
  rice.mouseClicked(addRice);

  //create potato
  potato = createImg('./assets/potato.jpg');
  potato.position(300,300);
  potato.size(100,100);
  potato.mouseClicked(addPotato);

  //create Roti
  roti = createImg('./assets/roti.jpg');
  roti.position(400,300);
  roti.size(100,100);
  roti.mouseClicked(addRoti);

  //create Fish
  fish = createImg('./assets/fish.jpg');
  fish.position(200,400);
  fish.size(100,100);
  fish.mouseClicked(addFish);

  //create Paneer
  paneer  = createImg('./assets/paneer.jpg');
  paneer.position(300, 400);
  paneer.size(100,100);
  paneer.mouseClicked(addPaneer);


  //create Egg
  egg = createImg('./assets/egg.jfif');
  egg.position(400, 400);
  egg.size(100,100);
  egg.mouseClicked(addEgg);

  //create leaves 
  leaves = createImg('./assets/leaves.jfif');
  leaves.position(200, 500);
  leaves.size(100,100);
  leaves.mouseClicked(addLeaves);

  //create veggies 
  veggies = createImg('./assets/veggies.jpg');
  veggies.position(300, 500);
  veggies.size(100,100);
  veggies.mouseClicked(addVeggies);

  //create Milk
  milk = createImg('./assets/milk.jpg');
  milk.position(400, 500);
  milk.size(100,100);
  milk.mouseClicked(addMilk);
}


function draw() {
  background(backgroundImage);
  
  showCarb();
  showProtein();
  showFat();
  showFibre();

  fill("red");
  textSize(30);
  text("Selected Diet PLan",width-350,200)
  fill ("green");
  textSize(20);
  text("My Nutrition Score", width / 2 - 95, 177)
  text ("Apples:   "+numberApple, width-350,250);
  text ("Oranges:  "+numberOrange, width-350,275);
  text ("Bananas:  "+numberBanana, width-350,300);
  text ("Rice:  "+numberRiceBowl, width-350,325);
  text ("Potatos:  "+numberPotato, width-350,350);
  text ("Roties:  "+numberRoti, width-350,375);
  text ("Fish:  "+numberFish, width-350,400);
  text ("PaneerCubes:  "+numberPaneer, width-350,425);
  text ("Eggs:  "+numberEggs, width-350,450);
  text ("Leaves:  "+numberleaves, width-350,475);
  text ("Veggies:  "+numberVeggies, width-350,500);
  text ("Milk:  "+numberMilk, width-350,525);
}

function addApple(){
  carbohydrate += 25;
  protein += 1;
  fibre += 3;
  numberApple += 1;
}

function addOrange(){
  carbohydrate += 15;
  protein += 1.2;
  fat+=0.2;
  fibre += 3.1;
  numberOrange += 1;
}

function addBanana(){
  carbohydrate += 27;
  protein += 1.3;
  fat+=0.4;
  fibre += 3.1;
  numberBanana += 1;
}

function addRice(){
  carbohydrate += 45;
  protein += 4.3;
  fat+=0.4;
  fibre += 0.6;
  numberRiceBowl += 1;
}

function addPotato(){
  carbohydrate += 37;
  protein += 4.3;
  fat += 0.4;
  fibre += 4.7; 
  numberPotato += 1;
}

function addRoti(){
  carbohydrate += 18;
  protein += 3.1;
  fat+=3.7;
  fibre += 3.9;
  numberRoti += 1;
}

function addFish(){
  protein += 22;
  fat += 12;
  numberFish += 1;
}

function addPaneer(){
  carbohydrate += 6.1;
  protein += 19.1;
  fat += 22;
  numberPaneer += 1;
}

function addEgg(){
  carbohydrate += 0.6;
  protein += 6;
  fat += 5;
  numberEggs += 1;
}

function addLeaves(){
  carbohydrate += 1.3;
  protein += 2.2;
  fat += 0.6;
  fibre += 2.2;
  numberleaves += 1;
}

function addVeggies(){
  carbohydrate += 1.3;
  protein += 2.2;
  fat += 0.6;
  fibre += 2.2;
  numberVeggies += 1;
}

function addMilk(){
  carbohydrate += 12;
  protein += 8;
  fat += 8;
  numberMilk += 1;
}
//Showing Status score

function showCarb() {
  push();
  textSize(15);
  fill("black");
  text("Carbohydrate",width / 2 - 98, 195)
  fill("white");
  rect(width / 2 - 100, 200, maxCarb, 20);

  if(carbohydrate != 0){
    if(carbohydrate < 200){
      fill("yellow");
      rect(width / 2 - 100, 200, carbohydrate, 20);
      noStroke();
    }
    else if(carbohydrate < 325){
      fill("green");
      rect(width / 2 - 100, 200, carbohydrate, 20);
      noStroke();
    }
    else{
      fill("red");
      rect(width / 2 - 100, 200, carbohydrate, 20);
      noStroke();

    }
  }
  pop();
}

function showProtein() {
  push();
  textSize(15);
  fill("black");
  text("Protein",width / 2 - 98, 245)
  fill("white");
  rect(width / 2 - 100, 250, maxProtein, 20);

  if(protein != 0){
    if(protein < 20){
      fill("yellow");
      rect(width / 2 - 100, 250, protein, 20);
      noStroke();
    }
    else if(protein < 70){
      fill("green");
      rect(width / 2 - 100, 250, protein, 20);
      noStroke();
    }
    else{
      fill("red");
      rect(width / 2 - 100, 250, protein, 20);
      noStroke();
    }
  
  }
  pop();
}

function showFat() {
  push();
  textSize(15);
  fill("black");
  text("Fat",width / 2 - 98, 295)
  fill("white");
  rect(width / 2 - 100, 300, maxFat, 20);

  if(fat != 0){
    if(fat < 50){
      fill("yellow");
      rect(width / 2 - 100, 300, fat, 20);
      noStroke();
    }
    else if(fat < 86){
      fill("green");
      rect(width / 2 - 100, 300, fat, 20);
      noStroke();
    }
    else{
      fill("red");
      rect(width / 2 - 100, 300, fat, 20);
      noStroke();
    }
  
  }
  pop();
}

function showFibre() {
  push();
  textSize(15);
  fill("black");
  text("Fibre",width / 2 - 98, 345)
  fill("white");
  rect(width / 2 - 100, 350, maxFibre, 20);

  if(fibre != 0){
    if(fibre < 25){
      fill("yellow");
      rect(width / 2 - 100, 350, fibre, 20);
      noStroke();
    }
    else if(fibre < 35){
      fill("green");
      rect(width / 2 - 100, 350, fibre, 20);
      noStroke();
    }
    else{
      fill("red");
      rect(width / 2 - 100, 350, fibre, 20);
      noStroke();
    }
  
  }
  pop();
}


