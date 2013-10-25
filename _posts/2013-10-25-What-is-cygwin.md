---
layout: post
title: what is cygwin
categories:
- tweets
---
*taken from [http://t.co/50IaMcNCB4](http://t.co/50IaMcNCB4)*
Geek to Live  Introduction to Cygwin, part I

S

by Gina Trapani

Introduction to who? If that's what you thought when you saw the title of this article, then it's written for you.  1 

Here's the deal, Windows users  2  the command line is your friend. But the Windows command line? It's a really bad friend. You know, the kind that would ditch you in a minute if he got an offer to hang out with someone cooler, the kind who regifted that Chia pet from Cousin Jeb for your birthday, the kind who sticks you with the bill every time. With friends like that, who needs enemies? If you want to overclock your computing experience at a command prompt on your Windows PC, you need Cygwin .

Cygwin is a Windows command line on steroids which runs tons of wellknown, ageold, useful

Linux

Unix commands. But Cygwin, like much open source software, seems scary, inexplicable and nearly unusable until you've had some sort of AhHA! moment after hours of blearyeyed digging through pages of cryptic documentation. Let me save you the work.

Today we'll step through Cygwin installation and execute a few basic commands to usher you along to the Ah. Next week's part two will get into some more advanced Cygwinnery and hopefully get you to that HA!

Ready? Let's get started.

Installation

First download Cygwin's setup.exe, using the Install or update now! link on the front page of Cygwin.com . The important thing to understand about Cygwin is that there are tons of optional programs packages that you can install  or choose not to install. Setup.exe does double duty it gets the Cygwin prompt installed, and can add packages on after the fact.

For now we're just going to get Cygwin going and go back later to add packages as needed. Launch setup.exe to start up the installation wizard, and choose Install from Internet. Hit Next. Then choose your installation directory you're ok to leave it the default ccygwin and other settings also fine at the default. Next choose a temporary directory where Cygwin will store the packages it downloads. I always delete these after I'm done, so any temp directory will work. Choose to download via a Direct Connection, then you'll be presented with a list of Cygwin mirrors. Keep the default or randomly choose another and hit Next.

Sometimes the mirror that you choose will be really slow. You should flip to the Select packages screen pretty quickly. If not, go back and choose another mirror that's more available.

Now you're at the Select Packages screen, which is the most confounding part of the installation for newbies. Why? Well, just look at the screenshot click to enlarge

Yeah, I know. How about a package called WTF? What you're looking at here is a list of Unix programs most of which look like alien hieroglyphs to Windows folks all grouped together under certain categories. If you expand the Base category by clicking on the plus sign, for instance, you'll get a list that contains such mystery meat items as bash, gawk, grep and man. Don't let this list scare you off. If you're curious, you can toggle the View button to see the full list sans categories. I don't recommend doing this your first time. It just might make you question every computer skill you thought you had.

Cygwin virgins, just accept the default packages and hit Next, where you'll face the download progress bar. Finally! Something familiar. Seems like a whole lot of steps just to get software installed, eh? When things are all done you'll get the option to create the trusty Cygwin icon on the Desktop or on the Start menu.

Basic Commands

Now you're ready to rock the command line like the Unix badass you're destined to be. Doubleclick on that new Cygwin icon to get yourself to a shell prompt, which will look like this click to enlarge

The first few lines Copying skeleton files..., etc will only appear your first time. From here on in, when you launch Cygwin you'll get the standard green yourusernameyourcomputername  greeting.

The dollar sign is the Cygwin prompt where you can unleash all sorts of command line power. We're going to start with some very basic commands to get you going. These will feel and sound strange at first, but once you get used to them, they'll be second nature.

First, we want to see where in the filesystem we are. When Cygwin launches, you start in your home directory, but where's that? We'll use the Unix pwd print working directory command to see

penelopescully   pwd homepenelope

Great, but where is this home directory? It's the Cygwin base directory which you set during installation  ccygwin by default. So in my case, I'm in the ccygwinhomepenelope directory. Let's make sure. To create an empty file in Unix, use the touch command

penelopescully   touch honeyimhome.txt

In Windows Expolorer, if I browse to ccygwinhomepenelope, I see a file created there called honeyimhome.txt. Ok, good. But what if I have to switch to another disk drive, like D or H? Cygwin's a Unix emulator, see, and Unix doesn't know Microsoft's drive letter, colon, slash notation. So to change to cd the Ddata directory in Cygwin, you'd do

penelopescully   cd cygdriveddata  penelopescully cygdriveddata 

That cygdrived represents the D drive in Cygwin. Update Reader Bojan points out you can just type cd d to switch to the d drive! I stand corrected. Thanks, Bojan!

Notice above that the path of the current directory is listed next to the usercomputer notation. It was listed there before as well, with the tilde , which in Unix, represents your home directory. So, to change directory cd back to your home directory from anywhere in the file tree, you'd type

penelopescully cygdriveddata  cd   penelopescully   pwd homepenelope

If you'd like to see a listing ls of all the files in your home directory, just type ls

penelopescully cygdriveddata  ls honeyimhome.txt

Still with me? Good.

Now, Cygwin enables you to do all sorts of neat text manipulation, search, and networking fun, but I'm going to get into that in part two. For now I want to tackle the most frequent Cygwin question that's appeared in the Lifehacker inbox

How the heck do I get this todo.txt thing to work in Cygwin?

Right click on this todo script .zip file and save it to the ccygwinhomeyrname folder where yrname is your username.

Now, in Windows Explorer, browse to ccygwinhomeyrname and unzip the todo.zip files. Using a text editor like Notepad, open the .todo file. Edit the 4th line to read TODODIRccygwinhomeusername but replace username with your, you guessed it, username.

Finally, make the todo script executable by changing its mode chmod. At the Cygwin command line in your home directory, type

penelopescully   chmod 755 todo.sh

You're good to go todo.txt'ing now. Type .todo.sh and get the todo usage message, as shown truncated for space reasons. Keep in mind that dot slash . before the todo script tells Cygwin, Hey, run this here executable script.

penelopescully   .todo   Usage .todo.sh ACTION OPTION...    Actions     add THING I NEED TO DO pproject context

To start adding to your todo list, type

penelopescully   .todo.sh add learn more about cygwin TODO 'learn more about cygwin' added on line 1.  penelopescully   .todo.sh list 1 learn more about cygwin  TODO 1 tasks in ccygwinhomepenelopetodo.txt.  penelopescully  

Here's more on using the todo.sh script.

Next week we'll cover appending text to files, grep'ing to your heart's content, wgetting it on, daisychaining commands and other Cygwin shenanigans. Hit me up with questions  or share your Unixy Cygwin tricks  in the comments or in an email to tips at lifehacker.com.

1 Sorry current Cygwin users, this article'll bore you to tears. But we'll enlist your expertise anyway what commands do you use most in Cygwin? Let me know in the comments and I'll write it up in part two.  back to top 

2 Mac users have access to all these commands out of the box, those shiny bastards.  back to top 

Gina Trapani , the editor of Lifehacker, is forever indebted to the Cygwin developers. Her semiweekly feature, Geek to Live , appears every Wednesday and Friday on Lifehacker. Subscribe to the Geek to Live feed to get new installments in your newsreader.

