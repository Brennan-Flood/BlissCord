
# DiscordClone

DiscordClone is a clone of the gaming-oriented messaging app Discord. It was developed using  a Rails/PostgreSQL backend, with a React frontend.

## Live Site!

https://discord-clone-1.herokuapp.com/

## Technologies
* PostgreSQL
* Rails
* React
* Heroku

## Features

* Users
  Users can register with DiscordClone after providing a username and password.        Alternatively, a demo-user has been provided for sampling purposes 

* Servers
  Users have the oppurtunity to create servers, delete said servers, edit the name of those servers, and join servers that other users have created. Once you've created or joined a server, you will gain access to that server's channels.
  
 * Channels
  Users have the oppurtinty to create, and delete channels which are housed within servers. Each chat holds a unique live-chat for all members of it's grandparent server to participate in.
  
 * Friends 
 Users can find other Users that they wish to befriend, and issue a friend request. This friend request can be accepted or declined. Once friends, the two users can participate in a unique and private live-chat. 
 
 * Live-Chat
 As aforementioned, both channels and friendships house live-chats. These Chats feature live-updating whenever a new message has been received, as well as auto-scrolling for an improved user experience. This was achieved by use of Rails action-cables. 



