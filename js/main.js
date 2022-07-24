let word_place_holder = document.getElementById("word");
let input_answer = document.getElementById("inputi");
let next_word = document.getElementById("next_word").firstElementChild;
const api_url = "https://random-words-api.vercel.app/word";
next_word.addEventListener("click", get_action);
let word_obj = {"Generated_word": null, "Word": null, "Answer": null};
let generated_value;
async function get_data_from_api(api_url){
    let response = await fetch(api_url);
    var data = await response.json();
    console.log(data)
    // console.log(data[0].word.toLowerCase().length)
    if((data[0].word.toLowerCase().length < 10)){
        word_arr = data[0].word.toLowerCase().split("")
        word_obj.Word = data[0].word.toLowerCase();
        generated_value = shuffle(word_arr).join("");
        word_obj.Generated_word = generated_value;
        word_place_holder.innerHTML = generated_value
        console.log(word_obj);
    }
    else{
        get_data_from_api(api_url);
    }
}
console.log("first")
async function get_action(){
    get_data_from_api(api_url);
}
get_action()
console.log("last")
// shuffle function
function shuffle(arr){
    let currentIndex = arr.length, randomIndex;
    while(currentIndex != 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
    }
    return arr;
}
function checkAnswer(){
    if (input_answer.value === word_obj.Word){
        word_obj.Answer = true;
    }
    else 
        word_obj.Answer = false;
}
input_answer.addEventListener("keypress", (e)=>{
    if(e.code == "Enter"){
        e.preventDefault();
        checkAnswer();
        if(word_obj.Answer){
            next_word.click()
            input_answer.value = '';
        }
        else{
            alert("wrong")
        }
    }
})




// async function getRandomWord() {

//     const res = await fetch('https://random-words-api.vercel.app/word');
  
//     const data = await res.json();
//     return data[Object.keys(data)[0]].word.toLowerCase();
  
//   }
  
//   getRandomWord();
  
//   // Add Word to DOM
//   async function addWordToDOM() {
//     randomWord = await getRandomWord();
//     word.innerHTML = randomWord;
//   }