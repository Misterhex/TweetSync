---
layout: post
title: small and large scale refactorings by ola ellnestam
categories:
- tweets
---
*taken from [http://t.co/gm5dABCP](http://t.co/gm5dABCP)*
Small and LargeScale Refactorings

by Ola Ellnestam, Daniel Brolund

Picking fights with the Hydra might sound adventurous, but its just not a good thing to do.

Once upon a time we worked for a client in a pretty small team who was developing a new software product. One day that company landed a new contract. Fortunately for us the new client needed an almost identical system to the one we were already developing. Just a few minor changes and maybe one or two bigger ones. Do you recognize this pattern? Are you thinking copy  paste?

As the sale was already made and time wasnt really on our side, we basically had two options, and both would mean extra work. But in very different ways.

The Secret Parts

We learned early on that there were certain parts of the code that couldnt be shared between our clients. Under no circumstances could one client see the other clients secret parts. We had to separate the sensitive business logic and be able to configure which parts should be delivered to each client.

One way of solving that problem was to copy most parts of the code base to a new project and modify the code there. That would have solved the immediate problem no sharing of sensitive code between the two customers. But a duplicated code base or a partly duplicated code base would mean a lot of extra work.

On one hand, we would be able to deliver really fast, as we wouldnt have to think about how to structure the code to minimize duplication. On the other hand, that would of course mean we would have had to maintain almost twice as much code, including our previously poorly structured code, bugs and all.

Also, for every future bug or change in the system, we would have to analyze both parts to see if the bug was on the other system as well. In the long run, this would have meant tons of extra work, not to mention that its a very errorprone approach. Add to that the fact that it would have been a real pain to work with.

If we chose this path we would have had to pay a lot of interest on this huge technical debt. But initially it wouldnt cost us much, just copy some code. Ship it! Done.

If we instead opted for a large restructuring, we could still serve both customers and no sensitive data would be shared between them. This path meant we had to do some thinking, restructuring, and up front extra work before we could deliver to the new customer. The later coming interest would be lower, since the amount of duplication could be kept to a minimum. But if we chose that approach the customer would have to wait longer.

This was not an easy decision, and after many long and heated discussions we agreed to restructure the code base. Just give us a month, and we would be done.

We started working, and guess what? The work was more complex than we initially thought. Our approach got us into troubles of enormous proportions.

We didnt realize it right away, but we were up against a big refactoring.

Enter the Mikado Method

Mikado is a pickup sticks game originating in Europe. In 1936 it was brought from Hungary to the USA and was mostly called pickup sticks. Probably the Mikado name was not used because it was a brand name of a game producer. Anyway, the game got that name from the highest scoring stick, the Mikado, named for the Emperor of Japan.

You can play Mikado with two or more players. You have a bunch of sticks, much like dried spaghetti sticks. You bundle them with your hand and while keeping them in a vertical orientation, standing on a flat surface, you just let them fall. They will form a pile of some kind. In the middle of the bundle you have a differently colored, highscoring stick, the Mikado. The goal is to pick up the Mikado stick. If as you are picking up one stick another stick moves, you have to drop the stick and the turn goes to the next person. While you pick up sticks without disturbing other sticks, you may continue. The trick is to pick up the easy sticks, typically sticks that have no other sticks on top of them. Eventually, by using that strategy, you can pick up the Mikado stick and win the game.

GoalDriven Change

Code changes are like the Mikado game. When you want to make changes to a code base, you can rarely make the exact changes you want right away. You have to prepare some, move code, extract classes, and much more. Picking up the Mikado on your first grab is a rare thing! More often you make a sequence of moves before the Refactoring Mikado is available, working your way systematically to the bottom of the pile, to reach your goal.

We had thrown ourselves into an improvementandchange frenzy, modifying parts of the system that other parts depended on. Every change left us with an even more stirredup system, with more and more compilation errors.

Using the Mikado metaphor We had set our eyes on the highest scoring stick, which was at the bottom of the pile, not realizing this caused sticks to fly all over when we reached for it.

Pretty soon we realized that we needed to do everything we already had done, but in the reverse dependency order. We needed to follow those dependencies, or prerequisites, until we reached a change that had no prerequisites. The changes and dependencies between them constitute what we call the Mikado graph. Any change that has no prerequisites we call a leaf.These leaves are the only changes in the Mikado graph that are allowed to be made, since they can be done without stirring up the system with compilation or runtime errors.

We draw the prerequisites to the goal in a graph, on a whiteboard. By performing the leaf changes, we expose new leaves, ready to be pruned.

Removing a leaf is the same as picking up the topmost sticks in the Mikado stack. By doing so, you make other sticks the topmost sticks and easier to pick. If you follow that strategy, soon enough all obstacles will ultimately be removed and the goal will be within your reach.

After long and hard work we were finally able to pick the highest scoring stick. We had reached the Mikado goal.

The Mikado Game usually continues until all sticks are picked up. The problem in software development is that theres an endless pile of sticks. You can go on forever improving a system unless you decide which stick is your Mikado.

Lets see how Mikado Graphs can be created!

Creating Your First Graph

The Mikado Graph is a way to visually represent the knowledge about what changes depend on other changes. There are several ways to create such a graph, and we will start with one of the most powerful ways we know of The nave approach.

Lets draw our goal, the Mikado Goal, on a piece of paper or a whiteboard, like this

Once youve done that, you start by trying to achieve it immediately.

If you can easily achieve the goal, congratulations. Checkin and youre done. But if you cant, you need to start exploring and find out why.

To get going we usually try the first or easiest thing that pops into our minds. Weve found out that this works really well and it gets you going.

We navely try to implement a change, without analyzing too much in advance. By doing so, you dont need to think about how this affects the other changes and what that might lead to, thus ending up in analysis paralysis. You just do it!

As a start, you only need to know what you want to achieve, your core change. You dont have to know how to deal with all the complications in the system to make this change possible.

Very often when you make a nave change, you realize that the system is not built for the type of change you want to make, be it a mess or a wellbuilt system. When dealing with such a system, you need to perform some prerequisite refactorings first.

These prerequisites often manifest themselves in compilation errors or test failures. Dont try to fix the errors immediately or you will fall in the same trap we did. It will be like fighting a Software Hydrafor every head you cut off, two more grow out. Picking fights with the Hydra might sound adventurous, but its just not a good thing to do.

Instead, analyze the situation just about enough to decide on immediate actions that would resolve the errors. Draw those as dependent subgoals, or prerequisites, in your newly created Mikado Graph. After creating that memento you must revert your broken changes.Then you try to implement each of the prerequisites in the same way.

The Power of Undo

When youre working with computers you have a great tool that you sometimes would like in the real world Undo.

Lets say weve started to refactor and made our first change to the system and noted all changes that break the system as nodes. Our system is now upset the sticks are all over the place. This means we cannot compile or run the tests. We have put ourselves in a bad situation, because the state of the system doesnt allow safe progress any longer. Its time to get back to the last known good state. We need to revert our recent changes.

In your version system Undo might be called revert or rollback. But it is an undo it allows you to take risks and test things you would not, or could not, do in real life.

In his book Working Effectively with Legacy Code, Michael Feathers calls this approach Scratch Refactoringschanges you do only to explore your options, after which you return the code to its initial state. We will use that approach systematically.

We cannot stress this enough Always revert changes that dont work. We dont recommend working with a broken code base, even if youre a professional. Neither the compiler nor the tests will be able to help you when the code is in such a state.

To some people, reverting the broken code is like throwing work away and starting with nothing, like it never happened. This is a misconception of what developing systems is about System development, and especially refactorings, is almost exclusively about learning the system, the domain, and the language and technology you are using. Actually executing the changes takes just a short slice of the total development time.

The real value of the nave approach is that you learn what actually stands in your way. The Mikado Graph will hold that information for you, to be used and executed at a later time. Hence, nothing is really lost when reverting, but on the contrary, the stage is set and cleaned to execute some changes that might compile and work.

Avoid Analysis Paralysis

If you dont know what the consequences of your fix for the errors will be, again choose a nave resolution to the problem. If you realize that there are even more actions you need to take in order to make it work, which are not shown by the compiler or the tests, note these as prerequisites as well. This way, you make use of all available tools and knowledge when you later decide what to do while still saving time by being nave.

Remember Stay out of analysisparalysis by being nave. As a rule of thumb, if you have been thinking for more than a couple of minutes you should probably try something nave and practical again.

The nave approach is a way to create the Mikado Graph empirically. By avoiding analysis paralysis and too much guessing, you let the feedback be your compass, guiding you to your next step. This may sound strange, but it actually works very well in practice.

Different Types of Nodes

If you analyze a Mikado Graph you will find that its actually made up of four different types of nodes, the most central one being the Mikado Goal. It is connected to the prerequisites. At the very edge of the graph there are leaves. There is one more common node, the decision node. It represents things you need to do, but you are not yet sure what you need to do.

Mikado Goal

We recommend that this node be as clear and precise as possible. If it isnt, there will probably be some arguments on whether or not youre done. Spend some time and try to find what your acceptance criteria are. The goal itself could be either a technical one or a more businessfocused goal that is really up to you. Our bias is toward the latter even if we use this approach for technical improvements.

Did you notice that we drew the Mikado Goal with a double ellipse, or double circle? We do that to make it clearer which is the main goal, and which are subgoals. In small graphs this is usually not a problem. But when you jot it down on a piece of paper with lots of nodes and dependencies, you, and especially others, will benefit from finding the goal without guessing.

Prerequisites

Very often when you deal with large improvements you realize halfway through that what you really wanted to achieve has already been done. That is why we sometimes call this nodetype a subgoal.

Leaf

If you step back some and squint your eyes a bit, a Mikado Graph can look a bit like a tree, with a trunk and branches. At the end of each branch there is a leaf ready to be removed. In the same sense you find nodes at the outer border of the graph. When you have built the graph insideout, you start pruning the leaves outsidein, in order to reach your goal. Sometimes, when you work on a leaf, you discover it also has prerequisites. This is quite all right, and is a part of the process.

Decision Node

Sometimes you know what you want to achieve, but not exactly how to achieve it. In those cases you can postpone the decision of how to do it by using a decision node. An example is if you want to Break cyclic dependency between Game and Player. Later, you can add nodes as prerequisites to that node that spell Extract Game interface and Inject Game instance to Player.

Conclusion

The Mikado Method can help you find the troubling dependencies any large refactoring is affected by. You build the Mikado graph using the nave approach from your goal and out. By drawing the graph, you ensure that those dependencies are remembered and communicated to fellow workers or the future you, like a memento. By working the Mikado graph from the leaves in, you can perform big changes while keeping the system in a deliverable state, all the time.

We hope that you now have enough information to start practicing safe transformations of code bases. Deep in our hearts we believe that ripping apart and putting together systems is much harder than morphing them to a new better shape. The Mikado method can help you do that.

Good luck!

Ola Ellnestam likes to combine technology, people and business. This is why he finds software development so interesting. After stumbling upon eXtreme Programming back in early 2000 he realized that software development can be rewarding for both business and developers. But more than anything else, he likes to share his insights with others because he believes that this is how new knowledge and new insights is created.

Daniel Brolund is a software developer and cofounder at Agical. Among his traits is a constant desire to improve. He has successfully worked with global web sites deployed on hundreds of servers, desktop applications for just a few users, online gaming applications, just to mention a few. In a previous life he has also walked deathmarches and been involved in a huge bigbang catastrophe.

Send the authors your feedback or discuss the article in the magazine forum .

