---
layout: post
title: building wpf applications
categories:
- tweets
---
*taken from [http://t.co/71kkLWqehe](http://t.co/71kkLWqehe)*
Building WPF Applications

A common scenario for many software developers is the need to build an application over a database and allow the end users to view, edit and delete data. The purpose of this article is to look at this common situation and how we can best approach the application architecture and database access to create a high performance user experience while at the same time building a maintainable solution. Ill also share the main performance optimization concepts we used to build our DataGrid and chart controls that are capable of binding to millions of items.

We have built a sample application to go with this article which you can download at the end of the post. Its a simple dashboard for an imaginary company that sells three main products cookies, lemonade and Absinthe trust me, they go great together!. Ive generated just over a million sales records in the sample database to help show a real world performance load.

Build on a solid foundation

To structure this application we have used the popular Model View ViewModel MVVM pattern. If youre unfamiliar with the MVVM pattern we have posted an overview of MVVM here . For those of you familiar with it, we typically suggest using the much loved Caliburn Micro framework built by Rob Eisenberg. Working with Caliburn Micro saves developers from having to write a lot of boiler plate code for plumbing their applications together. You can read a more in depth tutorial series about Caliburn Micro on our blog.

For data access we have used our object relational mapper, LightSpeed with the data being accessed from a SQLite database. This is just to make it easier for you to download the attached sample and run it up. Using LightSpeed you could easily change the sample to work against SQL Server, Oracle or even cloud databases like SimpleDB.

The general structure of the user interface is

TOP A Time Explorer control that shows an overview graph of sales over time. It supports zooming in and selecting areas along the graph. When a selection change is made it updates the various charts, gauges and the data grid with the database from the selected date range.

MIDDLE A stacked area chart showing the total sales by product type. Also, clicking on the legend at the top of the app will filter the data by that product type e.g. click on Absinthe and only see the data related to Absinthe sales.

BOTTOM A data grid showing customer data for each sale. We also can group by any column, page through the data and give an example of showing countries using a flag rather than a boring label.

RIGHT A top 10 chart by country for the selected range of data. Below this are some gauges showing the year on year sales and how were tracking to budget in our application these values are fairly random but you get the idea!.

Start with a solid framework

To help you build applications, there is a variety of frameworks available to reduce your workload. Caliburn Micro supports all XAML platforms and several popular UI patterns including MVVM. Although it isnt difficult to create an MVVM application unassisted, a framework can significantly make things easier for you to quickly create a robust application that is easy to maintain. When you start working with Caliburn Micro, youll find that it clearly separates the view from the viewmodel and reduces temptation to clutter up the code behind. Caliburn Micro offers many convenient features for binding controls in the view to properties in the viewmodel, and also listening to events and commands from controls in the view that have been raised from user interactions.

The viewmodel is mostly comprised of properties, all of which are either primitive values, collections or plain old C objects POCOs. A good MVVM application does not have any references to UI elements or view related classes such as brushes within the viewmodel. One of the great advantages of this is that a pure model with no UI elements is much easier to test. When writing unit tests, you simply want to set properties or call methods and then assert that the state of the model is correct. If there are any UI elements within the model, certain functions may not work unless a particular control has been loaded in the view. Also, its much easier to test the effects of user interaction when you use a command system rather than hooking up event handlers to controls directly in the model. Another advantage of keeping the model free of UI elements is to help save time if changes are made to the application specifications.

If youre an application designer, you probably know that the design can change quite often. For example, in an early version, you may expose some user options using toggle buttons  some of which need to be disabled based on other options. A poorly built application may have the toggle buttons accessible within the model where it is convenient to directly set the enabled state as other options change. In a future version, rather than using toggle buttons, the design may require the options to be exposed as menu items. When someone comes to make this change, they find the model is riddled with talk of toggle buttons and probably other controls which all needs to be changed around. In a well built application, UI elements can only be found in the view and are bound to properties in the view model. So when the UI design changes all that needs to be updated is the structure of the view. Generally it is possible to create an entirely new UI design for an application without making changes to the model. If you come across a scenario where it seems the model does need references to UI Elements, try pulling this out into a custom control implementation.

Go with the flow

When the application starts up, data is loaded from a database or a local file and various properties on the model are set to express the state of the application. Due to property changed notifications, bindings will be updated which the view uses to update the display. When the user interacts with the application, events or commands are triggered which the model can listen to. Based on the events, commands or parameters that the model receives, the state of the application model can change, and properties will be updated to reflect this. Once again property changed notifications cause bindings to be updated and the display is refreshed for the user.

Leverage the power of WPF

WPF has a wealth of great features built into it which is why I love working with it so much. Bindings, routed events and other great features make our lives a lot easier  especially when coupled with a solid design pattern like MVVM. In the attached sample pay particular attention to

Bindings  Data binding is a way to link two properties together so that when the source property changes, the value is set to the target property. The most common use of bindings is to bind properties from the model to properties of controls in the view. When properties in the model raise property change notifications, the properties on the controls are also changed which are used to update the display. This is a huge help for MVVM applications as it simplifies the bond between the view and the model. Data binding has a vast range of useful features, so Ill only mention a few here. If you need to bind two properties that have different types, you can specify a converter that converters the source value into an appropriate value for the target. For example you may have a Boolean property in the model that the view may use to change the the visibility of an element. Here you can use a Booleantovisibilityconverter, false is converted to Collapsed, and true is converted to Visible. Another useful feature is the stringformat. If you have a text block that is binding to a double or date time property, you may want to specify a string format to display the value in an appropriate way. You can also specify the direction of the binding. In some situations you may only need property values to bind from the model to the view, in other situations you may want properties to change both ways through the binding.

Data context  A data context is the source of data binding. In an MVVM application, the data context of a view is a viewmodel. Any bindings in the view will look at that viewmodel for the source properties. As you look deeper into the visual tree of a view, the data context can be broken down into submodels which the subelements can bind to. For example, the data context of a view is an entire viewmodel which can have many properties that each control binds to. One of these controls may be a listbox which is binding to a property that returns a collection of items. The data context of each of the UI items displayed in the list box will be the appropriate model object in the collection, rather than the entire viewmodel. The template of the list box items simply needs to bind to properties on those item models.

Routed events  Routed events let you send packets of information around your application as the state of controls change. Controls have lots of events that get raised as the user interacts with them. When the user has completed a UI operation, your model can listen to the appropriate events and make changes to the state of the model if necessary. When creating custom controls, you can listen to events coming from the mouse or keyboard to implement the user interaction of the control. You may also be raising events within you model that other parts of your model needs to listen to. Frameworks such as Caliburn Micro have features that make setting up events easier. In particular, they help reduce the coupling between the model and the view, and manage the removal of events when they are no longer needed to avoid performance and memory issues.

Commands  Another way to send messages from the view to the model is by using commands. Unlike events, commands usually dont have any data associated with them. They usually represent simple user actions such as a button being pressed, though you can send command parameters if you need to. The great feature of the command system is that you can provide logic within your model to specify whether a command on a particular control is currently allowed to be executed. Whether or not a user is allowed to press a certain button may depend on the state of your model. For example, you may not want the user to press the log in button of a dialog if they havent entered anything in the user name or password boxes yet. By providing this can execute logic, the WPF framework will automatically set the enableddisabled state of the button. Again, Frameworks such as Caliburn Micro provide convenient features for hooking up commands from the view to the model.

Styles and templates  One of the features that make WPF and other XAML frameworks stand out in the application space is the powerful customizability of visual components. It is very easy to change the look of any part of your application, from the font size of a single text block to the overall visual theme of your application. The flexibility is phenomenal and Ive seen a lot of impressive styles throughout my XAML experience. You can build up the visual tree of any control whether its a standard WPF control, a third party control or your own custom control implementation. There are also ways to change only part of a control style if you dont need to customize the whole thing. Concepts that I previously explained such as bindings and commands are a huge help with the flexibility of control customization. For example, a well implemented control doesnt care whether the template uses check boxes or toggle buttons they are simply binding to the appropriate properties on the control.

Optimizing Performance

Once you have the foundation of your application in place, its time to crank up the performance.

While WPF is really easy to get your data bound up and flowing around it can let you throw away performance if youre not careful. Its important to keep in mind exactly whats going on under the covers and to make sure youre doing things as efficiently as possible. Heres a list of things that were important in achieving great performance in our demonstration application

1. Reduce the UI Element Count

UI element creation in WPF is expensive, so wherever possible, reduce the complexity of your data templates. Even simple elements such as a Border can degrade the performance. When building our data grid control, we found that simply removing a couple of Border elements from each cell removed a scroll bar lagging issue we had. Another trick we used in the data grid control was for cells to have a display mode and an edit mode. When the user is not editing a cell, there is not point displaying an expensive TextBox control. TextBoxes have tons of UI elements in their templates, mainly due to the built in scroll viewer. So when a cell is not being edited, it displays the data using the much simpler TextBlock element. Tip as you make changes or experiment with data templates in your application, make sure not to leave behind any elements that arent needed any more  such as Grids that only contain a single child.

2. Reduce the call count of methods

As a project becomes more complex, its easy for some methods to be called many more times than they need to. If a method is quite expensive, such as iterating through large collections, then there can be a huge unnecessary drop in performance. To help solve these issues, its a good idea to use a profiler on your application every now and then. This makes it easy to identify methods that are being called an unexpected number of times. Follow through the call stacks and find places where the call count of expensive methods can be reduced. In particular, because bindings typically just work,  you may be unaware of how often a binding is updating and causing unnecessary load.

3. Virtualization

A wellknown way to improve performance of displaying collections of items is to use virtualization. There are 2 types of virtualization UIvirtualization for the view, and datavirtualization for the model. The idea of virtualization is to only load resources when they are needed and reuse if possible. If you have a long list of items displayed on screen, such as in a data grid, only a small subset of them will fit in the viewport. There is no point trying to render the items that dont fit on the screen, because remember creating lots of UI elements is expensive. A virtualization engine works out the list of items that need to be displayed, and only generates the UI elements for those items. As the list is scrolled, some of the items will be destroyed as they move off the screen, and new elements will be made to display the items that scroll into the viewport or, reused with new model data to reduce the cost of destroying and creating new UI elements. Overall, the number of UI elements that exist are kept to a minimum. Same thing can be applied in the model. If fetching data is slow, for example it is coming from a database over a network, then youll want to look for ways to only fetch the data that needs to be displayed, rather than downloading the whole database.

4. UI element recycling

Another fantastic performance trick is to recycle UI elements as mentioned in the Virtualization section above. In scenarios where a control needs to be refreshed to display new values, rather than destroying the existing display elements and creating new ones, you can recycle the elements and simply change some of their properties to update the display. This reduces the number of times you create new UI controls and in turn improves the performance. By using UI virtualization in conjunction with UI recycling, data display controls become incredibly efficient.

5. Dont overuse bindings

One of the down sides with the MVVM pattern in WPF is that it usually requires a lot of bindings. The problem with this is that bindings are expensive, so dont overuse them. Ive found that when building applications, there isnt too much of a problem here, but when implementing controls that handle lots of data such as a chart or data grid, extra effort was made to avoid using too many bindings. Similarly, dependency properties are also slow. Simply getting or setting the value of a dependency property is much slower than a regular property. If a property does not need to be bound to, then it does not need to be a dependency property. If you find places where a dependency property is being accessed more than once in a single method, caching the value in a local variable somewhere in the method can help improve performance.

Sometimes after improving the performance of an application as much as possible, some operations such as loading or sorting epic amounts data will still be slow. In these situations, its a good idea to display loading spinners or progress bars in your application to at least let your users know that the application has not hung.

Dont forget about your Data Access

While you may spend a lot of time optimizing WPF, you will also want to ensure your data access is as efficient as possible. There are several areas where we apply hints to provide LightSpeed with a better understanding of our intent when querying to help improve performance.

Conditional Eager Loading using Named Aggregates

One of the classic problems you encounter with using an object relational mapper is you lose sight of the number of queries being made to the database. Most object relational mappers will only load what is needed and then load subsequent data on demand  for example if we have a Sale which is related to a Product then when we load the Sale, the Product will be available but will be loaded the first time we access that property on the Sale instance. This is known as lazy loading and provides efficiency in allowing you to have free access to the object graph without having to load the entire set of data into memory up front. The problem with this approach is that in bulk scenarios such as our data set, if we wanted to make use of data about the Product then we would need to load the Product for each Sale we encounter. Expand this out to 1 million rows and this means we would make 1 million and 1 queries! To counteract this we can change the load behaviour to use eager loading. In our application we dont want this to be the default so we can use LightSpeeds conditional eager loading approach by using a named aggregate to control when the Product data is loaded in with the sale.

Understand and Optimize your LINQ queries

LINQ has been a fantastic addition to our language syntax, allowing us to natively express our queries in line with code in a way that maintains separation from the underlying data access providers. One of the challenges with this however is that each LINQ provider has to implement its own understanding and response to the syntax that we present it, so queries that may make perfect sense and work happily when dealing with an in memory set of objects suddenly makes no sense when trying to be translated into a server side database query.

One of the traps you can quickly fall into is that most LINQ providers when faced with a query that they cannot translate will either throw an exception leading to a runtime failure or shift the operation to be handled client side  this is particularly common when it comes to selecting data where rather than focusing on the specific columns asked for in the selection, we may need to pull back all of the data from the server and then handle the selection client side.

A basic check list to remember for handling this is

Dont use any application specific properties or functions in your criteria or selections or, if your ORM is awesome enough, write custom functions so they have a SQL implementation 

Avoid traversing object relationships in your selection, rather use explicit joins to avoid confusion for the ORM and ensure it can select the data server side

Using .ToList, .ToArray etc will force client side enumeration so anything after these calls will be run client side

Remember that LINQ queries are an expression of intent, they are not 11 mappings to SQL queries

Profile it

While an object relational mapper provides great convenience to developers to abstract them away from the mechanics of writing SQL, it is critically important to understand what queries are being run to understand if they are efficient and if they can be improved on. LightSpeed includes a logging channel to emit the SQL statements it is executing which can be accessed by attaching an ILogger instance to the LightSpeedContext. This will give you a good understand of what queries are being run and when they are being executed in relation to your applications flow allowing you to check if eager loading may be needed to avoid excessing lazy loading or if you might have an inefficient LINQ query which is not performing as you intended.

Conclusion

I hope that this article has given a good overview of how to approach building a modern line of business application that needs to consume millions of rows of data and yet perform quickly and efficiently.

You can download a fully functional sample to explore the code yourself . It includes the free version of LightSpeed which supports up to 8 tables and a 60 day trial of our WPF Elements library. The sample includes Readme with troubleshooting tips.

By Jason

