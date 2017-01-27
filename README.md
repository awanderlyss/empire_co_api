EMPIRE CO API (back-end)
========================


[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

One to two paragraph statement about your product and what it does.

![](header.png)

## Synopsis

At the top of the file there should be a short introduction and/ or overview that explains **what** the project is. This description should match descriptions added for package managers (Gemspec, package.json, etc.)

## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Usage example

A few motivating and useful examples of how your product can be used. Spice this up with code blocks and potentially more screenshots.


## Development / Installation setup

![Node Logo][node-logo] 
The following commands are assuming you already have node installed on your machine. If you dont you can download Node.js [here][nodejs].

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
If there are no errors in the terminal, we can now navigate in our browser to: http://localhost:8080/api to interact with our app.

#NOTES

### morgan
https://github.com/expressjs/morgan

dev

Concise output colored by response status for development use. The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.

:method :url :status :response-time ms - :res[content-length]


## Contributors

Feel free to refactor, update, or add new features. Have any questions, ask one of the contributors below!

| Clifton Hutchins | Dara Hoy | Alyssa Felix |
|:----------------:|:--------:|:------------:|
| ![Cliff](https://avatars3.githubusercontent.com/u/22736325?v=3&s=100) | ![Dara](https://avatars1.githubusercontent.com/u/23284333?v=3&s=100) | ![Alyssa](https://avatars0.githubusercontent.com/u/22528201?v=3&s=100)
| [cliftonh02](https://github.com/cliftonh02) | [DaraHoy](https://github.com/DaraHoy) | [awanderlyss](https://github.com/awanderlyss) |

## License

A short snippet describing the license (MIT, Apache, etc.)

[node-logo]: https://tastydigital.com/wp-content/themes/tastydigital/assets/images/tools/NodeJS.png
[nodejs]: https://nodejs.org/en/download/package-manager/#osx
