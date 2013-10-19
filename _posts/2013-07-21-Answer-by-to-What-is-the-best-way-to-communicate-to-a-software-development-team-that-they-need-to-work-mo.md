---
layout: post
title: Answer-by-to-What-is-the-best-way-to-communicate-to-a-software-development-team-that-they-need-to-work-mo
categories:
- tweets
---
*taken from [http://t.co/wh1S0InJ8Q](http://t.co/wh1S0InJ8Q)*
>Quora
>
>Software EngineeringWhat is the best way to communicate to a software development team that they need to work more hours to meet a launch date?
>
>My team has a launch date two months out that we need to hit. Over the past year Ive been comfortable with them working 40 hours per week, but momentum is slipping with vacations, early weekends, etc. I need to communicate that they need to step up their effort and work more hours per week until we launch.
>
>My question is specifically about the best way to communicate this request.
>
>Edmond Lau , Former Quora EngineerFormer Quora Engineer
>
>525 votes by
>
>Jonathan Osacky , more Loading...
>
> 
>
>Before telling your team to work more hours, make sure that you have a realistic plan for actually hitting the launch date. If launching on time is just wishful thinking, your best strategy in the long run is probably either to redefine the launch to what your team can deliver by that date based on the current pace or to reset the deadline to something more realistic.
>
>Dealing with a slipping schedule is tough but unfortunately common in software engineering. Ive been involved in two major, multimonth projects so far where an ambitious and wellintentioned engineering manager pushed the team to work extra hours to sprint toward the end of a project. In each case, the team consisted of a group of talented and dedicated people trying to hit an aggressive deadline on a project that we thought would break the business if we slipped. We went from working 60 hours per week to roughly 70 hours per week. And in each case, after several months of sprinting, the project still wasnt finished. It turned out that rather than sprinting at the homestretch of a marathon, we had started sprinting somewhere near the middle.
>
>The experiences burned out a few members of the team, some of whom subsequently left, and it took a while for everyone else to recover. Its not clear that in either situation, working more hours actually led to any more progress, and the decisions to work overtime, while seemingly reasonable at the time, hurt both teams in the long run. The projects taught a hard lesson just because you really want a project to be completed by a certain date doesnt make it any more realistic that it will. Dont confuse wishful thinking with realistic optimism.
>
>Why overtime doesnt work
>
>What youre thinking is probably something along these lines the team is running behind the estimated schedule by 25, so you need to get the team to put in 25 more hours and work 50 hours per week for the next two months in order to hit the deadline. There are a number of reasons why this logic doesnt usually work out in practice and why working more hours wont necessarily mean hitting the launch date
>
>Hourly productivity decreases with additional hours worked. If your team has already been accustomed to a lifestyle of working 40hour work weeks for an entire year, its likely that the marginal productivity of the extra hours will be lower than average, and possibly even be negative. Fatigue and reduced sleep ends up impairing cognitive function and lowering the quality of work.
>
>Studies from 150 years of research on how long hours decrease productivity are well summarized by Sara Robinsons  Bring back the 40hour work week  and Evan Robinsons  Why crunch mode doesnt work . Employers in the 1890s achieved higher total output per worker when they experimented with 8hour work days. 1 Sidney Chapman showed in 1909 that productivity from overtime declines rapidly workers started making mistakes that they wouldnt have made if they had been rested, and their output came at the expense of the output of subsequent days. 2 Henry Ford adopted a 40hour work week in 1922 because years of experiments showed him that it increased total worker output. 3 4
>
>Tom Walker writes somewhat lamentably in the The Prosperity Covenant
>
>That output does not rise or fall in direct proportion to the number of hours worked is a lesson that seemingly has to be relearned each generation. 1
>
>The decrease in marginal productivity means that you wont get the extra 25 worth of output that you expected, even if total weekly output does increase. But a 1980 study entitled Scheduled Overtime Effect on Construction Projects even challenges the premise that weekly output would increase at all
>
>Where a work schedule of 60 or more hours per week is continued longer than about two months, the cumulative effect of decreased productivity will cause a delay in the completion date beyond that which could have been realized with the same crew size on a 40hour week. 5
>
>This research might not have been in software engineering, but thats not a reason for us to relearn over a century worth of lessons.
>
>Its likely that youre more behind schedule than what you actually think. Producing accurate project estimates is one of the hardest tasks in engineering. 6 The fact that the schedule has slipped means that the work in previous months was underestimated. So either only the past work was underestimated or, more likely, the entire project was underestimated, including the remaining two months.
>
>What compounds this effect even further is that we tend to be much better at estimating the beginnings of projects, where work focuses on concrete development tasks we understand, than the ends of projects, where teams often underestimate how long integration testing takes and where each unexpected issue can throw schedules off by weeks or more.
>
>Frederick Brooks captures this effect in The Mythical ManMonth, where he writes
>
>Failure to allow enough time for system test, in particular, is particularly disastrous. Since the delay comes at the end of the schedule, no one is aware of schedule trouble until almost the delivery date. 7
>
>Additional hours can burn out team members. The extra hours come from somewhere  maybe its time that would otherwise have been spent with friends or spouses, exercising, resting, sleeping, or something else. That recovery time is being traded for stressful hours, and theres a risk of burning out team members thats hard to quantify.
>
>In Peopleware, Tom DeMarco and Timothy Lister document a phenomenon they call undertime, where overtime is almost always followed by an equal period of compensatory undertime while the workers catch up with their lives. 8 They further add
>
>It has been our experience that the positive potential of working extra hours is far exaggerated, and that its negative impact is never considered. That negative impact can be substantial error, burnout, accelerated turnover, and compensatory undertime. 9
>
>Working extra hours can hurt team dynamics. It might be the case that not everyone on the team has the flexibility to pitch in the extra hours. Perhaps one team member has children at home that he has to take of, has to commute a long distance and cant work as many hours, or already has a 2week trip planned in the upcoming months. Whereas once there might have been a fair situation where the team jelled together and where everyone carried his own weight by working the expected 40 hours, theres now a situation where those who work more hours have to carry the weight of those who cant or dont. The result can be bitterness or resentment between members of a once happy team.
>
>Additional overhead can be required to manage the rush toward the deadline. Extra standups and meetings to manage the extra work tend to be fairly typical, as youd want the team to be communicating to make sure everyones working on the right things. Unfortunately, this extra communication overhead is also time thats typically not included in most estimates.
>
>The sprint toward the deadline incentivizes technical debt. Its almost unavoidable that when you ask a team to work overtime to hit a deadline, theyll take shortcuts and cut corners to hit milestones. Maybe theyll be responsible enough to make a note to revisit the hacks after project is over, but theyll have to prioritize it against the next critical project to tackle. After the project finishes, the team is likely left with a pile of technical debt that they have to pay off.
>
>These costs arent theoretical. Each point came true in both of my projects, and its unfortunate that this narrative is common in software projects.
>
>But this wont happen to me
>
>Despite all of these longterm costs, I also recognize the difficulty of changing course and saying no to the launch date. Perhaps everyone in the organization has been expecting the launch for a while. Perhaps the project is so critical that some believe the business will fail if it gets delayed. Perhaps you fear what would happen if the team missed the deadline. Or perhaps you think that your team and situation might be different.
>
>Whatever the reason, if you still intend on asking the team to work more hours, Id recommend that you focus your communication on these elements
>
>Understand and communicate the primary causes for why the timeline has slipped so far. Is momentum really slowing down because people are slacking off, or have parts of the project turned out to be more complex and timeconsuming than expected? If you dont understand the causes, then you cant say with confidence that those same problems wont still persist in the upcoming two months.
>
>Explain to the team a realistic project plan and timeline for how and why working more hours will actually mean hitting the launch date. Merely telling the team that theyre behind and need to work harder is insufficient. If you cant actually come up with a detailed and realistic plan to hit the target, then thats a red flag that youre more behind than you actually think and that working harder isnt a solution.
>
>Secure buyin from everyone on the team on your new timeline. If key people on the team dont believe that parts of your timeline are realistic, then you need to consider that you might be conflating what you want to get done by a certain date with what is realistic to get done by that date. If you dont have buyin from everyone, then only some people will be committing the extra hours, and even aside from the unfair team dynamics, you probably wont hit the deadline anyways.
>
>Focus on the overarching mission of the project, team, or organization, and why its critical to that mission to meet the launch date. If you cant rally everyone together, then thats another red flag that everyone might not be as motivated to work those extra hours as you are.
>
>If, in the course of those two months, you find yourself slipping even further from the revised timeline, be ready to abandon the sprint. Accept that you might have sprinted in the middle of a marathon and that the finish line is farther away than you thought. Its unlikely that asking the team to work even harder will fix things. Cut your losses short, and spend your efforts coming up with a contingency plan for what to do next.
>
>While it might be bad to miss the deadline, itll be worse to burn out the team, still miss the deadline, and not have a plan when the deadline rolls around. Dealing with a missed deadline wont get any easier through delay.
>
>Enjoyed this? Read more on my blog at theeffectiveengineer.com .
>
>