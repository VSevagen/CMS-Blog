import React from "react"
import Err1 from "../public/mysqlErr.png"
import Err2 from "../public/mysqlErr2.png"


function MySQLErr() {
    return (
                        <div>
                            <p class="blog-content">
                            Mediawiki’s installation is quite simple if the correct steps are followed and applied but it may happen that during the installation a package was not correctly configured or worse , broken. Rest assured , you do not need to uninstall ubuntu , at least not now.
                            <img class="blog_img img-thumbnail" src={Err1} alt="" ></img><br></br><br></br>
                            
                            When the MySQL server connects to the localhost, it attempts to use a socket file instead of TCP/IP(Transmission Control Protocol / Internet Protocol). The socket file used is specified in etc/mysql/my.cnf when My SQL server is installed on the system. So what you need to do is change socket to the location of your MemSQL socket file.<br></br><br></br>
                            In <strong>/etc/mysql/my.cnf</strong> you should see this near the top of the file:
                            <img class="blog_img img-thumbnail" src={Err2} alt="" ></img><br></br><br></br>

                            Just change the socket file to <strong>/var/lib/memsql/data/memsql.sock.</strong><br></br>

Now try <strong>mysql -u root -p</strong> again. This should do the job.<br></br><br></br>

If you still get the same error, the process might not be running on your current version of Ubuntu. So type <strong>ps ax | grep mysql</strong> in terminal to see if it is running.<br></br><br></br>

If it is not ,then use command <strong>sudo service mysql start</strong> or <strong>sudo /etc/init.d/mysql start</strong> if it says service unrecognized, to start mysql.<br></br><br></br>

If none of the above worked, it might mean that mysql is installed but corrupted somehow. The solution to this is to completely uninstall mysql and installing again.

If you had installed mysql-server, omit the mysql-client part.<br></br><br></br>

                                <ul class="list-group">
                                    <li class="list-group-item" id="special">1. sudo apt-get remove --purge mysql*</li>
                                    <li class="list-group-item" id="special">2. sudo apt-get autoremove</li>
                                    <li class="list-group-item" id="special">3. sudo apt-get autoclean</li>
                                    <li class="list-group-item" id="special">4. sudo apt-get install mysql-server mysql-client</li>
                                </ul><br></br>

                                Now use <strong>sudo apt-get install mysql</strong> to install mysql .

This should get your mysql working.<br></br>

The solutions above are uniquely what I tried . It has worked out for me but I cannot guarantee that it will work for everyone.
                            </p>
                        </div>
    );
}

export default MySQLErr;