good introduction: https://moz.com/beginners-guide-to-seo

### SEO Überblick

SEO kann manchmal wie ein großes, komplexes Thema erscheinen, aber im Kern geht es einfach darum, eine Website so zu gestalten, dass sie von Suchmaschinen leicht gefunden und von Nutzern leicht genutzt werden kann. 
Hier eine einfache Aufschlüsselung:

#### 1. Technisches SEO

Dies betrifft die Infrastruktur und Architektur Ihrer Website. Es sorgt dafür, dass Suchmaschinen Ihre Website leicht crawlen und indexieren können.

*Wichtige Aspekte:*
- Ladezeit der Website: Wie schnell lädt Ihre Seite?
- Mobile Optimierung: Ist Ihre Website auf mobilen Geräten benutzerfreundlich?
- Sitemap & robots.txt: Helfen Sie Suchmaschinen zu verstehen, welche Seiten zu crawlen bzw. zu ignorieren sind?
- HTTPS: Ist Ihre Website sicher?
- Strukturierte Daten: Geben Sie den Suchmaschinen zusätzliche Informationen über den Inhalt Ihrer Website?

#### 2. Inhaltlich (Content) SEO

Hier geht es darum, qualitativ hochwertige Inhalte zu erstellen, die für Ihre Zielgruppe relevant sind und die richtigen Keywords enthalten.

*Wichtige Aspekte:*
- Keyword-Recherche: Wissen Sie, nach welchen Begriffen Ihre Zielgruppe sucht?
- Content-Qualität: Ist Ihr Inhalt nützlich, einzigartig und besser als der Ihrer Konkurrenten?
- Frischer Inhalt: Aktualisieren Sie Ihre Inhalte regelmäßig?
- Multimedia: Nutzen Sie Bilder, Videos und andere Medienformate, um Ihren Inhalt ansprechender zu gestalten?

#### 3. Off-Page SEO

Dies bezieht sich auf Maßnahmen außerhalb Ihrer Website, die Ihre Glaubwürdigkeit und Autorität erhöhen.

*Wichtige Aspekte:*
- Backlinks: Von welchen und wie vielen Websites wird auf Sie verwiesen?
- Social Signals: Wie oft wird Ihr Inhalt in sozialen Medien geteilt oder erwähnt?
- Online-Reputation: Was sagen andere über Ihre Marke oder Website?


**Zusammenfassend:**
Stellen Sie sich SEO als einen Drei-Beinigen-Hocker vor. Ein Bein steht für technisches SEO (Ladezeit, mobile Optimierung, Unterstützung von Crawlern), das zweite Bein für den Inhalt (was die Nutzer sehen und lesen, sprechen Sie Ihre Zielgruppe an, kommen die aktuellen Schlagwörter in ihren Texten und Überschriften vor?) und das dritte Bein für Off-Page-Aktivitäten (wie die Außenwelt Ihre Website sieht, führen viele Links von anderen Seiten oder Medien zu Ihnen, bekommen Sie gute Bewertungen). Wenn eines dieser Beine wackelig ist oder fehlt, ist der Hocker nicht instabil. 
Ein guter SEO-Ansatz stellt sicher, dass alle drei Beine stark und stabil sind.
–––

### Google Knowledge Graph
Googles understanding of the world. 'Where' all of google's knowledge is stored. The Google Knowledge Panel is a result of that.

### Google Knowledge Panel
is the card or box that appears in the SERP when on Google we are looking for entities, with information on biography or history, photos, various links and other data.
- generated from google's knowledge graph
- can't be controlled i.e. by company, only influenced by
  - providing structured data
  - open a 'google business account' / 'claim' the company and suggest adjustments
  - obtain “a significant coverage from multiple independent, reliable secondary sources”, or “confirmations about the brand on multiple third-party sites that are reliable, authoritative and independent”.
- https://yoast.com/all-about-googles-knowledge-panels/


## Schema
founded by google, microsoft, yahoo, yandex; vocabulary developed by open community process
https://schema.org/docs/full.html
easy overview tutorial:
https://www.youtube.com/watch?v=xQeRA-Ojq5c


### Google Structured Data - Schema
Google Structured Data is like Google's native language.
when you reiterate what you are saying in Google’s native language (structured data), it goes from about 40% confidence it has correctly understood, to 70% confidence.

[Google's Structured Data Markup Helper ](https://www.google.com/webmasters/markup-helper)

unaffiliated structured data generator: http://simplifiedsearch.net/structure-data-generator/

**Google Structured Data Guidelines**
https://developers.google.com/search/docs/guides/sd-policies
**Google Structured Data References**
https://developers.google.com/search/docs/data-types/article


### Schema Markup Generator (JSON-LD) (Merkle)
https://technicalseo.com/tools/schema-markup-generator/


**Steal Our JSON-LD**
recommended site to get good JSON-LDs where you just have to change the content - not so sure yet...
https://jsonld.com/


**Test Google Structured Data for Correctness**
works with URL or snippet
https://validator.schema.org/


**Test for Rich Search Results**
https://search.google.com/test/rich-results? 


**Test for Mobile Friendly**
works with URL
https://search.google.com/test/mobile-friendly
___


### TTI (Time To Interactive) and FID (First Input Delay)
- TTI measures the time it takes for the page to load and be interactive.

- FID measures the time from when the user thinks the site is fully loaded until he really can get a response.

https://developers.google.com/web/updates/2018/05/first-input-delay#why_do_we_need_another_interactivity_metric
___


### test your site
empfohlen von chip.de (neueste: 2017):
- **[google webmaster tools](https://www.google.com/webmasters/tools/home?hl=de)** - eigenes Tool von google: lässt Inspektion von vielen Faktoren zu, allerdings sind Überprüfung und Optimierung nur möglich nach Nachweis, dass man Inhaber der Webseite ist.
- **Topworld** von Abakus Internet Marketing - insbesondere gut um verschiedene Keywords und Kombinationen zu prüfen
- PageSpeedTest: https://pagespeed.web.dev/
- Lighthouse: tab in the DevTools on chrome or https://www.webpagetest.org/
- GTmetrix: https://gtmetrix.com/
- Pingdom Website Speed Test: https://tools.pingdom.com/

I liked before but am not so sure anymore:
- https://www.webpagetest.org/
___


### Google Analytics
Helpful Beginner Video: https://www.youtube.com/watch?v=gBeMELnxdIg

#### Track results from your campaigns
google: Campaign URL Builder (first result)
fill out form and implement generated link in campaigns.
[Tutorial](https://youtu.be/gBeMELnxdIg?t=1437)
–––


### Open Graph
to get a nice display when sending the link on social media.
Open Graph system is developed by Facebook

Bare minimum: 
- title
- description
- image

image:
different recommendations for different channels:
- **facebook**: minimum: 600x315px, ideal. 1200x630px, ratio 1.91:1
- twitter: Twitter robots will default to Open Graph if they can’t find Twitter meta-tags called Twitter Cards.
One thing to be aware of is that the OG image does not fit perfectly into a tweet – content can be cut off.
Create separate images for Open Graph image and the Twitter Card image, for a perfect fit. It doesn’t take long to resize an OG image to a Twitter Card image.
**Twitter Card** image size should be **1024 pixels by 512 px**.

Docs for Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards

Open Graph Checker: 
- https://dnschecker.org/open-graph-preview-generate-metatags.php
- https://www.opengraph.xyz/
–––

### Get more google reviews
- respond to every review, good or bad
- generate a review shortcut link 
- do we already ask our participants after graduation for a google review? (with a google review shortcut link, so that it takes just a couple of seconds)
- present a review shortcut link on our website (“check out our google reviews page here” or at the end of blogposts or on the resource page “if you like our content we’d be happy about a review” )
- display our google reviews on our website with a cta
- im Footer: “drop us a review” with links to facebook, google, yelp
- cta on our Business Cards with QR Code
- cta in email signature (maybe only Eva) “Happy with HCS? Leave a review here.”
- https://www.wordstream.com/blog/ws/2020/09/16/get-more-google-reviews

–––

### files with metadata
add metadata to all files like pdfs and images
- Title - Git & GitHub Cheatsheet
- Subject
- Keywords
  - i.e: git GitHub cheatsheet guide handout tutorial beginner
___


### Marketing
headline analyzer: https://coschedule.com/headline-analyzer
useful video with many tools: https://www.youtube.com/watch?v=qQdXB8qSY-E

#### Keywords
Tools:
browser add-on: https://keywordseverywhere.com/

