let word_place_holder = document.getElementById("word");
let next_word = document.getElementById("next_word").firstElementChild;
let output;
let other;
const api_url = "https://random-words-api.vercel.app/word";
next_word.addEventListener("click", get_action);

async function get_data_from_api(api_url){
    let response = await fetch(api_url);
    var data = await response.json();
    console.log(data)
    // console.log(data[0].word.toLowerCase().length)
    if((data[0].word.toLowerCase().length < 10)){
        word_place_holder.innerHTML = data[0].word.toLowerCase()
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