
## Getting Started:

  1. You can view this application <a href="http://registrations-numbers-webapp.herokuapp.com/">here</a> or copy this link to your browser `http://registrations-numbers-webapp.herokuapp.com/`.
  2. You will now be able to add your own registration numbers for example: `CA 856 985`
  3. You can also filter on the list of registration numbers by clicking on one of the radio buttons and clicking the filter button:


![filter-screenshot](https://user-images.githubusercontent.com/22448019/29660429-a025369e-88c1-11e7-8283-6027120a86e2.png)

##  For Developers:
### Fork and Clone Repository

1. First get this repository on your local machine by forking it, to fork this repository click on the fork button in the upper right corner.
2. Then clone the forked repository from your github account to your local machine.
3. Click on the clone or download button on the forked repository and copy the SSH or HTTPS link to your clipboard.
4. In your terminal navigate to your projects folder and clone the repository using: `git clone link`


### Setting Up Development Environment

##### You will require the following:
- Nodejs
- Expressjs
- Mongoose
- MongoDB
- Mocha
- Nodemon

##### NodeJS
- To check if you have NodeJS installed on your local machine run this command in the terminal:
  ```
  node -v
  ```
- If this command fails, install Nodejs on your machine - <a href="">here</a>

##### NPM Install
- To install the modules used in this app run the following command in the terminal:
  ```
  npm install
  ```
- This will install the node_modules such required and specified in the package.json file within the cloned repository.
##### MongoDB

- Install <a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-mongodb-on-ubuntu-16-04"> MongoDB</a> (Note that this is for ubuntu-16-04    distributions), after mongodb is set up and running the app will save all data in a database called reg_numbers.

##### Mocha
- If you want to run some tests  you don't have it, install Mocha by running the following command in the terminal:
  ```
  npm install -g mocha
  ```
- Alternatively if you want to install mocha locally that it can only be accessed within a certain path, run this command:
  ```
  npm install --save-dev mocha
  ```

-  Now in your cloned repository you can run the command below to run some tests.
  ```
  mocha
  ```
##### Nodemon

- Nodemon will watch files in your directory and if any changes happens nodemon will restart the node application without you having to do it manually.
- To install Nodemon on your machine, run the following command in your terminal. Note that this is a global installation so nodemon can be accessed anywhere
in your paths.
```
npm install nodemon -g
```

- Alternatively if you want to install nodemon locally in a directory or path only, you can run the following command in your repository:
```
  npm install --save-dev nodemon
```
##### Usage
- To run the app in the cloned repository run the following command:
```
nodemon index.js
```
