---
layout: post
title: code reuse highly overrated
categories:
- tweets
---
*taken from [http://t.co/v3LzJnJh1V](http://t.co/v3LzJnJh1V)*
You are here InfoQ Homepage News Code reuse highly overrated?

Code reuse highly overrated?

by Mark Figley on     Jul 24, 2007 

Share

My Reading List

Carl Lewis recently found an old but still interesting piece by Dennis Forbes about the tradeoffs of code reuse. Lewis elaborated a bit on one of the more controversial concepts from Forbes' blog entry that contrary to conventional wisdom of code as an asset, code has very little value outside the immediate context of the organization that created the code in question. Forbes goes on to assert that if the code asset has not been explicitly engineered for generality, code reuse even within the same organization is also problematic when reuse is attempted across projects.

Forbes attacks the tendency of many inhouse dev teams to spend a lot of time building inhouse frameworks and libraries intended for reuse across projects

The greater the bulk of code you accumulate, the more intrinsically you tie yourself to your current developers and the more they occupy their brain with information that is only applicable in one organization or team, and the more difficult it will be to bring new developers online. Such frameworks and libraries often come with enormous learning curves for new hires  especially as documentation is virtually always ignored  and they can seldom be reused for anything else without significant refactoring because they likely weren't truly designed for reuse, or they were in only the most arbitrary and superficial of ways

 The question every organization needs to ask itself, then, is what value they could sell their reusable code for  what, realistically, would competitors and new entrants in the field offer for it? The answer, in almost every case, is 0, and they wouldn't want it even at that price. There is extraordinarily little code theft in this industry even though we're in the era of burnable DVDs and USB keys because most code  above and beyond the industrywide frameworks and libraries  has no value at all outside of a specific project with a specific group of developers. Trying to use it for other projects is often worse than starting with nothing at all.

Forbes concludes that because properly abstracted and generalized frameworks are more expensive to design and develop than oneoff solutions, and since the time and cost for a developer to absorb the complexity of a new framework is rarely taken into account when doing a code reuse cost benefit analysis, it makes sense to reuse code a lot less often than one would think. It is notable that Forbes is not against reusing code and frameworks altogether he is much more positive about reusing code in industry standard libraries for instance. In fact, Forbes advocates the adoption of broad industrystandard frameworks such as open source that by necessity have the proper abstraction and encapsulation boundaries built in as an alternative to complex internally developed frameworks.

In Carl Lewis' post on the subject he highlights Forbes' 0 value assessment of most codebases. Lewis shares just one example of when he has encountered an organization that has an inflated sense of the value of their code, calling them jealously protective of that code. Predicatively, when Lewis flew thousands of miles to be onsite so that the code wouldn't have to leave the premises, Lewis found that the actual codebase being jealously protected was pretty bad. Due to examples like this Lewis believes that in many cases, the risk of code theft happening is much less than is generally thought, and so companies shouldn't be afraid to share their code in cases where it may make sense.

And so Lewis and Forbes present an interesting reality check for us with regard to the value of our code assets, because as Lewis says

It seems very counterintuitive that something that is so difficult and expensive to create can have so little value. I guess that's why so many organizations like to pretend that their code is much more valuable than it really is.

