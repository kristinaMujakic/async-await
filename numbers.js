let baseUrl = `http://numbersapi.com/`;


//1
let favNum = 3;

async function favNumFacts() {
    let data = await axios.get(`${baseUrl}${favNum}?json`);
    console.log(data.data.text);
}

favNumFacts();

//2
let favNums = [2, 23, 28];

async function favNumsFacts() {
    let data = await axios.get(`${baseUrl}${favNums}?json`);
    let fact = data.data;
    for (let key in fact) {
        $('body').append(`<p>${fact[key]}</p>`);
    }
}

favNumsFacts();

//3

let fourFacts = [];

async function getFourFacts() {

    for (let i = 0; i < 4; i++) {
        let data = await axios.get(`${baseUrl}${favNum}?json`);
        fourFacts.push(data.data.text);
    }

    for (let facts of fourFacts) {
        $('body').append(`<p>${facts}</p>`);
    }
}

getFourFacts();