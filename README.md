# SneakerCritic

## App Description
The app is a review aggregator for sneakers using users and reviewers scores.
The score represent how easy it is to match the sneakers look with multiple popular styles.

## User Interaction
The user goes into the application and can view sneaker-related articles. A user can navigate through the navigation bar and click on either Articles or Brand. If a user clicks Articles, there will be a full list of articles rendered on the screen and the user can click on an article to read. If a user clicks Brand, the user will see different sneaker brand companies. The user can then click on a specific brand and only articles that are associated to that company will appear.

When a single article is displayed on the screen, a user can read the text inside the article, submit a comment, and give the sneaker a rating from 1-5. When a user submits a rating, the app will generate a new average to show a new site score.

A user can register and login for authorization. When logged in, a user can go to their profile and see there personal information - first name, last name, email, and comments they posted to articles they interacted with.

## URL Section
* [Github repo link](https://github.com/matthew-k-yee/sneakercritic)

## Inspired By Sites Like
- [OpenCritic](https://opencritic.com)
- [Finishline](https://www.finishline.com)
- [MetaCritic](https://www.metacritic.com)

## List of Dependencies / Technologies Front-End
* [html5](https://www.w3.org/TR/html/) -- HTML is the standard markup language for creating website.
* [css3](https://www.w3.org/Style/CSS/) -- Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML
* [react.js](https://reactjs.org) -- A JavaScript library for building user interfaces.
* [axios](https://www.axios.com) -- Promise based HTTP client for the browser and node.js.
* [node.js](http://nodejs.org) -- An open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.

## list of dependencies / technologies back-end
* [sequelize.js](http://docs.sequelizejs.com) -- Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.
* [nodemon](https://www.npmjs.com/package/nodemon) -- Automatically restarting the node application when file changes in the directory are detected.
* [pg](https://www.npmjs.com/package/pg) -- Non-blocking PostgreSQL client for Node.js.
* [pg-hstore](https://www.npmjs.com/package/pg-hstore) -- A node package for serializing and deserializing JSON data to hstore format.
* [morgan](https://www.npmjs.com/package/morgan) -- HTTP request logger middleware for node.js.
* [body-parser](https://www.npmjs.com/package/body-parser) -- Parses your request and converts it into a format from which you can easily extract relevant information that you may need.
* [cors](https://www.npmjs.com/package/cors) -- CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
* [express.js](http://expressjs.com) -- Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [passport](https://www.npmjs.com/package/passport) -- Passport is authentication middleware for Node.js.
* [passport-jwt](https://www.npmjs.com/package/passport-jwt) -- Passport authentication strategy using JSON Web Tokens.
* [git/github](https://github.com) -- Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. GitHub Inc. is a web-based hosting service for version control using Git.
* [PostgreSQL](https://www.postgresql.org) -- Database dialect.

## NPM Scripts Back-End
- dev — nodemon server.js
- start — node server.js
- seed — node seed.js
- resetDb — node resetDb.js
- testConDb — node testConDb.js
- setup — node resetDb.js && node testConDb.js && node seed.js
- debug — node —inspect-brk server.js

## Routes
- / — Welcome Page
- GET / brands - show brands index
- POST / brands - add brand
- GET / brands / brand id - show unique brand by id
- GET / brands / brand id / sneaker id - show article of the sneaker of a unique brand by id

- GET / sneakers — show all sneakers
- GET / sneakers / id  - show unique sneaker by id
- PUT / sneakers / id  - update unique sneaker by id
- Delete / sneakers / id - delete unique sneaker by id

- GET / articles  — show all articles / post articles
- DELETE / articles / id - delete article by id
- PUT / articles / id - update article by id

- GET / articles / article id / comment - show comment attached to article
- PUT / articles / article id / comment - post new comment attached to article
- GET / articles / article id / comment / comment id - show unique comment by id attached to article
- PUT / articles / article id / comment / comment id - update unique comment by id attached to article
- DELETE / articles / article id / comment / comment id - delete unique comment by id attached to article
- GET / articles / brands -  show all articles for a brand
- GET / articles / brands / brand id — show all articles for a brand

- / login  — login register
- / register — register users
- / user / user id - user profile list articles you commented on, scores you gave the shoe in the article

## Code snippet
```JavaScript
UsersRouter.post('/login', async (req, res) => {
  try {
    const {user_name, password} = req.body;
    const user = await User.findOne({where: {user_name}});
    const valid =  await bcrypt.compare(password, user.password);

    if (valid) {
      const { id, user_name, first_name } = user;
      const token = sign({user_name, first_name, id});
      res.json({token,valid,id});
    }
    else {
      throw Error('Invalid username or password');
    }
  }
  catch(evt) {
    res.status(401).json(evt.message);
  }
});
```

```JavaScript  
<Switch>
  <Route exact path={`${MATCH_PATH}`} render={(props) => {
    return (<List {...props} server_url={this.props.server_url} />)
  }}/>
</Switch>
```
## A guide to getting started contributing to the project
###### ERD
![alt text](https://raw.githubusercontent.com/matthew-k-yee/sneakercritic/master/ERD%20-%20Group%20project%203.jpeg)

###### Wireframe
![alt text](https://raw.githubusercontent.com/matthew-k-yee/sneakercritic/master/Wireframe.jpg)
###### Project Board
[Project Board](https://github.com/matthew-k-yee/sneakercritic/projects)

## MVP
In the backend, a functional database and are routes are set up. In the front end, being able to render a list on the screen and able to navigate through different articles from the full article page.

## Aknowledgements
- [Sneakers News](https://sneakernews.com/) - Text and images for the articles.
- [Drake Tally](https://github.com/Axylos) - Code snippet cited in the auth.js file.
