import CatFactGenerator from './CatFactGenerator.js';

export default class TweetProcessor
{
    static loadTweets() {
        return document.getElementsByClassName('tweet');
    }

    static getTweetsByData(set, value) {
        let tweets = TweetProcessor.loadTweets();
        let dataTweets = Array.prototype.filter.call(tweets, function(tweet){
            return tweet.getAttribute(set) === value;
        });

        return dataTweets;
    }

    static loadCatFacts(tweets)
    {
        Array.prototype.filter.call(tweets, function(tweet){
            let content = tweet.getElementsByClassName('tweet-text');
            if (content[0].hasCatFact == undefined) {
                content[0].innerText = CatFactGenerator.getRandomFact();
                content[0].hasCatFact = true;
            }
        });
    }


}