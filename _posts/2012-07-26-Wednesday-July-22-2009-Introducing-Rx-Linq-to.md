---
layout: post
title: wednesday july 22 2009 introducing rx linq to
categories:
- tweets
---
*taken from [http://t.co/6B4jqVxx](http://t.co/6B4jqVxx)*
Wednesday, July 22, 2009

Introducing Rx Linq to Events

Its the most wonderful time of the year a new version of the Silverlight Toolkit has been released alongside Silverlight 3. This release of the Toolkit has a lot of goodies including a new TreeMap control, a Rating control written by yours truly, and a useful collection of extensions methods for TreeView. That said this post is not really about the Toolkit. Buried deep in the bin folder of the Silverlight Toolkit Unit Tests is a hidden gem The Rx Framework System.Reactive.dll. If you glanced quickly youd miss it altogether but its one of the most exciting additions to the .NET framework since Linq.

Stating the Obvious Asynchronous Programming is Hard

Developers tend to avoid asynchronous programming if possible because it makes our programs nondeterministic and obscure our codes intent in a sea of callbacks. However the truth is that asynchronous programming has become an essential part of application development. Client apps have always needed to use asynchronous methods to keep the user interface responsive. As a matter of fact Silverlight developers dont have any choice in the matter because Silverlight doesnt include any blocking IO calls. Connected apps also need to take advantage of asynchronous programming to improve scalability. Mashups, apps cobbled together from web services, often need to retrieve data from multiple sources in a particular order.

Clearly we need to write asynchronous code to create modern, connected applications, but how to do it in such a way that our code remains clear and maintainable?

Introducing the Rx Framework

The IEnumerable Interface

Were all familiar with the IEnumerable interface. Almost every collection implements it and we use it every time we write a foreach. Most of us are also pretty comfortable using Linq to query IEnumerables. Linq is a series of extension methods used to manipulate sequences. Heres a simple example

int numbers  new int20,31,5,16,22 IEnumerableint numbersSmallerThan20  numbers.Wherenumber  number  20

The resulting numbersSmallerThan20 sequence looks like this when visualized

5, 16, break

In addition to finite sequences it can sometimes be useful to create sequences that never end. Take this method that returns an infinite sequence of integers

IEnumerableint NaturalNumbers  int number  0 whiletrue      yield return number         number      

When visualized this sequence looks like this

0,1,2,3,4,5,6

Enumerables are sequences of data that we pull from a data source. We dont always pull data though. Often it is pushed onto us and we must react appropriately. This is called Reactive Programming.

Reactive Programming

Reactive programs are ubiquitous. We use reactive programming every time we register a handler with an event or a specify a call back for an asynchronous operation. In this example I register a handler for the mouse move event of a button. The handler prints out the location of the mouse when it is called.



button.MouseMove  o, mouseEventArgs  Debug.WritelineYou moved the mouse to 0, mouseEventArgs.GetPositionbutton

Every time the mouse event is fired our callback method is invoked and we are passed some information about the event.

You moved the mouse to 20,3

You moved the mouse to 33,12

You moved the mouse to 44,18

Another form of reactive programming is running an asynchronous method and passing it a callback method to invoke when its finished. This is how we keep our programs responsive during longrunning operations. Heres an example

DownloadFilehttpwww.jeffwilcox.com, byteArray  Debug.WriteLineThis file is 0 bytes long., byteArray.Length

When this method finishes downloading a file it passes the data to our callback function giving us the following result

This file is 12323 bytes long.

Were all used to doing reactive programming by specifying methods that are called at unpredictable times, but what if there was a different way to think about reactive programming? What if we thought of each piece of data passed to a reactivelycalled method as an item in a sequence?

Events and Callbacks are Sequences of Data!

The data passed to event handlers and callbacks can be thought of as sequences of data that are pushed at you rather than pulled. Every time an event is fired we get pushed a new piece of data the EventArgs. Similarly when a callback is invoked it is typically pushed the result of the asynchronous method. You can think of an event as a sequence of EventArgs that never ends just like the NaturalNumbers sequence. If you were to visualize the mouse move event as a sequence it would look like this

new MouseEventArgsnew Point20,3, new MouseEventArgsnew Point33,12, new MouseEventArgsnew Point44,18

Similarly the asynchronous DownloadFile method can be viewed as a push sequence of data with only one entry

new byte23,211,33,23, break

The Rx team has discovered that pull sequences and push sequences are dual. That is to say, any operation you can perform on pull sequences can also be performed on push sequences. This is quite a revelation. To put things in perspective its been 13 years since Design Patterns was published and weve only now realized that the Observable pattern and the Iterator pattern are actually the same pattern.

Although reactive push sequences are fundamentally the same as pull sequences the IEnumerable interface cant be used for reactive sequences because it blocks. We need a new interface with nonblocking methods that correspond exactly to the blocking methods on IEnumerable. We need

The IObservableIObserver Interface

Despite the fact that they may look somewhat different on the surface the IObservableIObserver pair of interfaces are the nonblocking equivalents of IEnumerableIEnumerator.

To help you understand how they are equivalent lets take a look at a simple example of traversing a pull sequence. You enumerate an IEnumerable by requesting an IEnumerator. As you call MoveNext the IEnumerator pulls data from the IEnumerable, usually by invoking its methods.

IEnumeratorint numberEnumerator  new int1,2,3 whilenumberEnumerator.MoveNext       Debug.WriteLine0, numberEnumerator.Current   Debug.WriteLineall done.

This prints

1 2 3 all done.

To traverse an IObservable you go through the same actions as an IEnumerable but in reverse. You create an IObserver, give it to an IObservable, and the IObservable pushes data into the IObserver by invoking its methods. When an IObservable invokes the OnNext method on an Observer it is equivalent to an IEnumerable method using the yield keyword to give information to an IEnumerable. Similarly when an IObservable invokes the OnCompleted method on an Observer it is equivalent to an IEnumerable using the break keyword to indicate that there is no more data.

Lets define a NumbersObserver which converts a pull sequence of numbers into a push sequence as well as an observer that listens to our NumbersObserver and prints its contents.



internal class AnonymousDisposable  IDisposable  internal Action Action get internal set void IDisposable.Dispose      this.Action       class NumbersObservable  IObservableint  public NumbersObservableIEnumerableint numbers      this.numbers  numbers      private IEnumerableint numbers public IDisposable SubscribeIObserverint observer      foreachint number in numbers                       observer.OnNextnumber                  observer.OnCompleted return new AnonymousDisposable  Action       do nothing because weve already called OnCompleted     class DebugObserver  IObserverint  public void OnNextint value              Debug.WriteLine0, value      public void OnCompleted              Debug.WriteLineall done.      public void OnErrorException ex              Debug.WriteLineWhoops exception, Id better throw. throw ex      

Now lets use these classes to create a push version of our pull example

new NumbersObservablenew2,3,4.Registernew DebugObserver

This prints

1 2 3 all done.

Whoa, whoa! Isnt this pretty complicated?

Dont worry. This example above is just to demonstrate the interplay between the interfaces. Most of the time you wont have to implement your own Observable or Observer. Rx includes lots of methods for constructing observables and observers. Using Rx extension methods I can rewrite the code above like so

new1,2,3.ToObservable.Subscribenumber  Debug.WriteLine0, number

Whats with the IDisposable object?

The IDisposable object is returned by an Observable when you register an observer with it. When you invoke the Dispose method on the registration object the observer will stop listening to the observable for data. This is the active equivalent of passively not calling MoveNext anymore in the middle of a sequence. Rather than invoke the Dispose method directly you will most often have it invoked for you by Rx. In the following example the TakeWhile method will invoke Dispose under the hood to detach from an observable as soon as a number larger than 10 is returned.

var numbersSmallerThanTen  Enumerable.Range0,100.ToObservable.TakeWhilex  x  10

Heres an example of invoking Dispose explicitly to detach from an event which has been converted to an Observable

 Use an Rx method to convert an event to an Observable IObservableEventMouseEventArgs mouseMoveEventObservable  Observable.FromEventMouseEventArgsmyControl, MouseMove  register a handler with the event using an overload that accepts a lambda instead of an Observer IDisposable registration  mouseMoveEventObservable.SubscribemouseMoveEvent  Debug.WriteThe mouse was moved.  stop listening to the event registration.Dispose

What about the OnError method? I dont see an equivalent for that in IEnumerable or IEnumerator either.

When errors occur in asynchronous operations the exception must be passed to the callback method so that the callback method can handle it. Thats why this method exists in IObservable but seems to have no equivalent in IEnumerable. In IEnumerable it is implicit because you can use trycatch.

Linq to IObservable

Now that we understand that an IObservable is just a push version of IEnumerable it just be obvious that all of the familiar Linq methods apply to it. In fact it is equally appropriate to use query syntax on pull sequences and push sequences. Both are queries in the strictest sense and the fact that a sequence is push or pull is orthogonal. Lets analyze a typical Linq query

IEnumerablePoint points  from x in Enumerable.Range0, 2      from y in Enumerable.Range0, 2      select new Pointx,y

A verbal description of this query might be

For each x in the sequence 0 to 1 get each y in the sequence 0 to 1 and create a new point for each pair of values.

The result of course is

0,0 0,1 1,0 1,1

Now lets contrast this with an Rx query that creates a dragging event for a SilverlightWPF control

IObservableEventMouseEventArgs draggingEvent  from mouseLeftDownEvent in control.GetMouseLeftDown      from mouseMoveEvent in control.GetMouseMove.Untilcontrol.GetMouseLeftUp      select mouseMoveEvent

A verbal description of this query might be

For each mouse left down event, get each mouse move event and return it until the next mouse left up event occurs.

As you can see, using from allows us to declaratively sequence events. The alternative would be to create a state machine, setting a flag when the mouse button is pressed and then behaving differently when the mouse is moved and that flag is set. With Rx the code for the drag event is selfcontained and involves no variable mutation.

With Linq to IEnumerable we transform and combine sequences of data to create a sequence containing exactly the data we need. Then we traverse that sequence and do something with the data. With Linq to IObservable we can transform and combine events and async callbacks to create the precise event were interested in. Then we register a handler and do something with the data.

Silverlight Toolkit Unit Test Code Written with Rx

The Silverlight Toolkit team is using Rx to write reliable, eventbased asynchronous tests. This is essential as the elements in a controls visual tree are created asynchronously, forcing us to wait for an event in order to confirm they were created appropriately. Lets take a look at a test for Rating that uses Rx.

This test ensures that the Actual Value of a RatingItem is 100 when its parent Rating is 100. This is tricky because when you change the value of rating it animates to the new value using an internal storyboard. I have to wait for ActualValue to be animated to the Value property before I examine the RatingItem.

The test creates a Rating control, places it on screen, and waits for LayoutUpdated to ensure that the rating items are generated. Then it asynchronously sets the value of rating to 1.0. As the ActualValue of the Rating changes, the various RatingItems will have their ActualValues set accordingly depending on their index. The test needs to wait until the Ratings ActualValue reaches Value before checking to make sure the ActualValue of the last rating item is 1.0.



Rating rating  new Rating IObservableUnit test   Unit is an object that represents null. ObservableExtensions         .DoAsync  TestPanel.Children.Addrating         .WaitForTestPanel.GetLayoutUpdated  Extension method GetLayoutUpdated converts the event to observable .DoAsync  rating.Value  1.0  Calls the Ignite EnqueueCallback method .WaitFor  waits for an observable to raise before going on  listen to all the actual value change events and filters them until ActualValue reaches Value rating                                       .GetActualValueChanged  extension method that converts ActualValueChanged event to IObservable .SkipWhileactualValueChangedEvent  actualValueChangedEvent.EventArgs.NewValue ! rating.Value  check to make sure the actual value of the rating item is set appropriately now that the animation has completed .Assert  rating.GetRatingItems.Last.ActualValue  1.0  crawls the expression tree and makes a call to the appropriate Assert method Test.Subscribe  TestPanel.Children.Removerating run the test and clean up at the end.

The code above uses a variety of extension methods we built to manipulate observable objects. You can use these libraries in your own unit tests by downloading the Silverlight Toolkit sources.

Always

Useing IObservable for New Asynchronous APIs

The IObservableIObserver interfaces are in .NET framework 4.0.

I want to stress that IObservable is the new asynchronous programming pattern in .NET.

It supplants the BeginEndInvoke pattern as well as the eventbased asynchronous pattern

.

Simple run of thumb if the method is asynchronous, return an IObservable.



A correction here. It is still perfectly acceptable to use BeginEnd Invoke or the eventbased asynchronous pattern. Large portions of the framework use these patterns and will continue to do so for the sake of consistency.

Exposing IObservable is like putting lighting in a bottle. Developers can open it up and get access to a galaxy of Linq methods they can use to combine and sequence them with other IObservables. My hope is that eventually APIs exposing IObservable will be just as common as those exposing IEnumerable.

Erik Meijer Strikes Again

Rx is the brainchild of Erik Meijer, the father of Linq and recent recipient of the Outstanding Technical Leadership award at Microsoft. Erik is the reason I chose to work for Microsoft. With the introduction of Rx and his work on Linq and Haskell he has profoundly changed the way I approach software development twice in four years  an incredible feat. Thanks to Meijer, Microsoft does a better job than anyone of taking bleedingedge functional programming research and productizing it. The Rx team also includes my favorite blogger, Wes Dyer whose blog posts opened my eyes to what an incredibly versatile language C is.

After using it for the last few months its now impossible to imagine doing Silverlight development without Rx. As of today the only place you can get it is in the Silverlight Toolkit sources . Take a look. If you are comfortable with Linq programming youll find it to be extremely powerful.

Posted by

