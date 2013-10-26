---
layout: post
title: sending e mails with node and nodemailer
categories:
- tweets
---
*taken from [http://t.co/UX83jRv73n](http://t.co/UX83jRv73n)*
Sending emails with Node and NodeMailer

Sending emails with NodeJS is almost a breeze. Almost. First, you have to plugin the NodeMailer module than set up a transport type, load the templates, add attachments and finally send...

The Code

The first thing you tend to do is to create a wrapper class to manage all this tasks. So, I wrapped it in an Eamiler class to centralize the mail sending in my app.

 libemailer.coffee

  .template templateContent, data, interpolate .?g

 getAttachments html

   attachments.pushattachment if html.searchcidattachment.cid  1

  attachments

exports  module.exports  Emailer

In a standard ExpressJS project structure you'll store this file in libemailer.coffee. You'll need to have the email templates stored in viewsemails as HTML files and the attachments in publicimagesemail.

A potential email view will look like this

! invite.html 

 titleInvite from Myapptitle

head

  Myapp would like you to join it's network on a hrefhttpmyapp.comMyapp.coma.

  br 

  Please follow the link bellow to register

 p

  a hrefhttpmyapp.comregister?inviteidhttpmyapp.comregister?inviteida

 p

  a hrefhttpmyapp.comimg srccidlogomyapp a

 p

body

html

UnderscoreJS template will take care about your variables in the template and the getAttachments function will automatically attache the files you need by the cid from the template.

To use the class in your code you have to instantiate a new Emailer object with the desired options, the template data and send the email

options 

emailer  new Emailer options, data

emailer.send err, result

Using a MongooseJS  httpmongoosejs.com model for the invites you would have something like this

InviteSchema  new Schema

And you'll call it from an ExpressJS router

Invite  require'..modelsinvite'

   res.render 'invitesinvites', title Invites, invites invites

That's all about it.

Mon, 18 Jun 2012 170206 GMT

About HowToNode.org

HowToNode.org is a community supported blog created by Tim Caswell . The purpose of the blog is to teach how to do various tasks in node.js as well as teach fundamental concepts that are needed to write effective code.

This site is powered by Wheat , a git based blogging engine written in node.JS .

The content for this site is stored in a git repository that anyone can fork, write an article, and send a pull request. If your article passes the quality standards it will be published and help support the greater node community.

 2011 Tim Caswell under the MIT license.

Content and articles are copyrighted to the individual authors. Design by Ben Gourley . All code snippets used in the examples are in the public domain.

Wheat running on node v0.10.17

