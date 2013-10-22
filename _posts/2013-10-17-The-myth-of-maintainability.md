---
layout: post
title: The-myth-of-maintainability
categories:
- tweets
---
*taken from [http://t.co/XjZAIgdMJG](http://t.co/XjZAIgdMJG)*
>The myth of maintainability
>
>Will this be maintainable in the long term?  a comment on every code review ever
>
>I have an allergic reaction to this question. It is often used when Developer A wants to add a nontrivial component to the codebase. The room or code review will always have Developer B who springs up the dubious concern of maintainability. Proceed with caution.
>
>What do we exactly mean by maintainability as developers? Will the code be easy to understand for the next person to read it? This is readability, which could be seen as a factor in maintainability, and is valid. The more pressing interpretations tend to be along the lines of extensibility, abstraction, and handwavy higher level design or architecture.
>
>The problem with the latter interpretations is the possible misunderstanding of why we write software. Software exists to drive a business need, add business value, and in the end  generate revenue. Lets not waste time and these discussions usually end up just wasting time.
>
>Extensibility
>
>If the discussion of extensibility takes a deep dive into abstract design patterns and language, step back and reevaluate the purpose of this concern. It is often conflated with putting a finger on where the product may go on 1, 5, or 10 years and unless Developer B has a crystal ball and knows what the future feature set will be  drop it. Focus on the present and concrete code, and address concerns in that context. Again, there is not enough time to pontificate on the vague and abstract.
>
>Abstraction
>
>One sign of unmaintainable code is having leaky or nonexistent abstractions that make other areas of the codebase less than enjoyable to work in. That much is true. If you break existing abstractions, fix them. However, it is an occupational hazard to be in the business of making abstractions for the sake of abstracting. Try to understand what is being proposed and investigate whether this makes sense in the current codebase, 34 instances of where this abstraction will be useful is a good rule of thumb, if not  drop it. The Rails community has adopted the mantra of PDI please do investigate when introducing layers of abstraction to see if it makes sense at that moment in time.
>
>Lofty design
>
>Theres always the person who will pull the last design pattern they heard of from their hat and try to shoehorn it into the next component to enter the codebase. Typically the maintainability concern is of highlevel design and they will have the visceral need to divorce themselves from the current problem, again hearkening to the Abstract and Vague. If this is the case  drop it. These design principles need to make sense in the present. There should be a clear example of how it makes life better longterm as well, beforeafter code should sell itself.
>
>This is not a knock on abstraction, extensibility, or software design  these ideas are at the core of our field. They help make good software great. However they are not to be presented behind the facade of maintainability, and applying these principles through guesswork is not a step towards making great software.
>
>