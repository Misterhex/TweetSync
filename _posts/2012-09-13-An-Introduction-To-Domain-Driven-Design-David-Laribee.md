---
layout: post
title: An-Introduction-To-Domain-Driven-Design-David-Laribee
categories:
- tweets
---
*taken from [http://t.co/J2DvHttG](http://t.co/J2DvHttG)*
>An Introduction To DomainDriven Design
>
>David Laribee
>
>Bounded Contexts and aggregate roots
>
>Using the Single Responsibility Principle
>
>Repositories and databases
>
>This article uses the following technologies
>
>Visual Studio
>
>Getting Started with DDD
>
>DomainDriven Design DDD is a collection of principles and patterns that help developers craft elegant object systems. Properly applied it can lead to software abstractions called domain models. These models encapsulate complex business logic, closing the gap between business reality and code.
>
>In this article, Ill cover the basic concepts and design patterns germane to DDD. Think of this article as a gentle introduction to designing and evolving rich domain models. To provide some context to the discussion, Im using a complex business domain with which Im familiar insurance policy management.
>
>If the ideas presented here appeal to you, I highly recommend that you deepen your toolbox by reading the book DomainDriven Design Tackling Complexity in the Heart of Software, by Eric Evans. More than simply the original introduction to DDD, it is a treasure trove of information by one of the industrys most seasoned software designers. The patterns and core tenets of DDD that I will discuss in this article are derived from the concepts that are detailed in this book.
>
>Cutting Contexts by Architectural Need
>
>Bounded Contexts neednt be organized solely by the functional area of an application. Theyre very useful in dividing a system to achieve desired architectural examples. The classic example of this approach is an application that has both a robust transactional footprint and a portfolio of reports.
>
>Its often desirable in such circumstances which might occur pretty often to break out the reporting database from the transactional database. You want the freedom to pursue the right degree of normalization for developing reliable reports, and you want to use an ObjectRelational Mapper so that you can keep coding transactional business logic in the objectoriented paradigm. You can use a technology such as Microsoft Message Queue MSMQ to publish data updates coming from the model and incorporate them into data warehouses optimized for reporting and analysis purposes.
>
>This might come as a shock to some, but its possible for database administrators and developers to get along. Bounded Contexts give you a glimpse of this promised land. If youre interested in architectural Bounded Contexts, I highly recommend keeping tabs on Greg Youngs blog. Hes quite experienced with and articulate about this approach and produces a fair amount of content on the subject.
>
>The Platonic Model
>
>Since were just starting off here, it makes practical sense to define what I mean by model. Answering this question leads us on a short, metaphysical journey. Who better than Plato to guide us?
>
>Plato, that most famous student of Socrates, proposed that the concepts, people, places, and things we intuit and perceive with our senses are merely shadows of the truth. He dubbed this idea of a true thing a Form.
>
>To explain Forms, Plato used whats become known as the allegory of the cave. In this allegory, there exists a people that are bound inside a deep, dark cave. These cave people are chained in such a way that they can only ever see a blank wall of the cave that receives light from the opening. When an animal walks by the opening, a shadow is projected onto the interior wall that the cave dwellers see. To the cave dwellers, these shadows are the real thing. When a lion walks by, they point at the shadow of the lion and exclaim, Run for cover! But it is really only a shadow of the real Form, the lion itself.
>
>You can relate Platos theory of Forms to DDD. Much of its guidance helps us get closer to the ideal model over time. The path to the Form you want to describe with your code is scattered about in the minds of domain experts, the desires of stakeholders, and the requirements of industries in which were working. These are, in a very real sense, the shadows to Platos imaginary cave dwellers.
>
>Furthermore, you are often constrained by programming languages and considerations of time and budget in trying to reach that Form. Its not much of a stretch to say these limitations are the equivalent of cave dwellers only ever being able to see the interior wall of shadows.
>
>Good models exhibit a number of attributes independent of their implementation. The fact of the matter is, the mismatch between the model thats in everyones head and the model youre committing to code is the first thing an aspiring domain modeler should understand.
>
>The software you create is not the true model. It is only a manifestationa shadow, if you willof the application Form you set out to achieve. Even though its an imitation of the perfect solution, you can seek to bring that code closer to the true Form over time.
>
>In DDD, this notion is called modeldriven design. Your understanding of the model is evolved in your code. Domaindriven designers would rather not bother with reams of documentation or heavy diagramming tools. They seek, instead, to imbue their sense of domain understanding directly into their code.
>
>The idea of the code capturing the model is core to DDD. By keeping your software focused on the problem at hand and constrained to solving that problem, you end up with software receptive to new insights and moments of enlightenment. I like what Eric Evans calls it crunching knowledge into models. When you learn something important about the domain, youll know right where to go.
>
>Talk the Talk
>
>Lets examine some of the techniques DDD provides for achieving this goal. A big part of your job as a developer is working with noncoders to understand what youre meant to deliver. If youre working in an organization with any kind of process, you likely have requirements expressed as a user story, task, or use case. Whatever kind of requirements or specification you receive, is it usually complete?
>
>Typically requirements are somewhat murky or expressed at a high level of understanding. In the course of designing and implementing a solution, its beneficial when developers have access to the people who bring some expertise in the intended domain. This is exactly the point of user stories, which are typically expressed according to a template like this as a role, I want feature so that benefit.
>
>Lets take one example from the domain of insurance policy management as an underwriter, I want approval control over a policy so that I can write safe exposures and reject risky ones.
>
>Is there anyone who understands what that means? I know I didnt when I saw it written and prioritized. How can you possibly understand everything that will need to go into delivering the supporting software from this abstracted description?
>
>User stories, properly done, are an invitation to have a conversation with their authorthe user. This means when you go to work on the approvedeny policy feature, you should ideally have access to an underwriter. Underwriters, for the uninitiated, are domain experts at least good ones are who determine whether a certain category of exposure is safe for a carrier to cover.
>
>When you begin discussing the feature with your underwriter or whomever your project domain expert might be, pay especially close attention to the terminology the underwriter uses. These domain experts use company or industrystandard terminology. In DDD, this vocabulary is called the Ubiquitous Language. As developers, you want to understand this vocabulary and not only use it when speaking with domain experts but also see the same terminology reflected in your code. If the terms class code or rate sets or exposure are frequently used in conversation, I would expect to find corresponding class names in the code.
>
>This is a pretty fundamental pattern to DDD. At first blush, the Ubiquitous Language seems like an obvious thing, and chances are a good that number of you are already practicing this intuitively. However, it is critical that developers use the business language in code consciously and as a disciplined rule. Doing so reduces the disconnect between business vocabulary and technological jargon. The how becomes subordinate to the what, and you stay closer to the reason for your job delivering business value.
>
>Context
>
>Developers are, in a sense, organizers. You sling code hopefully with intent into abstractions that solve problems. Tools such as design patterns, layered architectures, and objectoriented principles give a framework for applying order to evermore complicated systems.
>
>DDD extends your organizational toolbox and borrows from wellknown industry patterns. What I like most about the organizational patterns that DDD lays out is that there are solutions for every level of detail in a system. Bounded Contexts guide you toward thinking of software as a portfolio of models. Modules help you organize a larger single model into smaller chunks. Later, Ill cover aggregate roots as a technique for organizing small collaborations between a few highly related classes.
>
>In most enterprise systems there are coursegrained areas of responsibility. DDD calls this top level of organization a Bounded Context.
>
>Workers compensation insurance policies need to be concerned with elements such as
>
>Quoting and sales
>
>General accounting
>
>Determining acceptable exposures underwriting
>
>Wow. Thats a lot of stuff! You could incorporate all of this into a single, monolithic system, but doing so leads you down a foggy, amorphous path. People are talking about two entirely different things when they chat about a policy in the context of a general workflow versus a policy in the context of payroll auditing. If you use the same policy class, youre fattening the profile of that class and getting a long way from triedandtrue best practices such as the Single Responsibility Principle SRP.
>
>Systems that fail to isolate and insulate Bounded Contexts often slip into an architectural style amusingly called The Big Ball of Mud. In 1999, Brian Foot and Joseph Yoder defined the architectural style or antiarchitectural style, as the case may be in their classic paper of the same name  Big Ball of Mud .
>
>DDD nudges you toward identifying contexts and constraining your modeling effort within particular contexts. You can use a simple diagram, called a context map, to explore the boundaries of our system. Ive enumerated the contexts involved in a fully featured, insurance policy management system, and Figure 1 takes this from a textual description to a partial graphical context map.
>
>Figure 1 From Bounded Context to Context Map
>
>Did you notice some key relationships among the various Bounded Contexts? This is valuable intelligence because you can start making informed business and architectural decisions such as packaging and deployment design choice of technology used to marshal messages between models and, perhaps most important, where you choose to set milestones and deploy effort, time, and talent.
>
>One last but very important thought about Bounded Contexts each context owns its own Ubiquitous Language. Its important to differentiate between the notion of a policy in the auditing subsystem versus the policy in core workflow because theyre different things. While they may have the same identity, the value objects and child entities more on these in a bit are often radically different. Since youre modeling within context, you also want the language to provide precision within that context so you can have productive communication with domain experts and within your teams.
>
>Some areas inside models group more closely together than others. Modules are a means of organizing these groups within a particular context, serving as miniboundaries where you want to stop and think about associations to other modules. They are also another organization technique that leads you away from Small Balls of Mud. Technologically, modules are easy to create in the Microsoft .NET Framework they are simply namespaces. But the art of identifying modules involves spending a little time with your code. Eventually you may see a few things emerge as a minimodel within a model, at which time you may consider dividing things into namespaces.
>
>Teasing apart models into cohesive modules has a nice effect in your IDE. Namely, since you need to use multiple using statements to include modules explicitly, you get a much cleaner IntelliSense experience. They also give you a way of looking at associations between larger conceptual chunks of your system with a static analysis tool such as NDepend.
>
>Introducing an organizational change to your model should prompt you to engage in some pragmatic, costbenefit thinking. When you use modules or namespaces to divide up your model, you really want to question whether youre dealing with a separate context. The cost of cleaving out another context is usually much higher now you have two models, likely in two assemblies, that you need to connect with application services, controllers, and so on.
>
>AntiCorruption Layers
>
>An AntiCorruption Layer ACL is another DDD pattern that encourages you to create gatekeepers that work to prevent nondomain concepts from leaking into your model. They keep the model clean.
>
>At their heart, repositories are actually a type of ACL. They keep SQL or objectrelational mapping ORM constructs outside of your model.
>
>ACLs are a great technique for introducing what Michael Feathers calls, in his book Working Effectively With Legacy Code, a seam. A seam is an area where you can start to cleave off some legacy code and begin to introduce changes.Finding seams, along with isolating your core domain, can be extremely valuable when using DDD techniques to refactor and tighten the highest value parts of your code.
>
>Know Your Value Proposition
>
>Most development shops have a handful of both seasoned businesspeople and top developers who are capable of isolating and describing a problem and building an elegant, maintainable objectoriented solution. To get the biggest bang for your customers buck, you want to be sure to understand the core domain of your application. The core domain is the Bounded Context that brings the most value to applying DDD.
>
>In any given enterprise system, there are some areas that are more important than others. The more important areas tend to fall into alignment with the core competencies of the client. Its rare that a business will be running custom general ledger software. But if that business is in insurance going with my previous example and their moneymaking offering is managing risk pools where liability is spread among all members, then they had better be darned good at rejecting bad risks and identifying trends. Or perhaps you have a client thats a medical claims processor, and their strategy is to flank their competition on pricing by automating payments to amplify the efforts of their bill payor workforce.
>
>Whatever the industry, your employer or client has some edge in the market, and this edge is usually where you find the custom software. That custom software is where youre likely to find and model the core domain.
>
>We can measure our investment in value on another dimension, namely where we invest our intellectual capital in reaching technical excellence. Too many times senior developers are the kind of people who get obsessed with new technologies. A certain amount of this is to be expectedthe industry innovates at a relentless pace, and vendors are compelled to frequently release new technology offerings to satisfy their customers demands and stay competitive. The challenge, as I see it, is for senior developers to master the fundamental principles and patterns that contribute value to the heart of a system. Its tempting to get wrapped up in a new framework or platform, but we need to remember the reason vendors produce these things is so we can just trust that they work.
>
>A System of Single Responsibilities
>
>Ive mentioned that DDD provides a pattern language for structuring rich domain models. By implementing these patterns, you get a certain level of adherence to the SRP for free, and thats certainly valuable.
>
>The SRP encourages getting at the core purpose of an interface or class. It guides you toward high cohesiona very good thing, as it makes code easier to discover, reuse, and maintain.
>
>DDD identifies certain types of class responsibilities in a core collection of patterns. Ill cover a few of the more primary ones now, but its worth mentioning that there are many patterns described by Eric Evans in the original book ranging from class level to architectural. For introductory purposes, Ill stay at the class level covering entities, value objects, aggregate roots, domain services, and repositories. Because this is an introduction, Ill only cover the responsibility of each pattern with one to two code examples or tips each.
>
>Entities Have an Identity and a Life
>
>An entity is a thing in your system. Its often helpful to think about these in terms of nouns people, places, and, well, things.
>
>Entities have both an identity and a lifecycle. For example, If I want to access a particular customer in my system, I can ask for her by a number. When I complete a trading order, its then dead to my system and can go to longterm storage the historical reporting system.
>
>Think of entities as units of behavior rather than as units of data. Try to put your logic in the entities that own them. Most times theres an entity that should receive some operation youre trying to add to your model, or a new entity is begging to be created or extracted. In more anemic code, you find a lot of service or manager classes that validate entities from the outside. In general, I much prefer to do that from within the entityyou get all the benefits associated with the fundamental principle of encapsulation, and youre making your entities behavioral.
>
>Some developers are bothered by having dependencies in their entities. Obviously you need to create associations between the various entities in your system. For example, you might need to obtain a Product entity from the Policy entity so you can determine sensible defaults on the policy. Where people seem to fall down is when you need some outside service to perform behavior intrinsic to an entity.
>
>I, for one, am not disturbed by the need to involve other, nonentity classes, and I would try to avoid lifting the central behavior outside of my entity. You should always remember that entities are intrinsically behavioral units. Often that behavior will be implemented as a kind of state machinewhen you invoke a command on an entity, it is responsible for changing its internal statebut sometimes its necessary for you to obtain additional data or impose sideeffects upon the outside world. My preferred technique for accomplishing this is to provide the dependency to the command method
>
>public class Policy  public void RenewIAuditNotifier notifier   do a bunch of internal staterelated things,  some validation, etc. ...  now notify the audit system that theres  a new policy period that needs auditing notifier.ScheduleAuditForthis  
>
>The benefit of this approach is that you dont need an inversion of control IOC container to create an entity for you. Another perfectly acceptable approach, in my opinion, would be to use a Service Locator to resolve the IAuditNotifier inside the method. This technique has the benefit of keeping the interface clean, but I find the former strategy tells me a lot more about my dependencies at a higher level.
>
>Value Objects Describe Things
>
>Value objects are descriptors or properties important in the domain you are modeling. Unlike entities, they do not have an identity they simply describe the things that do have identities. Are you changing an entity called ThirtyFive Dollars or are you incrementing the balance of an account?
>
>Part of the beauty of value objects is that they describe the properties of entities in a much more elegant and intentionrevealing way. Money, a common value object, looks a lot better as a function parameter on a funds transfer API than a decimal does. When you spot it in an interface or entity method, you know what youre dealing with right away.
>
>Value objects are immutable. They are incapable of change once they are created. Why is it important that they be immutable? With value objects, youre seeking sideeffectfree functions, yet another concept borrowed by DDD. When you add 20 to 20, are you changing 20? No, you are creating a new money descriptor of 40. In C you can use the readonly keyword on public fields to enforce immutability and sideeffectfree functions, as shown in Figure 2.
>
>Figure 2 Using ReadOnly to Enforce Immutability
>
>public class Money  public readonly Currency Currency public readonly decimal Amount public Moneydecimal amount, Currency currency  Amount  amount Currency  currency  public Money AddFundsMoney fundsToAdd   because the money were adding might  be in a different currency, well service  locate a money exchange Domain Service. var exchange  ServiceLocator.FindIMoneyExchange var normalizedMoney  exchange.CurrentValueForfundsToAdd, this.Currency var newAmount  this.Amount  normalizedMoney.Amount return new MoneynewAmount, this.Currency   public enum Currency  USD, GBP, EUR, JPY 
>
>Aggregate Roots Combine Entities
>
>An aggregate root is a special kind of entity that consumers refer to directly. Identifying aggregate roots allows you to avoid overcoupling the objects that comprise your model by imposing a few simple rules. You should note that aggregate roots guard their subentities zealously.
>
>The biggest rule to keep in mind is that aggregate roots are the only kind of entity to which your software may hold a reference. This helps avoid The Big Ball of Mud because you now have a constraint that prevents you from creating a tightly coupled system where everything has an association to everything else.
>
>Lets assume I have an entity called Policy. Well, policies get renewed on an annual term, so theres likely an entity called Period. Since a Period cannot exist without a Policy and you can act on Periods through Policy, Policy is said to be an aggregate root and Period is a child of the same.
>
>I like my aggregate roots to just figure it out for me. Consider this consumer code accessing a Policy aggregate root
>
>Policy.CurrentPeriod.Renew
>
>Im trying to renew an insurance policyrecall the class diagram of the core domain of insurance policy management. Note how Im dotting my way to the behavior I want to invoke?
>
>There are a couple of problems with this approach. First, Im clearly violating the Law of Demeter. A method M of an object O should invoke only the methods of the following kinds of objects itself, its parameters, any objects it creates or instantiates, or its direct component objects.
>
>Isnt deep dotting kind of convenient? IntelliSense is one of the coolest, most useful features of Visual Studio and other modern IDEs, but when you start dotting your way to the function you actually want to invoke, youre introducing unnecessary coupling into the system. In the previous example, Im now dependent upon the Policy class and the Period class.
>
>For further reading, Brad Appleton has an excellent article available on his site that explains the deeper implications, theories, tooling and caveats around the Law of Demeter .
>
>The cliche death by a thousand cuts is a good description of the potential maintenance nightmare of an overly coupled system. When you create unnecessary references all over the place, you also create a rigid model where changes in one place result in a cascade of changes all over consumer code. You could accomplish the same goal with, as far as Im concerned, a much more expressive bit of code
>
>Policy.Renew
>
>See how the aggregate just figures it out? Internally it can find the current period and whether or not theres already a renewal period and whatever else you need it to do.
>
>I find that when Im unit testing my aggregate roots using a technique such as BehaviorDriven Development BDD, my tests trend toward the more blackbox and statetesting paradigm. Aggregate roots and entities often end up as state machines, and the behavior matches accordingly. I end up with state validation, addition, and subtraction. Theres quite a bit of behavior going on in the renewal example in Figure 3, and its pretty clear how you can express this in a BDD style of test.
>
>Figure 3 Testing Aggregate Roots
>
>public class Whenrenewinganactivepolicythatneedsrenewal  Policy ThePolicy DateTime OriginalEndingOn SetUp public void Context  ThePolicy  new Policynew DateTime112009 var somePayroll  new CompanyPayroll ThePolicy.CoverssomePayroll ThePolicy.Write OriginalEndingOn  ThePolicy.EndingOn  Test public void Shouldcreateanewperiod  ThePolicy.EndingOn.ShouldEqualOriginalEndingOn.AddYears1  
>
>Domain Services Model Primary Operations
>
>Sometimes you have operations or processes that do not have an identity or lifecycle in your domain. Domain services give you a tool for modeling these concepts. Theyre typically stateless and highly cohesive, often providing a single public method and sometimes an overload for acting on sets.
>
>I like to use services for a few reasons. When there are a number of dependencies involved in a behavior and I cant find a natural place on an entity to place that behavior, Ill use a service. When my Ubiquitous Language talks about a process or operation as a firstorder concept, Ill question whether a service makes sense as a central point of orchestration for the model.
>
>You could use a domain service in the case of renewal. This is an alternative style. Rather than method injecting an IAuditNotifier directly into the method of the Policy entitys Renew method, you might choose to extract a domain service to handle dependency resolution for us its more natural for us to resolve a domain service from an IOC container than an entity. This strategy makes a lot more sense to me when there are multiple dependencies, but Ill present the alternative anyway.
>
>Here is a short example of a domain service
>
>public class PolicyRenewalProcesor  private readonly IAuditNotifier notifier public PolicyRenewalProcessorIAuditNotifier notifier  notifier  notifier  public void RenewPolicy policy  policy.Renew notifier.ScheduleAuditForpolicy  
>
>The word service is a highly overloaded term in the developer world. Sometimes I think of service as in serviceoriented architecture SOA. Other times I think of services as little classes that dont represent a particular person, place, or thing in my application, but that tend to embody processes. Domain services usually fall in this latter category. They tend to be named after verbs or business activities that domain experts introduce into the Ubiquitous Language.
>
>Application services, on the other hand, are a great way to introduce a layered architecture. They can be used for mapping data inside the domain model to a shape required by a client application. For example, maybe you need to display tabular data in a DataGrid, but you want to maintain a granular and jagged object graph in your model.
>
>Application services are also quite useful for integrating multiple modelsfor example, translating between policy auditing and core policy workflow. Similarly, I use them to bring infrastructure dependencies into the mix. Imagine a common scenario where you want to expose your domain model with Windows Communication Foundation WCF. Id use an application service decorated with the WCF attributes to make this happen rather than letting WCF leak into my pure domain model.
>
>Application services tend to be very broad and shallow, embodying cohesive functionality. Consider the interface and partial implementation you see in the code in Figure 4 as a good example of an application service.
>
>Figure 4 A Simple Application Service
>
>public IPolicyService  void RenewPolicyRenewalDTO renewal void TerminatePolicyTerminationDTO termination void WriteQuoteDTO quote  public PolicyService  Service  private readonly ILogger logger public PolicyServiceILogger logger, IPolicyRepository policies  logger  logger policies  policies  public void RenewPolicyRenewalDTO renewal  var policy  policies.Findrenewal.PolicyID policy.Renew var logMessage  string.Format Policy 0 was successfully renewed by 1., Policy.Number, renewal.RequestedBy logger.LoglogMessage  
>
>Repositories Save and Dispense Aggregate Roots
>
>Where do you go to retrieve entities? How do you store them? These questions are answered by the Repository pattern. Repositories represent an inmemory collection, and the conventional wisdom is that you end up with one repository per aggregate root.
>
>Repositories are a good candidate for a super class or what Martin Fowler refers to as the Layer Supertype pattern. Using generics to derive a base repository interface from the previous example is a simple matter
>
>public interface IRepositoryT where T  IEntity  FindTint id FindTQueryT query SaveT entity DeleteT entity 
>
>Repositories prevent database or persistence concepts, such as SQL statements or stored procedures, from commingling with your model and distracting you from the mission at hand capturing the domain. This separation of model code from infrastructure is a good attribute. See the sidebar AntiCorruption Layers for a more detailed discussion.
>
>At this point, you have likely noticed that I am not talking about how aggregate roots, their subordinate entities, and the attached value objects actually get persisted to disk. This is intentional. Saving the data required to perform behavior in your model is a concern orthogonal to the model itself. Persistence is infrastructure.
>
>A survey of these technologies is far beyond the scope of an introduction to DDD. Suffice it to say there are a number of suitable and mature options for storing your models data from ObjectRelational Mapping ORM frameworks to documentoriented databases to rollyourown data mappers for simple scenarios.
>
>DDD Resources
>
>