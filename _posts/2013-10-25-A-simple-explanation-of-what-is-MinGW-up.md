---
layout: post
title: a simple explanation of what is mingw up
categories:
- tweets
---
*taken from [http://t.co/FD7LG5Vutm](http://t.co/FD7LG5Vutm)*
A simple explanation of what is MinGW

up vote 9 down vote favorite

2

I'm an avid Python user and it seems that I require MinGW to be installed on my Windows machine to compile some libraries. I'm a little confused about MinGW and GCC. Here's my question from a real dummy point of view

So Python is language which both interpreted and compiled. There are Linux and Windows implementations of Python which one simply installs and used the binary to a execute his code. They come bundled with a bunch of builtin libraries that you can use. It's the same with Ruby from what I've read.

Now, I've done a tiny bit a of C and I know that one has a to compile it. It has its builtin libraries which seem to be called header files which you can use. Now, back in the school day's, C, was writing code in a vilike IDE called TurboC and then hitting F9 to compile it. That's pretty much where my C education ends.

What is MinGW and what is GCC? I've been mainly working on Windows systems and have even recently begun using Cygwin. Aren't they the same?

A simple explanation hitting these areas would be helpful.

My apologies if this post sounds sillystupid. I thought I'd ask here. Ignoring these core bits never made anyone a better programmer.

Thanks everyone.

6,245445137



i was just about to ask same question and you have asked..!!  Mr.32 Oct 17 '11 at 656



Have you read the welcome page on www.mingw.org? Does it answer any questions for you, or raise new, more specific ones? You may also want to read some introductory information on how compilerscompiled languages work.  eriktous Oct 17 '11 at 1155

4 Answers

up vote 4 down vote accepted

MinGW is a complete GCC toolchain including half a dozen frontends, such as C, C, Ada, Go, and whatnot for the Windows 32 there is now MinGWw64 too platform which tries not to be Cygwin. Rather it tries to be minimal hence the name.

This means, other than Cygwin, MinGW does not attempt to offer a complete POSIX layer on top of Windows, but on the other hand it does not require you to link with a special compatibility library.

It therefore also does not have any GPLlicense implications for the programs you write notable exception profiling libraries, but you will not normally distribute those so that does not matter.

MinGW comes with a roughly 99 complete Windows API binding excluding ATL and such. You may occasionally find some exotic constant undefined, but for what 99 of the people use 99 of the time, it just works perfectly well.

You can also use the bigger part of what's in POSIX, as long as it is implemented in some form under Windows. The one major POSIX thing that does not work with MinGW is fork, simply because there is no such thing under Windows Cygwin goes through a lot of pain to implement it.

There are a few other minor things, but all in all, most things kind of work anyway.

So, in a very very simplified sentence MinGW is a nofrills compiler thingie that lets you write binary executables for Windows, not only in C and C, but also other languages.

