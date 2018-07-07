# Relational-DB-access-with-js-and-HTML
This is a project I worked on for my Netcentric Computing class at SPU. It consists of seven HTML pages with a front end JavaScript file that connects to a series of backend javascript files to access a MySQL database. Six of these pages manipulate data from the databse. This is done with the help of REST and node.js.

Several things must be noted here:

  1. In order for this to run you must have node.js and REST installed properly on your SSH client of choice. This is integral for the project's operation, you have been warned!

  2. I only slightly edited the "friends-router" and "server" files for them to opperate on my computer. I do not wish to take credit for work I did not do. The only code I wrote from scratch can be found in the HTML pages and the mySQLInfo.js file.
  
  3. For this project, we had to use bootstrap. Don't judge me. If you are curious whether or not I am competant in CSS, my current CSS stylehseet has been posted.

  4. Do not be perplexed by the amount of files in this repo. Below is an explanation of what is both necessary and unnecessary for you to understand. 

                                                            ------------------

   First, in order to start the program, type the command 'node.js server-04'. This will launch evrything on the link http://leia.cs.spu.edu:3027. 
   
This project is structured in a way where, when a server file is ran via node, a friends-router file is accessed via the server file, and the db.js file is accessed via the friends-router file. Also, the seven HTML pages and their accompanying js file, MySQLInfo.js, is created. 

Why all the server and friend-router files? These were early tests I have included so you, dear reader, can explore the intricacies of the code further, if you wish. Don't be alarmed by the number of them, the only ones of these you need to be concious of are server-04 and friends-router-03. 
  
  Second, within the server and friends-router files are sensitive information that I hardcoded in to make them run on my school's network. You will likely need to edit these pieces of information which can be found at the beginning (and sometimes bottom) of every server and friends-router file, as well as the db.js file. 

  Third, the database, from which the data is being accessed, houses many people's names and information in JSON format. The JSON files I have attached exist because of this reason. 
  
                                                            ------------------
                                                            
 If you have any questions, feel free to email me at jenkinsb1@spu.edu. I hope this quick readme has made this project easier for you to understand.
 
 God bless,
 
 -Ben
