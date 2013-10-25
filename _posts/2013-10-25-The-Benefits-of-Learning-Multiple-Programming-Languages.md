---
layout: post
title: the benefits of learning multiple programming languages
categories:
- tweets
---
*taken from [http://t.co/g2BuS2422E](http://t.co/g2BuS2422E)*
The Benefits of Learning Multiple Programming Languages

Learn More Buy

David Chisnall discusses the importance of learning more than one programming language. He explains that it doesn't matter whether you actually use the language that taught you the concepts that experience gives you a much wider set of tools to apply to whatever language you use.

I've recently heard several people remark that the differences  between programming languages are just syntax. In a sense, this is  true. The ChurchTuring thesis tells us that any programming language that can  implement the Lambda calculus or a Turing Machine simulator can implement any  algorithm.

To understand why this is meaningless, one needs only look at the  esoteric language Malbodge Although some derivatives are Turingcomplete, it  took two years for anyone to write a working program in the language.

For a less esoteric example, you can look in the programmers'  manual for the STANTEC ZEBRA, a machine released in 1958. It included a  restricted version of its instruction set that was easier to program, with a  caveat that it could be used only for programs that had fewer than 150  instructions. The manual helpfully informed readers that this wasn't a serious  limitation because no one could write a working program so complex.

This is obviously not the case for most modern programming  languages. In fact, writing a program that compiles to fewer than 150  instructions is something of a challenge. Different programming languages teach  very different ways of thinking about problems. Some programmers learn one  language and then write in any other language as if they were using their first  language. These are the sorts of people who are likely to tell you that  different languages are just syntax.

The Level of Languages

It's traditional to refer to a programming language as being on a  spectrum from a highlevel language to a lowlevel language. I still believe  that this is important because without a grounding in computer architecture it's  very easy to forget that some constructs in a highlevel language are easy to  generate efficient code forand others are not.

Today, however, the idea of a single lowlevel language doesn't  make as much sense as it did even five years ago. A modern mobile phone has  somewhere between one and eight ARM CPU cores. It has a GPU, with a very  different execution and memory model, which executes somewhere up to 256  threads using a very different parallelism model in which groups of threads  proceed in lockstep. It typically has a DSP that can do stream processing very  quickly. And it may have some other specialized processors.

Don't Miss These Related Articles Also by David Chisnall

Learn more about David Chisnall

There  is no single lowlevel language.  A highlevel language is one that is close to how a human would express the  problem albeit often for a somewhat peculiar definition of human, which is not representative  outside of most university mathematics departments, whereas a lowlevel  language is one that is close to how a machine operates.

I've argued before that everyone should learn at least one lowlevel programming language so that  they will think about efficiency when writing code in a highlevel language that has  an abstract machine model that cleanly maps individually to all of these, let  alone to the entire system.

This  means that it's worth learning C, but it's also worth learning some related  languages, such as OpenCL C or GLSL. Increasingly, generalpurpose compilers  are aiming to target GPUs, so being able to structure loops or map operations  in a way that is amenable to this kind of autoparallelism can result in huge performance  and power usage improvements.

At the opposite end of the spectrum, highlevel languages are also  very different. The definition of a highlevel language has always been  somewhat fluid. When I was learning to program, a highlevel language meant any  language that was not an assembly language, and the book from which I learned C  spent a lot of the first chapter explaining that a highlevel language like C  could be as fast to execute as assembly but had advantages in terms of  portability and maintainability. Now people would look at you very strangely if  you described C as a highlevel language.

So what is a highlevel language today? Modern objectoriented or  functional languages such as Java or Haskell are a long way away from how the  computer works, although it's debatable whether they are close to how humans  work. Going past them, there are domainspecific languages.

Perhaps the most wellknown is the Structured Query Language SQL,  which as its name would suggest is designed for composing queries on  structured data and would be a wholly inappropriate language for  generalpurpose programming.

Domainspecific languages are everywhere. Programs like awk provide  domainspecific languages for recordoriented text processing. PostScript is a  domainspecific language for rendering vector graphics, and although PostScript  itself is increasingly rare, a number of its derivatives survive. PDF uses the  core of PostScript without the flow control as the base for its rendering  model, and the OS X drawing APIs and Cairo on other UNIXlike platforms  provide APIs that have direct mappings to the PostScript drawing state.

The canvas tag in a modern web browser has an API that was proposed  by Apple and is effectively a lightweight JavaScript binding to Apple's  CoreGraphics, which in turn implements the PostScript drawing model.

Again, although PostScript would make a terrible choice as a  generalpurpose programming language, that hasn't stopped people from trying. Sun's  NeWS system used PostScript for rendering and allowed entire view objects to be  written in PostScript. This made it much more responsive for remote display  than X11, because when you clicked on a button it would draw the pressed state  immediately while asynchronously sending the buttonpressed event to the rest  of the program.

NeXT also used a variant of PostScript Display PostScript for  rendering, but developers usually just generated PostScript commands from  another language.

Thinking in Abstractions

With such a plethora of highlevel and domainspecific languages,  it's usually fairly easy to find one that is close to the expression of the  problem. Unfortunately, in the real world there are other constraints that  often mean that you can't use the language that makes the implementation easier.

These constraints can be related to performance or deployment. For  example, a language like Python or Ruby may be quick to write in, but might not  run the resulting code quickly enough. If you have the resources of a company  like Facebook, you can write your own compiler to make your existing code  faster, but that's not usually an option.

Alternatively, your language of choice may not support your target  platform. For example, trying to ship a Java application for Microsoft or Apple's  mobile platforms is not usually possible.

That doesn't make it a waste of time, however. It's often a good  idea to prototype in another language. This has several advantages. If the  language that you're prototyping in is not usable for deployment, it prevents  the prototype which may have some poor design decisions and be unmaintainable  code from being pressed into service by management. It also means that you are  free to make any experimental choices you want, knowing that you won't have to  live with them if they don't work.

More importantly, creating a prototype allows you to structure your  thoughts about what the design should look like. For moreexperienced  programmers, actually creating the prototype is not always an essential part of  this process.

Having identified a language in which the problem can be expressed  naturally, I often spend some time considering how I would implement the  program in that language and then how the constructs that I would use would map  to the language that I am using. The end result is code that solves the problem  and is easy to restructure when I revisit it a few years later.

It's possible to write C, or even assembly, in a style that mimics  an objectoriented language, with finegrained encapsulation and independent  parts accessible only via welldefined interfaces. It's much harder to do this  if you've never used a language where these ideas are exposed syntactically and  enforced by the language model.

Models of Parallelism

One of the most obvious differences between languages on modern  hardware is how they expose parallelism. This is increasingly important, for  two reasons. For the purely performance minded, singlethreaded execution  speeds have not become much faster for quite a while. In the '90s, you could  expect your singlethreaded program to roughly double in speed if you replaced  your yearold computer with a new one. Now, you'd be lucky to get a 20 speedup  unless it's IO bound and you replace a hard disk with an SSD. Very little  code these days is actually CPUbound, so this isn't a huge problem, but  increasingly power consumption matters.

All other things being equal, a single CPU core running at 1GHz  will consume more power than two running at 500MHz. If you have perfectly  written parallel code without any contention, it will run at about the same  speed on both. If it's running on a mobile device, this translates to longer  battery life. More importantly, it gives the operating system more opportunity  to adapt. A fourthreaded program with work distributed evenly among the  threads can be scheduled on one, two, or four cores, depending on which makes  more sense for the current device conditions.

I've already mentioned GPUs. They have a very different programming  model from more traditional SMP systems because there is a significant  performance penalty if the threads diverge or, indeed, need to communicate. On  the CPU side, there are a lot of models that are worth learning.

Go and Erlang both provide primitives built into the language for  communication. Somewhat confusingly, Erlang uses the syntax from Hoare's  Communicating Sequential Processes CSP formalism but provides actormodel  concurrency, whereas Go provides CSP semantics but its own syntax.

Both the actor model and CSP are sharednothing models although Go's  implementation relaxes this. The cardinal rule for writing scalable and  maintainable parallel code is that no object should be both aliased between  threads and mutable. This is enforced by Erlang, which provides a single  mutable object per process the process dictionary and makes everything else  immutable.

Some calculus  extensions to Haskell do the same. In Go, you must enforce this yourself,  although the language does make it quite easy and provides design patterns such  as share memory by communicating that make it easy.

In C, you have a sharedeverything model of parallelism and no  explicit mechanisms for sending messages between thread or, until recently, of  creating threads without extensions such as POSIX or Win32. All that you have  is some fundamental building blocks for creating and synchronizing threads. You  can build Erlangstyle message passing or Gostyle channels on top of them.

Learning either of these languages and writing some code in it  gives you the mental building blocks to use the same ideas elsewhere. This  applies to a great many other aspects of a language. It doesn't matter whether  you actually use the language that taught you the concepts that experience  gives you a much wider set of tools to apply to whatever language you happen to  find yourself using.

Page 1 of 1

