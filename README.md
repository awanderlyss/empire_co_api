![Header Logo][header-logo]
___
# EMPIRE CO API (back-end)

This api is built using [MongoDB][mongodb-ref], [Express][express-ref], and [Node.js][nodejs-ref].

back-end deployed @ https://empire-co.herokuapp.com/api

For a UI experience that consumes our api check out [EmpireCo][front-end], which uses [AngularJS][angular-ref] as a front-end JavaScript framework.


## Motivation

Empire Co. was created because of shared our interest in developing the necassary skills required to create a modern web store. These skills can potentially open us to strategic roles with client retailers both large and independent.

## Development / Installation setup

The following commands are assuming you already have node installed on your machine. If you dont you can download Node.js [here][nodejs].

<details>
<summary>
  [node.js][node.js-blog]
</summary>
```
An important thing to realize is that Node is not a webserver. By itself it doesn't do anything. It doesn't work like Apache. There is no config file where you point it to you HTML files. If you want it to be a HTTP server, you have to write an HTTP server (with the help of its built-in libraries). Node.js is just another way to execute code on your computer. It is simply a JavaScript runtime.
```
</details>

___
<p>Some dependencies used in the api and what they are being used for in the app.</p>

<details>
  <summary>
    [cookie-session][cookie-session-ref]
  </summary>
  ```js
    Confusion...
  ```
</details>

<details>
  <summary>
    [morgan][morgan-ref]
  </summary>
  <br>
  ```js
    var logger = require('morgan');
    app.use(logger('dev'));

    //Concise output colored by response status for development use. The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.

    // CONSOLE.LOG: :method :url :status :response-time ms - :res[content-length]

    // EXAMPLE: GET /api 200 6.823 ms - 43
  ```
</details>
<details>
  <summary>
    [passport-local-mongoose]
  </summary>
  <br>
  ```js
    var passportLocalMongoose = require('passport-local-mongoose');
    UserSchema.plugin(passportLocalMongoose, {usernameField: 'email'});

    // Plugin Passport-Local Mongoose into your User schema
    // Use options to specify an alternative usernameField
  ```
</details>

___
OS X & Linux:

```sh
# install app dependencies
$ npm install
```
```sh
# create database and seed locally
$ node db/seed.js
```
```sh
# start server
$ nodemon
```
If there are no errors in the terminal, you can now navigate in our browser to <http://localhost:8080/api> to interact with our app.

## Useage

Here is documentation on accessing our api. If you would like to test all the RESTful routes you can download [Postman][postman-ref], an powerfull HTTP client.

| URL(s) | / | /login | /logout | /products | /products/:id | /users | /users/:id |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Method(s)** | `GET` | `POST` | `POST` | `GET` `POST` | `GET` `PUT` `DELETE` | `GET` `POST` | `GET` `PUT` `DELETE` |
| **Success Response** | Code: (200)<br> Content: { message: 'WELCOME TO THE EMPIRE CO API!' } | Code: (200)<br> Content: { user: (all key:pair from user model and passport)} | Code: (200)<br> Content: { message: "Logged Out!, "user": null } | `GET` Code: (200)<br> Content: [products]<br> `POST` Code: (200)<br> Content: [product] |  | | |
| **Error Response** | | | | | | | | |

## Code Example

Using .register instead of .create when creating a new instance of a user. This section of code gave us some trouble because we didnt realize that the register method tasks a callback as an argument. We were using a .then and .catch

```js
router.route('/users')
  // register (create)
  .post(function(req, res, next) {
    var user = new User(req.body.user);
    // register(user, password, cb) Convenience method to register a new user instance with a given password. Checks if username is unique.
    User.register(user, req.body.user.password, function(err, user) {
      // If the current middleware func does not end the request-response cycle, it must call next() to pass control to the next middleware function.
      if(err) return next(err);
      res.json(user);
    });
  })
```


## Contributors

Feel free to refactor, update, or add new features. Have any questions, ask one of the contributors below!

| Clifton Hutchins | Dara Hoy | Alyssa Felix |
|:----------------:|:--------:|:------------:|
| ![Cliff](https://avatars3.githubusercontent.com/u/22736325?v=3&s=100) | ![Dara](https://avatars1.githubusercontent.com/u/23284333?v=3&s=100) | ![Alyssa](https://avatars0.githubusercontent.com/u/22528201?v=3&s=100)
| ![][github-logo]  [cliftonh02](https://github.com/cliftonh02) | ![][github-logo]  [DaraHoy](https://github.com/DaraHoy) | ![][github-logo] [awanderlyss](https://github.com/awanderlyss) |

[angular-ref]: https://angularjs.org/
[cookie-session-ref]: https://github.com/expressjs/cookie-session
[express-ref]: https://expressjs.com/
[front-end]: https://cliftonh02.github.io/empire_co_angular/
[github-logo]: http://cdn.shopify.com/s/files/1/0051/4802/t/72/assets/favicon.ico?1744047789295863037
[header-logo]: http://ee-emma.s3.amazonaws.com/ee-product-images/68861/swse_header.png
[mongodb-ref]: https://www.mongodb.com/
[morgan-ref]: https://github.com/expressjs/morgan
[nodejs]: https://nodejs.org/en/download/package-manager/#osx
[nodejs-ref]: https://nodejs.org/en/
[node.js-blog]: https://blog.xervo.io/absolute-beginners-guide-to-nodejs
[passport-local-mongoose]: https://github.com/saintedlama/passport-local-mongoose
[postman-ef]: https://www.getpostman.com/
