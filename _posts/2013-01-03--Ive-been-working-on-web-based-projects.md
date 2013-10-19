---
layout: post
title: -Ive-been-working-on-web-based-projects
categories:
- tweets
---
*taken from [http://t.co/bILAvvmn](http://t.co/bILAvvmn)*
>stoimenpopov
>
>Ive been working on web based projects built mainly with PHP and JavaScript, where I mostly use Zend Framework and jQuery.  I am interested in any webpage optimizations techniques  for a faster web! Stoimen is a DZone MVB and is not an employee of DZone and has posted 96 posts at DZone. You can read more from them at their website. View Full User Profile
>
>Algorithm of the Week Bucket Sort
>
>01.02.2013
>
>ActuateOne for OEMs
>
>Introduction
>
>Whats the fastest way to sort the following sequence 9, 3, 0, 5, 4, 1, 2, 6, 8, 7? Well, the question is a bit tricky since the input is somehow predefined. First of all, we have only integers and fortunately they are all different. Thats great and we know that in practice its almost impossible to count on such lucky coincidence. However, here we can sort the sequence very quickly.
>
>First of all, we can pass through all these integers and by using an auxiliary array we can just put them at their corresponding index. We know in advance that that is going to work really well, because they are all different.
>
>There is only one major problem in this solution. Thats because we assume all the integers are different. If not  we can just put all them in one single corresponding index.
>
>That is why we can use bucket sort.
>
>Overview
>
>Bucket sort its the perfect sorting algorithm for the sequence above. We must know in advance that the integers are fairly well distributed over an interval i, j. Then we can divide this interval in N equal subintervals or buckets. Well put each number in its corresponding bucket. Finally for every bucket that contains more than one number well use some linear sorting algorithm.
>
>The thing is that we know that the integers are well distributed, thus we expect that there wont be many buckets with more than one number inside.
>
>That is why the sequence 1, 2, 3, 2, 1, 2, 3, 1 wont be sorted faster than 4, 3, 1, 2, 9, 5, 4, 8.
>
>Pseudo Code
>
>1. Let n be the length of the input list L 2. For each element i from L    2.1. If Bi is not empty       2.1.1. Put Ai into Bi using insertion sort       2.1.2. Else Bi  Ai  3. Concatenate Bi .. n into one sorted list
>
>Complexity
>
>The complexity of bucket sort isnt constant depending on the input. However in the average case the complexity of the algorithm is On  k where n is the length of the input sequence, while k is the number of buckets.
>
>The problem is that its worstcase performance is On2 which makes it as slow as bubble sort.
>
>Application
>
>As the other two linear time sorting algorithms radix sort and counting sort bucket sort depends so much on the input. The main thing we should be aware of is the way the input data is dispersed over an interval.
>
>Another crucial thing is the number of buckets that can dramatically improve or worse the performance of the algorithm.
>
>This makes bucket sort ideal in cases we know in advance that the input is well dispersed.
>
>Related posts
>
>