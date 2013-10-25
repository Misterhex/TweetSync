---
layout: post
title: Wednesday-6-February-2013-First-Impressions-of-Golang
categories:
- tweets
---
*taken from [http://t.co/2ki85Uy4cS](http://t.co/2ki85Uy4cS)*
>Wednesday, 6 February 2013
>
>First Impressions of Golang Part 1
>
>Note Title uses golang instead of go because go is impossible to Google. Good choice there, guys.
>
>This week I have written my first go program. Some reactions are below. Some of these are duplicates of items from the Go Bloviations blog post by fish, because I agree with them.
>
>Pro
>
>Cgo works.Ive been using gogtk for my GUI. Its missing a few things, and doesnt support the gtkgl library which provides the GtkGLArea widget that I want to use. But within the couple of days of using go Ive been able to add support for a couple of missing features, and add a new package to wrap gtkgl admittedly Ive only wrapped a tiny part of it just enough to get started using it. Most of the pain comes from having a much stricter type system in Go, and that seems worthwhile enough that Im willing to live with the extra hassle it creates for bindings.
>
>Garbage collection, inferred types and multiple return values all minimise boilerplate.This is totally obvious and everyones known it for years, but its still a shock to me because most of my programming has been stuck in C for a while, and the bits that havent been in C have been in dynamically typed languages which suffer from all the well known problems of tools that give you the absolute bare minimum of help checking your code.
>
>Go makes CSP usable.I have had some experience with CSPstyle concurrency already, with Occam and XC , so I already knew some things about how to write CSPbased concurrent code. However, although CSP has advantages for formal analysis, I actually still find it a PITA to make things work in occam and xc. Go improves on this situation considerably Ive found it far easier to get things running with Gos extra facilities. Channels can be trivially created with a buffer this is extremely useful or necessary to avoid risk of deadlock with some communication patterns channel endpoints are not fixed e.g., multiple goroutines can all write to the same output channel channels are first class values, so you can put them in structs and pass them through other channels this is super useful for some neat communication protocols. I would be interested to know how CSPs formal analysis advantages hold up with Gos extras.
>
>Con
>
>No warnings, only errors.Warnings are really useful. Because this is my first time using Go, I am writing this code in an exploratory mode. That means jumping around a lot while making changes, and making lots of experimental changes that I will want to revert or clean up later. Go is overzealous in its errors in particular unnecessary imports and variable declarations will stop the build fish notes this too. So, I add some code, I have to add an import, then later I comment out the code and have to remove the import every time I enabledisable that piece of code I have to change imports and variables again. Its good that the compiler emits a diagnostic for unnecessary imports and variables, but its stupid that it stops the build.
>
>Overzealous control flow errors.If you write a function containing just an ifelse block, with a return at the end of each branch, it wont compile. Same thing if you write a function that ends in a select block with a return for each case. Why? Because the function ends without a return statement. All the C compilers that I use are all capable of diagnosing missing return statements much more accurately.
>
>Math lib only works on float64.Go requires exact type matches everywhere. Im not against that occasionally its useful to allow implicit conversions, but C and C are too permissive there. Except that the built in math library is only implemented for float64. Every time I call sincostansqrtwhatever, I have to add an explicit cast to make the argument float64, and another to bring the result back to float32. So just use float64 everywhere! No.
>
>No operator overloading.I have no idea how Im supposed to write a usable vector maths library.
>
>GOPATH.I do not organise my data by file type, I organise it by topic. I do not want to have a single shared directory containing the source for all of my go packages. My project incubation directory currently has 72 projects in it. I create them at the drop of a hat, and discard them just as easily. I do not want to edit GOPATH every time I start or discard a project. I do not want to have to type export GOPATHPWDGOPATH every time I want to work on something.
>
>Defer lacks abstractive power.I cannot give a name to an initialiserfinaliser pair, like I can in C. Every time I use something that needs finalisation, I have to remember to put in the relevant defer statement.
>
>Multiple return values is hampered by having separate syntax for assign vs. declareandassign.In Go, a second return value is often used to return some form of successfailure flag or error value. This means you often have code like foo, err  MakeFoo. Which is great. Except further down the file where you write bar, err  MakeBar and it doesnt compile because err has already been declared. To fix it you have to write var bar Bar first so that you can turn that into a normal assignment instead of declarationassignment.Edit Apparently this isnt true a declarationassignment is allowed even if only some of the variables are new. I definitely hit some problem related to it though Ill have to investigate and work out what the real problem was.
>
>I dont like tying visibility to identifier case.I dont have a particularly great argument against it, but I dont like it. I do see some advantages of it code style uniformity, but it also means that if you want to exposehide an identifier you have to rename it everywhere. One situation where you would commonly want to expose a bunch of stuff that used to be private is if youre splitting some functionality out into a separate package. I tend to write code in my main package ie, the program and then when it feels like something coherent is forming I split it out. Renaming identifiers isnt particularly hard, just tedious, and there are plenty of other code maintenance reasons that youll have to rename things as you work out how your code should be structured, so I guess its not a big deal. Perhaps the gofmt tool can do the rename for you? It can be given extra rules to run, Im not sure what exactly they can do. Haskell also makes identifier case important, but there its used to indicate roughly types vs. values, which is a more stable split it wouldnt make much sense to try to take a type and turn it into a value or vice versa, whereas changing visibility is more common. Haskell has explicit export lists, which I prefer they have the disadvantage of making you duplicate the identifier name in a different part of the file at the top, but the advantage that it gives a natural place to see all the exported symbols and add oneliner documentation for them.
>
>Lack of composability.Its really far, far too early to be making this kind of judgement mostly because Ive only just started using the language, but also partly because the language itself is still very young compare C, which existed for years before the modern idioms to make it usable were even invented... but what the hell. I feel like it will be very difficult to achieve composable designs in Go. There are too many things that cant be abstracted cleanly too few axes on which things can beparametrised.
>
>To be continued...
>
>