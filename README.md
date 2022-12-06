# Back-End Project

This project uses Node.js, router, express, and mongoose to practice using the Back-End. It uses MongoDB to store the posts, users, and comments in a collection. You can also use the CRUD method to get, post, update, or delete the user, post, or comment.

The link to the website: <a>https://back-end-odmaralt.vercel.app/</a>

## How to Install 📲

1. Go to terminal and paste this code

```sh
git clone https://github.com/odmaralt/back-end-project.git
```

2. Go into the project

```sh
cd back-end-project
```

3. Install npm

```sh
npm install
```

4. Start the project

```sh
npm start
```

## Motivation 🙌

The motivation to create this project was to learn and practice using the back end. You can practice using Mongoose, CRUD method, Postman, Vercel, Router, Express, and many more resources connected to the back-end.

## Problems & Solutions 💭

> - **Receiving an error when you try to post**
>   - Make sure you have the correct request params
>   - Make sure you're sending the correct information in the Schema

> - **Function isn't returning a response**
>   - Make sure you have the right request.params (ex: userId instead of postId)
>   - Console.log your params to see if your code is reading it

> - **Data isn't updating or deleting**
>   - Try restarting your server
>   - View your data on MongoDB

> - **Unable to get data**
>   - Make sure the path is right in the router and index.js

> - **Postman says authorization needed to get users**
>   -Go to authorization, select BearerToken and copy/paste the token number

>- **Middleware function is giving an error**
>   - Make sure you are using next()

## Features 📝

- Node.js
- Back-end features
- Middleware
- CRUD method
- API calls
- Token Authentication
- MongoDB to store data
- Mongoose to implement constraints on the collections
- Express library (gives more ability to use params, middleware, route)

## More resources 📃

- <a href="https://www.upwork.com/resources/beginners-guide-back-end-development#servers">Beginner's Guide to Back-end Development</a>
- <a href="https://selvaganesh93.medium.com/how-node-js-middleware-works-d8e02a936113">How does Middleware Work?</a>
- <a href="https://adrianmejia.com/getting-started-with-node-js-modules-require-exports-imports-npm-and-beyond/">How to Import and Export in Node.js</a>
- <a href="https://expressjs.com/en/starter/installing.html">How to Install Express</a>
- <a href="https://www.npmjs.com/package/nodemon">How to Install Nodemon</a>
- <a href="https://www.postman.com/downloads/">How to Install Postman</a>
- <a href="https://www.npmjs.com/package/mongoose">How to Install Mongoose</a>

## Acknowledgements 🤝

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
