---
layout: post
title: DDD-in-practice
categories:
- tweets
---
*taken from [http://t.co/qU37TLDK1F](http://t.co/qU37TLDK1F)*
>You are here InfoQ Homepage Articles Domain Driven Design and Development In Practice
>
>Domain Driven Design and Development In Practice
>
>Posted by Srini Penchikala on         Jun 12, 2008 
>
>Share
>
>My Reading List
>
>Background
>
>Domain Driven Design DDD is about mapping business domain concepts into software artifacts. Most of the writings and articles on this topic have been based on Eric Evans book Domain Driven Design, covering the domain modeling and design aspects mainly from a conceptual and design standpoint. These writings discuss the main elements of DDD such as Entity, Value Object, Service etc or they talk about concepts like Ubiquitous Language , Bounded Context and AntiCorruption Layer.
>
>The objective of this article is to cover the domain modeling and design from a practical standpoint on how one would go about taking a domain model and actually implementing it. We will look at the guidelines, best practices, frameworks and tools that the technical leads and architects can use in the implementation effort. Domain Driven Design and Development is also influenced by several architectural, design, and implementation aspects such as
>
>Business Rules
>
>Related Sponsor
>
>AppDynamics is the nextgeneration application performance management solution that simplifies the management of complex, businesscritical apps.
>
>The article includes a sample loan processing application to demonstrate how design aspects and development best practices discussed here, can be used in a realworld domain driven development project. The sample application uses frameworks like Spring, Dozer, Spring Security, JAXB, Arid POJOs and Spring Dynamic Modules in implementing the loan processing domain model. The example code will be in Java, but it should be fairly easy to understand for most developers, regardless of language background.
>
>Introduction
>
>A domain model offers several benefits some of which are
>
>It helps the team create a common model, between the business and IT stakeholders in the company, that the team can use to communicate about the business requirements, data entities, and process models.
>
>The model is modular, extensible and easy to maintain as the design reflects the business model.
>
>It improves the reusability and testability of the business domain objects.
>
>On the flip side, lets see what happens when IT teams dont follow a domain model approach for developing medium to large size enterprise software applications.
>
>Not investing in a domain model and development effort leads to an application architecture with a Fat Service Layer and an Anemic Domain Model where facade classes usually Stateless Session Beans start accumulating more and more business logic and domain objects become mere data carriers with getters and setters. This approach also leads to domain specific business logic and rules being scattered and duplicated in some cases in several different facade classes.
>
>Anemic domain models, in most cases, are not costeffective they dont give the company a competitive advantage over other companies because implementing business requirement changes in this architecture take too long to develop and deploy to production environment.
>
>Before we look at different architectural and design considerations in a DDD implementation project, lets take a look at the characteristics of a rich domain model.
>
>The domain model should focus on a specific business operational domain. It should align with the business model, strategies and business processes.
>
>It should be isolated from other domains in the business as well as other layers in the application architecture.
>
>It should be reusable to avoid any duplicate models and implementations of the same core business domain elements.
>
>The model should be designed loosely coupled with other layers in the application, meaning no dependencies on the layers on either side of domain layer i.e. database and facade layers.
>
>It should be an abstract and cleanly separated layer enabling easier maintenance, testing, and versioning. The domain classes should be unit testable outside the container and from inside the IDE.
>
>It should be designed using a POJO programming model without any technology or framework dependencies I always tell the project teams I work with in my company, that the technology we use for software development is Java.
>
>The domain model should be independent of persistence implementation details although the technology does place some constraints on the model.
>
>It should have minimum dependencies on any infrastructure frameworks because it will outlive these frameworks and we dont want any tight coupling on any external framework.
>
>In order to achieve a better Return On Investment ROI on software development efforts, the senior management in Business Units and IT has to commit to the investment of time, money, and resources in business domain modeling and its implementation. Lets look at some of the other factors that are required for implementing a domain model.
>
>The team should have regular access to business domain subject matter experts.
>
>IT team modelers, architects, and developers should possess good modeling and design skills.
>
>Analysts should have good business process modeling skills.
>
>Architects and developers should have strong Object Oriented Design OOD and Programming OOP experience.
>
>Role of Domain Driven Design in Enterprise Architecture
>
>Domain modeling and DDD play a vital role in Enterprise Architecture EA. Since one of the goals of EA is to align IT with the business units, the domain model which is the representation of business entities, becomes a core part of EA. This is why most of the EA components business or infrastructural should be designed and implemented around the domain model.
>
>Domain Driven Design and SOA
>
>Service Oriented Architecture SOA is gaining more and more momentum in the recent past to help the teams build software components and services based on the business processes and to speed up the time to market for the new products. Domain driven design is a key element of SOA architecture because it helps in encapsulating the business logic and rules in domain objects. The domain model also provides the language and context with which the service contract can be defined.
>
>An SOA effort should include the design and implementation of the domain model if one doesnt already exist. If we put too much emphasis on the SOA services and ignore the importance of domain model, we will end up with an anemic domain model and bloated services in the application architecture.
>
>An ideal scenario is the one where DDD effort is implemented iteratively with developing the application layer and SOA components at the same time as these are the direct consumers of domain model elements. With a rich domain implementation, SOA design will become relatively simple by providing a shell proxy to the domain objects. But if we focus too much on the SOA layer without a decent domain model in the backend, the business services will be calling an incomplete domain model, which can result in a brittle SOA architecture.
>
>Project Management
>
>A domain modeling project typically includes the following steps
>
>Model and document business processes first.
>
>Select a candidate business process and work with the business domain experts to document it using the Ubiquitous Language.
>
>Identify all the services that are required for the candidate business process. These services can be atomic single step or orchestrated multistep with or without workflow in nature. They can also be business e.g. Underwriting or Funding or infrastructure e.g. Email or Job Scheduling.
>
>Identify and document the state and behavior of the objects used by services identified in the previous step.
>
>Its important to keep the model at a highlevel initially focusing on the core elements of the business domain.
>
>From a project management standpoint, a realworld DDD implementation project comprises the same phases as any other software development project. These phases include
>
>Model the domain
>
>Development
>
>Unit and Integration Testing
>
>Refine and refactor the domain model based on the design and development Continuous Integration CI of model concepts.
>
>Repeat the above steps using the updated domain model CI of domain implementation.
>
>An agile software development methodology is a great fit here because agile methodologies focus on the delivery of business value just like DDD focuses on the alignment of software system with business model. Also, with the iterative nature of DDD, agile methodologies such as SCRUM or DSDM are better frameworks to manage the project. Using SCRUM for project management and XP for software development purposes methodologies is a good combination for managing a DDD implementation project.
>
>This project management model of DDD iteration cycle is shown in Figure 1 below.
>
>Figure 1. DDD Iteration cycle diagram Click on the screen shot to open a fullsize view.
>
>Domain driven design effort begins where domain modeling ends. Ramnivas Laddad recommends the following steps on how to go about implementing a domain object model. He emphasizes on putting more focus on domain objects than services in the domain model.
>
>Start with domain entities and domain logic.
>
>Start without a service layer initially and only add services where the logic doesnt belong in any domain entity or value object.
>
>Use Ubiquitous Language, Design by Contract DbC, Automated Tests, CI and Refactoring to make the implementation as closely aligned as possible with the domain model.
>
>From the design and implementation standpoint, a typical DDD framework should support the following features.
>
>It should be a POJO or POCO if your company is a .NET shop based framework.
>
>It should support the design and implementation of a business domain model using the DDD concepts.
>
>It should support concepts like Dependency Injection DI and Aspect Oriented Programming AOP out of the box. Note These concepts are explained in more detail later in the article.
>
>Integration with unit testing frameworks such as JUnit , TestNG , Unitils etc.
>
>Good integration with other JavaJava EE frameworks like JPA, Hibernate, TopLink etc.
>
>Sample Application
>
>The sample application used in this article is a home loan processing system and the business use case is to approve the funding request of a home loan mortgage. When a loan application is submitted to a mortgage lending company, it first goes through the Underwriting process where the underwriters approve or deny the loan request based on customers income details, credit history and other factors. If the loan application is approved by underwriting group, it goes through Closing and Funding steps in the loan approval process.
>
>Funding module in the loan processing system automates the process of disbursement of funds to the borrower. The funding process typically starts with mortgage lender typically a bank forwarding the loan package to a title company. The title company then reviews the loan package and schedules a date with seller and buyer of the property for closing the loan. Borrower and the seller meet with the closing agent at the title company to sign the paperwork to transfer the title of the property.
>
>Architecture
>
>A typical enterprise application architecture consists of the following four conceptual layers
>
>User Interface Presentation Layer Responsible for presenting information to the user and interpreting user commands.
>
>Application Layer This layer coordinates the application activity. It doesnt contain any business logic. It does not hold the state of business objects, but it can hold the state of an application tasks progress.
>
>Domain Layer This layer contains information about the business domain. The state of business objects is held here. Persistence of the business objects and possibly their state is delegated to the infrastructure layer.
>
>Infrastructure Layer This layer acts as a supporting library for all the other layers. It provides communication between layers, implements persistence for business objects, contains supporting libraries for the user interface layer, etc.
>
>Lets look at the application and domain layers in more detail. The Application layer
>
>is responsible for the navigation between the UI screens in the application as well as the interaction with the application layers of other systems.
>
>can also perform the basic nonbusiness related validation on the user input data before transmitting it to the other lower layers of the application.
>
>doesnt contain any business or domain related logic or data access logic.
>
>doesnt have any state reflecting a business use case but it can manage the state of the user session or the progress of a task.
>
>The domain layer
>
>is responsible for the concepts of business domain, information about the business use case and the business rules. Domain objects encapsulate the state and behavior of business entities. Examples of business entities in a loan processing application are Mortgage, Property, and Borrower.
>
>can also manage the state session of a business use case if the use case spans multiple user requests e.g. loan registration process which consists of multiple steps user entering the loan details, system returning the products and rates based on the loan parameters, user selecting a specific productrate combination, and finally the system locking the loan for that rate.
>
>contains service objects that only have a defined operational behavior which is not part of any domain object. Services encapsulate behavior of the business domain that doesnt fit in the domain objects themselves.
>
>is the heart of the business application and should be well isolated from the other layers of the application. Also, it should not be dependent on the application frameworks used in the other layers JSPJSF, Struts , EJB, Hibernate , XMLBeans and soon.
>
>Figure 2 below shows the different architecture layers used in the application and how they relate to DDD.
>
>Figure 2. Layered Application Architecture diagram Click on the screen shot to open a fullsize view.
>
>Following design aspects are considered as the main ingredients of the current DDD implementation recipe
>
>Object Oriented Programming  OOP 
>
>Dependency Injection  DI 
>
>Aspect Oriented Programming  AOP 
>
>OOP is the most important element in the domain implementation. Domain objects should be designed using Plain Java Classes and Interfaces by taking advantage of OOP concepts like inheritance, encapsulation, and polymorphism. Most of the domain elements are true objects with both State attributes and Behavior methods or operations that act on the state. They also correspond to real world concepts and can fit right in with OOP concepts. Entities and Value Objects in DDD are classic examples of OOP concepts since they have both state and behavior.
>
>In a typical Unit of Work UOW, domain objects need to collaborate with other objects whether they are Services, Repositories or Factories. Domain objects also need to manage other concerns such as domain state change tracking, auditing, caching, transaction management including transaction retry which are crosscutting in nature. These are reusable nondomain related concerns that typically tend to be scattered and duplicated all over the code including the domain layer. Embedding this logic in the domain objects leads to tangling and cluttering of the domain layer with nondomain related code.
>
>When it comes to managing the code dependencies without tightcoupling between objects and isolating crosscutting concerns, OOP alone cannot provide an elegant design solution for domain driven design and development. This is where design concepts like DI and AOP can be used to complement OOP to minimize tight coupling, enhance modularity and better manage the crosscutting concerns.
>
>Dependency Injection
>
>DI is a great way to move the configuration and dependency code out of the domain objects. Also, the design dependency of domain classes on Data Access Object DAO classes and service classes on domain classes makes DI a must have in DDD implementation. DI facilitates a cleaner and loosely coupled design by injecting the other objects such as Repositories and Services into Domain Objects.
>
>In the sample application, the service object FundingServiceImpl uses DI to inject the Entity objects Loan, Borrower and FundingRequest. Also, Entities reference Repositories via DI. Similarly, other Java EE resources like DataSource , Hibernate Session Factory and Transaction Manager are injected into Service and Repository objects.
>
>Aspect Oriented Programming
>
>AOP helps in an even better design i.e. less cluttering in the domain model by removing the crosscutting concerns code like auditing, domain state change tracking etc from the domain objects. It can be used to inject collaborating objects and services into domain objects especially the objects that are not instantiated by the container such as the persistence objects. Other aspects in the domain layer that could use AOP are caching, transaction management and role based security authorization.
>
>Loan processing application uses custom Aspects to introduce data caching into the Service objects. Loan product and interest rate information is loaded from the database table once the first this information is requested by the client and is then stored in an object cache  JBossCache  for subsequent product and rate lookups. Product and rate data is frequently accessed but its not updated that regularly, so its a good candidate for caching the data instead of hitting the backend database every time.
>
>The role of DI and AOP concepts in DDD was the main topic in a recent discussion thread. The discussion was based on a presentation by Ramnivas Laddad where he made the assertion that DDD cannot be implemented without help of AOP and DI . In the presentation, Ramnivas talked about the concept of fine grained DI using AOP to make domain objects regain smart behavior. He mentioned that domain objects need access to other fine grained objects to provide rich behavior and a solution to this is to inject Services, Factories, or Repositories into Domain Objects by using Aspects to inject dependency at constructor or setter invocation time.
>
>Chris Richardson also discussed about using DI, objects, and Aspects to improve the application design by reducing coupling and increasing modularity. Chris talked about Big Fat Service antipattern which is the result of coupling, tangling and scattering of the application code and how to avoid it using DI and AOP concepts.
>
>Annotations
>
>A recent trend to define and manage Aspects and DI is to use Annotations. Annotations help in minimizing the required artifacts for implementing the remote services such as EJB or Web Services. They also simplify the configuration management tasks. Spring 2.5 , Hibernate 3 and other frameworks take full advantage of Annotations to configure the components in different layers of a Java enterprise application.
>
>We should take advantage of annotations to generate the boiler plate code where it adds value in terms of flexibility. At the same time, annotations should be used with some caution. They should be used where they are not confusing or misleading in understanding the actual code. A good example of using Annotation is Hibernate ORM mapping where it adds value to specify the SQL table or column name right next to the class or attribute name. On the other hand, details like JDBC driver configuration driver name, jdbc url, user name, and password are better suited to be stored in an XML file rather than using Annotations. This is based on the assumption that the database is in the same context. If significant transformations are required between the domain model and the database tables, then the design should take that concern into consideration.
>
>Java EE 5 provides JPA annotations like Entity , PersistenceUnit , PersistenceContext , etc. to add persistence details to plain Java classes. In the context of domain modeling, Entity, Repository and Service are good candidates for using Annotations.
>
>Configurable is Springs way of injecting Repository and Services into a Domain Object. Spring framework extends the Domain Object DI idea beyond the Configurable annotation. Ramnivas recently blogged about the latest improvements in upcoming Spring 2.5.2 release available starting with project snapshot build 379. There are three new aspects AnnotationBeanConfigurerAspect, AbstractInterfaceDrivenDependencyInjectionAspect, and AbstractDependencyInjectionAspect to provide simple and more flexible options for Domain Object DI. Ramnivas said the main reason behind introducing the middle aspect AbstractInterfaceDrivenDependencyInjectionAspect is to allow domainspecific annotations and interfaces to play a role. Spring also provides other annotations like Repository , Service , and Transactional to help in the design of the domain classes.
>
>Some of the annotations used in the sample application, Entity objects Loan, Borrower, and FundingRequest use Entity annotation. These objects also use Configurable annotation to wire the Repository objects. And the Service classes use Transactional annotation to decorate the service methods with transactional behavior.
>
>Domain model and Security
>
>Application security in the domain layer ensures only authorized clients human users or other applications are calling the domain operations as well as accessing the domain state.
>
>Spring Security a subproject in Spring Portfolio provides a finegrained access control in both presentation URL based and domain Method Level layers of the application. The framework uses Springs Bean Proxy to intercept method invocation and apply security constraints. It offers a rolebased declarative security for Java objects using MethodSecurityInterceptor class. There is also instance level security in the form of Access Control Lists ACLs for domain objects to control the user access at the instance level.
>
>The main advantage of using Spring Security for managing the authorization requirements in the domain model is that the framework has a noninvasive architecture so we can have a clean separation between the domain and security aspects. Also, the business objects are not cluttered with security implementation details. We can write common security rules in one place and apply them using AOP techniques wherever they need to be implemented.
>
>In domain and service classes, authorization is managed at the class method invocation level. For example, the loan approval method in an Underwriting domain object can be invoked by any user with an Underwriter role for loans up to 1 million dollars whereas the approval method in the same domain object for loan applications with a loan amount greater than 1 million dollars can only be called by a user with Underwriting Supervisor role.
>
>The following table is a summary of various application security concerns in each layer of the application architecture.
>
>Table 1. Security Concerns in Various Application Layers
>
>Layer
>
>DB object level authorization Stored procedures, Stored functions, Triggers
>
>Business Rules
>
>Business rules are an important part of the business domain. They define data validation and other constraints that need to be applied on domain objects in specific business process scenarios. Business rules typically fall into the following categories
>
>Data validation
>
>Business decisionmaking
>
>Process routing workflow logic
>
>The context is very important in DDD world. Context specificity dictates the domain object collaboration as well as other runtime factors like what business rules to apply etc. Validation and other business rules are always processed in a specific business context. This means the same domain object, in a different business context, will have to process different set of business rules. For example, some attributes of a loan domain object such as loan amount and interest rate cannot be changed after the loan has been through the Underwriting step in the loan approval process. But the same attributes can be changed when the loan is just registered and locked for a specific interest rate.
>
>Even though all the domain specific business rules should be encapsulated in the domain layer, some application designs put the rules in facade classes, which leads to domain classes becoming anemic in terms of business rules logic. This may be an acceptable solution in small size applications, but it is not recommended for midsize to large enterprise applications that contain complex business rules. A better design option is to put the rules where they belong, inside the domain objects. If a business rule logic spans two or more Entity objects, then it should become part of a Service class.
>
>Also, if we are not diligent in the application, design business rules will end up being coded in the form of several switch statements in the code. And over time as the rules get more complex, developers dont take time to refactor the code to move switch statements into a more manageable design. Hardcoding the complex routing or decisionmaking rules logic in the classes leads to longer methods in the classes, code duplication, and ultimately a rigid application design which will become a maintenance nightmare in the long run. A good design is to place all the rules especially complex rules that change frequently as the business strategy changes into a Rules engine using a rules framework like JBoss Rules , OpenRules , or Mandarax  and invoke them from the domain classes.
>
>Validation rules are usually implemented in different languages like Javascript, XML, Java code, and other scripting languages. But due to the dynamic nature of business rules, scripting languages such as Ruby , Groovy , or Domain Specific Languages DSL are a better choice to define and manage these rules. Struts Application layer, Spring Service and Hibernate ORM all have their own validation modules where we can apply the validation rules on the incoming or outgoing data objects. In some cases, validation rules can also be managed as Aspects link AOP rules article here that can be weaved into different layers e.g. Service and Controller of the application.
>
>Its important to keep in mind the unit testing aspect when writing the domain classes to manage business rules. Any changes in the rules logic should be easily unit testable in isolation.
>
>The sample application includes a business rule set to validate the loan parameters are within the allowed product and rate specifications. The rules are defined in a scripting language Groovy and are applied on the loan data passed to FundingService object.
>
>Design
>
>From a design standpoint, the domain layer should have a well defined boundary to avoid the corruption of the layer from noncore domain layer concerns such as vendorspecific translations, data filtering, transformations, etc. Domain elements should be designed to hold the domain state and behavior correctly. Different domain elements are structured differently based on state and behavior. Table 2 below shows the domain elements and what they contain.
>
>Table 2. Domain elements with state and behavior
>
>Domain Element
>
>Service, Repository
>
>Behavior only
>
>Entities, Value Objects, and Aggregates which contain both state data and behavior operations, should have clearly defined state and behavior. At the same time, this behavior should not extend beyond the limits of the objects boundaries. Entities should do most of the work in the use case acting on their local state. But they shouldnt know about too many unrelated concepts.
>
>Good design practice is to only include the getterssetters for the attributes that are required to encapsulate the state of domain objects. When designing the domain objects, only provide setter methods for those fields that can change. Also, the public constructors should contain only the required fields instead of a constructor with all the fields in the domain class.
>
>In most of the use cases, we dont really have to be able to change the state of an object directly. So, instead of changing the internal state, create a new object with the changed state and return the new object. This is sufficient in these use cases and it also reduces design complexity.
>
>Aggregate classes hide the usage of collaborating classes from callers. They can be used for encapsulating complex, intrusive, and statedependent requirements in the domain classes.
>
>Design Patterns that Support DDD
>
>There are several design patterns that help in domain driven design and development. Following is a list of these design patterns
>
>Domain Object DO
>
>Repository The Repository contains domaincentric methods and uses the DAO to interact with the database.
>
>Generic DAOs
>
>Temporal Patterns These patterns add time dimension to rich domain models. Bitemporal framework , which is based on Martin Fowlers Temporal Patterns , provides a design approach to dealing with bitemporal issues in the domain models. The core domain objects and their bitemporal properties can be persisted using an ORM product such as Hibernate.
>
>Other design patterns that are used in DDD include Strategy, Facade, and Factory. Jimmy Nilsson discussed Factory as one of the domain patterns in his book .
>
>DDD AntiPatterns
>
>On the flip side of the best practices and design patterns, there are some DDD smells that architects and developers should watch out for when implementing the domain model. As a result of these antipatterns, domain layer becomes the least important part in application architecture and facade classes assume a more important role in the  model. Following are some of these antipatterns
>
>Anemic domain objects
>
>Repetitive DAOs
>
>Fat Service Layer This is where service classes will end up having all the business logic.
>
>Feature Envy This is one of the classic smells mentioned in Martin Fowlers book on Refactoring where the methods in a class are far too interested in data belonging to other classes.
>
>Data Access Objects
>
>DAOs and Repositories are also important in domain driven design. DAO is the contract between relational database and the application. It encapsulates the details of database CRUD operations from the web application. On the other hand, a Repository is a separate abstraction that interacts with the DAOs and provides business interfaces to the domain model.
>
>Repositories speak the Ubiquitous Language of the domain, work with all necessary DAOs and provide data access services to the domain model in a language the domain understands.
>
>DAO methods are finegrained and closer to the database while the Repository methods are more coarsegrained and closer to the domain. Also one Repository class may have multiple DAOs injected. Repositories and DAOs keep the domain model decoupled from dealing with the data access and persistence details.
>
>The domain objects should depend only on Repository interfaces. This is the reason why injecting the Repository instead of a DAO results in a much cleaner domain model. DAO classes should never be called directly from the client Services and other consumer classes. The clients should always call the domain objects which in turn should call the DAOs for persisting the data to the data store.
>
>Managing the dependencies between domain objects for example, the dependency between an Entity and its Repository is a classic problem that developers often run into. The usual design solution to this problem is to have the Service or Facade class call a Repository directly and when invoked the Repository would return the Entity object to the client. This design eventually leads to the aforementioned Anemic Domain Model where facade classes start accumulating more business logic and domain objects become mere data carriers. A good design is to inject Repositories and Services into domain objects using DI  AOP techniques.
>
>Sample application follows these design principles in implementing the loan processing domain model.
>
>Persistence
>
>Persistence is an infrastructural aspect from which the domain layer should be decoupled. JPA provides this abstraction by hiding the details of the persistence implementation from the classes. It is annotation driven so no XML mapping files are required. But at the same time, the table and column names are embedded in the code which may not be a flexible solution in some cases.
>
>With grid computing products such as Oracle Coherence , WebSphere Object Grid, and GigaSpaces that offer data grid solutions, the developers dont even need to think about a RDBMS when they model and design the business domain. The database layer is abstracted from domain layer in the form of an inmemory ObjectData Grid.
>
>Caching
>
>When we talk about the state data of the domain layer, we have to talk about the aspect of caching. Frequently accessed domain data such as products and rates in a mortgage loan processing application are good candidates for caching. Caching speeds up the performance and reduces the load on the database server. Service layer is ideal for caching the domain state. ORM frameworks like TopLink and Hibernate also provide data caching.
>
>Loan processing sample application uses JBossCache framework to cache product and rate details to minimize the database calls and improve application performance.
>
>Transaction Management
>
>Transaction management is important to keep the data integrity and to commit or rollback the UOW as a whole. There has always been a debate about where the transactions should be managed in the application architecture layers. There are also the crossentity transactions that span multiple domain objects in the same UOW that affect the design decision of where the transactions should be managed.
>
>Some developers prefer managing the transactions in the DAO classes which is a poor design. This results in too finegrained transaction control which doesnt give the flexibility of managing the use cases where the transactions span multiple domain objects. Service classes should handle transactions this way even if the transaction spans multiple domain objects, the service class can manage the transaction since in most of the use cases the Service class handles the control flow.
>
>FundingServiceImpl class in the sample application manages transactions for the funding request and executes multiple database operations by calling the Repositories and commits or rolls back all database changes in a single transactions.
>
>Data Transfer Objects
>
>DTOs are also an important part of the design in an SOA environment where the Domain object model structurally is not compatible with the messages that are received and sent from a business service. The messages are typically defined and maintained in as XML Schema Definition documents XSDs and its a common practice to write or code generate DTO objects from the XSDs and use them for data message transfer purposes between domain and SOA service layers. Mapping the data from one or more domain objects to a DTO will become a necessary evil in distributed applications where sending the domain objects across the wire may not be practical from a performance and a security standpoint.
>
>From a DDD perspective, DTOs also help maintain the separation between Service and UI layers where DOs are used in the domain and service layers and DTOs are used in the presentation layer.
>
>Dozer framework is used for the assembly of one or more domain objects into a DTO object. It is bidirectional which saves a lot of extra code and time when converting domain objects into DTOs and viceversa. The 2way mapping between DO and DTO objects helps eliminate the separate DO  DTO and DTO  DO translation logic. The framework also correctly handles the type and array conversion.
>
>The sample application uses Dozer mapping files XML to split the FundingRequestDTO object into Loan, Borrower, and FundingRequest Entity objects when the request comes in for fund processing. The mapping also takes care of the aggregation of the funding response data from the Entities into a single DTO object on the way back to the client.
>
>DDD Implementation Frameworks
>
>Frameworks like Spring and Real Object Oriented  ROO , Hibernate, and Dozer aid in designing and implementing a domain model. Other frameworks that support DDD implementation are JMatter , Naked Objects , Ruby On Rails , Grails , and Spring Modules XT Framework .
>
>Spring takes care of instantiating and wiring together the domain classes such as Services, Factories, and Repositories. It also injects Services into Entities using Configurable annotation. This annotation is Spring specific, so other options for achieving this injection is to use something like Hibernate Interceptor.
>
>ROO is a DDD implementation framework built on domain first and infrastructure second philosophy. The framework was developed to reduce the boilerplate coding of the patterns found in web application development. When using ROO, we define the domain model, and then the framework based on Maven Archetypes generates the code for ModelViewController MVC, DTOs, Business Layer Facade and DAO layers. It even generates the stubs for unit and integration tests.
>
>ROO has some very useful practical implementation patterns. For example, it distinguishes the state managed fields, the persistence layer uses fieldlevel access, and the public constructors only reflect the mandatory fields.
>
>Development
>
>A model is no good without the actual implementation. The implementation phase should include automating the development tasks as much as possible. To see what tasks can be automated, lets look at a typical use case involving the domain model. Following is the list of steps in the use case
>
>Request In
>
>Client calls a Facade class sending data as an XML document which is XSD compliant Facade class initiates a new transaction for the UOW.
>
>Run validations on the incoming data. These validations include the primary basicdata typefield level checks and business validations. If there are any validation errors, raise appropriate exceptions.
>
>Translate the descriptions to codes to be domain friendly.
>
>Make the data formatting changes to be domain model friendly.
>
>Make any separation of attributes like splitting a customer name into first and last name attributes in a Customer Entity object.
>
>Disassemble the DTO data into one or more domain objects.
>
>Persist the state of domain objects.
>
>Response Out
>
>Get the state of domain objects from datastore.
>
>Cache the state if necessary.
>
>Assemble the domain objects into application friendly data objects DTO.
>
>Make any merge or separation of data elements such as combining first and last names into single customer name attribute.
>
>Translate the codes into descriptions.
>
>Make the data formatting changes necessary to address the client data usage requirements.
>
>Cache the DTO state if necessary
>
>Transaction commits or rolls back if there was an error as the control flow exits.
>
>The following table shows different objects that carry the data from one layer to another in the application.
>
>Table 3. Data flow through the application layers
>
>Layer
>
>JAXB
>
>As you can see there are few layers in the application architecture where same data flows through in different forms DO, DTO, XML, etc. Most of these objects Java or XML that hold data as well as other classes like DAO, DAOImpl, and DAOTest are infrastructural in nature. These classes and XML files that have boilerplate code and structure are great candidates for code generation.
>
>Code Generation
>
>Frameworks like ROO also create a standard and consistent project template using Maven plugin for new projects. Using a pregenerated project template, we can achieve consistency in the directory structure on where to store the source and test classes, configuration files, and dependencies on internal and external thirdparty component libraries.
>
>It could be overwhelming when we consider the myriad of classes and configuration files needed to develop a typical enterprise software application. Code generation is the best way to go about this problem. Code generation tools typically use some kind of template framework to define the templates or mappings from which a code generator can generate the code. Eclipse Modeling Framework EMF has several subprojects that aid in the code generation of various artifacts required in a web application project. Model Driven Architecture MDA tools like AndroMDA use EMF to generate the code based on architecture models.
>
>When it comes to writing the delegate classes in domain layer I have seen developers writing these classes manually mostly writing the first one from scratch and then following Copy And Paste pattern to create the required delegate classes for other domain objects. Since most of these classes are basically facades to domain classes they are good candidates for code generation. Code generation option is a good longterm solution even though it involves some initial investment in terms of coding and time to build and test the code generator engine.
>
>For the test classes generated, a good option is to create abstract methods for the methods with complex business logic in the main class that need to be unit tested. This way, developers can extend the generated base test class and implement custom business logic which cannot be autogenerated. The same goes for any test method that has testing logic which cannot be autocreated.
>
>Scripting languages are a better choice for writing code generators as they have less overhead and they support template creation and customization options. If we take advantage of code generation in a DDD project, we only need to write a few classes from scratch. The artifacts that must be created from scratch include
>
>XSD
>
>Domain Object
>
>Service
>
>Once we define the XSD and Java classes, we can code generate all or most of the following classes and configuration files
>
>DAO interface and implementation class
>
>Factories
>
>Spring MVC
>
>
>
>Delegate layer is the only layer that has knowledge of both Domain Objects and DTOs. Other layers such as Persistence layer should be unaware of DTOs.
>
>Refactoring
>
>Refactoring is changing or restructuring the application code without changing the functionality or behavior of the application. Refactoring can be either design or code related. Design refactoring is done to continually refine the model and refactor the code to improve the domain model.
>
>Refactoring plays an important role in the DDD project due to its iterative and evolutionary nature of domain modeling. One way to integrate refactoring tasks into the project is to add it in each iteration of the project before calling the iteration done. Ideally, refactoring should be done before and after every development task.
>
>Refactoring should be done with strict discipline. Use the combination of refactoring, CI, and unit testing to make sure the code changes didnt break any functionality and at the same time the changes did help with the intended code or performance improvements.
>
>Automated tests play a vital role in refactoring the application code. Without good automated developer tests and Test Driven Development TDD practices, refactoring can be counterproductive since there will be no automated way to verify that the design and code changes made as part of refactoring effort didnt change the behavior or break the functionality.
>
>Tools like Eclipse help in implementing the domain model in an iterative way with refactoring as part of the development effort. Eclipse has features like extracting or moving a method to a different class or pushing down a method to a subclass. There are also several code analysis plugins for Eclipse that can help in managing the code dependencies and identifying the DDD antipatterns. I rely on plugins like JDepend , Classycle , and Metrics when I do the design and code review of projects, to assess the quality of domain and other modules in the application.
>
>Chris Richardson talked about applying code refactoring to transform a procedural design into an OO design using refactoring features provided by Eclipse.
>
>Unit TestingContinuous Integration
>
>One of the goals we talked about earlier is that the domain classes should be unit testable during the initial development as well as later when refactoring the existing code without too many dependencies on the container or other infrastructure code. TDD approach helps the team in finding any design problems early in the project as well as verifying that the code is in alignment with domain model. DDD is ideal for TestFirst development because the state and behavior are contained in domain classes and it should be easy to test them in isolation. It is important to test the state and behavior of domain model and not focus too much on the implementation details of data access or persistence.
>
>Unit testing frameworks like JUnit or TestNG are great tools to implement and manage the domain model. Other testing frameworks like DBUnit and Unitils can also be used to test domain layer especially to inject test data into DAO classes. This will minimize writing extra code for populating test data in unit test classes.
>
>Mock objects also help in testing the domain objects in isolation. But its important to not go crazy with using mock objects in the domain layer. If there are other easy ways to test domain classes, you should use those options instead of using mock objects. For example, if you can test an Entity class using a real DAO class in the backend instead of a mock DAO implementation with an inmemory HSQL database instead of the real database it will make the domain layer unit tests run quicker which is the main idea behind using mock objects any way. This way, you will be testing the collaboration interaction between domain objects as well as the state data exchanged between them. With mock objects, we will only be testing the interaction between the domain objects.
>
>All unit and integration tests created during the development phase with or without using TDD practices will become part of the automated test suite once the development tasks are done. These tests should be maintained and executed frequently in the local and higher development environments to find if the new code changes introduced any bugs into domain classes.
>
>Eric Evans covers CI in his book saying that CI effort should always be applied within a Bounded Context and it should include the synchronization of people as well as code. CI tools like CruiseControl and Hudson can be used to set up an automatic build and test environment to run the application build script created using a build tool such as Ant or Maven to checkout the code from a SCM repository like CVS , Subversion etc, compile the domain classes as well as the other classes in the application and if there are no build errors, then automatically run all the tests unit and integration. CI tools can also be setup to notify the project teams via email or RSS feeds if there are any build or test errors.
>
>Deployment
>
>Domain models are never static they change as business requirements evolve during the lifecycle of the project and new requirements come up in the new projects. Also, as you develop and implement the domain model you constantly learn and improve, and you want to apply the new knowledge to the existing model.
>
>Isolation is the key when packaging and deploying the domain classes. Since domain layer has dependencies on DAO layer on one side and Service Facade layer on the other see the application architecture diagram in Figure 2, it makes lot of sense to package and deploy the domain classes as one or more modules to manage these dependencies elegantly.
>
>While design patterns such as DI, AOP and Factories minimize the coupling between the objects at design time and make the application modular, OSGi formerly known as Open Services Gateway initiative addresses modularity at runtime. OSGi is becoming a standard mechanism to package and distribute the enterprise applications. It nicely handles the dependencies between the modules. We can also use OSGi for domain model versioning purposes.
>
>We can package DAO classes in one OSGi bundle the DAO bundle, the service facade classes in another bundle service bundle, so when DAO or Service implementations are modified or a different version of the application is being deployed, thanks to OSGi, no application restarts are required. We can also deploy two different versions of the same domain class if we have to support the existing and new versions of certain domain objects for backward compatibility.
>
>To take advantage of OSGi capabilities, the application objects have to be registered with OSGi platform before being consumed i.e. before the client can do a lookup for them. This means that we have to use OSGi APIs to do the registration but we also have to deal with failure scenarios as services are started and stopped using OSGi container. Spring Dynamic Modules framework helps in this area by allowing any type of object to be exported and imported in the application without any code changes.
>
>Spring DM also provides test classes to run OSGi integration tests outside the container. For example, AbstractOsgiTests can be used to run integration tests directly from the IDE. The setup is handled by the testing infrastructure so we dont have to write a MANIFEST.MF file for the test, or do any packaging or deployment. The framework supports most of the OSGi implementations currently available  Equinox , Knopflerfish and Apache Felix .
>
>Loan processing application uses OSGi, Spring DM, and Equinox container to manage the module level dependencies and the deployment of domain and other modules. LoanAppDeploymentTests shows the use of Spring DM test module.
>
>Sample Application Design
>
>The domain classes used in the loan processing sample application are listed below
>
>Entities
>
>Framework, Utility, Monitoring JMX classes, Aspects
>
>LoanAppContextFramework.xml, LoanAppContextMonitoring.xml, LoanAppAspects.xml
>
>Conclusion
>
>DDD is a powerful concept that will change the way modelers, architects, developers, and testers will look at the software once the team is trained in DDD and start to apply domain first and infrastructure second philosophy. As different stakeholders from IT and business units with different backgrounds and areas of expertise are involved in the domain modeling, design and implementation effort, to quote Eric Evans, its important not to blur the lines between the philosophy of design DDD and the technical tool box that helps us fulfill it OOP, DI, and AOP.
>
>Advancing Frontiers
>
>This section covers some of the emerging approaches that impact the DDD design and development. Some of these concepts are still evolving and it will be interesting to see how they will affect DDD.
>
>Architecture rules and Design by Contract enforcement plays an important role in the governance and policy enforcement of domain model standards and implementation best practices. Ramnivas talked about using the Aspects to enforce the rule of creating a Repository object only through Factories this is an easy to violate design rule in domain layer.
>
>Domain Specific Languages DSL and Business Natural Languages BNL are gaining more attention in the recent years. One can use these languages to represent business logic in the domain classes. BNLs are powerful in the sense that they can be used to capture business specifications, documenting the business rules, and as executable code as well. They can also be used to create test cases to verify the system works as expected.
>
>Behavior Driven Development BDD is another interesting concept that has been discussed lately. BDD helps focus development on the delivery of prioritized, verifiable business value by providing a common vocabulary Ubiquitous Language that spans the divide between Business and Technology. By using terminology focused on the behavioral aspects of the system rather than testing, BDD attempts to help direct developers towards a focus on the real value to be found in TDD at its most successful. If practiced correctly, BDD can be a great complement to DDD where the development of domain objects is positively influenced by BDD concepts after all domain objects are supposed to encapsulate state and behavior.
>
>Event Driven Architecture EDA is another area that could play a role in domain driven design. For example, an event model to notify of any state change in the domain object instance would help in handling the postevent processing tasks that need to be triggered when the state of a domain object changes. EDA helps in encapsulating the event based logic from getting embedded in core domain logic. Martin Fowler documented about Domain Event design pattern.
>
>Resources
>
>