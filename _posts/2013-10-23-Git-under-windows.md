---
layout: post
title: Git-under-windows
categories:
- tweets
---
*taken from [http://t.co/TwDUjDVuqy](http://t.co/TwDUjDVuqy)*
>Git under windows console mode
>
>Tweet
>
>Im a Windows user. I also have a virtual machine with Ubuntu installed and coding there from time to time. I use Git a lot and in general I prefer console mode over the GUI. Under Unix everything works just great, but Windowss command prompt requires more efforts from our side. However I found some helpful tips, which could make your life easier.
>
>Installation
>
>First of all Ill suggest to download GitHub for Windows . So, if you dont like the console you can always switch to the GUI. GitHub for Windows comes with a Shell.
>
>Its by default set to PowerShell and I prefer to leave it like that. You can also use Git Bash, which looks more like Unixs bash. But under Windows its a little bit weird. PowerShell has cmdlet, which is
>
>A cmdlet is a lightweight command that is used in the Windows PowerShell environment. The Windows PowerShell runtime invokes these cmdlets within  the context of automation scripts that are provided at the command line.  The Windows PowerShell runtime also invokes them programmatically through  Windows PowerShell APIs.
>
>Once the installation finishes you will be able to run Git Shell. Just open the Start Menu and type git.
>
>You should see something like
>
>PowerShell acts as the normal Windows Command Prompt, but provides some other helpful functions. Of course you are able to execute commands like
>
>git init cd ..projects dir
>
>Git command is added to the global path, so it is accessible from everywhere.
>
>Aliases
>
>Im big fen of the DRY principle. Thats why I like aliases. Especially when I work with Git. In general there are two ways to create aliases.
>
>Define the aliases using Git command
>
>Create the aliases in PowerShell, so you have shortcuts not only for Git commands, but for whatever you want
>
>By using Git you are able to add something like
>
>git config alias.ci commit git config alias.st status
>
>However, you entered this in the console and if you close the PowerShell your nicely typed commands will disappear. To make them persistent you will have to edit your .gitconfig and add the shortcuts
>
>alias   st  status   ci  commit   br  branch   co  checkout   df  diff   lg  log p
>
>Under windows your configuration file is usually placed in
>
>CUsersusername
>
>Thats not bad. I mean, Im able to improve my Git workflow by using aliases. Unfortunately the usage of PowerShell could be kinda slow and it will be nice if we can define some other aliases for trivial tasks like changing directories or searching files. Thankfully to cmdlet this is possible. The first thing that you should do is to locatecreate your Microsoft.PowerShellprofile.ps1 file. To find out where run
>
>GetVariable profile  FormatList
>
>The result should be similar to
>
>Even if the directory or the file doesnt exists, create them. Thats the place where your aliases should be set. Here is how my .ps1 file looks like
>
>function goToProjects   setlocation dwork  function s   git status  function ci   git commit am args0  SetAlias work goToProjects
>
>As you can see I define functions. You can attach them to a specific alias name or use them directly. The very good thing is that you can also accept parameters. They are available inside your function as args array. Such kind of aliases also save some typing time, because now when I want to check the status of my current repository I have to type just s, while before it was git st. cmdlet could help in many cases. For example I created a shortway to my working directory.
>
>Actually what is happening while you install GitHub for windows is that it adds a tool called poshgit which is
>
>.. a set of PowerShell scripts which provide GitPowerShell integration.
>
>Really helpful stuff. The prompt which you get shows your current branch and git status. However if you want to change it, you should edit the profile file of poshgit. In your custom profile file you could define a function called prompt and put whatever you want, but poshgit overwrites this function and adds its own stuff. The location of the file on my machine is
>
>CUserskrasimirAppDataLocalGitHub PoshGitad83dd645ea8c4dfbd3b9915408f67ec0b8306d3profile.example.ps1
>
>. Open it and you will see the function. I changed main to
>
>function prompt      realLASTEXITCODE  LASTEXITCODE       Reset color, which can be messed up by EnableGitColors     Host.UI.RawUI.ForegroundColor  GitPromptSettings.DefaultForegroundColor      WriteHostpwd.ProviderPath.split2   nonewline      WriteVcsStatus      globalLASTEXITCODE  realLASTEXITCODE     return   
>
>What I wanted to change is the path shown. I wanted to see only the latest directory.
>
>While I edited the poshgit profile file I looked in the parent directory. There was a folder called PortableGitca477551eeb4aea0e4ae9fcd3358bd96720bb5c8. Thats where the git command comes from. I.e.
>
>CUserskrasimirAppDataLocalGitHub PortableGitca477551eeb4aea0e4ae9fcd3358bd96720bb5c8bin
>
>is added to the global path. Just check how many unixstyle commands you get.
>
>For more information about cmdlet please go to this page. Here is also a great article about PowerShell.
>
>P.S.
>
>