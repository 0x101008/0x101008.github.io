---
title: The Static Site Paradox
icon: blog
date: 2024-11-03 13:54:05
author: sht
isOriginal: true
category: 
    - Web
tag:
    - Web
sticky: false
star: false
article: true
timeline: true
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---

In front of you are two personal websites, each used as a blog and to display basic contact info of the owner:

1. One is a complex CMS written in PHP that requires a web server, multiple workers, a Redis cache, and a SQL database. The site also has a big frontend component that loads as a Single Page Application and then performs navigation by requesting the content in JSON form, which then gets “rehydrated” client-side.
2. The other is a collection of static HTML files and one or two CSS files. No JavaScript anywhere.
    If you didn’t know any better, you would expect almost all normal users to have [2] and professional engineers to have something like [1], but it’s actually the inverse: only few professional software engineers can “afford” to have the second option as their personal website, and almost all normal users are stuck with overcomplicated solutions.

Weird as it might be, it’s not a great mystery why that is: it’s easier to spin up a Wordpress blog than it is to figure out by yourself all the intermediate steps:

1. Buy a domain

2. Find a hosting platform

3. Configure DNS

4. Find an SSG (or handcraft everything yourself)

5. Learn how to setup a deployment pipeline


And so, while we software engineers enjoy free hosting & custom domain support with GitHub Pages / Cloudflare Pages / etc, normal users are stuck with a bunch of greedy clowns that make them pay for every little thing, all while wasting ungodly amounts of computational power to render what could have been a static website in 99% of cases.

When I published SuperHTML, I discovered that it was the first ever language server for HTML that reported diagnostics to the user. I wrote a blog post about it, it got on the frontpage of Hacker News and nobody corrected me, so you know it’s true.

I originally found it a funny thing, but thinking about it more, it’s a bit sad that this is the case. Linters do exist, and people can get diagnostics in their editor, but that’s usually tooling tied to a specific frontend framework and not vanilla HTML, which leads to people opting to use frameworks even if they don’t really have a real need for all the complexity that those frameworks bring.

And that’s bad in my opinion. Not because of an abstract appreciation for simplicity, but because the web doesn’t belong just to software engineers. The more we make the web complex, the more we push normal users into the enclosures that we like to call social networks.

Don’t you find it infuriating when lawyers and accountants fail to clarify how their respective domains work, making them unavoidable intermediaries of systems that in theory you should be able to navigate by yourself?

Whenever we fail to make simple things easy in software engineering, and webdev especially, we are failing society in the exact same way.

This is not something that startups or big tech can solve for us, their economic incentives are just too misaligned, so I invite you all to help make the web more accessible, partially as a matter of taking pride in our craft, and partially because the web used to be more interesting when more of it was made by people different from us.

