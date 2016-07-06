import TweetProcessor from './TweetProcessor.js';

getStoredTwitterUser();

// Get the User from storage
// Default is realDonaldTrump
function getStoredTwitterUser() {
    chrome.storage.sync.get('twitterUser', function(items) {
        let twitterUser = items.twitterUser;
        if (twitterUser == '') {
            twitterUser = 'realDonaldTrump';
        }
        setupTweetProcessor(twitterUser);
    });
}

function setupTweetProcessor(twitterUser) {
    window.setInterval(function() {
        let twitterElements = TweetProcessor.getTweetsByData('data-screen-name', twitterUser);
        TweetProcessor.loadCatFacts(twitterElements);
    }, 500);
}