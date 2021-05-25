# Natours Express.js Project

## What is this project?

Natours is a travel planning website that has information and review about tours in cool places around the world. Tour providers can advertise their tours while travellers can leave reviews and comments.

Tech and Feature Stack:
- Express.js
- JWT-Token Based Authentication & Authorization
- Mailtrap.io
- MongoDB
- Node.js
- Postman Desktop App used for API Testing
- Pug.js Templates
- Stripe Payments

This project was made for the [Node.js, Express, MongoDB & More: The Complete Bootcamp](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/) course on Udemy.com. However, I will be adding additional features, locations, and even switching out the front end templating engine on development branches.

## Setup 

This section is for my own reference and others looking to clone the project and set it up.

You will need:
- a MongoDB Atlas Account and database set up on their website
- a mailtrap.io account
- to configure a `.env` file with these fields filled in with your own fields:
```
NODE_ENV=development
PORT=3000
DATABASE_PASSWORD=
DATABASE_URL=
DATABASE_LOCAL=mongodb://localhost:27017/natours
JWT_SECRET=
JWT_EXPIRES_IN=
JWT_COOKIE_EXPIRES_IN=

EMAIL_USERNAME=
EMAIL_PASSWORD=
EMAIL_HOST=
EMAIL_PORT=
```
