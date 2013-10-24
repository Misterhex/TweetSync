---
layout: post
title: You-are-here-InfoQ-Homepage-Articles-Paradigm-based
categories:
- tweets
---
*taken from [http://t.co/kBSWWqciWO](http://t.co/kBSWWqciWO)*
>You are here InfoQ Homepage Articles Paradigm based Polyglot Programming
>
>Paradigm based Polyglot Programming
>
>Posted by Sadek Drobi on         Sep 19, 2008 
>
>Share
>
>My Reading List
>
>How many languages are you using on the same project? If you go counting you will see that they are many. I mean XML, Java, XSLT, HTML, CSS... etc.  But the reason why you are using almost all of them is that they happen to be mainstream and, oftentimes, they are the only language choice for a needed framework. You are actually almost obliged to use them. The choice is done for you. Style? CSS. Configuration? Often XML. Web interface description? Html. However, if you want to adopt true polyglot programming, you will have to face inevitable decision of language choice.
>
>To be able to do the right decision one should keep in mind that the main reason of adopting polyglot programming is to be able to choose the right programming language for the domain problem at hand. But then, the question is how to choose the right language for a given domain or subdomain?
>
>First of all, I guess it is crucial to understand properties of the available languages available in terms of production environment and all the other parameters that limit languages choice in an enterprise project. Understanding language properties does not only mean understanding its pros and cons but, more importantly, it means understanding how does the language describe model the world. This is not an easy task because it requires rather deep analysis of the nature of the language.
>
>Related Vendor Content
>
>Put your Java Development Skills to the Test  Play IBM Code Rally!
>
>Understanding Available Programming Languages
>
>A programming language can be viewed as a limited set of vocabularies and rules that are then composed to describe a particular problem. Our ability to better describe the problem we are specifying very much depends on the available constructs and concepts the language offers. This means that quite important aspects of a programming language are 1 the set of available vocabularies and rules and 2 the existing composition rules.
>
>Paradigm of the Programming Language
>
>A coherent set of vocabularies together with rules of composition produce a paradigm that defines a great part of the languages nature or the nature of a subset of a language in a multiparadigm programming language.
>
>Paradigm is the most important property to consider about the available languages. It is essential to use the proper paradigm to produce concise readable code. Using the right paradigm helps keeping the correspondence between the problem domain and the software model, thus allowing to create a clearer model and yielding more readability. Using the wrong paradigm, on the contrary, leads almost inevitably to amounts of adhoc code, hacks and explosion of code a large number of code lines for a relatively straightforward task.
>
>Examples of programming paradigms
>
>Lets take for instance Xml. Xml can be described as a set of elements where each element has properties or tags. These elements can be nested within others so that an element can contain other elements and properties can be set for each of them. This probably tells sufficient information about the nature of the XML language and its compositional nature. In short, this can tell us enough about the language paradigm to be considered later in the domain analysis phase cf. infra. With this, we know indeed that Xml has a nested structure its constructs consist of first class elements with second class properties.
>
>Another example is Lua. Its rather interesting structure is based on tables. Lua can be described as a first class keyvalue tables that can contain other tables. So, obviously, it has a kind of tabular shape that we can, arguably, call tabular paradigm. This too tells enough about the paradigm, enough at least to help us with first fast analysis.
>
>We can look at all other languages in the same way.  Lisp major data structures are lists and programming in Lisp can be conceived as list manipulation that can in turn be viewed as the underlying paradigm of this language.  Lisp is also a functional programming language, in which first class functions can be composed to produce yet others, and this reflects functional paradigm.  Haskell is also a functional programming language but it is as well characterized by quite mathematical nature. This strongly typed language is known for its powerful types that are an important abstraction tool, which makes Haskell quite a safe language with considerable abstraction power. Prolog is mostly composed of boolean predicates and assertions and can be described, as its name reveals, as a logic based programming language.
>
>Other programming language properties to consider
>
>Having considered the paradigm, there are a few other properties to take into account when choosing your language for a particular subdomain.  Typing type dynamicstatic, syntax and other are less important than language paradigm, they are yet to be considered. Providing more insights about these properties is out of the scope of this article. One advice would simply be not to overrate their importance and to put more focus on the paradigm which really plays an important role for code expressiveness of the subdomain of interest.
>
>Discovering and defining subdomains of different nature
>
>While considering polyglot programming, one has most probably already made the decision that several languages can possibly be used for the domain of the concerned project. Usually, this decision comes from. Usually, this decision comes from two things awareness that certain languages fit better certain kinds of problem and an observation that the given domain is composed of different parts possibly having different nature.
>
>Consequently, the problem domain can be partitioned into subparts or subdomains. This partitioning yields right away a good level of distinction and a rather explicit differentiation of subdomains. These subdomains, however, still need to interact, but the difference of their nature should not be ignored when implementing this interaction.
>
>Once the domain is divided properly into sub domains, the task of finding correspondence between the domain and the programming language becomes easier. A domain problem is usually too large to be looked at from one angle. Partitioning gives the opportunity to use different tools with different subdomains, thus supporting better abstraction and design by using the right tool for the problem.
>
>Identifying subdomains and their nature is not easy. It requires analysis skills and a thorough understanding of the target domain. It is instrumental to do this task in narrow collaboration with domain experts to avoid drawing false conclusions about the nature of subdomains. This task is largely about observing properties and interactions of different modules, and abstracting the style of interaction and the existence of few concepts that we can describe as the paradigm or the nature of the subdomain. There are several techniques and practices that help learning the domain and discovering its nature as, for instance, Domain Crunching in Eric Evans DomainDrivenDesign and MultiParadigm Design of James Coplien.
>
>While keeping in mind available programming paradigms can help formulating domain concepts in accordance with available modeling constructs, it should not affect the domain learning in a way to constrain the problem analysis and to bend domain concept to fit into preferred paradigm. This issue is not uncommon in OOP when domain concepts are by default considered to be objects.
>
>Choosing the right languageparadigm for a subdomain
>
>Having identified subdomains, now it is time to choose for each of them the right programming language. In a few words, the right programming language is the one that will allow writing the subdomain problem description in the most fluent way. While programming, one usually starts thinking under the influence of the language and through its concepts. Some programming languages make the code for the subdomain obscure and full of noise, but with the right paradigm one can use the correspondence that exists between the subdomain and the programming language concepts to produce more concise and extensible code. Extensibility is one of the important positive side effects of paradigm match.  The domain would not suddenly change its nature even if it evolves. Hence, it will most probably do so along the lines of the same paradigm. If the language nature matches this paradigm, one can assume that this would reduce the cost of change induced by the domain evolution and limit its scope.
>
>Examples of subdomain  programming paradigm correspondence
>
>Graphical User Interface
>
>Lets take Graphical User Interface.  As we look at an interface, what we see is panels inside other panels. These panels have graphical components inside them buttons, photos, blocks that can have other controls, which themselves can have other controls. From this brief analysis, we realize that graphical user interface has a nesting nature. Things can be nested inside other things. Also any of its components has properties. Given that, it seems like xml is a perfect fit for GUI.
>
>However, I guess our conclusion was drawn a bit too fast. I guess a good part of a GUI can be represented by xml, but not necessarily everything. WPF and XAML is a good case in our study. XAML got an XML based syntax which, as we said, goes along with the nesting nature of a GUI. However, binding elements, for instance, is done using special syntax that is not based on xml. But there are other subdomains of graphical interface description that could profit from using syntax that is more suitable than xml. I think of styles for example. Writing styles with xml adds a lot of noise because of the opening and closing tags that dont really represent any meaning for this sub domain. A better representation of style should take more into consideration their nature. But what is the nature of graphical style description?  A style in GUIs is merely a set of properties with their values that are identified by a special name. Moreover, the style does not care where the property happens to be in the component, or a sub component or even deeper. A style is just a description of properties. If a component has a given property, it will take the description into consideration. Otherwise it is simply ignored and does no harm. After this rather simple analysis it became almost obvious why CSS offers a good choice of syntax for the subdomain of graphical styles.
>
>Streams and data workflow processing
>
>Imagine weve got a flow of actions, information or data that need to be processed. Mostly, this stream of things is virtually endless, and it rather needs to be adapted and processed to produce a series, another stream of action or information based on the first one. Instances of this are RSS feed, http requestsresponses, network signals and a lot of other stream based domains. Here the example is already chosen to have a stream oriented paradigm, but it is not too hard to figure out this nature with enough domain analysis. Choosing technology that shares this nature is instrumental for reducing code clutter and improving codes readability and quality. Otherwise you can find yourself writing a lot of nested loops and while constructs and that is where modularity starts fading out.
>
>Functional Programming in general and in particular lazy languages like Haskell, have an interesting nature for dealing with infinite lists and streams. Functions can be sequenced to form an explicit workflow that yields a more modular solution for streamoriented paradigms.
>
>More examples of paradigm fit for a subdomain
>
>There are a lot of other examples to where domain and technical solution paradigms fit is essential when choosing tools. Domain with A domain with a lot of rules and validation predicates can take much advantage of predicated oriented or logic languages like Prolog and Haskell. Concurrent programming language like Erlang can be a best fit for concurrency based subdomains and domains that use a lot of string processing can benefit from programming languages that have a powerful string processing paradigm.
>
>MultiParadigm Programming Languages
>
>Some programming languages do not offer a single but rather a selective mix of paradigms. If it represents a good opportunity to optimize paradigm match, it doesnt categorically replace Polyglot Programming. Both approach to multiParadigm design have pros and cons. On the one hand, for instance, in mono paradigm languages, syntax is optimized for best expressiveness of the concerned paradigm. On the other hand, in multiparadigm languages, integration of several paradigms is thought of while designing the language itself. The latter can be both an advantage as it makes it easier to use several paradigms and a disadvantage, making this interaction implicit and less intention revealing. Multiparadigm programming languages tend to be complex, but some of them benefit from being already mainstream like C and C.
>
>These tradeoffs and a lot of others should be considered when choosing between the two techniques. When it is not really possible to use several languages because of production environment this is becoming less and less valid with implementations of a lot of interesting languages on several mainstream platforms, then multi paradigm language can be a good choice. Team members skills can be a reason even if some people, including myself, can argue against its validity and see it as a problem disguise.
>
>Conclusion
>
>Even if some generalizations, such as tier based choice of language,can be motivating for using polyglot programming, their approach is rather simplistic and does not treat directly and effectivelythe issue for which one might need to use more than oneprogramming language on a project. Thoroughdomain analysis and multiparadigm design are central to Polyglot Programming. Matching the programming language paradigm tothe subdomains natureis the key to more readable, concise and evolutionfriendly code that is free from useless noise. Understanding and identifying paradigms of programminglanguages is the first step towards optimized polyglot programming. Domain Driven Design and Multiparadigm Designtechniques should then accompany programming throughout the project.
>
>References
>
>