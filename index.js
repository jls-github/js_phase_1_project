const baseUrl = `https://game-of-thrones-quotes.herokuapp.com/` 
const url = `${baseUrl}v1/random`

const getQuote = () => {
    return fetch(url)
    .then(res => res.json())
}
    getQuote().then(console.log)

// Creating the components

const createQuoteDiv = (quote) => {
    const quoteContainer = document.createElement('div')
    const sentence = document.createElement('p')
    const character = document.createElement('footer')

    sentence.innerText = quote.sentence
    character.innerText = quote.character.name

    quoteContainer.append(sentence,character)

    return quoteContainer
}
 const appendQuote= (quoteDiv) => {
    const quoteContainer = document.getElementById('quote-container')
    quoteContainer.innerHTML = ""
    quoteContainer.append(quoteDiv)


 }

const generateQuote = () => {
    getQuote().then((quote) => {
        const quoteDiv = createQuoteDiv(quote)
        appendQuote(quoteDiv)
    
    })
    
}

generateQuote()



