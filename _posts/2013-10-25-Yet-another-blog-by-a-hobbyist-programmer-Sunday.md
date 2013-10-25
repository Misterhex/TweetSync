---
layout: post
title: yet another blog by a hobbyist programmer sunday
categories:
- tweets
---
*taken from [http://t.co/OYwWPLomDy](http://t.co/OYwWPLomDy)*
Yet another blog by a hobbyist  programmer.

Sunday, April 1, 2012

Golang The Way To Go

Last week the Go programming language reached version 1.0. I toyed with Go for the first time over two years ago. Initially I didn't stick with it. This week I had a second look at Go, and this time around I'm pretty convinced they are on to something. Go is a fascinating language and worth checking out.

For the longest time, I have been searching for a programming  language that fits like a glove. It had to be as easy as Python and have  the low level abilities and performance of C. I created multiple implementations of libobjects to mimic Python's and ObjectiveC's abilities in C and C, but since you can't change the language itself by adding a library, it was never as great as I wanted it to be. In the end I realized that to get what I wanted to have, I would have to create a new language rather than trying to bend an existing one. The creators of Go came to the same conclusion and thus Go was born.

C is an amazingly powerful and fine language with really only a few problems like tedious memory management and buffer overflow problems which create massive security problems that originate from the fact that strings are character arrays. C99 brought good oldfashioned C up to date by adding wide character strings, but the original problems stayed in place.

C is a low level language that doesn't do a lot for you, the programmer. C has no standard types for stacks, linked lists, binary trees, hashed maps or whatsoever, nor does the standard C library include them. You can implement them yourself which is a nice academic exercise and also a lot of work or you can use an external library like the gnulib, Glib, GDSL, to name a few.

C is a pointer centric language which a lot of people find  problematic to work with. Pointer mistakes are often the cause behind hard to track down bugs like random program crashes. Experienced programmers see pointers as a powerful  asset though. And power, C has. But you do not get it for free a typical C program is a thousand lines of code, denoting that you will need to put in a lot of time and effort to get what you want.

Python is byte code interpreted language. Python executes slowly but it's so easy to write in that I love it anyway. It has garbage collection, large number arithmetic, unicode strings, safe arrays, even safe system calls, and you can write objectoriented code if you want to, but this is not forced upon you. Python has introspection and reflection and it can evaluate dynamically loaded Python code in the same context as the code that is already running. Confusing, but powerful and quite advanced.

Python is perfectly suited for small to intermediate size programming tasks. Over time, I started using it for larger projects and found that it's less well suited for this. One of the reasons is that Python is an interpreted language. The interpreter won't report an error like a simple typo in a variable of function name if it doesn't go down that code path. I've seen Python codes suddenly crash with a stack trace after being in production for months already only because of a typo in the code. Another thing is, if you make a typo in your variable name when assigning to it, the interpreter will see it as a new variable, and your program will misbehave. I wish there was something like a strict mode in which these errors would be caught at compile time. Thirdly, the scope of variables in Python is annoying. Local variables just exist, but global variables must be named explicitly with the global keyword in every function where you use them. It should have been the other way around if you ask me. Or Python should have recognized all caps variables as being global. Things become really confusing when using multiple modules containing globals. The best thing you can do is make a single, separate module containing all the global vars in your project, and import that module in every other module.

Exceptions in Python look beautiful, but at some point it gets old having to catch common exceptions all the time. A Python program typically has a tryexcept block on every page of code. It isn't so bad, but it does interfere with the program flow, influencing readability. Moreover, exceptions make code execution slower because the tryexcept block has to be set up and needs to be handled in either case whether the action raised an exception, or none at all. A language like C, that does not have exceptions, simply uses conditional branching based on an error value, which performs much better.

Python doesn't play nice when you do want to allocate memory, use byte  arrays, or need pointers. The language isn't meant for doing low level  stuff.

Can we have the best of both worlds? All the good from C and Python, while discarding all the bad from C and fixing the minor issues of Python? For a long time, the answer was no. I started to believe that only an interpreter can do garbage collection because an interpreter can easily see whether a variable is being referenced or not.

Well, now there is Go. At first sight I mistakenly took it for just another Python clone, but now I see that Go is probably exactly the crossover language that I was looking for. The goodness of C and Python, molded into one.

Variables can be created on the fly with a special assignment operator. It has automatic garbage collection. It compiles to binary code, and hence it executes fast. The compiler catches syntax errors during the compilation step. The language has strict typing and has no implicit type conversions in order to keep you from making stupid mistakes. There is as little syntactic sugar as possible, e.g. there are no useless semicolons, no do while loop, no header files, no extern declarations. The runtime guarantees that arrays are safely bounded. Strings are a proper string type and not byte arrays. Unicode characters are called runes. There is a standard map type. Pointers may be and should be used whenever you need them. You can not use pointers to loop over strings, because strings are not byte arrays. There is an init function that initializes the package module before main is called. Functions can return multiple values, which is especially nice since you can now return a value and an error condition at the same time. It has a bool type. I've started liking languages that feature a boolean type.

Go goes further than just taking features from other languages. Go includes two special features for parallel programming goroutines and communication channels. In other languages you typically use the pthread library directly or a wrapper class around it. Thread management is a tedious task. In Go, there is no such thing, but you simply launch a concurrent code path by invoking a function with the go keyword. Communication can be done through a channel, which essentially acts like a UNIX pipe a reader blocks on the channel until a writer writes something to it. Combined with a special syntax, channels are super easy to use. Writing multithreaded code has never been easier.

Go is not an objectoriented language like C or Java. However, you can add method functions to structs and you can use embedding of structs to mimic inheritance and even multiple inheritance. Note that this would be rather problematic in C C structs are very 'static'.

Another special feature of Go are interfaces. This is Go's way of adding polymorphism to types. It is called duck typing if it quacks like a duck, it is a duck. The fun is that a particular type can be used in a certain situation if it implements the interface. So like it says in the documentation if a type can do this, it can be used here. I suppose the idea of interfaces is just like protocols in ObjectiveC.

The cool part is that in Go there is no class declaration, so you never have to go back and change your header file. You can just add the functions and the compiler will sort out the rest.

Go does have a few quirks that you'll just have to get used to. Semicolons as a terminator for a statement do exist, but they are invisible. Generally, you don't type them in, and the compiler secretly inserts them automatically. As a consequence, you can not put an opening curly brace on a line by itself, nor can you close off a static array declaration with a dangling curly brace. This is a fixed coding style, and while I didn't do the former, I'm very used to doing the latter.

Arrays are weird in the sense that they are different from arrays in C. In C, an array is basically the pointer to that array. In Go, when you pass an array to a function, it will copy the entire array onto the stack. That's weird. If you just always use the slice syntax there will be no problem though. Also, append is not a method like it is in Python, and to extend an array you have to use the ... syntax.

Being a garbage collected language, it is possible to return the address of a local variable. This is actually a great feature, but may be confusing to C programmers.

Channel syntax isn't all that but it is terse. Why couldn't we simply have methods chan.Read and chan.Write? The answer is probably that Go builtin types do not have methods.

And last but certainly not least, variable declarations are written in an odd, inverted way first the name of the variable, then the type of the variable. I understand why Go's creators think it's better, and I'll certainly get used to it. But after decades of programming in dozens of languages that have it the other way around, this is just screwing with people's minds. It's like putting the steering wheel of a car on the right side, when everyone is used to having it on the left side. Or the other way around, of course !

There is too much to write about Go to put in a single blog post. I hope I've wet your appetite and you now want to learn more. The best way to learn Go is to start doing it. You will find that this language is easy to learn. As always, give it some time to familiarize yourself with the provided standard library and do lots of reading documentation. Especially in the beginning, practice short code snippets. My first few Go programs were simply rewrites of small existing Python scripts.

Two useful links

