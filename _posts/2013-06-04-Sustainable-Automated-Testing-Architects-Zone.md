---
layout: post
title: Sustainable-Automated-Testing-Architects-Zone
categories:
- tweets
---
@radoburansky
Yet another developer. Java, C#, C++. Aiming for Scala. Rado is a DZone MVB and is not an employee of DZone and has posted 8 posts at DZone. You can read more from them at their website. View Full User Profile
Sustainable Automated Testing
| More
Unit testing over integration testing
Have you ever had a feeling that your automated tests are becoming overhead for the project? That the effort to keep them green seems to be higher than the added value? Then maybe what you do is integration testing and not unit testing.
I had the following discussion last week: “Do you have unit tests?”, “Sure. We do continuous delivery, unit tests are essential for us.” ...... “I’ve looked at your tests and I think that they are more integration tests than unit tests.”, “That’s just a matter of terminology. You know. Our application is heavily data-driven. There’s practically nothing to unit test. We must go to database.”
Hmm. Heavily data-driven. What does that mean? Isn’t every piece of software data driven? Ok, stop philosophising.
First of all, let’s make it clear what is typical for unit testing:
Don’t access database
Don’t access file system
Don’t depend on system time
Don’t access active directory
Don’t call external services
Don’t need real HTTP session to exist
This is not a definition of what unit test is. It’s rather a practical checklist. If you break any of these rules, your test is an integration test. That’s how I see it.
First problem is that integration tests need an environment to run. What’s worse, many of them need different environments. By environment I mean database, files, specific system time, session state, access permissions, … That’s a lot of work to do and maintain.
Second problem is that integration tests are not isolated. They don’t test one specific feature of one specific component. Their purpose is to validate that the whole flow through individual components works.
My intention is not to explain what integration testing is. What I would like to point to is that unit tests should not be replaced by integration tests. You’ll end up in hell where one small change in implementation will lead to many failed integration tests. To find out what is the real cause even of one failed integration test takes much more time than to fix a few unit tests. A lot more time. A unit test is focused to test one particular case of one specific method. If such unit test fails, it’s a piece of cake to find the reason.
How? Write classes that are (unit) testable. Let every dependency of a class to be an interface. Don’t be lazy, write interfaces. Once your class accesses the outer world though interfaces only, you are the winner. Then you can use techniques like stubbing and mocking. Writing and maintaining proper unit tests will not be a problem anymore. Long live heavily data-driven applications.
Published at DZone with permission of Rado Buranský , author and DZone MVB.
(Note: Opinions expressed in this article and its replies are the opinions of their respective authors and not those of DZone, Inc.)
Tags:
