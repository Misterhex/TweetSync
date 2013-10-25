---
layout: post
title: appconfig transform visual studio add in when i
categories:
- tweets
---
*taken from [http://t.co/PxzTOJft](http://t.co/PxzTOJft)*
App.config transform Visual Studio Add in

When I talk to people about the XDT web.config transforms that web projects support for packagepublish one of the most common questions is Does this work for nonweb projects? Unfortunately the answer is No, but myself and a friend of mine Chuck England have created a Visual Studio add in which enables just this. You can find it in the Visual Studio gallery under the name SlowCheetah  XML Transforms . Here is an overview of the features of the add in.

Add tooling to desktop project to create XDT transforms

Transform app.config for desktop projects based on build configuration

Transform any XML file to the output folder base on build configuration

Add tooling to enable previewing XDT transforms

For web projects easily transform other XML files during packagepublish

After you install the add in you will get the following menu item when you right click any XML file.

For each build configuration defined you will get a transform created as a child item.

These files are stub XDT transforms. You can place your transform content in those files and they will be executed when you debugrun your application. For example if your app.config contained the following.

?xml version1.0 encodingutf8 ? configuration appSettings add keyappName valueWPF DemoDebugdefault add keyurl valuehttplocalhost8080Default add keyemail valuedemodefaultcontoso.com appSettings connectionStrings clear  add nameRecordsDb connectionString.SQLExpressInitial CatalogRecordsDbDefaultIntegrated Securitytrue connectionStrings configuration

And your app.debug.config contained

?xml version1.0 encodingutf8 ? ! For more information on using transformations       see the web.comfig examples at httpgo.microsoft.comfwlink?LinkId214134.  configuration xmlnsxdthttpschemas.microsoft.comXMLDocumentTransform appSettings add keyappName valueWPF DemoDebug xdtTransformReplace xdtLocatorMatchkey add keyurl valuehttplocalhost8080 xdtTransformReplace xdtLocatorMatchkey add keyemail valuedebugcontoso.com xdtTransformReplace xdtLocatorMatchkey appSettings connectionStrings add nameRecordsDb connectionString.SQLExpressInitial CatalogRecordsDbIntegrated Securitytrue xdtTransformReplace xdtLocatorMatchname connectionStrings configuration

When you run your application the config file created will contain the following.

?xml version1.0 encodingutf8? configuration appSettings add keyappName valueWPF DemoDebug add keyurl valuehttplocalhost8080 add keyemail valuedebugcontoso.com appSettings connectionStrings clear add nameRecordsDb connectionString.SQLExpressInitial CatalogRecordsDbIntegrated Securitytrue connectionStrings configuration

Transforming other files

You are not limited to transforming app.config, you can transform any XML file. When you create a transform for an arbitrary XML file when you run your application the transformed XML file will be dropped into the output bin folder of your application.

Previewing Transforms

You can easily preview transform results as well. After you have created the transform file you can right click on it and select Preview Transform.

After you click it you should see the following.



I hope you guys find this useful. Let me know if you have any feedback on this!

Note This add in was created by me and a friend of mine, these are not created nor supported by Microsoft.

Sayed Ibrahim Hashimi  sayedihashimi

msbuild  Visual Studio 2010  XDT Wednesday, 17 August 2011 062537 GMT Daylight Time, UTC0100

  

