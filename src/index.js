import TweetProcessor from './TweetProcessor.js';
(function () {
    "use strict";

    let TwitterCatfacts = {
        init () {
            this.prepareTwitterUser();
        },
        
        prepareTwitterUser () {
            let self = this;
            chrome.storage.sync.get('twitterUser', function(items) {
                let twitterUser = items.twitterUser;
                if (twitterUser == '') {
                    twitterUser = 'realDonaldTrump';
                }
                self.setupTweetProcessor(twitterUser);
            });
        },

        setupTweetProcessor (twitterUser) {
            window.setInterval(function() {
                let twitterElements = TweetProcessor.getTweetsByData('data-screen-name', twitterUser);
                TweetProcessor.loadCatFacts(twitterElements);
            }, 500);
        }
    }

    TwitterCatfacts.init();
})();

