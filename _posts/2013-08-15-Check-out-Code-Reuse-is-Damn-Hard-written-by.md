---
layout: post
title: check out code reuse is damn hard written by
categories:
- tweets
---
*taken from [http://t.co/xODPIbOfCV](http://t.co/xODPIbOfCV)*
Code Reuse is Damn Hard

Being a development team lead, the task of interviewing new candidates was part of my job. Like any typical interview, we started with some easy questions to get them warmed up and help calm their nerves before hitting the hard stuff.

One of those easier questions was almost always Name some benefits of objectoriented development. Nearly every time, the candidate would chime in with a plethora of canned answers which typically included it helps ease code reuse. Of course, this is a gross oversimplification. Tools only ease reuse, its developers that ultimately can cause code to be reusable or not, regardless of the language or methodology.

But it did get me thinking we always used to say that as part of our mantra as to why ObjectOriented Programming was so great. With polymorphism, inheritance, encapsulation, etc. we in essence set up the concepts to help facilitate reuse as much as possible. And yes, as a developer now of many years, I unquestionably held that belief for ages before it really struck me how my views on reuse have jaded over the years. In fact, in many ways Agile rightly eschews reuse as taking a backseat to developing what's needed for the here and now. It used to be I was in complete opposition to that view, but more and more I've come to see the logic in it. Too many times I've seen developers myself included get lost in design paralysis trying to come up with the perfect abstraction that would stand all time. Nearly without fail, all of these pieces of code become obsolete in a matter of months or years.

Its not that I dont like reuse  its just that reuse is hard. In fact, reuse is DAMN hard. Many times it is just a distraction that eats up architect and developer time, and worse yet can be counterproductive and force wrong decisions. Now dont get me wrong, I love the idea of reusable code when it makes sense. These are in the few cases where you are designing something that is inherently reusable. The problem is, most businessclass code is inherently unfit for reuse!

Furthermore, the code that is reusable will often fail to be reused if you dont have the proper framework in place for effective reuse that includes standardized versioning, building, releasing, and documenting the components. That should always be standard across the board when promoting reusable code. All of this is hard, and it should only be done when you have code that is truly reusable or you will be exerting a large amount of development effort for very little bang for your buck.

But my goal here is not to get into how to reuse that is a topic unto itself but what should be reused. First, lets look at an extension method. Theres many times where I want to kick off a thread to handle a task, then when I want to reign that thread in of course I want to do a Join on it. But what if I only want to wait a limited amount of time and then Abort? Well, I could of course write that logic out by hand each time, but it seemed like a great extension method

1 public static class ThreadExtensions

2 

18 

19

When I look at this code, I can immediately see things that jump out at me as reasons why this code is very reusable. Some of them are standard OO principles, and some are kindof home grown litmus tests

Single Responsibility Principle SRP  The only reason this extension method need change is if the Thread class itself changes one responsibility.

Stable Dependencies Principle SDP  This method only depends on classes that are more stable than it is System.Threading.Thread, and in itself is very stable, hence other classes may safely depend on it. It is also not dependent on any business domain, and thus isn't subject to changes as the business itself changes.

OpenClosed Principle OCP  This class is inherently closed to change.

Small and Stable Problem Domain  This method only cares about System.Threading.Thread.

AllorNone Usage  A user of a reusable class should want the functionality of that class, not parts of that functionality. Thats not to say they most use every method, but they shouldnt be using a method just to get half of its result.

Cost of Reuse vs. Cost to Recreate  since this class is highly stable and minimally complex, we can offer it up for reuse very cheaply by promoting it as readytogo and already unit tested important! and available through a standard release cycle very important!.

Okay, all seems good there, now lets look at an entity and DAO. I dont know about you all, but there have been times Ive been in organizations that get the grand idea that all DAOs and entities should be standardized and shared. While this may work for small or static organizations, its near ludicrous for anything large or volatile.

1 namespace Shared.Entities

32 

33 

Now to be fair, Im not saying there doesnt exist an organization where some entites may be extremely static and unchanging. But at best such entities and DAOs will be problematic cases of reuse. Lets examine those same tests

Single Responsibility Principle SRP  The reasons to change for these classes will be strongly dependent on what the definition of the account is which can change over time and may have multiple influences depending on the number of systems an account can cover.

Stable Dependencies Principle SDP  This method depends on the data model beneath itself which also is largely dependent on the business definition of an account which can be very inherently unstable.

OpenClosed Principle OCP  This class is not really closed for modification. Every time the account definition may change, youd need to modify this class.

Small and Stable Problem Domain  The definition of an account is inherently unstable and in fact may be very large. What if you are designing a system that aggregates account information from several sources?

AllorNone Usage  What if your view of the account encompasses data from 3 different sources but you only care about one of those sources or one piece of data? Should you have to take the hit of looking up all the other data? On the other hand, should you have ten different methods returning portions of data in chunks people tend to ask for? Neither is really a great solution.

Cost of Reuse vs. Cost to Recreate  DAOs are really trivial to rewrite, and unless your definition of an account is EXTREMELY stable, the cost to promote, support, and release a reusable account entity and DAO are usually far higher than the cost to recreate as needed.

Its no accident that my case for reuse was a utility class and my case for nonreuse was an entityDAO. In general, the smaller and more stable an abstraction is, the higher its level of reuse. When I became the lead of the Shared Components Committee at my workplace, one of the original goals we looked at satisfying was to find or create, version, release, and promote a shared library of common utility classes, frameworks, and data access objects. Now, of course, many of you will point to nHibernate and Entity for the latter, but we were looking at larger, macro collections of data that span multiple data sources of varying types databases, web services, etc.

As we got deeper and deeper in the details of how to manage and release these items, it quickly became apparent that while the case for reuse was typically a slam dunk for utilities and frameworks, the data access objects just didnt smell right. We ended up having session after session of design meetings to try and find the right way to share these data access components.

When someone asked me why it was taking so long to iron out the shared entities, my response was quite simple, Reuse is hard... And thats when I realized, that while reuse is an awesome goal and we should strive to make code maintainable, often times you end up creating far more work for yourself than necessary by trying to force code to be reusable that inherently isnt.

Think about classes the times youve worked in a company where in the design session people fight over the best way to implement a class to make it maximally reusable, extensible, and any other buzzwordable. Then think about how quickly that design became obsolete. Many times I set out to do a project and think, yes, this is the best design, I can extend it easily! only to find out the business requirements change COMPLETELY in such a way that the design is rendered invalid. Code, in general, tends to rust and age over time. As such, writing reusable code can often be difficult and many times ends up being a futile exercise and worse yet, sometimes makes the code harder to maintain because it obfuscates the design in the name of extensibility or reusability.

So what do I think are reusable components?

Generic Utility classes  these tend to be small classes that assist in a task and have no business context whatsoever.

Implementation Abstraction Frameworks  homegrown frameworks that try to isolate changes to third party products you may be depending on like writing a messaging abstraction layer for publishingsubscribing that is independent of whether you use JMS, MSMQ, etc.

Simplification and Uniformity Frameworks  To some extent this is similar to an abstraction framework, but there may be one chosen provider but a development shop mandate to perform certain complex items in a certain way. Or, perhaps to simplify and dumbdown a complex task for the average developer such as implementing a particular developmentshops method of encryption.

And what are less reusable?

Application and Business Layers  tend to fluctuate a lot as requirements change and new features are added, so tend to be an unstable dependency. May be reused across applications but also very volatile.

Entities and Data Access Layers  these tend to be tuned to the scope of the application, so reusing them can be hard unless the abstract is very stable.

So whats the big lesson? Reuse is hard. In fact its damn hard. And much of the time Im not convinced we should focus too hard on it.

If youre designing a utility or framework, then by all means design it for reuse. But you most also really set down a good versioning, release, and documentation process to maximize your chances. For anything else, design it to be maintainable and extendable, but dont waste the effort on reusability for something that most likely will be obsolete in a year or two anyway.

Share This Post

