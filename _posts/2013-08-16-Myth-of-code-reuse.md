---
layout: post
title: Myth-of-code-reuse
categories:
- tweets
---
@allankellynet
Allan Kelly has held just about every job in the software world, from sys admin to development manager.  Today he provides training and coaching to teams in the use of Agile and Lean techniques.  He is the author of "Changing Software Development: Learning to become Agile" (2008) and "Business Patterns for Software Developers" (2012) and a frequent conference speaker. Allan is a DZone MVB and is not an employee of DZone and has posted 61 posts at DZone. You can read more from them at their website. View Full User Profile
Reuse Myth - can you afford reusable code?
11.05.2010
| More
In my Agile Business Conference present (“ How much quality can we afford? ”) I talked about the Reuse Myth, this is something always touch on when I deliver a training course but I’ve never taken time to write it down.  Until now.
Lets take as our starting point Kevlin Henney’s observation that “ there is no such thing as reusable code, only code that is reused. ”   Kevlin (given the opportunity!) goes on to examine what constitutes  “reuse” over simple “use.”  A good discussion itself but right now the I  want to suggest that an awful lot of code which is “designed for reuse”  is never actually re-used.
In effect that design effort is over  engineering, waste in other words.  One of the reasons developers want  to “design for reuse” is not so much because the code will be reused but  rather because they desire a set of properties (modularity, high  cohesion, low coupling, etc.) which are desirable engineering properties  but sound a bit abstract.
In other words, striving for  “re-usability” is a developers way of striving for well engineered code.   Unfortunately in striving for re-usability we loose focus which brings  us to the second consideration.... cost of re-usability.
In Mythical Man Month (1974) Fred Brooks suggests that re-usable code costs three times as  much to develop as single use code.  I haven’t seen any better estimates  so I tend to go with this one.  (If anyone has any better estimates  please send them over.)
Think about this.  This means that you  have to use your “reusable” code three times before you break even.  And  it means you only see a profit (saving) on the fourth reuse.
How much code which is build for reuse if reused four times?
I would suggest the answer to this question is: very little.
Consequently  development teams which write a lot of reusable code are costing their  organisations a lot of time and money.  Waste.
Reusable code is  not the solution to any of our IT problems.  It is a supply side only  solution and not a very good one at that.  While it may reduce the  amount of code that is written it reduces it by artificially  constructing supply rather.
Thus, reuse, as a solution to software supply problems, is a myth.
This leave two questions we need to answer.
First: how are we to get those desirably engineering properties if we can’t/don’t push reuse?
The  good news here is that Test Driven Development, i.e. writing code that  can be automatically tested with other code we write, also has the  effect of promoting modularity, high cohesion, low coupling, etc.  Thus  the answer to this question is: Make your code testable.
This approach will retain focus and deliver worthwhile benefits.
The second question: How should we manage reuse? After all, there are some genuine situations were reuse is the right answer.
Here there are two answers, a micro and a macro answer.
The micro answer, when your working in a development team is: look for emergent reuse.
Don’t  plan for reuse but look for opportunities to reuse something that has  gone before.  When you see the opportunity take the previous work and  enhance it just enough to reuse it in your case.  This way you only pay  the price for what you actually need when you need it.
If you later find the same code is useful again then repeat the process.  Improve it just enough to use it a third time.
Remember: you have the tests from the earlier answer to make it safe to do this.  Without the tests things get difficult.
Now  you’ve reused your code three times, you’ve pay the price a bit every  time, and you have the tests to show it still works.  By now the code is  going to be getting pretty close to generically reusable.
Still,  maybe you go round this look a third or fourth time.  It doesn’t matter  is making one piece of code reusable costs more in the long run than it  would have done if you did it the first time because... You haven’t  spent money making a lot more code reusable that never needed it.
Telling  the future is hard.  It is difficult to know whether code will be  reused or not, so default to Not and save the money.  Occasionally you  will be wrong and it will cost more, but overall you will be right and  you will save money.
The macro answer: if this code really is  widely reusable by many people then, go into business.  Market this as a  library, a plug in, an application what ever.  Let the market decide  the economics of reusability.
References
