---
layout: post
title: stack overflow up vote 98 down vote favorite
categories:
- tweets
---
*taken from [http://t.co/XC1zhWn2IG](http://t.co/XC1zhWn2IG)*
Stack Overflow

up vote 98 down vote favorite

51

I saw mentions of redis a few times and I looked it up and glanced at the faq . From what I can tell it's a server rather than in process library. I see it mentions storage and i am confused. What would redis be used for? I heard of websites using mysql and redis. It isn't a really fast in process libdictionary like I originally thought so what is it being used for?

Redis  Remote Dictionary Service  Guy Apr 21 '12 at 1152

4 Answers

up vote 142 down vote accepted

It's a NoSQL data store. Not like MongoDB which is a diskbased document data store, though MongoDB could be used for similar keyvalue use cases. The closest analog is probably to think of Redis as Memcached, but with builtin persistence snapshotting or journaling to disk and more datatypes.

Those two additions may seem pretty minor, but they are what make Redis pretty incredible. Persistence to disk means you can use Redis as a real database instead of just a volatile cache. The data won't disappear when you restart, like with memcached.

The additional data types are probably even more important. Key values can be simple strings, like you'll find in memcached, but they can also be more complex types like Hashes, Lists ordered collection, makes a great queue, Sets unordered collection of nonrepeating values, or Sorted Sets orderedranked collection of nonrepeating values.

This is only the tip of the Redis iceburg, as there are other powerful features like builtin pubsub and transactions with optimistic locking.

The entire data set, like memcached, is stored inmemory so it is extremely fast like memcached... often even faster than memcached. Redis had virtual memory, where rarely used values would be swapped out to disk, so only the keys had to fit into memory, but this has been deprecated. Going forward the use cases for Redis are those where its possible and desirable for the entire data set to fit into memory.

Redis is a fantastic choice if you want a highly scalable data store shared by multiple processes, multiple applications, or multiple servers. As just an interprocess communication mechanism it is tough to beat. The fact that you can communicate crossplatform, crossserver, or crossapplication just as easily makes it a pretty great choice for many many use cases. Its speed also makes it great as a caching layer.

We are currently using Redis for a few things where I work. Our Redis database acts as a global authentication data store, where a global user profile one Redis Hash per user for all of our apps is stored. Each application in our enterprise has a local SQL database with additional data for each user, relevant to that application. We also use Redis Hashes for session storage and standard Redis Strings with expirations for caching. Additionally we make use of Resque , which stores its work in Redis, to handle background processing tasks. In the future we envision using Redis pubsub to do some direct crossapplication communication.

TLDR If you can map a use case to Redis and discover you aren't at risk of running out of RAM by using Redis there is a good chance you should probably use Redis.

