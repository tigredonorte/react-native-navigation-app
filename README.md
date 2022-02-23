# React native playground

This repository was created to test my react native hability during a react native course that I'm doing. 

### About the course
If you want to do the same course, you can: [Access this course on udemy](https://www.udemy.com/course/react-native-the-practical-guide). I have a <strike>discount coupon named thom</strike> Just kidding, I'm not selling anything lol, but the course is good!

### If you whould like seeing all repositories related to this course
- [First App](https://github.com/tigredonorte/react-native-first-app)
- [Simple Game](https://github.com/tigredonorte/react-native-game-playground)

## Running

This repository uses expo. If you download it use yarn to install ```yarn add``` dependencies and 
```npm start``` to run the code locally. Remember to use ```expo install``` if it's something related to expo

## What does this app do?

This is a recipe app. It allows the user To filter recipies, display categories and save them as favorite.
This app is specifically made to improve my knowlege in react native navigation, redux and react native paper library

This app has 6 screens and it uses 3 types of navigation options: 
- Screens
- Tabs
- Drawer

The initial screen shows a **Category Page** that lists all available categories. You can click on it, then you'll navigate to a **Category's Page** where you can see a list with related meals. If yout click in one, you will navigate to the **Meals Page**. On that page you can check the ingridients and the recipes, also, you can add a recipe as favorite, clicking on the heart icon on the top of the page (you can toggle it clicking again)

You have two tabs on this app: The first is the Category Page itself, the second, it's the **Favorites Page**. It lists all favorites that you marked. You can click in one of them to navigate to the meals page.

On Drawer you have a header simulating that you're logged in and two links: one for the Categories page, other to the **Filters Page** where you can filter the meals list by:
- gluten free
- vegan
- Vegetarian
- Lactose free

On that page you can see how many meals you have using the current filter. I could have done this page on the drawer itself, however I've done it heve, just to practice the drawer's flow. When you toggle each filter, it automatically updates the reducer layer. Also, when you click on save, you navigate to the **Filtered Page** where you can check, all the filtered meals. You, obviously can navigate to the Meals page from here too (is the same component that lists itens).

## What I've learned with this repository

- Using and Configuring React Routes
- Using React native paper's library
- Using redux with react (I alread used [NGRX](https://ngrx.io/) with angular, It's the same concept).

## What I didn't learn with this repository

- Making Http requests with redux
- Debugging a react app

I'll learn it in the next repository!

## How this app looks like?

| <b>Category List Page</b>|
|:--:|
| ![category-page.jpg](/docs/images/1.png) |

| <b>Category List Page</b>|
|:--:|
| ![category-meals-page.jpg](/docs/images/2.png) |


| <b>Meals Page</b>|
|:--:|
| ![meals-page1.jpg](/docs/images/3.png) |
| ![meals-page2.jpg](/docs/images/4.png) |


| <b>Favorites Page</b>|
|:--:|
| ![favorite-page.jpg](/docs/images/5.png) |


| <b>Drawer</b>|
|:--:|
| ![drawer.jpg](/docs/images/6.png) |

| <b>Search Page</b>|
|:--:|
| ![search-page.jpg](/docs/images/7.png) |

| <b>Filtered Page</b>|
|:--:|
| ![filtered-page.jpg](/docs/images/8.png) |
