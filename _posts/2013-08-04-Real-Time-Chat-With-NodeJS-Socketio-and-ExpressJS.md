---
layout: post
title: Real-Time-Chat-With-NodeJS-Socketio-and-ExpressJS
categories:
- tweets
---
*taken from [http://t.co/kquJE4Vtll](http://t.co/kquJE4Vtll)*
>Real Time Chat With NodeJS, Socket.io and ExpressJS
>
>Difficulty Advanced
>
>Completion Time 1 Hour
>
>NodeJS gives me the ability to write backend code in one of my favorite languages JavaScript. Its the perfect technology for building real time applications. In this tutorial, Ill show you how to build a web chat application, using ExpressJS and Socket.io .
>
>Setup Environment
>
>Of course, the first thing to do is get NodeJS installed on your system. If you are a Windows or Mac user, you can visit nodejs.org and download the installer. If you instead prefer Linux, Id suggest that you refer to this link . Although I wont go into further details on this, if you encounter any installation issues, Im happy to help just leave a comment below this post.
>
>Once you have NodeJS installed, youre ready to setup the needed instruments.
>
>ExpressJS  this will manage the server and the response to the user
>
>Socket.io  allows for real time communication between the frontend and backend
>
>Continuing on, within an empty directory, create a package.json file with the following content.
>
> name RealTimeWebChat, version 0.0.0, description Real time web chat, dependencies  socket.io latest, express latest, jade latest , author developer 
>
>By using the console under Windows  command prompt, navigate to your folder and execute
>
>npm install
>
>Within a few seconds, youll have all the necessary dependencies downloaded to the nodemodules directory.
>
>Developing the Backend
>
>Lets begin with a simple server, which will deliver the applications HTML page, and then continue with the more interesting bits the real time communication. Create an index.js file with the following core expressjs code
>
>var express  requireexpress var app  express var port  3700  app.get, functionreq, res     res.sendIt works!   app.listenport console.logListening on port   port
>
>Above, weve created an application and defined its port. Next, we registered a route, which, in this case, is a simple GET request without any parameters. For now, the routes handler simply sends some text to the client. Finally, of course, at the bottom, we run the server. To initialize the application, from the console, execute
>
>node index.js
>
>The server is running, so you should be able to open http127.0.0.13700 and see
>
>It works!
>
>Now, instead of It works we should serve HTML. Instead of pure HTML, it can be beneficial  to use a template engine. Jade is an excellent choice, which has good integration with ExpressJS. This is what I typically use in my own projects. Create a directory, called tpl, and put the following page.jade file within it
>
>!!! html     head         title Real time web chat body         contentstylewidth 500px height 300px margin 0 0 20px 0 border solid 1px 999 overflowy scroll         .controls             input.fieldstylewidth350px             input.sendtypebutton, valuesend
>
>The Jades syntax is not so complex, but, for a full guide, I suggest that you refer to jadelang.com . In order to use Jade with ExpressJS, we require the following settings.
>
>app.setviews, dirname  tpl app.setview engine, jade app.enginejade, requirejade.express app.get, functionreq, res     res.renderpage 
>
>This code informs Express where your template files are, and which template engine to use. It all specifies the function that will process the templates code. Once everything is setup, we can use the .render method of the response object, and simply send our Jade code to the user.
>
>The output isnt special at this point nothing more than a div element the one with id content, which will be used as a holder for the chat messages and two controls input field and button, which we will use to send the message.
>
>Because we will use an external JavaScript file that will hold the frontend logic, we need to inform ExpressJS where to look for such resources. Create an empty directory, public, and add the following line before the call to the .listen method.
>
>app.useexpress.staticdirname  public
>
>So far so good we have a server that successfully responds to GET requests. Now, its time to add Socket.io integration. Change this line
>
>app.listenport
>
>to
>
>var io  requiresocket.io.listenapp.listenport
>
>Above, we passed the ExpressJS server to Socket.io. In effect, our real time communication will still happen on the same port.
>
>Moving forward, we need to write the code that will receive a message from the client, and send it to all the others. Every Socket.io application begins with a connection handler. We should have one
>
>io.sockets.onconnection, function socket      socket.emitmessage,  message welcome to the chat      socket.onsend, function data          io.sockets.emitmessage, data      
>
>The object, socket, which is passed to your handler, is actually the socket of the client. Think about it as a junction between your server and the users browser. Upon a successful connection, we send a welcome type of message, and, of course, bind another handler that will be used as a receiver. As a result, the client should emit a message with the name, send, which we will catch. Following that, we  simply forward the data sent by the user to all other sockets with io.sockets.emit.
>
>With the code above, our backend is ready to receive and send messages to the clients. Lets add some frontend code.
>
>Developing the Frontend
>
>Create chat.js, and place it within the public directory of your application. Paste the following code
>
>window.onload  function       var messages       var socket  io.connecthttplocalhost3700     var field  document.getElementByIdfield     var sendButton  document.getElementByIdsend     var content  document.getElementByIdcontent      socket.onmessage, function data          ifdata.message              messages.pushdata.message             var html               forvar i0 imessages.length i                  html  messagesi  br               content.innerHTML  html          else              console.logThere is a problem, data                    sendButton.onclick  function          var text  field.value         socket.emitsend,  message text        
>
>Our logic is wrapped in a .onload handler just to ensure that all the markup and external JavaScript is fully loaded. In the next few lines, we create an array, which will store all the messages, a socket object, and few shortcuts to our DOM elements. Again, similar to the backend, we bind a function, which will react to the sockets activity. In our case, this is an event, named message. When such an event occurs, we expect to receive an object, data, with the property, message. Add that message to our storage and update the content div. Weve also included the logic for sending the message. Its quite simple, simply emitting a message with the name, send.
>
>If you open httplocalhost3700, you will encounter some errors popup. Thats because we need to update page.jade to contain the necessary JavaScript files.
>
>head     title Real time web chat scriptsrcchat.js     scriptsrcsocket.iosocket.io.js
>
>Notice that Socket.io manages the delivery of socket.io.js. You dont have to worry about manually downloading this file.
>
>We can again run our server with node index.js in the console and open httplocalhost3700. You should see the welcome message. Of course, if you send something, it should be shown in the contents div. If you want to be sure that it works, open a new tab or, better, a new browser and load the application. The great thing about Socket.io is that it works even if you stop the NodeJS server. The frontend will continue to work. Once the server is booted up again, your chat will be fine too.
>
>In its current state, our chat is not perfect, and requires some improvements.
>
>Improvements
>
>The first change that we need to make is to the identity of the messages. Currently, its not clear which messages is sent by whom. The good thing is that we dont have to update our NodeJS code to achieve this. Thats because the server simply forwards the data object. So, we need to add a new property there, and read it later. Before making corrections to chat.js, lets add a new input field, where the user may add hisher name. Within page.jade, change the controls div
>
>.controls      Name      inputnamestylewidth350px     br     inputfieldstylewidth350px     inputsendtypebutton, valuesend
>
>Next, in code.js
>
>window.onload  function       var messages       var socket  io.connecthttplocalhost3700     var field  document.getElementByIdfield     var sendButton  document.getElementByIdsend     var content  document.getElementByIdcontent     var name  document.getElementByIdname      socket.onmessage, function data          ifdata.message              messages.pushdata             var html               forvar i0 imessages.length i                  html  b  messagesi.username ? messagesi.username  Server   b                 html  messagesi.message  br                           content.innerHTML  html          else              console.logThere is a problem, data                    sendButton.onclick  function          ifname.value                alertPlease type your name!          else              var text  field.value             socket.emitsend,  message text, username name.value                 
>
>To summarize the changes, weve
>
>Added a new shortcut for the usernames input field
>
>Updated the presentation of the messages a bit
>
>Appended a new username property to the object, which is sent to the server
>
>If the the number of messages becomes too high, the user will need to scroll the div
>
>content.innerHTML  html content.scrollTop  content.scrollHeight
>
>Keep in mind that the above solution will likely not work in IE7 and below, but thats okay its time for IE7 to fade away. However, if you want to ensure support, feel free to use jQuery
>
>content.scrollTopcontent0.scrollHeight
>
>It would also be nice if the input field is cleared after sending the message
>
>socket.emitsend,  message text, username name.value  field.value  
>
>The final boring problem is the clicking of the send button each time. With a touch of jQuery, we can listen for when the user presses the Enter key.
>
>document.readyfunction      field.keyupfunctione          ife.keyCode  13              sendMessage               
>
>The function, sendMessage, could be registered, like so
>
>sendButton.onclick  sendMessage  function      ... 
>
>Please note that this isnt a best practice, as it is registered as a global function. But, for our little test here, itll be fine.
>
>Conclusion
>
>NodeJS is an extremely useful technology, and provides us with a great deal of power and joy, especially when considering the fact that we can write pure JavaScript. As you can see, with only a few lines of code, we managed to write a fully functional real time chat application. Pretty neat!
>
>