---
title: Pay attention, Twitter
date: 2016-01-06
tags:
- hidden
- rant
- service design
- twitter
---

> I don't get Twitter... it's just people telling what they had for lunch.

If you remember mentioning that to someone, I won't hold it against you. Twitter is a platform quite unlike any other, and that is both its strength and challenge. It has come a long way since its inception in 2006 (<a href="/images/2016-01-06-twitter-homepage-2006.png" alt="Twitter back in 2006" title="you'll never be bored again... right.">never get bored again, right?</a>), but lately its journey has been turbulent, to say the least.

Twitter has been criticized about more things than I care to mention here: neglected official clients, hostility towards third party developers, increasing number of ads, breaking links with shorteners, etc. People are worried about Twitter ruining the core of their service in an attempt to become more like Facebook:  *they grow, so we need to grow, too!*

Twitter's CEO Jack Dorsey weighed in tongue-in-cheek - *with an image embedded into his <a href="https://twitter.com/jack/status/684496529621557248">tweet</a>, take note!* - to convince people they still know what they're good for. Since it's been a long time since they gave any hints on their capabilities to improve, I want to propose some ideas of my own.

### Nobody likes ads

I have been an active Twitter user since 2008. Had I known back then it will still be relevant ten years into the future, <a href="https://twitter.com/mieky/status/947951002">my first tweet</a> might have been wittier. TweetDeck served me fine for a time, but at some point Twitter suffered what I consider a horrible brain-fart and turned downright hostile towards external client developers. I've stuck with the official Twitter clients thereafter.

A month ago I got fed up with ads on my timeline. They are like this:

<img src="/images/2016-01-06-twitter-xamarin-tweet.jpg" alt="" style="width: 480px;" />

... or some stupid mobile game with In-App Purchases that's a clone of another with the same gameplay and graphics I'm never going to try, and then another, and another. At some point I lost count...

... and bought the new version of Tweetbot. It's a great client with some nifty UI tricks and features, including not showing any ads like the official client does! I tried my best to get by, but somehow I just felt not in control. It's hard to pinpoint, but the level of awareness one gets from the official client in terms of how people react to your tweets is superior. I don't blame the authors, as they are forced to work with a crippled-down version of the Twitter API.

You can stomach only so many ads. When you see an ad for the first time, it's a minor annoyance, but repeated non-relevant ads quickly become irritating to the point where you need to go get coffee to cool down.

### Allow people to pay

I think Twitter should **allow people to pay**. There's a contradiction in them trying to get people to advertise on their platform and at the same time completely ignoring the fact that there's a steady mass of Twitter power users who, would happily pay a small premium membership fee for a service they use all the time.

Not only do I benefit from Twitter professionally, learning about what's happening in the web development scene, but when the Dubai hotel caught fire in the New Year's Eve of 2016, I came across it on my timeline hours before I saw it in the news.

This tweet sums it up with extraordinary finesse:

<a href="https://twitter.com/kept_simple/status/684423616793034760"><img src="/images/2016-01-06-twitter-well-put.png" style="width: 480px;" /></a>

The casual user will be happy on the free tier just like before. Even if Twitter got one percent of its population to pay a modest amount of say, $1 a month, it would amount to three million dollars.

As <a href="https://twitter.com/anttti">@anttti</a> pointed out, however, the Venture Capital scene is its own world. In that world, in my opinion, the users rarely win. As long as Twitter is able to get funding by promising to out-innovate Facebook and capitalize on selling their users' data, it's unlikely they will do what would actually be good for the people using the service. Hand on your heart, who hasn't had their favorite service sold to a bigger company and then shut down?

Back to where we were. What would paying get one, then?

- **No ads.** Why ridicule people with this crap if they're willing to pay to make it go away?
- **Scheduling** or buffering tweets right from the client.
- Native integration to bookmarking and **read-it-later** type services.
- Ability to use Twitter with **3rd party clients**. Yes. Win-win! No more crippled interface for Tweetbot. It's power users who pay for their clients anyway.
- **Mute and filter** tags and topics. No more noise such as the Swarm check-ins, *I just earned a badge!*, #mandatorygymtweet from otherwise reasonable people.
- Access to detailed tweet **statistics** (like everyone apparently now do <a href="https://analytics.twitter.com/">for free</a>), focus group information, follower optimization tools.

It makes no sense for Twitter to make it difficult to get people to extract information from their service. Developers will want to get past clumsy embed codes. Twitter should open up a free-to-access API for extracting tweet data. Being too protective will only drive users to other services. Embrace users by embracing third-party developers!

### What else is there to improve?

Twitter could make better use of the 140 characters: cut some slack and allow more links and usernames into the total character count. It's not an SMS any more.

Anyone who ever participated in a Twitter conversation with more than two people knows it's a mess. Jaiku was a Twitter-like hybrid with longer messages and threaded replies years ago, and it had a very loyal user base before it was acquired and shut down. It never really became popular outside of Finland, but many preferred it to Twitter.

Also, there should be meaningful previews for all popular media types. There was a time Instagram images were previewed in the official clients, but then Facebook happened, Twitter removed the previews, and users lost.

Considering the size of the actual 140-character content of a single tweet, the <a href="https://dev.twitter.com/overview/api/tweets">size of its API response</a> is overwhelming. Having once developed a small client application, one could have easily included <a href="http://i.imgur.com/3TtTwrU.jpg">many Super Marios</a> in the simplest API response. Big amounts of bandwidth could be saved by cutting down on metadata - at a minimum developers should be allowed the option to filter much of it.

### New ground

I'm pretty sure CEO Jack has a good idea of what Twitter is good at. From my point of view, Twitter already has what it takes to venture into new areas without losing their core.

For example, Twitter's search at <a href="https://search.twitter.com/">search.twitter.com</a> is unbelievable. From the ludicrous amounts of data that Twitter stores each second, you only need to remember one keyword and you can find year-old tweets in an instant. *"I once tweeted this cool imagemagick script, let's see if I can <a href="https://twitter.com/search?q=mieky%20imagemagick&src=typd">find it</a>..."*

Twitter becomes most useful once you find people to follow who keep on bringing relevant content to your timeline. It could be easier to maintain and discover followees, though. Who are my friends following whom I retweet all the time? What are the keywords that are most likely to trigger likes from me? This information is all in there to be found and put into use.

Rumors about Twitter changing how their timeline algorithm works has gotten people on their toes. I'm pretty confident it will eventually make things better and not worse, considering I already miss many interesting items on my timeline just because of the sheer volume of information I need to manually go through. It all boils down to using computers for what they're good at.

I believe Twitter already has many of the building blocks in place. They should stop fooling around, concentrate on making users happy, and the rest will follow. I'm hoping to tweet about how that turned out in ten years' time.

Related:

* <a href="http://www.vox.com/2016/1/5/10719476/twitter-10000-character">Vox: Twitter is not broken, and they should stop trying to fix it</a>
