# Quarentine Chat (Vue + Firebase)

A Chat app created for the masses, the app can host any number of users in a single chat room. The app asks for a name to display the messages sent from. It uses Vue.js as a front and the messages are stored in the firebase database. At any given point of time it shows upto 20 previously sent messages. The firebase function deletes the excess messages to save space.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Clone the directory and cd into the directory folder using the terminal.
Once you are inside the folder , install the following dependencies one by one.

Project setup (installs npm)
```
npm install
```

Installs the vue command line interface
```
npm install -g @vue/cli
```
Installs Firebase and firebase-Admin to connect to database
```
npm install firebase firebase-admin
```

Make a new database in firebase (firestore) copy the config files of the database and replace them with the config in the init.js file at the location
```
./src/firebase/init.js
```
and then compile the app.

### Compiles and hot-reloads for development
```
npm run serve
```

The App will run on your local machine at ,
```
http://localhost:8080
```


## Deployment

### Compiles and minifies for production/deployment
```
npm run build
```
after the build a *dest* folder is generated which can be used to make the app live.


## Built With

* [Vue.js](https://vuejs.org/v2/guide/) - The web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Firebase](https://firebase.google.com/) - Database Management


## Authors

* **Chinmay Sheth**
