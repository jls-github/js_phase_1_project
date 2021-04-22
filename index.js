const baseUrl = `https://game-of-thrones-quotes.herokuapp.com/` 
const url = `${baseUrl}v1/random`

const getQuote = () => {
    return fetch(url)
    .then(res => res.json())
}
    getQuote().then(console.log)
