# Readme.md

## app description
the app is a review aggregator for sneakers using users and reviewers scores.
The score represent how easy it is to match the sneakers look with multiple popular styles

## URL section
* [Github repo link]
- Deployed app link — http

## inspired by sites like
- https://opencritic.com
- https://www.finishline.com
- https://www.metacritic.com

## list of dependencies / technologies front-end
* [html5] --
* [css3] -- Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML
* [react.js] --
* [axios] --
* [node.js] --

## list of dependencies / technologies back-end
* [sequelize.js] --
* [nodemon] -- automatically restarting the node application when file changes in the directory are detected.
* [pg] -- Non-blocking PostgreSQL client for Node.js.
* [pg-hstore] -- A node package for serializing and deserializing JSON data to hstore format.
* [morgan] -- HTTP request logger middleware for node.js.
* [body-parser] --
* [cors] --
* [express.js] --
* [passport] --
* [passport-jwt] --
* [git/github] --
* [PostgreSQL] -- database dialect

## npm scripts back-end
- dev — nodemon server.js
- start — node server.js
- seed — node seed.js
- resetDb — node resetDb.js
- testConDb — node testConDb.js
- setup — node resetDb.js && node testConDb.js && node seed.js
- debug — node —inspect-brk server.js

## Routes
- http://localhost:3001  — Welcome Page
- http://localhost:3001/brands — Show brands index / add brand
- http://localhost:3001/brands/:brand_id  — Show all brand shoes
- http://localhost:3001/brands/:brand_id/:sneakers_id — show article of the shoe product

- http://localhost:3001/sneakers — show all shoes/ post sneakers/
- http://localhost:3001/sneakers/:sneaker_id  — show show/update/delete sneaker

- http://localhost:3001/articles  — show all articles / post articles
- http://localhost:3001/articles/:articles_id —  delete/update articles
- http://localhost:3001/articles/:articles_id /comments  — show/post comments
- http://localhost:3001/articles/:articles_id /comments/:comment_id  — show/update/delete comment
- http://localhost:3001/articles/brands — show all articles for a brand
- http://localhost:3001/articles/brands/:brand_id  — show all articles for a brand

- http://localhost:3001/login  — login register
- http://localhost:3001/register — register users
- http://localhost:3001/users/:user_id — user profile list articles you commented on, scores you gave the shoe in the article
-

    [html5]: <https://www.w3.org/TR/html/>
    [css3]: <https://www.w3.org/Style/CSS/>
    [react.js]: <https://reactjs.org>
    [axios]: <https://www.axios.com>
    [node.js]: <http://nodejs.org>
    [sequelize.js]: <http://docs.sequelizejs.com>
    [nodemon]: <https://www.npmjs.com/package/nodemon>
    [pg]: <https://www.npmjs.com/package/pg>
    [pg-hstore]: <https://www.npmjs.com/package/pg-hstore>
    [morgan]: <https://www.npmjs.com/package/morgan>
    [body-parser]: <https://www.npmjs.com/package/body-parser>
    [cors]: <https://www.npmjs.com/package/cors>
    [express.js]: <http://expressjs.com>
    [passport]: <https://www.npmjs.com/package/passport>
    [passport-jwt]: <https://www.npmjs.com/package/passport-jwt>
    [git/github]: <https://github.com>
    [Github repo link]: <https://github.com/matthew-k-yee/sneakercritic>
