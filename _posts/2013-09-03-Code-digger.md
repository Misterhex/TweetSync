---
layout: post
title: code digger
categories:
- tweets
---
*taken from [http://t.co/f05LiO62YU](http://t.co/f05LiO62YU)*
Using Pex and Microsoft Code Digger to Better Understand and Test Your Code

By Rion Williams , 25 Apr 2013

 5.00 4 votes

Add a reason or comment to your vote x

Votes of 3 or less require a comment

Tweet

Editorial Note

This article appears in the Third Party Products and Tools section. Articles in this  section are for the members only and must not be used to promote or advertise products in any way, shape or form. Please report any spam or advertising.

Code is a bit like an animal.

If a great deal of effort is placed into training the animal through proper design practices, testing methodologies and reviews then the code can easily be domesticated by an experienced developer and can do just about any trick that its owner desires. In contrast, an untrained, untested and poorly written piece of code is the kind that you worry about when you leave the house and it proceeds to tear apart all of the nice things that you own.

This is why testing is such a crucial part of software development and why it can often help to have any many tools as possible to help you train the animal within your code so it doesnt harbor bugs.

Microsoft Researchs Pex team recently released the Microsoft Code Digger , which is a handy extension for Visual Studio 2012 that will allow you analyze all of the possible execution paths that a particular snippet of code could take. This can be extremely helpful when dealing with areas of complex code and to help better understand the code, discover why it behaves in a certain way and to uncover any bugs lurking within it.

About Pex

Pex  Automated Unit Testing for .NET

Pex is one of the many wonderful things going on at Microsoft Research and it is intended to a tool to assist with automating whitebox and unittesting. It can help with generating all kinds of different inputs that can be thrown at a specific set of code and will display each of these execution branches along with thecorrespondingoutput of the function. It can provide an easy way for those that arent crazy about writing unit tests or just arent very good at it to simply test their code by letting the Pex Engine run through it.

Pex can provide an excellent way for you to find those small edgecases that can so often plague software and the fact that the process is completely automated makes it even easier!

Lets Get Digging

To get started using the Code Digger, youll just need to go and download the extension from the following site 

Download the Microsoft Code Digger today!

After installing it, you should be good to go and ready to get started!

A minor caveat Code Digger was very recently released and as a result currently only works for Visual Studio 2012 and can only target code that is contained within Portable Class Libraries. But fear not, as there are still numerous other ways that you can use Pex even outside of Visual Studio 2012, which will be covered later within this post. Not to mention that you know the folks at Microsoft are no doubt working to take this magical code and use it on a largerscale

Getting Started and Swimming with Sharks

Lets take a look at the Code Digger in action, which can help provide a much better explanation of what is going on behindthescenes and what makes Pex so magical!

Firstly, we will create a simple Portable Class Library file that we can use to create a very simple function and get an idea of how the Code Digger works.

Create a new Portable Class Library Project that can be used with Microsoft Code Digger.

Youll be prompted to select which environments that you want the code to be compatible with after. Since this is for demonstration purposes, just click OK

Then we will need to create a very simple function to begin with, such as summing an array of integers 

Simple method to sum an array of integers public static int Sumint values  return values.Sum 

To actually put the Code Digger to work, all you will need to do is simply rightclick on your function and select the Generate Inputs  Outputs Table option

Simply rightclicking your method and selecting Generate Inputs  Outputs Table option will display the generated data.

As you can see, the Code Digger provided the following valuable inputs that the function might receive as well as the different behaviors that it might exhibit. This information can be very useful in finding weaknesses and avoiding exceptions within our code as well as finding edge cases that may remain unseen.

Generated Output for our arraysumming method.

Adding a bit more complexity

Now that we know it will work for a simple integer values, lets try passing in a more complex model and see what kind of results it provides 

More Complex Example public static decimal CalculateCandyPricePerServingIEnumerableBagOfCandy bagsOfCandy  return bagsOfCandy.Averagep  p.Servings  p.Price  A Bag of Candy public class BagOfCandy  public int Servings  get set  public decimal Price  get set  public BagOfCandy 

which yields the following 

An Example of how adding additional complexity typically results in additional testing.

So  we will need to add the necessary checks within this statement to fix up some of these problems, which should be able to be done through a few simple logic checks 

A simple method to calculate the average price per piece of candy given several bags of candy public static decimal CalculateCandyPricePerServingIEnumerableBagOfCandy bagsOfCandy  Rough attempt to fix several more of the issues apparent in the first table ifbagsOfCandy  null  !bagsOfCandy.Anyp  p ! null  p.Price ! 0  p.Servings ! 0         Return 1 for invalid results return 1         else  Attempt to average the values otherwise return bagsOfCandy.Averagep  p.Servings  p.Price         

And now after running it, lets see what our results look like 

Although those checks handled some of the data that was coming in  it helped reveal other possible flaws.

and a little more tinkering with it could help get rid of those few remaining red errors 

public static decimal CalculateCandyPricePerServingIEnumerableBagOfCandy bagsOfCandy  If the bags of candy are not null and contain any bags that are not null ifbagsOfCandy ! null  bagsOfCandy.Anyb  b ! null         Gather the unempty bags with valid prices var unemptyBags  bagsOfCandy.Whereb  b ! null  b.Price  0 If there are any of these bags  output the average, otherwise 1 return unemptyBags.Any ? unemptyBags.Averagep  p.Servingsp.Price  1         else  Otherwise return 1 return 1         

which yields 

Continually attempting to use the input and output information can help you strengthen your methods and prepare them for the realworld

As you can see, Pex is great and continually challenging your possible inputs to help you avoid errors. This also functions as a great method to teach yourself or others about unittesting and how to properly develop methods and hopefully develop solid habits so that you wont have to do this for every one of your methods.

Dont Have Visual Studio 2012? No problem!

Although the Microsoft Code Digger is the most recent tool released by the Pex Team, it isnt the only one out there. The team has previously released two of the components of the engine as AddIns for Visual Studio 2008 and Visual Studio 2010, which can be downloaded below 

Pex consists of the following tools and functions 

Pex command line Visual Studio not required

Pex Visual Studio Addin, for Visual Studio 2008 and Visual Studio 2010

API reference, tutorials and documentation

Samples and Behaviors

and Moles has the following features 

Lightweight test stubs and detours for .NET

API reference, tutorials and documentation

Samples and Behaviors

These tools should be everything that you need to begin exploring, experimenting and hopefully more easily testing your code.

Note  In Visual Studio 2012  Moles has been replaced by the Fakes Framework. You can read more about handling and isolating your code using the Fakes Framework here 

Try it out yourself online!

If you arent sure if the Code Digger, Pex or Moles are something that you would be interesting in, you should give it a try online!

Pex for Fun  the online Pex Engine!

Pex for Fun is a simplified version of the Pex engine that has been designed to function as a puzzle game and learning tool.

Pex for Fun was an learning tool  puzzle game designed using the basic premise of Pex. It features a very simplified version of Pex, which analyzes a given function and provides you information about the output and challenges you to place the appropriate logic within the function to solve the puzzle.

For example, you initial puzzle might look like this 

using System public class Program  public static int Puzzleint x  return x       

with the following output 

This is a basic example of how Pex for Fun output appears.

so you might think Well since I know the output, Ill just use a switch statement 

using System public class Program  public static int Puzzleint x  switchx        case 0 case 1 default return x case 2 return x  1 case 3 return x  2 case 7 return x  x  x          

Nope! If you have ever been in a programming competition, you will know this feeling

Itll take more than a series of switch statements to foil one of these puzzles.

If you enjoy puzzles like these, youll figure out that the actual answer uses our friend recursion 

using System public class Program  public static int Puzzleint x  ifx  1           return x           else  return Puzzlex1  Puzzlex1  Puzzlex2  Puzzlex2  Puzzlex3                 

and reap all of the glorious rewards 

A pixelated medal isnt much  but you earned it!

More than Pixelated Golden Medals

The Pex for Fun example as mentioned earlier displays the most very basic features of the Pex Engine and is really meant more for recreational and educational purposes. The features and functionality that exists there however is quite powerful and if leveraged correctly could dramatically change the way that unittesting is done or it could at least act as a great supplement. I encourage you to try downloading any of the Pex packages mentioned throughout this post and try it out yourself. If you want to access the same examples used within this post, you can download them below 

