//News Feed --------------------------------------------------------------------
var feedcontainer = document.getElementById("newsFeed")
var feedurl = "http://rss.cnn.com/rss/edition_world.rss"
var feedlimit = 5
var rssoutput = "<b>World News:</b><br /><ul>"

function rssfeedsetup() {
    var feedpointer = new google.feeds.Feed(feedurl) //Google Feed API method
    feedpointer.setNumEntries(feedlimit) //Google Feed API method
    feedpointer.load(displayfeed) //Google Feed API method
}

function displayfeed(result) {
    if (!result.error) {
        var thefeeds = result.feed.entries
        for (var i = 0; i < thefeeds.length; i++)
            rssoutput += "<li><a href='" + thefeeds[i].link + "'>" + thefeeds[i].title + "</a></li>"
        rssoutput += "</ul>"
        feedcontainer.innerHTML = rssoutput
    } else
        alert("Error fetching feeds!")
}

window.onload = function() {
    rssfeedsetup()
}