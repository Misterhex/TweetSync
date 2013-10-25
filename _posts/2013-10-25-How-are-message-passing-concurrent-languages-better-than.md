---
layout: post
title: how are message passing concurrent languages better than
categories:
- tweets
---
*taken from [http://t.co/zY9dLuZh5x](http://t.co/zY9dLuZh5x)*
How are messagepassing concurrent languages better than sharedmemory concurrent languages in practice

up vote 21 down vote favorite

5

I've been a Java developer for many years but never had to deal too much with concurrency issues until I started doing Android development, and suddenly started finding application not responding and apparent deadlock situations.

This made me realize how hard it can be to understand and to debug some of these concurrency issues.  How do new languages such as Scala and Go improve concurrency?  How are they more understandable and how do they prevent concurrency bugs? Can someone provide realworld examples that demonstrates the advantages?

The three main contenders for simplifying concurrency are actors, software transactional memory STM, and automatic parallelization Scala has implementations of all three.

Actors

Actors find their most notable implementation in the language Erlang, which as far as I know is where the idea started.  Erlang is designed from the ground up around actors.  The idea is that actors themselves are black boxes to each other they interact only by passing messages.  Scala has an implementation of actors in its library, and variants are available in external libraries.  In the main library, the blackboxness is not enforced, but there are easytouse methods for passing messages, and Scala makes it easy to create immutable messages so you don't have to worry that you send a message with some content, and then change the content at some random time.  The advantage of actors is that you don't have to worry about complex shared state, which really simplifies the reasoning involved.  Also, you can decompose the problem into smaller pieces than threads and let the actor library figure out how to bundle actors into the appropriate number of threads.  The downside is that if you are trying to do something complex, you have a lot of logic to deal with for sending messages, handling errors, and so on, before you know it succeeds.

Software Transactional Memory

STM is based on the idea that the most important concurrent operation is to grab some shared state, fiddle with it, and write it back.  So it provides a means of doing this however, if it encounters some problemwhich it typically delays detecting until the very end, at which point it checks to make sure the writes all went correctlyit rolls back the changes and returns a failure or tries again.  This is both highperformance in situations with only moderate contention, since usually everything goes just fine and robust to most sorts of locking errors, since the STM system can detect problems and even potentially do things like take access away from a lowerpriority request and give it to a higherpriority one.  Unlike actors, it's easier to attempt complex things, as long as you can handle failure.  However, you also have to reason correctly about the underlying state STM prevents rare unintentional deadlocks via failing and retrying, but if you've simply made a logic error and a certain set of steps cannot complete, STM cannot allow it to.  Scala has a STM library that is not part of the standard library but is being considered for inclusion.  Clojure and Haskell both have welldeveloped STM libraries.

Automatic Parallelization

Automatic parallelization takes the view that you don't want to think about concurrency you just want stuff to happen fast.  So if you have some sort of parallel operationapplying some complex operation to a collection of items, one at a time, and producing some other collection as a result, for instanceyou should have routines that automatically do this in parallel.  Scala's collections can be used in this way there is a .par method that converts a conventional serial collection into its parallel analog.  Many other languages have similar features Clojure, Matlab, etc..

Edit Actually, the Actor model was described back in 1973 and was probably motivated by earlier work in Simula 67 using coroutines instead of concurrency in 1978 came the related Communicating Sequential Processes . So Erlang's capabilities were not unique at the time, but the language was uniquely effective at deploying the actor model.

up vote 5 down vote

For me, using Scala Akka actors has had several advantages over traditional concurrency models

Using a messagepassing system like actors gives you a way to easily handle shared state.  For example, I will frequently wrap a mutable data structure in an actor, so the only way to access it is through messagepassing.  Since actors always process one message at a time, this ensures that all operations on the data are threadsafe.

Actors partially eliminate the need to deal with spawning and maintaining threads.  Most actor libraries will handle distributing actors across threads, so you only need to worry about starting and stopping actors.  Often I will create a series of identical actors, one per physical CPU core, and use a loadbalancer actor to evenly distribute messages to them.

Actors can help improve system reliability.  I use Akka actors, and one feature is you can  create a supervisor for actors, where if an actor crashes the supervisor will automatically create a new instance.  this can help prevent situations with threading where a thread crashes and you're stuck with a halfrunning program.  It's also very easy to spin up new actors as needed and work with remote actors running in another application.

You still need a decent understanding of concurrency and multithreaded programming since deadlocks and race conditions are still possible, but actors make it much easier to identify and solve these issues.  I don't know how much these apply to Android apps, but I mostly do serverside programming and using actors has made development much easier.

up vote 4 down vote

In an idiomatic Go program, threads communicate state and data through channels. This can be done without the need for locks. Passing data through a channel to a receiver, implies transfer of ownership of the data. Once you send a value through a channel, you should not be operating on it anymore as whoever received it now 'owns' it.

However, it should be noted that this transfer of 'ownership' is not enforced by the Go runtime in any way. Objects sent through channels are not flagged or marked or anything like that. It is merely a convention. So you can, if you are so inclined, shoot yourself in the foot by mutating a value you previously sent through a channel.

Go's strength lies in that the syntax Go offers launching of goroutines and the way channels work, makes it a lot easier to write code which functions correctly and thus prevents race conditions and dead locks. Go's clear concurrency mechanics make it very easy to reason about what is going to happen in your program.

As a side note The standard library in Go does still offer the traditional mutexes and semaphores if you really want to use them. But you obviously do so at your own discretion and risk.

