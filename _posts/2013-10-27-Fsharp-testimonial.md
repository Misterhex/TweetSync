---
layout: post
title: fsharp testimonial
categories:
- tweets
---
*taken from [http://t.co/kQvM8PeDik](http://t.co/kQvM8PeDik)*
source CUFP Workshop, 2008 , permalink

Building valuation models for derivative trades requires rapid development of mathematical models, made possible by composition of lowerlevel model components. We have found that F, with the associated toolset, provides a unique combination of features that make it very well suited to this kind of development. In this talk, I will explain how we are using F and show why it is a good match. I will also talk about the problems we have had, and outline future enhancements that would benefit this kind of work.

financial services, analysis, fixed income, derivatives, financial modelling



The F code is consistently shorter, easier to read, easier to refactor and contains far fewer bugs. As our data analysis tools have developed  weve become more productive.

permalink

At Kaggle we initially chose F for our core data analysis algorithms because of its expressiveness. Weve been so happy with the choice that weve found ourselves moving more and more of our application out of C and into F. The F code is consistently shorter, easier to read, easier to refactor, and, because of the strong typing, contains far fewer bugs.

As our data analysis tools have developed, weve seen domainspecific constructs emerge very naturally as our codebase gets larger, we become more productive.

The fact that F targets the CLR was also critical  even though we have a large existing code base in C, getting started with F was an easy decision because we knew we could use new modules right away.

data science, machine learning, startup



The performance is phenomenal. We can now recalculate the entire bank portfolio from scratch in less than a second and the responsetime for single deal verification calculation is far below 100 milliseconds.

Jan Erik Ekelof, M.Sc.

permalink

I first evaluated F back in 2006  2007 for the purpose of math oriented high performance applications within Financial Risk. I got in spring 2009 a mission to implement a new Realtime Counterparty Risk system covering all possible present and future deal types within the entire bank. The effort was started with only three resources, me as architect and lead developer and two colleagues  one risk expert and one high performing developer. Our first intention was to use C, but I did a quick proofofconcept with F implementing a low level TCPIPcommunication to an existing risksystem. This showed us and our management that F could give us a real productivity boost due to its support for multiple paradigms and functional concepts together with an impressive support for multithreading.

Our first delivery is approaching rapidly and F has proved itself as a real lifesaver. We started off using C in many places but have since then moved almost entirely into F due to its ability to reduce the amount of code required and its simplicity when developing massive parallel computations. The performance is phenomenal. We can now recalculate the entire bank portfolio from scratch in less than a second and the responsetime for single deal verification calculation is far below 100 millisecondsthe original demand was 200 milliseconds to make the application usable for electronic markets. Although some gains are to be attributed to how we have built our calculation models, F made it possible for us to implement our algorithms and techniques with very little code and with a huge similarity to the original mathematical models and regulations which is important for verification of correctness. We have also been able to use the support for Asyncworkflows producing code that is simple and clear and easy to understand but still runs in parallel when required.

The present application contains 35 to 40.000 lines of Fcode and an equal amount of Ccode. However, our estimate is that the F code contains at least 80 of the functionality which is pretty amazing!. Our experience shows us that the number of code lines shrinks with a ratio of 12 to 14 by just porting functionality from C to F not counting single character or empty lines in the Ccode. We have by remodeling increased the ratio to the area of 15 to 18, where the remodeling involves replacing object oriented constructs with functional ones and actually removing mutable states. One example from last week was a limitutilization module written in F but using an objectoriented approach containing 300 lines of code. I rewrote it to below 70 lines of code just by shifting paradigm and the rewrite made it much easier to understand and verify!

financial services, analysis, counterparty risk, fixed income, derivatives, financial modelling



permalink

For nearly 75 years, Grange Insurance has offered competitive products and services to policyholders in more than a dozen U.S. states. To maintain its wellearned reputation and standing, the company decided to enhance its rating enginea software tool for rating policies and performing whatif modeling, impact analyses, and other vital activities. Working with the Sophic Group and using the Microsoft Visual Studio Team System development environment and F programming language, Grange Insurance parallelized its rating engine to take better advantage of multicore server hardware, and in so doing garnered significant performance benefits. Processes that used to require hours now take just minutes, enabling the company to trim timetomarket by weeks and making it far easier for independent agents to sell and service Grange products.

insurance, parallelization, financial services

Contribute testimonials

To add a new testimonial, log on to GitHub, edit this page and send the pull request.  You can also send testimonials by email to fsharpfsharp.org .



Large insurance company developed an entire pension quote calculator entirely in F in under 100 days with no prior F experience at all

Large insurance company

source 1 , source 2 , source 3 , permalink

One of the worlds largest insurance companies have F code in production, are starting several more projects in F. We are currently consulting for this company 2.5bn profit who have migrated some of their number crunching and business logic to F and are so happy with the results 10x faster and 10x less code vs their Visual C 6 that they are proposing to migrate 1,600,000 lines of code to F. In particular, their developers found F easy to learn and use.

 my predecessor developed an entire pension quote calculator typically scheduled to take 300400 man days entirely in F in under 100 days with no prior F experience at all. Performance is 10 better than the C that it replaces because the new code avoids unnecessary copying and exploits multicore parallelism. Part of my job here will be to give basic F training to around 20 people and bring a few people up to expert level.

In answer to Can you give any evidence for 10x performance gain over C?. The insurers C code is a simple manual translation from very inefficient Mathematica code that suffers from several pathological performance problems mainly centered around excessive copying. The F rewrite does not have these problem. The 10x performance gain was verified by the client.

financial services, insurance, actuarial

source , permalink

F is becoming an increasingly important part of our server side infrastructure that supports our mobile and webbased social games with millions of active users. F first came to prominence in our technology stack in the implementation of the rules engine for our social slots games which by now serve over 700,000 unique players and 150,000,000 requests per day at peaks of several thousand requests per second. The F solution offers us an order of magnitude increase in productivity and allows one developer to perform the work that are performed by a team of dedicated developers on an existing Javabased solution, and is critical in supporting our agile approach and biweekly release cycles.

The agentbased programming model offered by Fs MailboxProcessor allows us to build threadsafe components with highconcurrency requirements effortlessly, without using locks and sacrificing maintainability and complexity. These agentbased solutions also offer much improved efficiency and latency whilst running at scale. Indeed our agentbased stateful server for our MMORPG has proved a big success and great cost saver that were in the process of rolling it out across all of our social games!

gaming, agents, cloud, big data, scalability



source , permalink

As a business we actively seek improvement every single day. This is the same for our IT systems, so we have been searching for a means to do that in our inhouse software systems.

The F type system has allowed us to do this  by eliminating null references, increasing type safety and creating rich domain models that help us express hardandfast business rules in a way that we can really lean on the compiler while actually reducing our total lines of code and noise!. Doing so has reduced both our requirement for expensive bug hunts in our production systems, and the overall cost of maintaining unnecessary code complexity.

We have been evaluating F for a year now, and have components in our production systems that have been bugfree since deployment. The results speak for themselves.

retail, ecommerce, ETL, web services, soa, correctness



we have decided to use F as our functional language to have automatic integration with rest of the system

EMEAbased Security Solutions Company

permalink

We develop security product to protect critical infrastructure e.g. Oil Refinery, Airport, etc for countries across the globe. In core of our product there are prediction algorithms. We use different modeling and theorems Monte Carlo, Action, etc to implement the prediction components.  Since we are rewriting our next generation product using .NET, we have decided to use F as functional language to have automatic integration with rest of the system.  We also have advanced machine learning components Artificial Intelligence and functional languages are the best fit to write AI stuff. We are planning to use F as the primary programming language in this area because of its interoperability with .NET.

security, integration



With its new tools, the bank can speed development by 50 percent or more, improve quality, and reduce costs.

Large Financial Services Firm, Europe

source , permalink

A large financial services firm in Europe sought new development tools that could cut costs, boost productivity, and improve the quality of its mathematical models. To address its needs, the bank deployed F, the .NET Framework, and Visual Studio. It will soon upgrade to Visual Studio 2010 and then integrated F. With its new tools, the bank can speed development by 50 percent or more, improve quality, and reduce costs.

financial services, financial modelling, derivatives, fixed income



permalink

We are using F because it considerably increases speed of software development which is crucial for a small company with limited development resources. The most enjoyable feature of this language is that the developer can reason about the code instead of relying only on unit tests. I would say the language encourages Reason Driven Development methodology which leads to virtually bugfree code. F as strongly typed functional language ideally fits for tasks our software solves  Fixed Income securities trading optimization. It is also very important that F computation engine could be seamlessly integrated with other parts of .NETbased software product.

fixed income, trading, optimization, financial services



permalink

We have set up a complete risk management system that combines several data sources, presents them in a  WPF user interface, and does a LOT of calculation behind the scenes. When the calculation requires a proper algorithm i.e. anything that is more complex than a simple for loop, our choice has been F. I have to say I keep being surprised by how compact it is and, nonetheless, how readable it is even when Im reading code that I hadnt looked at or thought about for six months.

data, analysis, calculation, financial services, derivatives



The efficient use of functional programming throughout the RD cycle helped make the cycle faster and more efficient.

Moody Hadi CME Group

source , permalink

The credit markets have varying pockets of liquidity. Market participants would like to understand how the liquidity of their set of entities changes relative to the overall market. A liquidity scoring model is needed to provide these metrics across the entire CDS universe. Functional programming and specifically F was used in order to provide the market with a fast and accurate solution.  The research and development cycle was made faster and more efficient by the effective use of functional programming.

The efficient use of functional programming throughout the RD cycle helped make the cycle faster and more efficient. Less time was spent on translating requirements, miscommunications etc and more on producing a fast and accurate solution quickly.

Since programmers can understand your quant code they can focus on their core competency  developing fast and reliable production code. The development exercise becomes catered towards optimization, performance tuning and error handling i.e. making the code reliable Functionality is not lost from the prototype due to miscommunication or rather crude documentationrequirements, which saves time in testing. Mass regression testing is easy with precise precision level differences between the prototype and the production system.



source , permalink

Ive been coding in F lately, for a production task. F allows you to move smoothly in your programming style I start with pure functional code, shift slightly towards an objectoriented style, and in production code, I sometimes have to do some imperative programming. I can start with a pure idea, and still finish my project with realistic code. Youre never disappointed in any phase of the project!

imperative, functional, financial services, portfolio analysis



I have now delivered three business critical projects written in F. I am still waiting for the first bug to come in.

UKbased Power Company

source , permalink

I am both a C dev and an F dev. I can only offer subjective anecdotal evidence based on my experience of delivering projects in both languages I am too busy delivering software to do anything else.

That said, the one stat in the summary that I find most compelling is the defect rate. I have now delivered three business critical projects written in F. I am still waiting for the first bug to come in. This is not the case with the C projects I have delivered. I will continue to monitor and report on this. It might be that I am just on a lucky streak, but I suspect that the clarity and concision of F code contributes greatly to its correctness.

energy, extract, transform, load, ETL



permalink

F is central to Microsofts quantum algorithm research. The LIQUi simulator Language Integrated Quantum Operations presents an extension of F that presents a seamless integration of classical and quantum operations. The scale and efficiency of the simulator allows it to handle among the largest entangled systems of qubits quantum bits ever modeled utilizing a targeted linear algebra package written entirely in F. In addition, the modular architecture allows users to easily extend the system in any desired research direction. The base library is well over 20,000 lines of code and implements a wide range of modules including circuits, molecular modeling, spinglass systems, quantum error correction, machine learning, factoring and many others. The system runs in client, server and cloud environments. It is also designed to be used as an educational tool and we have found that bringing new users up to speed is a quick and painless process.

simulation, quantum, Microsoft, modelling



F is the night vision goggles I need when I go into the dark and attempt to solve previously unsolved problems.

Microsoft, permalink

Im one of the first users of F, since 2004. In my work e.g. SLAM, Terminator, Zapato, T2, etc I find that F is the night vision goggles I need when I go into the dark and attempt to solve previously unsolved problems. Everything becomes simple and clear when expressed in F.

verification, algorithms, analysis, problem solving



Microsoft Research, permalink

I lead the Biological Computation group at Microsoft Research, where we are developing methods and software for modelling and analysis of biological systems . We have been using F in our group for the past 7 years, and its the language of choice for all of our software development. In particular it forms the basis of our software for programming computational circuits made of DNA , for programming genetic devices that operate inside cells , and for programming complex biological processes in a modular way .

The functional data structures and static typechecking that F provides are ideally suited for developing these domainspecific languages, and the Visual Studio integration is superb for debugging and source control. The integration with .Net is seamless, and allows us to incorporate efficient numerical and visualisation libraries written in C. It also allows us to take advantage of the full suite of .Net UI components.

Our languages are specified with a formal syntax and semantics, which are rigorously analysed prior to their implementation. Programming in a functional language like F brings the implementation much closer to the formal specification, which is important for ensuring accurate simulation and probabilistic analysis. Correct implementation of the semantics is critical, since even small coding errors can give rise to divergent predictions, which can in turn compromise biological experiments. F is a great language for writing clean, concise code, which is statically typed within a professional development environment that supports a wealth of libraries. It will continue to be our language of choice for scientific computing.

biology, modelling, algorithms, analysis, DNA computing, correct, scientific computing



permalink

Producing an Fbased book on functional programming has been a fantastic experience.

Using this material in an Fbased course introducing the fundamental concepts of functional programming has been a delightful experience as well. The simple, welldesigned, yet powerful, core of the language was perfect for that purpose and, to our surprise, the transition from using SML to using F actually made the tooling easier for students no matter which platforms they used.

Furthermore, F with it rich runtime environment has proved to be an excellent programming platform in research applications and in a more advanced course aiming at showing the role of functional programming in a broad variety of applications ranging from computer science applications to more reallife applications. In the first version of this course, given together with AnhDung Phan, the students completed three projects in three weeks One being an interpreter for a rich imperative programming language, another being implementation, application and analysis of a functional pearl, and the last being a curriculum planning system for studies at the Technical University of Denmark.



Solving a number of programming problems using the language convinced me of the supreme qualities of F

Hans Rischel

permalink

I was approached by my former colleague Michael Michael R. Hansen in autumn 2010 where he proposed that we should write a new textbook on functional programming  now using the F programming language. To begin with I was quite sceptical about using a programming language appearing as part of a Microsoft program package. Solving a number of programming problems using the language convinced me, however, of the supreme qualities of F  and we embarked on the project of getting acquainted with F and writing the textbook.

Michael and I spent considerable time solving traditional programming problems in F. A combination of functional and imperative F with an occasional pinch of OO gives a very pleasing platform for program development  once you have found your way through the wilderness of MSDN documentation newcomers to the MSDN world may benefit from the keyword index to the MSDN library documentation found on the website of the book . All of Chapter 10 and part of Chapter 11 present program examples using this programming style.

Computation expressions look esoteric to begin with, but they are actually rather useful. We spent much time trying to get this concept down to earth, with the purpose of making it accessible to simpleminded people like ourselves. The reader may judge how far we succeeded by studying Chapter 12 of the book.

Writing this textbook with Michael has been an exciting experience.



permalink

F was used on Microsofts AdPredict project for adCenter. This was a 4 week project with 4 machine learning experts involving a model with 100million probabilistic variables and processing 6TB of training data in realtime. 2 weeks of CPU time were used during training. Benefits included Quick Coding  Fs powerful type inference means less typing, more thinking, Agile Coding  Typeinferred code is easily refactored, Scripting  Handson exploration, Performance  Immediate scaling to massive data sets, MemoryFaithful  Megadata structures on 16GB machines, Succinctness  Live in the domain, not the language, Symbolic  Schema compilation and Schedules and .NET Integration  Especially Excel, SQL Server

integration, machine learning, advertising, prediction



permalink

Yellow blue soft is a truly international MicroISV We are a small, dynamic and international team who is wondering why filemanagement is lagging 30 years behind and no one seems to care or even notice. We do. We love what were doing and most importantly we love listening to you! Visit our blog to know more about us and join our forum to become part of our sparkling community.

The tabbles are special containers that you can use to categorize any kind of file and document as well as folders and bookmarks. Using Tabbles you can quickly categorize, find, sort and share your documents, in a totally new way.

applications, business logic

source , permalink

Our graduate course on Parallelism this Fall is full, even though it assumes no experience with functional programming or F. The students are preparing the courseware themselves, and one of the topics we are studying is functional reactive programming FRP with continuous, timevarying behaviors. F, with its rich graphics libraries, made it trivial to construct a superfun assignment involving purely functional and interactive animation of a mock solar system.

teaching, research, crossplatform



We recommend teaching F because it is an extraordinary and flexible tool for teaching different areas of Computer Science

Antonio Cisternino

permalink

At the University of Pisa we use F for teaching UI programming, a fundamental course in the third year curriculum. In 2014 two more courses Programming I  II will use F and Try F.

We use F for teaching because it fits teaching both fundamentals and technology thanks to rich programming environment and libraries to access all system resources such as UIs. Moreover, F feels like a dynamic language thanks to F interactive even if it is a statically typed language. Our students use F on Windows, Mac and Linux. Try F is a particularly valuable tool for teaching because it has a quite sophisticated editor with interactive evaluation and the ability of sharing saved files with students.

Ive also used F for teaching programming for scientists at Scuola Normale Superiore, a PhD course at ITU Copenhagen and to graduate students in biomedical engineering.

We recommend teaching F because it is an extraordinary and flexible tool for teaching different areas of Computer Science. The language is rich and its functional nature allows to easily define the appropriate subset for teaching particular concepts. I use it to teach entire classes by typing code and evaluate interactively discussing the results of a single evaluation. It is also a great tool for teaching programming to scientists and engineers I found that its mathematical roots in lambda calculus are more readily grasped by nonprogrammers, and interactive evaluation recalls environments such as Matlab and Mathematica very popular in these communities.



permalink

I teach and use OCaml and F in my lectures Theory of Computation, Formal Languages and Compiler Design, Formal Methods, Applied Cryptography, and F is very popular among my students for the programming projects. Most of the students that are supervised by me undergraduate, master but also PhD use F as the underlying programming language. This is even more the case now since part of our research directions includes working on clouddistributed systems.

F and its programming environment leverage with no doubt the ability and the productivity of my students. This is, in my opinion, for two main reasons. First, F allows the student, but also the researcher like me, to focus on the key aspects of his creation, while, secondly, enhancing

technologically the work done in a so remarkable and facilitated way. Once drawn in paper and pencil, an algorithm is naturally implemented in F and easily deployed in whatever is its execution context.

I am definitively a strong believer of F and amazed by the language and its community.

teaching, research, crossplatform



I evaluated F and it and found that for certain tasks it was better than C in terms of performance while maintaining suitable readability

Atalasoft

source , permalink

I evaluated F and it and found that for certain tasks it was better than C in terms of performance while maintaining suitable readability and for certain tasks, it leant itself better to certain algorithms OctTree based color quantization stands out. we were able to heavily leverage inline functions in FSince each of these are inlines, the F optimizer can actually do something useful with the code. By using F, we were able to address this cost by using inlining, code profiling, scanline caching, memoization and other techniques. In many cases we ended up with code that ran in equivalent time to C code or in some cases faster.

algorithms, performance, immage processing



We would recommend F as an additional tool in the kit of any company building software on the .NET stack.

Michael Newton, Senior Developer

15below Ltd , permalink

Historically, our code base has been written in a mix of C and VB.net. Fs excellent interoperability with the rest of .NET allows us to use it for components where its particular strengths shine without having to discard or rewrite our existing code.

Whether its driving the build and continuous integration system due to scripting being a first class citizen in the F world or writing rock solid infrastructure components due to the easy use of functional paradigms via features such as computational expressions, type inference and discriminated unions we have found our F code to be concise, easy to write and reliable to use. It is a perfect fit for many components within our messaging based architecture.

We would recommend it as an additional tool in the kit of any company building software on the .NET stack.



permalink

Forensic Comparison Software is the ideal tool for displaying two digital images, side by side, for comparison purposes. This software provides the user with maximum flexibility to move quickly through multiple images, in a manner that replaces the intensive manual comparison of hard copy photographs. Focusing on the individuals needs, Forensic Comparison Software provides many intuitive and easy to use features for enhancing digital images.

security, algorithms



Bohdan  shows Fs use for performing aggregations over large datasets, taking advantage of cpu and io parallelism

Bohdan Szymanik

source , permalink

Bohdan Szymanik, CTO at Kiwibank, is keen to show how hes been using F for analysis tasks within the bank. Hell provide an intro to the language then show its use for performing aggregations over large datasets, taking advantage of cpu and io parallelism, and data presentation through charting and image generation.

financial services, data, analysis

permalink

I am currently using F to develop my undergraduate final project. The project consists in developing an Application Programming Interface that allows one to encrypt data using fully homomorphic encryption and I found in F the ideal programming language to develop it.

Besides all the benefits of the functional paradigm for this type of work, F interoperability with the .NET platform allows the construction of powerful implementations that other functional languages do not allow so easily.

I really hope that, in the future, I keep working in Cryptography using F as the main programming language for my projects. I am also preparing a handson presentation about F and Cryptography to be presented at an event in Microsoft Portugal, which I will surely enjoy!

security, cryptography, student, academia

permalink

I have been a Microsoft Student Partner MSP for three years, which offered me the opportunity to be in touch with most portuguese faculties and their students, getting the change to be a bit of an evangelist for Microsoft technologies. I chose to spent my MSP experience giving introductory seminars to F and functional programming using F. So far, I have given these presentations on most portuguese faculties and also at Microsoft portuguese headquarters. The result is always the same everyone gets really amazed when they try F and experience its imense expressive power, its delightful syntax and realize they can do functional programming which is oftenly taken as something boring and complicated on a familiar and confortable environment. Currently, along with a fellow portuguese MSP, following the success of previous presentations and in response to the many requests for new sessions on F Im preparing an handson session on the use of F for Cryptography, to be presented on a future event at Microsoft Portugal.

Personally, F offers me a solid and trustable ground to develop reliable and complex applications on a confortable and succinct way, impossible to achieve with other languages and paradigms. With no doubt, I can say Im a huge fan of F and Im always eager to get in touch with every new feature the language has to offer.



source , permalink

Over the last 6 or so months, Ive been working on a Vim emulation layer. This is the first major project Ive ever done with F and I have to say I love the language. In many ways I used this project as a method of learning F and this learning curve is very much evident if you look through the history of the project. What I find the most amazing about F is just how concise of a language it is. The Vim engine comprises the bulk of the logic yet it only comprises 30 of the overall code base.

learning, conciseness

source , permalink

With F we have written a complete genome resequencing pipeline with interface, algorithms, reporting in 5K lines and it has been incredibly reliable, fast and easy to maintain.

F rocks  were building out various algorithms for DNA processing here and its like a drug. Just implemented a suffix tree in 150 lines that can index 200,000 bases a second  We have probably 1020K lines of code for many scientific applications ranging from a full genome sequencing pipeline that reconstructs and annotated yeast strains, to simulators for various processes and design tools for building DNA sequencesconstructs. There are lab located apps that grab robot log files and move them to databases and a tool for viewing a huge collection of DNA sequencing data.

F has been phenomenally useful. I would be writing a lot of this in Python otherwise and F is more robust, 20x  100x faster to run and for anything but the most trivial programs, faster to develop.

The UI work is especially gratifying, because state of the art for a lot of genomic data display is still PNG images embedded in JavaScript and with F I can render half a million data points on a web page without jumping through hoops.

With Units of Measure I started labelling the coordinates as one or zero based and immediately found a bug where Id casually mixed the two systems. Yay F!

biotechnology, units of measure, bioinformatics



Many attributes of the F programming language make it an ideal choice for the exponentially growing volumes of molecular analysis data

Dr. Robert Boissy

permalink

I am involved in bioinformatics and computational genomics as a faculty member at the University of Nebraska Medical Center UNMC. In an academic medical center like UNMC there are heavy demands on my time and a wide range of different types of research projects that I can end up working on. I have used the F programming language on both the .NET and Mono frameworks for several of these projects, including one that involved a very productive collaboration with IntelliFactory and the use of WebSharper httpwww.websharper.comhome.

You can visit the resulting web site and read the freely available peerreviewed scientific publication that describes the important infectious disease research that this F software development project facilitates. I am always interested in opportunities to work with professional software development enterprises whose teams include developers with F expertise, because I believe that many attributes of the F programming language make it an ideal choice for the development of software solutions that integrate Electronic Health Record EHR data and the exponentially growing volumes of molecular analysis data that can now be obtained from individual patients e.g., personal genome DNA sequencing data.

Theres an exciting future for F in this huge, emerging, datarich health care market.

bioinformatics, genomics, health, molecular analysis, simulation

Additional Case Studies

The following written or recorded case studies describe the benefits of F for a range of enterprise scenarios

