## Getting Started:

### Fork and Clone Repository

- First get this repository on your local machine by forking it, to fork this repository click on the fork button in the upper right corner:

![fork-screenshot](https://user-images.githubusercontent.com/22448019/29610658-33ca45b4-87fb-11e7-8b94-021e343f691d.png)

- Then clone the forked repo from your github account to your local machine.
- Click on the clone or download button on the forked repo and copy the SSH or HTTPS link to your clipboard.

![clone-screenshot](https://user-images.githubusercontent.com/22448019/29613928-6bc780a0-8808-11e7-9d23-9355a7dbe7eb.png)

- In your terminal navigate to your projects folder and clone the repo using:
  ```
	git clone (url link)
	```
### Setting Up Development Environment

- Check if you have node installed on your machine or not, you can check this by using:
	```
	node -v
	```
- This should return a version if so, well done you have node installed on your machine !
- Alternatively, install node by running the following commands in the terminal (Note that the following is for Debian and Ubuntu based Linux distributions, see: <https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions>)
  ```
  curl -sL <https://deb.nodesource.com/setup_8.x> | sudo -E bash -
  sudo apt-get install -y nodejs
	```
- You at least need <pre>version 4.2.6</pre> test this now by runnin node -v in terminal.
- NPM is installed with Nodejs but it's usefull to check if you have the lastest version of npm installed by running the following command in the terminal:
 ```
 npm -v

 ```
- This version should be higher than 2.1.8.
- To update your Node Package Manager run:
```
npm install npm@latest -g
```
  Live Demo: [Registrations Web App](http://registrations-numbers-webapp.herokuapp.com/)
