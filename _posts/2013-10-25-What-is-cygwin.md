---
layout: post
title: What-is-cygwin
categories:
- tweets
---
*taken from [http://t.co/50IaMcNCB4](http://t.co/50IaMcNCB4)*
>Geek to Live  Introduction to Cygwin, part I
>
>S
>
>by Gina Trapani
>
>Introduction to who? If thats what you thought when you saw the title of this article, then its written for you.  1 
>
>Heres the deal, Windows users  2  the command line is your friend. But the Windows command line? Its a really bad friend. You know, the kind that would ditch you in a minute if he got an offer to hang out with someone cooler, the kind who regifted that Chia pet from Cousin Jeb for your birthday, the kind who sticks you with the bill every time. With friends like that, who needs enemies? If you want to overclock your computing experience at a command prompt on your Windows PC, you need Cygwin .
>
>Cygwin is a Windows command line on steroids which runs tons of wellknown, ageold, useful
>
>Linux
>
>Unix commands. But Cygwin, like much open source software, seems scary, inexplicable and nearly unusable until youve had some sort of AhHA! moment after hours of blearyeyed digging through pages of cryptic documentation. Let me save you the work.
>
>Today well step through Cygwin installation and execute a few basic commands to usher you along to the Ah. Next weeks part two will get into some more advanced Cygwinnery and hopefully get you to that HA!
>
>Ready? Lets get started.
>
>Installation
>
>First download Cygwins setup.exe, using the Install or update now! link on the front page of Cygwin.com . The important thing to understand about Cygwin is that there are tons of optional programs packages that you can install  or choose not to install. Setup.exe does double duty it gets the Cygwin prompt installed, and can add packages on after the fact.
>
>For now were just going to get Cygwin going and go back later to add packages as needed. Launch setup.exe to start up the installation wizard, and choose Install from Internet. Hit Next. Then choose your installation directory youre ok to leave it the default ccygwin and other settings also fine at the default. Next choose a temporary directory where Cygwin will store the packages it downloads. I always delete these after Im done, so any temp directory will work. Choose to download via a Direct Connection, then youll be presented with a list of Cygwin mirrors. Keep the default or randomly choose another and hit Next.
>
>Sometimes the mirror that you choose will be really slow. You should flip to the Select packages screen pretty quickly. If not, go back and choose another mirror thats more available.
>
>Now youre at the Select Packages screen, which is the most confounding part of the installation for newbies. Why? Well, just look at the screenshot click to enlarge
>
>Yeah, I know. How about a package called WTF? What youre looking at here is a list of Unix programs most of which look like alien hieroglyphs to Windows folks all grouped together under certain categories. If you expand the Base category by clicking on the plus sign, for instance, youll get a list that contains such mystery meat items as bash, gawk, grep and man. Dont let this list scare you off. If youre curious, you can toggle the View button to see the full list sans categories. I dont recommend doing this your first time. It just might make you question every computer skill you thought you had.
>
>Cygwin virgins, just accept the default packages and hit Next, where youll face the download progress bar. Finally! Something familiar. Seems like a whole lot of steps just to get software installed, eh? When things are all done youll get the option to create the trusty Cygwin icon on the Desktop or on the Start menu.
>
>Basic Commands
>
>Now youre ready to rock the command line like the Unix badass youre destined to be. Doubleclick on that new Cygwin icon to get yourself to a shell prompt, which will look like this click to enlarge
>
>The first few lines Copying skeleton files..., etc will only appear your first time. From here on in, when you launch Cygwin youll get the standard green yourusernameyourcomputername  greeting.
>
>The dollar sign is the Cygwin prompt where you can unleash all sorts of command line power. Were going to start with some very basic commands to get you going. These will feel and sound strange at first, but once you get used to them, theyll be second nature.
>
>First, we want to see where in the filesystem we are. When Cygwin launches, you start in your home directory, but wheres that? Well use the Unix pwd print working directory command to see
>
>penelopescully   pwd homepenelope
>
>Great, but where is this home directory? Its the Cygwin base directory which you set during installation  ccygwin by default. So in my case, Im in the ccygwinhomepenelope directory. Lets make sure. To create an empty file in Unix, use the touch command
>
>penelopescully   touch honeyimhome.txt
>
>In Windows Expolorer, if I browse to ccygwinhomepenelope, I see a file created there called honeyimhome.txt. Ok, good. But what if I have to switch to another disk drive, like D or H? Cygwins a Unix emulator, see, and Unix doesnt know Microsofts drive letter, colon, slash notation. So to change to cd the Ddata directory in Cygwin, youd do
>
>penelopescully   cd cygdriveddata  penelopescully cygdriveddata 
>
>That cygdrived represents the D drive in Cygwin. Update Reader Bojan points out you can just type cd d to switch to the d drive! I stand corrected. Thanks, Bojan!
>
>Notice above that the path of the current directory is listed next to the usercomputer notation. It was listed there before as well, with the tilde , which in Unix, represents your home directory. So, to change directory cd back to your home directory from anywhere in the file tree, youd type
>
>penelopescully cygdriveddata  cd   penelopescully   pwd homepenelope
>
>If youd like to see a listing ls of all the files in your home directory, just type ls
>
>penelopescully cygdriveddata  ls honeyimhome.txt
>
>Still with me? Good.
>
>Now, Cygwin enables you to do all sorts of neat text manipulation, search, and networking fun, but Im going to get into that in part two. For now I want to tackle the most frequent Cygwin question thats appeared in the Lifehacker inbox
>
>How the heck do I get this todo.txt thing to work in Cygwin?
>
>Right click on this todo script .zip file and save it to the ccygwinhomeyrname folder where yrname is your username.
>
>Now, in Windows Explorer, browse to ccygwinhomeyrname and unzip the todo.zip files. Using a text editor like Notepad, open the .todo file. Edit the 4th line to read TODODIRccygwinhomeusername but replace username with your, you guessed it, username.
>
>Finally, make the todo script executable by changing its mode chmod. At the Cygwin command line in your home directory, type
>
>penelopescully   chmod 755 todo.sh
>
>Youre good to go todo.txting now. Type .todo.sh and get the todo usage message, as shown truncated for space reasons. Keep in mind that dot slash . before the todo script tells Cygwin, Hey, run this here executable script.
>
>penelopescully   .todo   Usage .todo.sh ACTION OPTION...    Actions     add THING I NEED TO DO pproject context
>
>To start adding to your todo list, type
>
>penelopescully   .todo.sh add learn more about cygwin TODO learn more about cygwin added on line 1.  penelopescully   .todo.sh list 1 learn more about cygwin  TODO 1 tasks in ccygwinhomepenelopetodo.txt.  penelopescully  
>
>Heres more on using the todo.sh script.
>
>Next week well cover appending text to files, greping to your hearts content, wgetting it on, daisychaining commands and other Cygwin shenanigans. Hit me up with questions  or share your Unixy Cygwin tricks  in the comments or in an email to tips at lifehacker.com.
>
>1 Sorry current Cygwin users, this articlell bore you to tears. But well enlist your expertise anyway what commands do you use most in Cygwin? Let me know in the comments and Ill write it up in part two.  back to top 
>
>2 Mac users have access to all these commands out of the box, those shiny bastards.  back to top 
>
>Gina Trapani , the editor of Lifehacker, is forever indebted to the Cygwin developers. Her semiweekly feature, Geek to Live , appears every Wednesday and Friday on Lifehacker. Subscribe to the Geek to Live feed to get new installments in your newsreader.
>
>