const quote = document.getElementById('quote');
const author = document.getElementById('author');
const btn = document.getElementById('new-quote');
const tweet = document.getElementById('tweetMe');

let realData = " ";

const tweetNow = () =>{
    let tweetPost = `https://twitter.com/intent/tweet?text=${realData.content}${realData.originator.name} `;
    window.open(tweetPost)
}

const getQuotese = async () => {
    // add api key in one variable;
    let myKey = config.api_key;
    
    try {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': myKey,
                'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
            }
        };

        let data = await fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
        realData = await data.json();
        console.log(realData);
        quote.innerHTML = `${realData.content}`
        author.innerHTML = `${"-" + realData.originator.name}`

        if (realData.originator.name == null) {
            author.innerHTML = "unknown";
        } else {
            author.innerHTML = `${"-" + realData.originator.name}`
        }

    } catch (error) {
        console.log(error);
    }
}

btn.addEventListener("click", () => {
    getQuotese();
})

tweet.addEventListener("click",() => {
    tweetNow();
})
