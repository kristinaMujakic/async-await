let url = 'https://deckofcardsapi.com/api/deck';

// 1
async function singleCard() {
    let data = await axios.get(`${url}/new/draw/?count=1`);
    console.log(`${data.data.cards[0].suit} of ${data.data.cards[0].value}`);
}

singleCard();

// 2
async function twoCards() {
    let data = await axios.get(`${url}/new/draw/?count=2`);
    console.log(`${data.data.cards[0].suit} of ${data.data.cards[0].value}, ${data.data.cards[1].suit} of ${data.data.cards[1].value}`);
}

twoCards();

//3
const button = document.querySelector('#cardbtn');
const image = document.querySelector('#cardimg');
let deckId = null;

async function shuffle() {
    let data = await axios.get(`${url}/new/shuffle`);
    deckId = data.data.deck_id;
}

shuffle();

async function emptyTheDeck() {
    let res = await axios.get(`${url}/${deckId}/draw`);

    if (res.data.cards.length > 0) {
        image.src = res.data.cards[0].image;
    } else {
        button.style.display = 'none';
    }
};

button.addEventListener('click', emptyTheDeck);
