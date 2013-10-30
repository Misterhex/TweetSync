---
layout: post
title: scaling up vs scaling out hidden costs
categories:
- tweets
---
*taken from [http://t.co/m1D58ttzNv](http://t.co/m1D58ttzNv)*
Scaling Up vs. Scaling Out Hidden Costs

June 23, 2009

In My Scaling Hero , I described the amazing scaling story of plentyoffish.com. It's impressive by any measure, but also particularly relevant to us because we're on the Microsoft stack, too. I was intrigued when Markus posted this recent update 

Last monday we upgraded our core database server after a power outage knocked the site offline. I haven't touched this machine since 2005 so it was a major undertaking to do it last minute. We upgraded from a machine with 64 GB of ram and 8 CPUs to a HP ProLiant DL785 with 512 GB of ram and 32 CPUs ...

The HP ProLiant DL785 G5 starts at 16,999  and that's barebones, with nothing inside. Fully configured, as Markus describes, it's kind of a monster 

7U size a typical server is 2U, and mainstream servers are often 1U

8 CPU sockets

11 expansion slots

6 power supplies

It's unclear if they bought it preconfigured, or added the disks, CPUs, and memory themselves. The most expensive configuration shown on the HP website is 37,398 and that includes only 4 processors, no drives, and a paltry 32 GB memory. When topped out with ultraexpensive 8 GB memory DIMMs, 8 high end Opterons, 10,000 RPM hard drives, and everything else  by my estimates, it probably cost closer to 100,000. That might even be a lowball number, considering that the DL785 submitted to the TPC benchmark website pdf had a system cost of 186,700. And that machine only had 256 GB of RAM. But, to be fair, that total included another major storage array, and a bunch of software.

At any rate, let's assume 100,000 is a reasonable ballpark for the monster server Markus purchased. It is the very definition of scaling up  a seriously big iron single server.

But what if you scaled out, instead  Hadoop or MapReduce style, across lots and lots of inexpensive servers? After some initial configuration bumps, I've been happy with the inexpensive Lenovo ThinkServer RS110 servers we use. They're no match for that DL785  but they aren't exactly chopped liver, either

Lenovo ThinkServer RS110 barebones

21,815

Now which approach makes more sense?

I'm not picking favorites. This is presented as food for thought. There are at least a dozen other factors you'd want to consider depending on the particulars of your situation. Scaling up and scaling out are both viable solutions, depending on what problem you're trying to solve, and what resources financial, software, and otherwise you have at hand.

That said, I think it's fair to conclude that scaling out is only frictionless when you use open source software. Otherwise, you're in a bit of a conundrum scaling up means paying less for licenses and a lot more for hardware, while scaling out means paying less for the hardware, and a whole lot more for licenses.

 I have no idea if these are the right prices for Windows Server 2008 and SQL Server 2008, because reading about the licensing models makes my brain hurt . If anything, it could be substantially more.

Posted by Jeff Atwood

