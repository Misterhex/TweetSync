---
layout: post
title: Rule-of-three
categories:
- tweets
---
*taken from [http://t.co/ly6C4nPENK](http://t.co/ly6C4nPENK)*
>The Rule of Three
>
>July 18, 2013
>
>Every programmer ever born thinks whatever idea just popped out of their head into their editor is the most generalized, most flexible, most onesizefits all solution that has ever been conceived. We think weve built software that is a general purpose solution to some set of problems, but we are almost always wrong. We have the delusion of reuse. Dont feel bad. Its an endemic disease among software developers. An occupational hazard, really.
>
>If I have learned anything in my programming career, it is this building reusable software, truly reusable software, is an incredibly hard problem  right up there with naming things and cache invalidation . My ideas on this crystallized in 2004 when I read Facts and Fallacies of Software Engineering for the first time. Its kind of a hitormiss book overall, but there are a few gems in it, like fact 18
>
>There are two rules of three in software reuse
>
>It is three times as difficult to build reusable components as single use components, and
>
>a reusable component should be tried out in three different applications before it will be sufficiently general to accept into a reuse library.
>
>Yes, this is merely a craftsmans rule of thumb, but the Rule of Three is an incredibly powerful and effective rule of thumb that I have come to believe deeply in. Its similar to the admonition to have at least one other person review your code , another rule of thumb that is proven to work . To build something truly reusable, you must convince three different audiences to use it thoroughly first.
>
>OK, so you built a solution that scratches your itch  but does anyone else care? How many other people have the problem that your software or website addresses? How many other competing solutions are there to choose from? Outside of your personal patient zero case, can you convince anyone to willingly, or even enthusiastically, adopt your solution? Thats your first hurdle. Can you even get to number one?
>
>How deeply do I believe in the Rule of Three? So deeply that I built two whole companies around the concept.
>
>With Stack Overflow, we didnt set out to build a general purpose QA engine. We only wanted to solve the problem of programmers looking for fast, solid technical answers to their programming problems, instead of the endless pages of opinions and arguments they usually got. Oh yeah, and also to deal with that hyphenated site . One of the greatest pleasures of my life is meeting programmers that have never heard of this hyphenated site now. I hope you can forgive me, but I mentally superimpose a giant Dubyastyle Mission Accomplished banner over their heads when they say this. I grin a mile wide every time.
>
>We launched Stack Overflow to the public in August 2008. It was such a runaway early hit that I started to get curious whether it actually would work for different audiences, even though that was never the original idea. But we decided to play the six degrees of Kevin Bacon game and take some baby steps to find out. Less than a year later we had Stack Overflow for programmers, Server Fault for system administrators, and Super User for computer power users  the full trilogy . Three sites with three distinct audiences, all humming right along.
>
>One customer or user or audience might be a fluke. Two gives you confidence that maybe, just maybe, you arent getting lucky this time. And three? Well, three is a magic number. Yes it is .
>
>Once we proved that the Stack Overflow engine could scale to these three distinct communities, I was comfortable pursuing Stack Exchange, which is now a network of over 100 communitydriven QA sites . The programming audience derived assumptions that the engine was originally designed around means it can never scale to all communities  but for communities based on topics that can be understood via questions about science, facts, and data, there is no finer engine in the world. Not that Im biased or anything, but its stone cold truth. Dont believe me? Ask Google.
>
>When we launched Discourse in February, I had zero illusions that we had actually built workable general purpose forum software, even after eight months of hard work. Thats why the buy it page still has this text at the top 
>
>Unfortunately, you cant buy Discourse  yet.
>
>Our immediate plan is to find three great partners willing to live on the bleeding beta edge and run forums with us, so that we can be confident weve built a discussion platform that works for a variety of different communities. We promise to do everything we can to host your forum and make it awesome for two years. In return, you promise to work with us on ironing out all the rough edges in Discourse and making sure it scales successfully  both socially and technologically  to those three very different audiences.
>
>Hey, theres that magic number again!
>
>Even now, months later, were not even pretending that we have open source discussion software that works for most communities. Hell, the FAQ literally tells you not to use Discourse . Instead, were spending all our effort slowly, methodically herding the software through these three select partners, one by one, tweaking it and adapting it for each community along the way, making sure that each of our partners is not just happy with our discussion software but ecstatically happy, before we proceed to even tentatively recommend Discourse as any kind of general purpose discussion solution.
>
>Because I worship at the altar of the Rule of Three, its pretty much been my full time job to say no to people every day for the last 6 months
>
>Hey, Discourse looks great, can you host an instance for us?
>
>Sorry, not yet. Probably in 2014!
>
>We desperately need great forum software for our community! Can you help us set up Discourse?
>
>Sorry, I cant. Were focused on building the software. It is 100 open source , and we do have a pretty good install guide if you want to grab the code and set it up!
>
>Well pay you to host Discourse for us! Shut up and take my money!
>
>Sorry, I wish I could. Its not complete enough yet, and the last person I want to disappoint is a paying customer, and we dont even have a billing system! We plan to get to hosting in earlyish 2014.
>
>So yeah, I wont lie to you  Im basically a total bummer. But Im a total bummer with a plan.
>
>The solution we constructed in Discourse was a decent start, but woefully incomplete  even wrong in some areas. The only way we can figure this out is by slowly running the solution through its paces with our three partners, to live in the same house of software they do as roommates, to walk alongside them as they grow their discussion communities and do everything we can to help build it into a community we enjoy as much as everyone else does. And when there were only one set of footsteps in the sand, well  thats because we were carrying you.
>
>We havent made it all the way through this process yet. Were only on partner 2 it takes the time it takes. But thanks to the Rule of Three, Im confident that by the time we finish with partner 3, we will finally have a truly reusable bit of general purpose open source discussion software to share with the world  one that I can recommend unhesitatingly to almost anyone, because itll probably work for their community, too.
>
>So the next time you think Ive built a reusable thing!, stop, and think how can I find three users, customers, or audiences, to prove that Ive built something reusable? instead.
>
>advertisement Stack Overflow Careers matches the best developers you! with the best employers. You can search our job listings or create a profile and even let employers find you.
>
>Posted by Jeff Atwood
>
>