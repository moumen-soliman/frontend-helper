# Frontend-helper

In this project you will find various frontend resources that will help out frontend developers (primarily those using Vue.js). Its a data-driven project, obviously, and the project uses JSON files with a clear and simple format.

Regardless of whether you are a junior, mid-level, senior or expert developer you can add your own resources to the relevant JSON files, and create a PR.

This project is built so as to easy to contribute to, for all developers, of all levels. You can also add features! We still need search and there is always room for more resources. So get contributing now!

Note: This project is currently in beta.

### Project url: https://moumen-soliman.github.io/frontend-helper/

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080/frontend-helper/
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## How does it work?

There are 5 .json files which you will find located at `src/data/*`. Each file contains simple JSON object data. We display this data as `items`, `components`, `conference`, `books` and `tutorials` respectively.

To ensure your data gets surfaces properly, you simply add a number of relevant tags to the `related` property. For books and tutorials data this might look like:

```bash
# before
related: ["javascript"] #this will display in javascript only

# after
related: ["javascript", "webpack"] #now this object will appear in both javascript and webpack
```

#### items.json
This file contains the items to display on the HomePage, and in the associated overview that displays alongside every item when clicked.

#### components.json
Here we add our Related links, there is an array called `link` in each object that contains target and value fields which display in the related links list.

#### books.json
Here we add books with related links and each object is a book which can be shared between components

#### tutorials.json
Here we add tutorials or courses, each of which contain a related array and again can be shared between components

#### conference.json
Here we add conferences with both date and location information.

## How do we sort the items in each file?

We use a rather primitive approach at the moment, just to get things going. We add 2 line breaks after every item as shown in `components.json`, `books.json` and `tutorials.json`. I know that seems a little crazy but this project is for everyone so I wanted to make it accessible, initially.

The ideal solution will be based around a much improved approach to search and sorting and the hope is that contributors will help out and make this a reality! So get coding!

## Contribute?

Contribution is super easy! This project was built for anyone and everyone of all levels so people can contribute to resources or features (or both!). Just fork the project, open one of the JSON files and add your favourite/suggested resources and then create a PR with your additions.

Contributers are automagically added to the Contributors page for all to see. What more could you possibly want!
