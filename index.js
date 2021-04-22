const baseUrl = `https://game-of-thrones-quotes.herokuapp.com/` 
const url = `${baseUrl}v1/random`

const getQuote = () => {
    return fetch(url)
    .then(res => res.json())
}
    getQuote().then(console.log)

    //create components

    const createQuoteDiv = (quote) => {
        const quoteContainer = document.createElement('div')
        const sentence = document.createElement('p')
        const character = document.createElement('h3')

        quote.innerText = sentence
        character.innerText = character['name']

        quoteContainer.append(sentence, character)

        return quoteContainer 
    }
     
    getQuote().then((quote) => {
        const quoteDiv = createQuoteDiv(quote)
        console.log(quoteDiv)
    })