const getQuote = () => {
    fetch(`https://game-of-thrones-quotes.herokuapp.com/v1/random`)
    .then(res => res.json())

}

getQuote().then(console.log)