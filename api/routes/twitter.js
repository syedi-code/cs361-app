var express = require("express");
var puppeteer = require("puppeteer");
var Twitter = require("twitter-v2");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("Connected to /");
});

router.get("/status", function(req, res, next) {
    res.send("Connected to Twitter API");
});

router.get("/profile/:handle", function(req, res, next) {
    (async () => {
        try {
            var client = new Twitter({
                consumer_key: 'EGclGRs3UjFXfixyhxJBUdTRp',
                consumer_secret: '1WcX8hZn0ARcUVjTf2mO7Chma1FK46b3BkODptMyGNO1tQW1Tm',
            });
            var user = await client.get('users/by/username/' + req.params.handle);
            var tweets = await client.get('users/' + user.data.id + '/tweets')
            console.log(tweets.data);
            res.send(tweets.data);
        } catch (error) {
            console.log(error);
        }
    })();

});

module.exports = router;