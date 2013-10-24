---
layout: post
title: Better-git-with-posh-git
categories:
- tweets
---
*taken from [http://t.co/iiIIv1BWIj](http://t.co/iiIIv1BWIj)*
>Better Git with PowerShell
>
>Print
>
>Im usually not one to resort to puns in my blog titles, but I couldnt resist. Git it? Git it? Sorry.
>
>Ever since we introduced PowerShell into NuGet, Ive become a big fan. I think its great, yet Ive heard from so many other developers that they have no time to try it out. That its on their list and they really want to learn it, but they just dont have the time.
>
>But heres the dirty little secret about PowerShell. This might get me banned from the PowerShell junkie secret meetups complete with secret handshake for leaking it, but here it is anyways. You dont have to learn PowerShell to get started with it and benefit from it!
>
>Seriously. If you use a command line today, and switch to PowerShell instead, pretty much everything you do day to day still works without changing much of your workflow. There might be the occasional hiccup here and there, but not a whole lot. And over time, as you use it more, you can slowly start accreting PowerShell knowledge and start to really enjoy its power. But on your time schedule.
>
>UPDATE Before you do any of this, make sure you have Git for Windows msysgit installed. Read my post about how to get this set up and configured .
>
>Theres a tiny bit of one time setup you do need to remember to do
>
>SetExecutionPolicy RemoteSigned
>
>Note Some folks simply use Unrestricted for that instead of RemoteSigned. I tend to play it safe until shit breaks. So with that bit out of the way, lets talk about the benefits.
>
>PoshGit
>
>If you do any work with Git on Windows, you owe it to yourself to check out PoshGit . In fact, theres also PoshHG for mercurial users and even PoshSvn for those so inclined.
>
>Once you have PoshGit loaded up, your PowerShell window lights up with extra information and features when you are in a directory with a git repository.
>
>Notice that my PowerShell prompt includes the current branch name as well as information about the current status of my index. I have 2 files added to my index ready to be committed.
>
>More importantly though, PoshGit adds tab expansions for Git commands as well as your branches! The following animated GIF shows what happens when I hit the tab key multiple times to cycle through my available branches. That alone is just sublime.
>
>Install PoshGit using PsGet
>
>Youre ready to dive into PoshGit now, right? So how do you get it? Well, you could follow all those pesky directions on the GitHub site . But were software developers. We dont follow no stinkin list of instructions. Its time to AWW TOE MATE!
>
>And this is where a cool utility named PsGet comes along. There are several implementations of PsGet around, but the one I cover here is so dirt simple to use I cried the first time I used it.
>
>To use poshgit, I only needed to run the following two commands
>
>newobject Net.WebClient.DownloadStringhttppsget.netGetPsGet.ps1  iex installmodule poshgit
>
>Heres a screenshot of my PowerShell window running the command. Once you run the commands, youll need to close and reopen the PowerShell console for the changes to take effect.
>
>Thats
>
>Both of these commands are pulled right from the PsGet homepage . Thats it! Took me no effort to do this, but suddenly using Git just got that much smoother for me.
>
>Many thanks to Keith Dahlby for PoshGit and Mike Chaliy for PsGet. Now go git it!
>
>