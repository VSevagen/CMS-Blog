import React from "react"
import mediawiki from "../public/mediawiki.jpg"
import mediawiki1 from "../public/mediawiki1.png"
import mediawiki2 from "../public/mediawiki2.png"
import mediawiki3 from "../public/mediawiki3.png"

function MediaWiki() {
    return(
                        <div>
                            <p class="blog-content">
                            As you guys might know , I just got started in the field of programming and open-source contribution. I was hoping that it would be easy enough for me to grasp the concept but after a fatal step (of which I have no idea) , the task of installing MySQL became so elusive and frustrating that I was literally about to loss my mind . So I’m gonna try to prevent you guys from doing the same mistake as me.  
                            </p>
                            <p class="blog-content">
                                <strong>Step 1</strong><br></br>
                                Do not try install Apache,MySQL or PHP separately.<br></br> Try using the command

<strong> sudo apt-get install lamp-server^</strong> This will install all 3 of them.<br></br>

                            <img  class="blog_img img-thumbnail" alt="" src={mediawiki2}></img>

                            </p>
                            
                            <p class="blog-content">
                                <strong>Step 2</strong><br></br>
                                Install git ,  if you do not already have it .

To install it,use <strong>sudo apt-get install git</strong>
                            </p>

                            <p class="blog-content">
                            <strong>Step 3</strong><br></br>

After installing git, you must configure your username and email as git tracks any changes you make using your username and email.<br></br>

<strong>git config –global “user.email”</strong>—–Enter you email address instead of user.email.<br></br>

<strong>git config –global “user.name”</strong>—-Enter your chosen username and replace it with “user.name”.
                            </p>

                            <p class="blog-content">
                                <strong>Step 4</strong><br></br>
                                Now, you need to generate SSH keys to establish a connection between your PC and Gerrit but to be able to generate a new key you need to check if a key already exists. To check for this , try :<br></br>
                                <strong>ls~/.ssh</strong><br></br>
                                <strong>ssh-keygen -t rsa -C “your email address”</strong><br></br>
                                After you enter the above command , you’re gonna be prompted for a passphrase. Do not worry about that just press enter.

You now need to create a Gerrit account and add the SSH key. Follow the following steps.<br></br><br></br>
                            <ul class="list-group">
                                <li class="list-group-item" id="special">1. Go to wikitech.wikimedia.org.</li>
                                <li class="list-group-item" id="special">2. Log into the web interface of Gerrit.</li>
                                <li class="list-group-item" id="special">3. Go to settings and click on “SSH Public Keys”</li>
                                <li class="list-group-item" id="special">4. Paste your ssh key into the corresponding filed</li>
                            </ul><br></br>

                            Now , run <strong>eval ‘ssh-agent‘</strong> and <strong>ssh-add .ssh/id_rsa</strong><br></br>

In order not to get “Permission denied”, you should run <strong>ssh -p 29418 USERNAME@gerrit.wikimedia.org</strong>
                            </p>
                            <img class="blog_img img-thumbnail" alt="" src={mediawiki1}></img>

                            <p class="blog-content">
                                <strong>Step 5</strong><br></br>
                                Download MediaWiki through the following command.<br></br>
                            <br></br>
                            </p>

                            <p class="blog-content">
                                <strong>Step 6</strong><br></br>
                                Once the download is completed, you need to extract the folder and place it in your web directory.

To extract the folder use the following command.<br></br>

<strong>tar -xvzf /tmp/mediawiki-*.tar.gz</strong><br></br>

Now rename the mediawiki file as “core” and copy it to the www folder of var. If you are not able to paste it , it might be because your the folder is read only. So to solve this , apply the following command

<strong> sudo chmod 777 -R 777 /var/www/html</strong><br></br><br></br>

This will remove any restriction and then just copy the core file into www folder.

You can try to see if the localhost is working. So go to your browser and search for <strong>https://localhost/core/</strong><br></br>

It may also happen that you may not have installed all the extension . The extensions that you might be asked to download might be <strong>php-mdstring and xml</strong>.<br></br><br></br>

To install mbstring , just type the following command,<br></br>

<strong>sudo apt-get install php-mbstring</strong><br></br><br></br>

To install xml,<br></br>

<strong>sudo apt-get install php-xml</strong>

Once you completed downloading everything restart the Apache server using the command

<strong> systemctl restart apache2</strong><br></br><br></br>

Now try localhost/core/ again. It should work.
                            </p>

                            <p class="blog-content">
                                <strong>Step 7</strong><br></br>
                                Now just go through the local setting till you reach a page where you are asked for a for username and password. Those are actually for your database which you have not yet created. So open terminal and create a database.<br></br><br></br>
                                1. Create a mysql user.<br></br>
                                <img class="blog_img img-thumbnail" src={mediawiki3} alt="" ></img><br></br><br></br>
                                <strong>sudo mysql -u root -p “password”</strong> —-Replace the “password” with an actual password.<br></br>
                                <strong>mysql>CREATE USER ‘new_mysql_user’@’localhost’ IDENTIFIED BY “your password”;</strong><br></br>
                                <strong>mysql>quit;</strong><br></br><br></br>

                                2. Create a mysql database pi_wiki<br></br>
                                <strong>sudo mysql -u root    </strong><br></br>
                                <strong>mysql> CREATE DATABASE pi_wiki;</strong><br></br>
                                <strong>mysql> use pi_wiki;</strong><br></br><br></br>

                                3. Grant user access to new database.<br></br>
                                <strong>mysql> GRANT ALL ON pi_wiki.* TO ‘new_mysql_user’@’localhost’;</strong><br></br>
                                <strong>mysql>quit;</strong><br></br>
                            </p>

                            <p class="blog-content">
                                <strong>Step 8</strong><br></br>
                                Now fill in the boxes with the appropriate information and you're good to go.<br></br>
                                <img class="blog_img img-thumbnail" src={mediawiki} alt="" ></img>
                            </p>
        </div>
    );
}

export default MediaWiki;