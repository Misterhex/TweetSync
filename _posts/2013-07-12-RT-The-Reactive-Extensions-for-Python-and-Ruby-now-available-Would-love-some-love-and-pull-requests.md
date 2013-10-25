---
layout: post
title: rt the reactive extensions for python and ruby now available would love some love and pull requests
categories:
- tweets
---
*taken from [http://t.co/tE6QT5bmFP](http://t.co/tE6QT5bmFP)*
New open source releases Reactive Extensions Rx libraries for Python and Ruby

Posted on

by Brian Benz

Microsoft Open Technologies, Inc is releasing two new open source libraries for Reactive Extensions Rx today that support Python and Ruby.

Rx is a programming model that allows developers to use a common interface on multiple platforms to interact with diverse data sources and formats, such as stock quotes, Tweets, realtime events, streaming data, and Web services. Developers can use Rx to create observable sequences, and applications can subscribe to these sequences and receive asynchronous notifications as new data arrives. Rx was opensourced by MS Open Tech in November, 2012, and since then has become an important component behind the scenes in several highavailability, including NetFlix and GitHub.

Developers direct an Observer interface to observe subscribe to a data source, which is called an Observable Interface in Rx. The Observer Interface waits for and then reacts to pushed data until it is sent a signal from the Observable Interface that there is no more data to react to. An Observable interface maintains a list of dependent Observer interfaces and notifies them automatically of any state changes. Employing such a model is useful for performance and reliability in many scenarios, especially in UIheavy client environments in which the UI thread is blocked while waiting for events.

Rx is available for different platforms such as .NET, JavaScript, CC, and Windows Phone frameworks, and as of today, Ruby and Python as well. You can download the libraries, as well as learn about their prerequisites at the Rx MSDN Developer Center .

You can find the projects on CodePlex Rx for Ruby is available here , and Rx for Python is available here . Try them out and please share feedback! This is our initial effort for both Ruby and Python and we are looking forward to working actively with the Ruby and Python communities to make sure that implementing Rx is as easy and flexible as possible. You can leave comments here, or start a discussion on CodePlex for Ruby or Python .

Share this

