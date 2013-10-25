---
layout: post
title: with var we can simplify this to var
categories:
- tweets
---
*taken from [http://t.co/wE0jRVJv](http://t.co/wE0jRVJv)*
With var, we can simplify this to

var customers  GetCustomers

The C compiler sees that GetCustomers returns an IEnumerableCustomer so it defines customers as that type. The var keyword also removes some of the redundancy we used to have

ListString names  new Liststring

If the assignment is creating a ListString, why do we need to define the variable as a ListString? The var keyword infers this from the expression

var names  new Liststring

However, this is a icompileri enhancement. While the C var keyword exists in JavaScript, they are totally unrelated. And it has no relation to the variant data type from Visual Basic 6. The var keyword saves you some typing by inferring the type at compile time. The real type is emitted into the IL. So the following two assignments

int age  29  var age  29

Produce the exact same IL when compiled. Don't fear the var keyword. It can save you time and typing.

Trap 2 Be careful with optional parameters

C 4.0 introduces optional parameters. An optional parameter defines a default value to be used if the caller doesn't supply a value. In the past, the concept of default values for parameters was realized by overloading

public decimal GetTemperature       return GetTemperaturefalse       public decimal GetTemperaturebool inCelsius      

With optional parameters, you write one method and define a default value

public decimal GetTemperatuebool inCelsius  false      

While functionally equivalent, there's a big difference in how they are implemented.

With overloading, a call to GetTemperature will execute a call to GetTemperaturefalse. Suppose this method is in a utility library. You decide the new default should be to return temperatures in Celsius. You change the code in GetTemperature to return GetTemperaturetrue, recompile and drop it in your directory with the consuming application. Everything is good to go and temperatures are now returned in Celsius by default.

When using optional parameters, the default false value was baked in to the calling assembly at compile time. Consumers of your utility library won't get the new default value unless they are recompiled. Be careful when creating public API's with optional parameters!

Trap 3 Deferred Execution in LINQ

LINQ makes querying of data so much easier than foreach loops with nested if blocks and other conditional logic. But remember that all of that fancy LINQ stuff is simply syntactic sugar over method calls.

Consider this simple example of a method using LINQtoSQL to get a list of customers

public IEnumerableCustomer GetCustomers     usingvar context  new DBContext       return from c in context.Customers           where c.Balance  2000           select c     

Seems pretty harmless  until you get an ObjectDisposedException when you try and enumerate the collection. Why? Because LINQ doesn't actually perform the query until you try and enumerate the results. The DBContext class which exposes the Customers collection is disposed of when this call exits. Once you try and enumerate through the collection, the DBContext.Customers class is referenced and you get the exception.

A simpler example

decimal minimumBalance  500  var customersOver500  from c in customers where c.Balance  minimumBalance select c   minimumBalance  200  var customersOver200  from c in customers where c.Balance  minimumBalance select c   int count1  customersOver500.Count  int count2  customersOver200.Count

Suppose we have four customers with the following balances 100, 300, 400 and 600. What will count1 and count2 be? They'll both be 3. The customersOver500 references the minimumBalance variable, but the value isn't obtained until the query results are iterated over through a foreach loop, a ToList call or even a Count call as shown above. At the time the value is used to process the query, the value for minimumBalance has already changed to 200, so both LINQ queries produce identical results customers with a balance over 200.

If you have cases where you want to ensure your LINQ queries are evaluated right away, convert them to a List via ToList, or to an array via ToArray.

Trap 4 Overloading Methods in a base class

This is an interesting one that can trip you up if you're not aware of how .NET resolves overloads. Suppose you have the following classes

public class MyBase     public void DoSomethingint a       Console.WriteLineMyBase        public class MyDerived  MyBase     public void DoSomethinglong a    Console.WriteLineMyDerived     

What gets printed with the following code

MyDerived d  new MyDerived  d.DoSomething5

Most people assume the DoSomethingint overload on the base class is a better match than the DoSomethinglong overload. However, since the variable is typed as a MyDerived, that version of DoSomething will be called. The .NET runtime always favors the mostderived compiletime type.

Can you force a call to the base class DoSomething with a cast?

MyDerived d  new MyDerived  d.DoSomethingint5

Nope. Remember what we just said The .NET runtime always favors the mostderived compiletime type. In this case, .NET will still call DoSomethinglong. In general, you should avoid overloading methods defined in base classes.

Trap 5 Forgetting to unsubscribe from events

This has been around since the first version of C, but still causes bugs from some people.

As you're aware, the .NET runtime employs a very smart garbage collector to clean up objects in memory that are no longer used. It determines used by keeping track of what objects reference other objects which reference other objects and so on. Once an object is found to not have any other objects referencing it, it's available for garbage collection and the memory can be released.

Let's consider a simple scenario. You have a main application form. This form opens a child form to do some editing. The edits need to update some status panel on the main form. To achieve the updates, your child form exposes an event that the main form can subscribe to. You handle the creation of the child form like this

usingvar child  new ChildForm     child.StatusUpdated  new EventHandlerchildStatusUpdated   child.ShowModelthis  

You've wrapped your child form in a using block to make sure the Dispose method is always called. That's fine  the Dispose call will release unmanaged resources the window handle, child controls, etc., but your main form is still subscribed to the StatusUpdated event of your child form. That means the garbage collector can't free up the memory used by the child form. Each time this code is hit, a new child form is created and its memory will never be released until the main form is no longer referenced.

Always make sure you unsubscribe from events you've subscribed to. It allows your unused objects to be collected sooner and puts less pressure on the garbage collector.

Quick Word of Thanks

I'd like to thank Bill Wagner, Dennis Burton and Chris Marinos for their assistance with this article. Hopefully their able assistance will help you sidestep some of these common C traps in the future.

Do you have a C trap you'd like to share? Email me at patrickmvps.org.

About the Author

Patrick Steele is a Senior .NET Developer with Billhighway in Troy, Michigan. A recognized expert on the .NET Framework, he is a Microsoft MVP award winner and a presenter at conferences and user group meetings.

