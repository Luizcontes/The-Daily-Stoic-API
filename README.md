# The Daily Stoic API

This is a service created to get user`s phone number and based on the book The Daily Stoic - by Ryan Holiday, to send one message related to each day to the user throught a sms message.

https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance/dp/0735211736


## Reflection

The main focus of this project was to integrate different services, such as. get information from the user and store it in the database, then use a service to switch the page to be presented accordingly with the day\`s message contained in the book, then to loop throghout the user`s phone list and send a message to him.

## Tecnologies used:

DATABASE: PostgreSQL provided by a Heroku

BACK-END - NodeJs using the following packages:

ExpressJs for the server along with some packages such as:

-Nodemon - for auto refresh after each change in the code in the development

-Dot-env - fot storaging the keys in the variable enviroment 

-PostgreSQL - DataBase used to store user\`s data

-AWS-sdk - Service used to send SMS 

-jsdom - Service used to extract book`s epub format parts

## Project`s Preview

![preview](https://user-images.githubusercontent.com/70711596/182280099-3288d542-a56a-4b16-b201-ecff4924dc49.gif)

## Features to be implemented:

- Include services to send the message using different plataforms like:
Whatsapp, Telegram, Email, etc

-Develop some authentication and data validation

-Implement payment methods


## Installation

Clone down this repository. You will need `node`, `npm` or `yarn` installed globally on your machine.

```bash
yarn
yarn start
```

or

```bash
npm install
npm run start
```

The server should start at:

`localhost:8081` 

## About request to the API

To test the whole application you can access the service hosted on the cloud and interact directly with this project:

https://stoicapi.herokuapp.com/index/
