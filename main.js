// Didn't end up using.
let history = []
let categories = []


// Arrays for questions in each value.
let twoHundred = []
let fourHundred = []
let sixHundred = []
let eightHundred = []
let oneThousand = []



//Score and the way to tally score.
let score = 0 || localStorage.getItem('score');
let value = 0;
let scoreUpdate = document.querySelector('.update-score')
scoreUpdate.innerText = score

//Answer to each question and where the info needs to be displayed.
let answer = ''
let catQuest = document.querySelector('.cat-quest')
let questi = document.querySelector('.question')
let docBody = document.querySelector('body')
const dailyD = document.querySelector('.double')
let doubleIt = 0;



//Sounds for win or lose.
let happySound = new Audio('happy.mp3')
let sadSound = new Audio('sad.mp3')



// Reset button clears local storage and refreshes page to get rid of css styles.
let reset = document.querySelector('.reset');
reset.addEventListener('click', function(){
    score = 0;
   localStorage.clear();
    console.log(score)
    scoreUpdate.innerText = score
    location.reload();
})


//Main function starts with parsing.
async function main() {
    //Initial pass
    const rawData = await fetch('jeopardy.json');
    const data = await rawData.json();
    

    //For loop to seperate questions based on quesiton value without any user input.
    for (i=0; i<data.length; i++){


        
 let curVal = data[i].value
 //console.log(curVal)
        if (curVal === "$200"){
            twoHundred.push(data[i])
        }

        if (curVal === "$400"){
            fourHundred.push(data[i])
        }

        if (curVal === "$600"){
            sixHundred.push(data[i])
        }

        if (curVal === "$800"){
            eightHundred.push(data[i])
        }

        if (curVal === "$1,000"){
            oneThousand.push(data[i])
        }
    }




    //Setting Initial Inner Text of grids
    const twoHundo = document.querySelectorAll('#twoHundo')
    twoHundo.forEach(element => element.innerText = '$200')

    const fourHundo = document.querySelectorAll('#fourHundo')
    fourHundo.forEach(element => element.innerText = '$400')

    const sixHundo = document.querySelectorAll('#sixHundo')
    sixHundo.forEach(element => element.innerText = '$600')

    const eightHundo = document.querySelectorAll('#eightHundo')
    eightHundo.forEach(element => element.innerText = '$800')

    const band = document.querySelectorAll('#band')
    band.forEach(element => element.innerText = '$1,000')


    //Add event listener to all grid items.
    const gridItem = document.querySelectorAll(".grid-item");
     gridItem.forEach(element => 
         element.addEventListener('click', function(){
            console.log(doubleIt)

            
            let randNum = Math.floor(Math.random() * 1000)
            
            

            //Check the elements inner text to see what the value is.
             if (element.innerText === '$200'){
                 value = 200;
                 questi.innerText = twoHundred[randNum].question
                 catQuest.innerText = twoHundred[randNum].category
                 answer = twoHundred[randNum].answer
                 element.style.opacity = '0.5'
                 console.log(twoHundred[randNum])

                 // Tried to do double Jeopardy. Couldn't get the score updater to work properly.
                 if (twoHundred[randNum].round === 'Double Jeopardy!'){
                    myContent.style.display = 'none'
                    dailyD.style.display = 'block'
                    dailyD.style.opacity = '1'
                    doubleIt = 100;
                 }
             }

             if (element.innerText === '$400'){
                 value = 400;
                questi.innerText = fourHundred[randNum].question
                catQuest.innerText = fourHundred[randNum].category
                answer = fourHundred[randNum].answer
                element.style.opacity = '0.5'
                console.log(fourHundred[randNum])

                if (fourHundred[randNum].round === 'Double Jeopardy!'){
                    myContent.style.display = 'none'
                    dailyD.style.display = 'block'
                    dailyD.style.opacity = '1'
                    doubleIt = 100;
                 }
            }

            if (element.innerText === '$600'){
                value = 600;
                questi.innerText = sixHundred[randNum].question
                catQuest.innerText = sixHundred[randNum].category
                answer = sixHundred[randNum].answer
                element.style.opacity = '0.5'
                console.log(sixHundred[randNum])

                if (sixHundred[randNum].round === 'Double Jeopardy!'){
                    myContent.style.display = 'none'
                    dailyD.style.display = 'block'
                    dailyD.style.opacity = '1'
                    doubleIt = 100;
                 }
            }

            if (element.innerText === '$800'){
                value = 800;
                questi.innerText = eightHundred[randNum].question
                catQuest.innerText = eightHundred[randNum].category
                answer = eightHundred[randNum].answer
                element.style.opacity = '0.5'
                console.log(eightHundred[randNum])

                if (eightHundred[randNum].round === 'Double Jeopardy!'){
                    myContent.style.display = 'none'
                    dailyD.style.display = 'block'
                    dailyD.style.opacity = '1'
                    doubleIt = 100;
                 }
            }

            if (element.innerText === '$1,000'){
                value = 1000;
                questi.innerText = oneThousand[randNum].question
                catQuest.innerText = oneThousand[randNum].category
                answer = oneThousand[randNum].answer
                element.style.opacity = '0.5'
                console.log(oneThousand[randNum])

                if (oneThousand[randNum].round === 'Double Jeopardy!'){
                    myContent.style.display = 'none'
                    dailyD.style.display = 'block'
                    dailyD.style.opacity = '1'
                    doubleIt = 100;
                 }
            }


         })
         )


}
main();



//Used modal to add an answer checker.
const modalContent = document.querySelector('.modal-content')
const submit = document.querySelector('.submit');
const myContent = document.querySelector('.myContent')
const happy = document.querySelector('.happy')
const sad = document.querySelector('.sad')



//On click submit, compare the user input to the stored answer value.
submit.addEventListener('click', function(){
const input = document.querySelector('.input-text');    
    console.log(score)
    //Cheat code that I couldn't get to fully pan out.
    if (input.value === 'SHOW ME THE MONEY!!!'){
        window.alert('HERE YA GO!!!')
        score = score + value + value
    }


    if (input.value === answer){
        catQuest.innerText = 'Correct!'
        questi.innerText = 'Correct!'
        console.log(score)

        score = score + value
        
        scoreUpdate.innerText = score
        localStorage.setItem('score', scoreUpdate.innerText);
        modalContent.style.border = 'solid green 5px'
        modalContent.innerText = answer;
        myContent.style.display = 'none'
        happy.style.display = 'block'
        happy.style.opacity = '1';
        happySound.play();
        docBody.style.backgroundColor = 'green'
        
    }

    if (input.value !== answer && input.value !== 'SHOW ME THE MONEY!!!' ){
        catQuest.innerText = 'Incorrect!'
        questi.innerText = 'Incorrect!'
        console.log(score)

        score = score - value

        scoreUpdate.innerText = score
        localStorage.setItem('score', scoreUpdate.innerText);
        modalContent.style.border = 'solid red 5px'
        modalContent.innerText = answer;
        myContent.style.transition = 'all 2s'
        myContent.style.display = 'none'
        sad.style.transition = '2s width'
        sad.style.display = 'block'
        sad.style.opacity = '1';
        sadSound.play();
        docBody.style.backgroundColor = 'red'
    }





})

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



//On click function to get picture clicks to bring back the grid body.
let image = document.querySelectorAll('img')
image.forEach(element =>
    element.addEventListener('click', function(){
        myContent.style.display = 'block'
        element.style.display = 'none'
        docBody.style.backgroundColor = '#D3D3D3'
    }) )


