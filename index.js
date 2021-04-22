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
        const character = document.createElement('p')

        sentence.innerText = quote.sentence
        character.innerText = character['name']

        quoteContainer.append(sentence, input='name')

        return quoteContainer
    }
     
    const appendQuote = (quoteDiv) => {
        const quoteContainer = document.getElementById('quote-container')
        quoteContainer.append(quoteDiv)
    
}

    getQuote().then((quote) => {
        const quoteDiv = createQuoteDiv(quote)
        appendQuote(quoteDiv)
    })

