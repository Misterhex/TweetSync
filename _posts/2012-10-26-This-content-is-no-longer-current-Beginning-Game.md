---
layout: post
title: this content is no longer current beginning game
categories:
- tweets
---
*taken from [http://t.co/lkZVrnfW](http://t.co/lkZVrnfW)*
This content is no longer current.

Beginning Game Development Part I Introduction

Posted Nov 02, 2006 at 751 PM

Tweet



This is Part 1 of an introductory series on game programming using the Microsoft .NET Framework and managed DirectX 9.0.

WARNING Managed DirectX is no longer supported. If you want to do 3D graphics with the .NET Framework, please use XNA  httpcreators.xna.com 

Derek Pierson

Beginning Game Development Part VIII  DirectSound III

Part I  Introduction

Welcome to the first article of an introductory series on game programming using the Microsoft .NET Framework and managed DirectX 9.0.

This series as aimed at beginning programmers who are interested in developing a game for their own use with the .NET Framework and DirectX. The goal of this series is to have fun creating a game and learn game development and DirectX along the way. Game  programming and DirectX have their own terms and definitions that can be difficult to understand, but after awhile, youll crack the code and be able to explore a new world of possibilities. I will keep things as straightforward as possible and decode terms  as they appear. Another part of the learning curve comes from the math youll need to deal with DirectX. I am going to point out some resources along the way that will help you brush up on, or learn, the math skills youll need to keep going in DirectX.

In this series, we are going to build a simple game to illustrate the various components of a commercial game. We will cover how to create great looking graphics in 3D, how to handle user input, how to add sound to a game, how to create computer opponents  using Artificial Intelligence, and how to model realworld physics. In addition we are going to cover how to make your game playable over the network and how to optimize your game for performance. Along the way, I will show you how to apply principles of objectoriented  development and, as well, I will share some of my experience in creating wellorganized and elegant code.

Tools

Before we start writing our first game we need to talk about the tools we will use.

The most important tool for any developer is the Integrated Development Environment IDE. This is where you are going to spend the majority of your time writing and debugging code, so it needs be powerful and fast.

Visual Studio 2005 also known by the codename Whidbey is the third version of the standard Microsoft IDE for .NET Frameworkbased applications. Visual Studio 2005 introduces a number of Express versions that provide most of the functionality of their  more advanced counterparts but are simplified for the novice, hobbyist, and student developer and cost much less There are express versions available for VB, C, C, J and for Web Developers using ASP.NET. For this series, I am going to use both Visual  C Express and Visual Basic Express. If you have not already done so, download the C or Visual Basic Visual Studio Express IDE at httpmsdn.microsoft.comexpress .

The second important tool we need to create a great looking game is a graphics Application Programming Interface API. Without such an API it would be extremely difficult to access the graphics capabilities of your PC. The API we are going use is the DirectX  API. This API allows us to create powerful multimedia applications on the Windows platform. To work on the game, you will need to download the latest DirectX SDK at httpwww.microsoft.comwindowsdirectxdefault.aspx . Make sure that you download the SDK and not just the runtime. The SDK includes samples and other utilities that are extremely useful when  developing using DirectX.

At some point in your game development experience you are going to have to create or modify graphics. Every copy of Microsoft Windows comes with Microsoft Paint, and while it is not the most powerful program, you already own it and it is good enough for  most of our needs.

As we dive deeper into DirectX and cover 3D models and sounds, you might find the need to use other programs to manipulate the image or sound files. As we cover these topics I will point you towards free or inexpensive programs and resources on the Web.

Finally, you need to know where to go to get help. One of the best places is the public newsgroups. Here, you can ask questions and get answers from people with the same interests as you. Microsoft MVPs and employees also monitor these newsgroups and provide  help for you along the way. The newsgroups that are going to be of most interest for game programming are

Gamasutra httpwww.gamasutra.com Professional audience, but many articles from Game Developer, including tutorials

What makes a successful game?

My first experience using a computer was in 1981 on a Sinclair ZX Spectrum. The first 5 years of my computing life were spent on nothing but writing and modifying games for the Sinclair and later the Commodore 64, but, heck, what else are you going to do  as a teenager? While much has changed in terms of hardware capabilities and available APIs, the properties of a great game have not.

Games today have become so complex that they require large numbers of developers, graphic artists, testers and managerial overhead to develop. They rival large commercial enterprise application in their complexity and cost many millions of dollars to develop  and market. The payback, however, can be enormous and rival Hollywood blockbuster movies in sales  Halo 2 grossed 100M in its first day of availability. 

All successful games have a couple of features in common that made them stand out.

The main ingredient for a successful game is the game idea. Regardless how cool your graphics are, how good the music is, if the idea is lame no one is going to play the game.

The second most important feature is the playability of the game. If the game is too hard then players are quickly going to get frustrated and stop playing. Conversely, if the game play is too easy then the player is going to get bored and stop playing.  A good game provides multiple levels of difficulty that continuously challenge the player without overwhelming or boring them.

Together, the game idea and its playability are the game design not to be confused with level design, which is the application of the overall game design to specific segments of the game. There are certain game designers who have a golden touch. Shigeru  Miyamoto the creator of Donkey Kong, Zelda, and Mario and Will Wright Simeverything are two prominent examples. Miyamotos keynote address to the 1999 Game Developers Conference is available at httpwww.gamasutra.comfeatures20030502miyamoto01.shtml and Wrights recent discussion of the design philosophy of Spore  httpwww.gamespy.comarticles595595975p1.html?fromint1   are good inspirations for designers of all stripes, while the book Theory of Fun for Game Design by Raph Koster has gotten excellent reviews in the community.

The third ingredient to a successful game is the set of graphics. They need to be good enough to compliment the game idea and game play but not so resource intensive or flashy that they distract from it.

The final ingredient is performance. No one wants to play a slow game. I still remember an adventure game on my Commodore64 that took 10 minutes to render each scene. I still played it, mind you, because the game idea was great and there were no other options  around but it was irritating. Graphics and performance are closely related. The more fancy graphics you add to a game to slower the performance. The next biggest performance issue is the AI. A lot of game development today focuses on how to make things faster  and not coming up with new ideas. However, when youre learning a complex programming technique such as game programming, its vitally important not to optimize prematurely. An understanding of the performance pipelines, and the skills to write clean code, profile it, and improve it are much more important than any single optimized function.

If you apply your design efforts in this order you, too, can create a great game. It may not be a refined first person shooter like Battlefield 1942, but Tetris is arguably one of the most popular games and has neither fancy 3D graphics nor Dolby digital  sound. Even today, games like Gish  httpwww.chroniclogic.comindex.htm?gish.htm  demonstrate what can come from creative independent developers. If you can write enough of a game to show your  game idea, then maybe you can interest the large gaming companies in your game. The Independent Games Festival is the Sundance of the game community, runs concurrently with the professional Game Developers Conference and, believe me, is among the most closelywatched  events at the show.

Our Game idea

Now that you know what features make a great game, the next step is to lay out the game proposal for our game.

Idea Since coming up with a unique and creative game idea is the core of any game, I am going to cheat and use the game idea from the first 3D game I ever saw Ataris Battlezone. If I had that great idea why would I let of all you know anyway?  Battlezone is a basic firstperson shooter game in which you are looking through the viewfinder of a tank into a 3D landscape. The goal is to destroy as many of the opponents tanks as possible before getting destroyed yourself. The landscape includes random  objects behind which you can hide. The game screen includes a radar to show you the location of your opponents and the current score.

Playability The original game started out fairly slowly but kept adding more opponent tanks and other random enemies. The game also increased the speed and intelligence of the opponents. All of this kept the game challenging but playable.

Graphics The original game used graphics that proved just engaging enough to feel like you were in a 3D world, but because of the hardware available in 1980 an 8bit processor running at 1.5 megahertz it rendered the 3D objects as wire frames. These graphics were advanced when the game first came out, but we are going to improve upon them using the magic of DirectX and the magic of 25 years of Moores Law!.

Screenshot of Ataris Battlezone game  complete with wire frame mountains, tanks, and even a wire frame moon for added realism!

Performance This game pushed the limits of the hardware available at the time. This is evident in the use of the wire frame objects. If the game had been written to fill these objects then it would have been unplayable. With todays advanced  hardware we should not have any performance issues other than those introduced by us writing sloppy code.

Now that we have decided on a game, the next step is to write down the goals of your game. This does not need to be anything formal but the simple act of writing things down has the tendency to make ideas clearer. At a minimum you need to determine the object  of the game, what the player can and cannot do and how the player interacts with the game. We also should define what the scoring system is going to be like and what are the victory conditions.

For our game these are the simple specification I came up with.

A 3D firstperson shooter game

The goal is to destroy as many enemies as possible

The player can move through the landscape on the ground just as a regular tank can. The tank can not fly, nor can it change speed.

The game play will be controlled through the keyboard for moving and shooting. The mouse will be used to interact with the menus and startstop the game. We will not support a joystick.

The player will receive a score that is based on the distance at which the enemy tank was destroyed. The further the tank was, the higher the score. Each round fired reduces the score by a set amount, unless that round hits a target.

The game will be divided into levels. Each level will have a predefined number of enemies. Once all enemies have been eliminated, the player advances to the next level. There is no limit to the levels.

Now we are ready to do some coding. In general, it is best to write down just the overall idea of the application. Spending a lot of effort upfront designing every little detail is just a waste of time. As we add more functionally to the game we will continuously  do small design sessions to formulate our ideas. This iterative approach to developing software is the best way to create good software, and is more fun at the same time.

Creating the game Project

Now we are ready to write some code. The first step is to create a new solution in Visual Studio 2005.

Select File  New  Project and choose Windows Application from the template list. In the Name field at the bottom of the dialog, replace the default WindowsApplication1 with BattleTank2005 and click OK.

Visual Studio now creates a new solution for us called BattleTank2005 that contains a single project with the same name.

First, we need to rename the class to something more descriptive. Naming is one of the most efficient methods of keeping code well organized and understandable. Always choose names that clearly describe what the item is doing and avoid meaningless names  like Class1 and Form1.

From the Edit menu, select Find and Replace, then select Quick Replace. Set the Find What field to 'Form1', Replace What field to 'GameEngine' and the Look in field to 'Current Project' see Figure below. Click Replace All to make this change there should be five changes made

Next rightclick Form1 in the Solution Explorer and select Rename. Change Form1.cs to GameEngine.cs.

Replacing Form1 text with GameEngine. You'll thank yourself later.

Another trick to keeping things organized is to ensure that the files in the Solution Explorer are named exactly the same as the classes they contain and to always create a separate file for each distinct element such as each class or enumeration.

Now we have a Windows application that we can run, but it doesnt do anything. The form has no other controls on it such as buttons you can click or textboxes to display any information. In a regular Windows Forms application we would now add such controls  to the forms to create our final application, but for our game we are going draw everything using the DirectX API rather than the Windows Forms API.

We really only need the Form for its Windows Handle, which is basically its unique name among all the other windows on the screen. We will use this handle to set up our DirectX drawing surface. The other use of the Form is that it contains an event that  we are going to use to create our render loop.

Adding the Render loop

A game is much different from a regular application, such as Microsoft Word. Word presents a screen to the user that mimics a page in a typewriter and then waits for the user to do something. This something could be pressing the keys on the keyboard or selecting  a menu item from the menu with the mouse. While waiting for the user to interact with the application Word does nothing. Actually I lie it does do things like run spell checking and auto save in the background but nothing you as the user can see. Generally, programs written using the Windows Forms library generally have the same behavior  they dont consume CPU time unless the user is  doing something of course, its possible to use the Timer control or the capabilities of the System.Threading namespace to do things independent of the user.

Games are different. As you know, smooth movement in games requires the screen to be updated many times per second. The flicker fusion threshold at which static images begin to fuse is generally taken to be 116 of a second, although it actually varies  depending on illumination brighter lights like computer monitors require higher frame rates and where on the retina the image falls peripheral vision requires higher rates than foveal vision. Although movies are shown at 24 frames per second FPS, 30  FPS is often considered the lowestacceptable rate for video games, and most actiongame players tune their graphics for no less than 60 FPS.

Because the render loop is called dozens of times per second and runs nonstop, game programming almost always uses the render loop as the stopwatch of the game, calculating everything inside the loop, not just graphics, but physics, AI, checking for user  input, and scores. Again, you could use the Timer class or threads to write a multithreaded game, but doing so would introduce significant complexity without any clear benefits and although multithreading in the .NET Frameworks Common Language Runtime is quite efficient, the slight overhead could knock a couple frames per second off your game.

So how do we get the computer to run this loop? The form we added earlier has an event called the Paint event. The Paint event for a Windows Form object is called whenever the form is redrawn. This normally occurs only when you maximize a form or when a form is covered by another form that is moved.

As all Windows Forms programming, even game programming, is eventbased, understanding the principles of events and event handlers is critical. Although the event is triggered automatically, we need to create a special method called an event handler to be  able to intercept the event and do something in response to it..

In the GameEngine class add the following code after the constructor.

Visual C

protected override void OnPaintPaintEventArgs e



Protected Overrides Sub OnPaintByVal e As PaintEventArgs

End Sub

This is our event handler. When is it called? OnPaint  when the Paint event occurs. One thing is still missing. Even though Windows and the Windows Forms library automatically raise the event, some actions that we might expect to trigger the Paint event  dont. Minimizing a window, for example, does not trigger the Paint event, since Windows does not see the need to repaint the entire form Windows is just being efficient since we are actually displaying less when we are shrinking the form. So we cannot rely  on these automaticallycreated events to manage the loop we need for our game.

Luckily, we can programmatically trigger the Paint event by calling the Invalidate method of a form. This causes the Paint event to be triggered and Windows to enter back into our OnPaint event handler. Then we execute any code we want to run every frame  and start all over again by calling the Invalidate method.

You might ask, Why cant we just add a whiletrue loop directly within OnPaint and never leave it? The answer is that even though were game programmers, were expected to play well with others. Creating a loop within OnPaint would starve the rest  of the programs running on the system. While our game might gain a few frames per second, the rest of the system would become, at best, ugly, and at worst, unstable. So, instead of directly looping, we essentially ask to be called again as soon as possible.

In the OnPaint method add the following line of code

Visual C

Visual Basic

Me.Invalidate

Thats it, weve created our render loop. But there is one more problem. It turns out that not all painting is done in the OnPaint method, Windows Forms triggers another event when the background is erased and by default performs some painting well, erasing in response. To force our application to truly only paint inside our method handler,  we need to add one more line of code to our application. Since we need to ensure that this code is run when the application starts, we place it into the constructor of the form. This means that we are guaranteed that this code is run before we call any methods  on that class.

In the GameEngine class add the following line of code to the constructor immediately following the InitializeComponent method call.

Visual C

Me.SetStyleControlStyles.AllPaintingInWmPaint Or

ControlStyles.Opaque, True

Setting the ControlStyles to AllPaintingInWmPaint ensures that Windows only uses the OnPaint event handler to redraw the screen. The second parameter simply informs Windows that our window is not going to be transparent.

Now we have the basic framework for our game. Everything we are going to create from now on out will be actions that occur inside the render loop.

Everything about timers

One issue with this type of loop is that fact that the speed in which the computer can accomplish the tasks in the render loop varies from computer to computer. It even varies on the same computer according to how much memory and CPU time is available for  the game at any given moment. We need to have some way of accounting for these differences to make sure that we animate consistently. So instead of treating each frame the same, we are going to calculate the time elapsed between frames and apply that value  to our calculations.

There are a couple of different ways of keeping track of time in Windows

System.Windows.Forms.Timer This is the most common timer used in Windows programming. While it is easy to use, it only has a resolution of 118th of a second. Since we could have up to a thousand frames per second this resolution is not  good enough for a game program.

timeGetTime This Windows DLL provides a resolution of 1 microsecond on some versions of Windows and 5 microseconds on Windows NT. This is too variable, and we really dont want to check the operating system our game is running on to see if we need  to adjust the timer values.

System.TickCount This managed call returns the number of ticks that indicate the number of milliseconds. This is close to what we want, but we can do better.

QueryPerformanceCounter This is the preferred timer to use it has a resolution of less than 1 microsecond. This is the timer most often used in game development.

The last timer is kind of tricky to write since it requires calls to a lowlevel DLL kernel32 if you need to know in Windows. Luckily for us the need for a highresolution timer is universal and a timer class is included with the DirectX SDK. You can find  the timer class in the SamplesManagedCommon directory underneath the install directory of the SDK. The file we are interested in is called dxmutmisc.cs, but we will use most of the other files in that directory as we add more functionality to our own project.

Before we add dxmutmisc.cs we are going to create a separate folder. Organizing a solution by folders makes it easy to group related items together and keeps the project more organized.

Selecting Add  New Folder. Name the new folder DirectXSupport. This is where we are going to add the various support classes as we make use of them throughout this project.

Now we are going to add the existing file to our project. This copies the file to our directory structure.

Rightclick the DirectXSupport folder and select Add  Add Existing Item and browse to CProgram FilesMicrosoft DirectX 9.0 SDK February 2005SamplesManagedCommon and select the dxmutmisc.cs file.

If you want to, you can browse the contents of this file, it contains various other helper classes that save you from writing a lot of code yourself in addition to the FrameworkTimer class

Since the timer class is contained in a different namespace we are going to add a using statement so we can use the FrameworkTimer without having to write Microsoft.Samples.DirectX.UtilityToolkit.FrameworkTimer every time.

At the top of the class in the using directives region add the following line of code

Visual C

Visual Basic

Microsoft.Samples.DirectX.UtilityToolkit

Next we need to have a way to store the value of the time elapsed. We are going to store this value in the deltaTime variable. Notice that we are declaring this variable as a double. If you declared it as an integer you would lose all of the resolution provided  by our highpowered timer since everything would be rounded to an integer.

At the end of the class above the last two braces add the following line of code.

Visual C

Visual Basic

Private deltaTime As Double

We want to start the timer at the last possible moment in the render loop so we can get the most accurate time possible.

At the end of the OnPaint method right before the this.Invalidate call add the following code.

Visual C

Visual Basic

Microsoft.Samples.DirectX.UtilityToolkit.FrameworkTimer.Start

We need to calculate the elapsed or delta time at the start of each loop, because we are going to pass it to most of the subsequent calls we are going to make.

At the very top of the OnPaint method, before any other code, add the following line of code.

Visual C

