---
layout: post
title: reactive programming as an emerging trend
categories:
- tweets
---
*taken from [http://t.co/LCyaZ0yIPx](http://t.co/LCyaZ0yIPx)*
You are here InfoQ Homepage News Reactive Programming as an Emerging Trend

Reactive Programming as an Emerging Trend

by Dio Synodinos on Aug 28, 2013 

Share

My Reading List

Reactive programming RP is based on data flows and the     propagation of change, with the underlying execution model of a programming     language automatically propagating changes through the data flow. With the     popularity of eventdriven, scalable, and interactive architectures both on the     server and the client, the concept of reactiveness is increasingly     gaining attention.

InfoQ has already been covering this paradigm for a couple     of years , and a few weeks ago the Gartner research firm included both Reactive     Programming and EventDriven Web in their  Hype Cycle for Application     Development, 2013  publication On the Rise section.

Around a month ago Bruce Eckel , author of numerous books on programming,     and Jonas Boner ,     creator of Akka and CTO of Typesafe,     published the The Reactive Manifesto which tries to define what reactive applications are .

These applications should be capable to

React to events the eventdriven nature enables the       following qualities.

React to load focus on scalability rather than       singleuser performance.

React to failure build resilient systems with the ability       to recover at all levels.

React to users combine the above traits for an       interactive user experience.

Following the publication of this manifesto, Martin Odersky creator of Scala, Erik Meijer creator of Reactive Extensions and Roland Kuhn Akka Tech Lead, have announced a free course on Coursera called  Principles     of Reactive Programming 

The aim of the second course is       to teach the principles of reactive programming. Reactive programming is an emerging discipline which combines concurrency and eventbased       and asynchronous systems. It is essential for writing any kind of webservice       or distributed system and is also at the core of many highperformance       concurrent systems. Reactive programming can be seen as a natural extension of       higherorder functional programming to concurrent systems that deal with       distributed state by coordinating and orchestrating asynchronous data streams       exchanged by actors.

A     company that has been using RP extensively is Netflix , who have even     contributed a Java port of     Rx 

Functional reactive programming       with RxJava has enabled Netflix developers to       leverage serverside conconcurrency without the       typical threadsafety and synchronization concerns. The API service layer       implementation has control over concurrency primitives, which enables us to       pursue system performance improvements without fear of breaking client code. RxJava is effective on the       server for us and it spreads deeper into our code the more we use it.

Facebook also recently released     the React JavaScript library for     building next generation user interfaces. Facebook Engineer Stoyan Stefanov describes     the main concept behind React 

React lets you build your       application using components that know how to render some data. When data       changes, components update automatically in a very efficient way, only where       necessary. And all the job of attaching and detaching event handlers is taken       care of for you. Also efficiently  using delegation.

It is worth noting that RP is already enjoying a lot of attention in the     frontend developers community, which started around 2009 with the     original Flapjax paper PDF, and continued with     several libraries that implemented RP principles like Bacon.js , Knockout , Meteor , React.js , Reactive.coffee , and RxJS .

During the QCon San Francisco 2013     conference there will be extensive coverage of the Reactive paradigm along side     all other major software  IT trends and innovations, both in tutorials and within regular tracks , so come and take advantage of the early bird registration !

