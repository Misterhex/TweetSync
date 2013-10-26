---
layout: post
title: php programming
categories:
- tweets
---
*taken from [http://t.co/8UTWe9JhQh](http://t.co/8UTWe9JhQh)*
PHP Programming

Note

PHP is an open source serverside scripting language, which can be embedded inside HTML as a clever means of providing dynamic Web pages. C and Perl developers will find it particularly intuitive to learn.

By Paul Oldham

Technical Consultant

PHP, the PHP Hypertext Processor, is an open source serverside scripting language for Web servers, which provides a real alternative to ASP, ColdFusion, ModPerl or JSP if your aim is to provide dynamic Web pages. Dynamic Web pages are pages which interact with the user, so that each user visiting the page sees customized information  which may vary each time and which may be based on a form they've just filled in, or on information extracted from a database or some other external source. Typical applications include ecommerce, online newspapers, visitors' books, ticketing systems, project management, and other groupware projects. The traditional way to produce this type of dynamic page is via CGI scripts, but these are separate programs which must be executed as a new process for each page hit, so they scale badly and rapidly become memory and processor hogs as server load increases.

PHP solves this problem by becoming a part of the Web server, essentially extending the functionality of the server itself, so that the server can do the processing without having to spawn extra processes. It's not alone in doing this, but unlike most other scripting languages for Web page development PHP also offers excellent connectivity to most of the databases in use today. Perhaps the greatest advantage of PHP, when compared to other scripting languages such as ASP or ColdFusion, is that it is open source and crossplatform. PHP's natural home is on Linux servers running Apache server software, but it runs equally well on any other Unix or Windows platform, and can be used with other Web servers.

PHP started life as a Perl program written by Rasmus Lerdorf to track visitors to his online rsum. It was then rewritten in Cand was extended to include support for database access. From these simple beginnings the open source community has expanded and developed PHP into a powerful serverside scripting language.

Which Version?

An earlier version of PHP that was released publicly was called PHPFI 2.0, and you may still find this on some ISPs' servers and Linux distributions, but it wasn't until PHP3 that the language really came into its own. PHP3 has been around since June 1998 and is still the most widely used release. However, we are currently in a transition period, as PHP4 came out of beta in May this year. PHP4 uses a new engine called Zend and offers greatly improved performance and increased functionality, so we can expect developers and ISPs to start migrating to that release soon. Code written in PHP3 is compatible with the PHP4 engine with a few minor exceptions, and in this article we'll consider both releases, highlighting any differences as we go.

In July 2000 Netcraft's ongoing survey of Web servers reported that 3,121,918 domains at 598,213 IP addresses had PHP available on their Web server. Of course, such wide availability doesn't mean it has actually been used on all those servers, but organizations such as Mitsubishi, RedHat, livebid.amazon.com, Der Spiegel, MP3Lycos, Ericsson, Sprint Canada, xoom.com and NASA are all actively using PHP today.

Writing PHP

What sets PHP apart from its origins in Perl is the ability to embed PHP code inside HTML, allowing you to mix HTML and PHP in one source file rather than having to crank out the HTML from within Perl. For example, a simple PHP script to show today's date is shown in Figure 1. If you're familiar with HTML then the top and bottom of this code will look very familiar  it's just standard HTML. The PHP code is embedded within the HTML by bracketing it with .

The code consists of one line, a call to the PHP function date, which returns a date in the format we've specified as a string, which is then output as part of the HTML using the echo function. This ability to embed PHP inside HTML means that you can continue to write your Web pages as you do now, and then embed PHP into them to provide the dynamic elements.

This is perhaps a good point at which to highlight what is meant by a serverside language. The PHP code is executed on the server, not the browser. The source of the page the browser receives back from the server is shown in Figure 2. You can see that the PHP has been processed by the server, so no special software is needed on the client to view pages with PHP elements  the intelligence lies at the server end. This means you can use PHP with any browser  even simple, textonly ones like Lynx and w3m, or browsers in PDAs or settop boxes. So long as the browser understands HTML it can display pages written in PHP.

PHP Syntax

In view of where it started, it's not surprising that PHP shares syntactical ideas with Perl and C, and if you've programmed in either of these or you've done any UNIX shell programming, then PHP should be easy to pick up. PHP uses loosely typed variables which don't need to be declared before first use, and evaluates them according to context, so you can add a numeric string to a numeric to give a numeric, and then manipulate the result as a string. The PHP online manual gives a nice example of how a variable's type can change due to context. This is shown in Figure 3.

Figure 1  A simple PHP script to show today's date.

Today is

echo date

F dS, Y ?

One of the joys of PHP is that some variables are already set for you in any PHP script. For example, the variable HTTPUSERAGENT will contain a string identifying the browser which requested the page. So, for example, if you're using Netscape 4.7 under NT4 to request the page, HTTPUSERAGENT will contain the string Mozilla4.7 en WinNT I. So if you need to generate HTML which exploits browserspecific features it's easy to do. Similarly, any cookies you have set will automatically appear as variables in your script without you having to write any code to extract them. As well as simple variables PHP also lets you create arrays which act both like hash tables associative arrays and indexed arrays vectors, and these arrays can be multidimensional.

PHP has a full range of comparative, logical and bitwise operators, auto increment and decrement, and assignment operators. It has all the control structures you might expect from a procedural language, including ifelse, switchcase, for, while test before and do test after. You can write your own functions or use the extensive range of functions provided as standard. Arguments can be parsed by value or reference, and functions can return a value  or multiple values if you use an array as the return variable. Variables are local to a function unless declared global.

PHP also supports include files, both static and dynamic, allowing common code such as custom function libraries and HTML fragments to be embedded in your code. This is all very good news from the developer's viewpoint, allowing code reuse wherever possible. It also means you can separate the PHP code from the HTML if you employ different people for Web design and Web programming. PHP3 includes support for object oriented programming, but there is a problem with polymorphism once a parent's function is overridden by a child it can no longer be used. This is resolved in PHP4, which provides expanded functionality and new features for object oriented programming, and for building classes and objects.

Forms

Figure 2  The source of the page the browser receives back from the server.



One of the joys of PHP is that some variables are already set for you in any PHP script. For example, the variable HTTPUSERAGENT will contain a string identifying the browser which requested the page. So, for example, if you're using Netscape 4.7 under NT4 to request the page, HTTPUSERAGENT will contain the string Mozilla4.7 en WinNT I. So if you need to generate HTML which exploits browserspecific features it's easy to do. Similarly, any cookies you have set will automatically appear as variables in your script without you having to write any code to extract them. As well as simple variables PHP also lets you create arrays which act both like hash tables associative arrays and indexed arrays vectors, and these arrays can be multidimensional.

PHP has a full range of comparative, logical and bitwise operators, auto increment and decrement, and assignment operators. It has all the control structures you might expect from a procedural language, including ifelse, switchcase, for, while test before and do test after. You can write your own functions or use the extensive range of functions provided as standard. Arguments can be parsed by value or reference, and functions can return a value  or multiple values if you use an array as the return variable. Variables are local to a function unless declared global.

PHP also supports include files, both static and dynamic, allowing common code such as custom function libraries and HTML fragments to be embedded in your code. This is all very good news from the developer's viewpoint, allowing code reuse wherever possible. It also means you can separate the PHP code from the HTML if you employ different people for Web design and Web programming. PHP3 includes support for object oriented programming, but there is a problem with polymorphism once a parent's function is overridden by a child it can no longer be used. This is resolved in PHP4, which provides expanded functionality and new features for object oriented programming, and for building classes and objects.

Forms

Figure 2  The source of the page the browser receives back from the server.

Today is August 30th 2000

One of the most powerful features of PHP is the ease with which you can handle forms. If you make your PHP script the action of the form then all the fields in the form appear as variables in your script automatically, ready for you to use. To take a simple example, suppose you have a page containing a form such as the one at the top of Figure 4. When the user clicks on the submit button the page action.php3 will be invoked to process that form. In action.php3 you might have the line of code at the bottom of Figure 4. As you can see, the input fields age and name have automatically become variables of the script action.php3, with names name and age ready for you to do what you like with them in this case echoing them as part of the line of HTML.

Figure 3  A variables type can change depending on context.

foo  0  foo is string ASCII 48

foo  foo is now the string 1 ASCII 49

foo  1 foo is now an integer 2

foo  foo  1.3 foo is now a double 3.3

foo  5 10 Little Piggies  foo is an integer 15

Functions

The real strength of PHP lies in the extensive range of builtin functions. Those available include functions to

 Access a wide variety of databases see below.

 Interrogate the Web server on which the code is running.

 Manipulate arrays.

 Access a full range of mathematical functions.

 Perform arbitrary precision mathematics log, trig etc.

 Get the date and time and display them in a variety of formats.

 Browse directory trees.

 Execute external programs on the server and receive the results back.

 Perform a wide variety of operations on the server file system.

 Set cookies.

 Send mail.

 Perform network functions such as Get the Internet host name corresponding to a given IP address.

 Use Perlcompatible or POSIXextended regular expressions.

 Use System V semaphores and shared memory o Manipulate strings.

 Test a variable's current type.

 Use WDDX to easily exchange data with other applications over the Web.

 Gzip and gunzip files.

Creating powerful Web applications inevitably means storing and manipulating a lot of data, so the ability to access databases is vital. PHP includes support, via function calls, for a wide variety of popular databases, including Adabase D, dBase, UNIX dbm, filePro, Interbase, Informix, Microsoft SQL Server, mSQL, MySQL, Oracle, Sybase, PostgreSQL, and Solid. In addition, any database which supports ODBC, such as Microsoft Access, can be used. If you're trying to create an application which isn't databasespecific then there are a number of open source abstraction layers available, including Metabase and phpDB, which will let you do this painlessly.

Optional Extras

In addition to the standard functions and the database access functions, PHP has a number of additional functions which only work if you have the appropriate library loaded on your server.

Figure 4  Forms in PHP  see main text.

Your name

Hello echo

name?. You are

The gd library allows you to create images on the fly. The format of images you are able to manipulate depends on the version of gd you install, and any other libraries gd might need to access those image formats. Older versions of gd support GIF format images, newer ones PNG. It is also possible to generate images in JPEG format. This ability to generate images means you can create entities such as labeled buttons from within PHP, rather than having to rely on a predefined set of images. The Clib PDF library will let you create PDF files from within PHP, as will Thomas Merz's PDF library. The former is faster and creates smaller documents, but although it is free for private, nonprofit use, a commercial license is required for forprofit applications.

Obtaining PHP

The home of PHP on theWeb is www.php.net, and Zend Technologies have their own site at www.zend.com. These two sites between them contain links to an ever increasing list of other sites devoted to PHP. PHP is open source, so you can simply download PHPfromany one of themanymirror sites. PHP also comes as a package in some Linux distributions. If the target audience for your PHPgenerated pages is the Web rather than your company intranet, then a growing number of ISPs can provide youwith Web hosting on servers which support PHP, and an SQL database backend, usually MySQL.

James Clark's expat toolkit lets you parse XML documents, create XML parsers and then define handlers for different XML events. Other libraries allow you to encrypt and decrypt data in a wide variety of block algorithms, use hash algorithms such as MD5, SHA1 and GOST, access mail on an IMAP mail server, do spell checks on words in any string, access LDAP servers, and gain access to SNMP available as standard under Windows NT.

New Features In PHP4

PHP4 is significantly faster than PHP3. This improvement in performance is particularly noticeable with larger and more complex scripts, and is the result of the PHP engine having been totally rewritten by Andi Gutmans and Zeev Suraski. The new Zend engine uses a much more efficient compilethenexecute method, instead of the executewhileparsing model used by PHP3. The authors claim the resulting engine is up to fifty times faster than the PHP3 engine.

New features in PHP4 include

 Extended API module.

 Generalized build process under Unix.

 Generic Web server interface that also supports multithreaded Web servers.

 Improved syntax highlighter.

 A more powerful configuration system.

 Reference counting.

 Ftp support.

PHP4 also provides COMDCOM support on Windows only, allowing you to seamlessly access COM objects and instantiate them. PHP4 also has a number of additional optional functions which, with the right libraries, extend PHP to allow you to process credit cards and other financial transactions using VeriSign Payment Services, and to handle CyberCash payments.

Future Developments

Further Reading

PHP comes with a well written online manual, and if youre a experienced programmer whos written in Perl or C before you may find that sufficient for your needs. If you want a more gentle introduction then a good primer is PHP3 Programming Browser Based Applications by David Medinets, published by McGraw Hill, ISBN 0071353429.

The developers of the Zend engine have now set up their own company, Zend Technologies, as a vehicle for producing more PHPrelated products. They have two products in the pipeline, both due to be released shortly

The Zend Cache saves any PHP script it has compiled in a cache, so that subsequent hits on the same script don't need compiling before running. This reduces server disk accesses and overall execution time.

The Zend Compiler allows you to compile your PHP scripts before distributing them. By saving the code in a closed Zend Intermediate Code format, the compiler allows you to protect source code from copyright infringement.

Like what you read?

If you think this was great, you should see the others listed on Gizmo Richards website. The articles are yours for free when you take up a free subscription to Gizmo's Support Alert newsletter.

Not only do you get the free reports, you also get lots more freebies in every twice monthly issue plus Gizmo's pick of the latest shareware and hot tech web sites. Click here to see a sample issue.

Subscribing is easy  Just enter your email address and click the button. After subscribing, you'll receive an email with details how to access the free utilities report. You can unsubscribe at any time.

We unconditionally respect your privacy. Your email address will be kept totally confidential and given to noone.

Now that you've gotten free knowhow on this topic, try to grow your skills even faster with online video training . Then finally, put these skills to the test and make a name for yourself by offering these skills to others by becoming a freelancer . There are literally 2000 new projects that are posted every single freakin' day, no lie!

