# Frontend-helper

In this project you will find all frontend stuff that help frontend developers (By Vue.js), Actually this project now is in beta version, Data based on JSON and in clear files, if you are a junior or mid-level or senior or expert you can add your resources and help other developers by add it on JSON file, it's built to be easy in contribute for all developers, You can also add features we still need search and sure resources in every item in homepage

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
## How it work?

There are 5 files .json you will find it at `src/data/...here`, every file it contains objects data, We display our data like items and components and books and tutorial based on this data and related links, If you want to share data in another item, just write the name like this.

```bash
# before
related: ["javascript"] #this will display in javascript only now

# after
related: ["javascript", "webpack"] #now this object share in javascript item and webpack item
```

#### items.json
This file contains that items display on HomePage, and overview that display inside every item, so you can take this file as a base that we use to add our items.

#### components.json
Here we add our Related links, there is array called `link` in every object that contain target and value that display in list, So you can add more than list with links in every list that display on item.

#### books.json
Here we add books with related links, but every object is a book to can share it between components

#### tutorials.json
Here we add tutorials or courses and contain related array so you can share it between components.

#### conference.json
Here we add conferences data with date and location every object is conference.

## How we sort items in files?

We use a primitive way, We add 2 break lines after every item as we showed in `components.json`, `books.json` and `tutorials.json`, I know that's crazy but this project for everyone, I think to use smart way by DB or something updated automatically by form, but I need to catch contributors too that display in /Contributors + This project for everyone, If you beginner level you can add resources and start, About sorting we sort items as display in homepage, if you see `components.json`, `books.json` and `tutorials.json` you will find html first, css, svg, ...etc as display items in homepage or as items sorted in `items.json` file.

## Contribute?

It's easy!, This project built to be for everyone and levels so you can contribute by resources or features, Just open one of JSON files and add your resource, /Contributers page that display who contribute in frontend-helper repo automatically.
