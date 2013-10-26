---
layout: post
title: the flying frog blog
categories:
- tweets
---
*taken from [http://t.co/U7j6M1jafm](http://t.co/U7j6M1jafm)*
The Flying Frog Blog

Sunday, 20 April 2008

Who will use F?

This post is in response to the comment by Fernando on the previous post . Many of the statements made by Fernando reflect commonly held views but I believe the foundation e.g. FP vs OO is too simplistic to be an accurate predictor of what is to come.

I take issue with several of the points that you have raised, Fernando. I'll start with the ones where I can provide objective evidence rather than just opinion.

You say that F will be adopted by longtime functional programmers, with LISPHaskell heritage but LispScheme and Haskell programmers account for only 5 of our F.NET Journal registrants whereas CCJava programmers account for 53. The reason is that functional programmers very rarely migrate between functional languages because they are so different e.g. Lisp vs Haskell is like C vs Ruby. People learning any given functional language are always predominantly from mainstream backgrounds. Moreover, the prospect of commercialization makes F alluring and that is irrelevant for academics happily using Lisp or Haskell. I believe F will be adopted primarily by startup companies composed of small groups of talented programmers attacking hard problems who realise that the productivity of this language gives them serious advantages over the competition.

Your statements about C adopting functional features are correct but then you say Granted, the C or VB implementations are not as elegant or pure as the F counterparts, but the features are there. That is very misleading because the features responsible for F's awesome productivity are certainly not there in C and VB. I'm talking about extensive type inference with automatic generalization and pattern matching over algebraic data types, both of which underpin the productivity of all MLs including OCaml and F. Microsoft have not even begun trying to figure out how to add these features to C and, until they do, C will remain in a league below F in terms of productivity and cost effectiveness.

Now for my subjective opinions. If it were possible to have a one size fits all language then I think programming language researchers would already have invented it. After all, they have complete freedom to do so their results do not even have to be practically useful or adopted. However, I believe the different programming paradigms are at odds by design and, consequently, this is a strictly eitheror situation. For example, using overloading undermines type inference. This is why overloading requires type annotations for disambiguation in F. Many other languages lie at different points along the FPOO curve. OCaml is closer to FP and Scala is closer to OO, but F is the only language to have ever brought the productivity of OCaml to a mainstream industrial platform like .NET. Scala does a slightly better job with respect to OO but only at the cost of a catastrophic loss in terms of productivity due to its lack of automatic generalization.

In summary, I think you are overestimating the amount of crosspollination that will occur between languages and underestimating the amount of programmer migration that will occur.

Posted by

