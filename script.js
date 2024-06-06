const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');
const choiceCpu = document.getElementById('choice-cpu-img');
const choiceUser = document.getElementById('choice-user-img');
const title = document.getElementById('title');
const puntaje = document.getElementById('puntaje');
const puntajeCpu = document.getElementById('puntaje-cpu');
let choice = 0;
let choiceCPU = 0;
let img = "";
let imgUser = "";
let winsUser = 0;
let winsCpu= 0;


piedra.addEventListener("click",piedraChoice);
papel.addEventListener("click",papelChoice);
tijera.addEventListener("click",tijeraChoice);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
async function piedraChoice(){ 
    choice = 1;
    changeImg();
    referee();
    await delay(3000);
    title.textContent = "Rock, Paper, Scissors";
    winner();
};
async function papelChoice(){ 
    choice = 2;
    changeImg();
    referee();
    await delay(3000);
    title.textContent = "Rock, Paper, Scissors";
    winner();
};
async function tijeraChoice(){ 
    choice = 3;
    changeImg();
    referee();
    await delay(3000);
    title.textContent = "Rock, Paper, Scissors";
    winner();
};
function referee(){
    if(choiceCPU == choice){
        title.textContent = "Draw";
    }else if(choiceCPU == 1 && choice == 2 || choiceCPU == 2 && choice == 3 || choiceCPU == 3 && choice == 1){
        title.textContent = "You Win!!!";
        winsUser += 1;
        puntaje.textContent = winsUser; 
    }else if(choiceCPU == 1 && choice == 3 || choiceCPU == 2 && choice == 1 || choiceCPU == 3 && choice == 2){
        title.textContent = "You Lose :(";
        winsCpu += 1;
        puntajeCpu.textContent = winsCpu;  
    }
}
async function winner(){
    choice = 0;
    choiceCPU = 0;
    if (winsUser == 3){
        title.textContent = "GANARON LOS HUMANOS YEIIIIII";
        await delay(4000);
        location.reload();
    }else if (winsCpu == 3){
        title.textContent = "Perdimos muchachos :( pipipipipi";
        await delay(4000);
        location.reload();
    }
}
async function changeImg(){
    choiceCPU =Math.floor(Math.random() * 3) + 1;
    if(choiceCPU == 1){
        img = "./src/piedra.jpg";
    }else if(choiceCPU == 2){
        img = "./src/papel.jpeg";
    }else if(choiceCPU == 3){
        img = "./src/tijeras.png";
    }
    if(choice == 1){
        imgUser = "./src/piedra.jpg";
    }else if(choice == 2){
        imgUser = "./src/papel.jpeg";
    }else if(choice == 3){
        imgUser = "./src/tijeras.png";
    }
    choiceUser.style.opacity = 0;
    choiceCpu.style.opacity = 0;
    await delay(500); 
    choiceUser.src = imgUser;
    choiceCpu.src = img;
    choiceUser.style.opacity = 1;
    choiceCpu.style.opacity = 1;
    await delay(2000);
    choiceUser.style.opacity = 0;
    choiceCpu.style.opacity = 0;
    await delay(500);
    choiceUser.src = "./src/incognita.png";
    choiceCpu.src = "./src/incognita.png";
    choiceUser.style.opacity = 1;
    choiceCpu.style.opacity = 1;
    await delay(500);
}