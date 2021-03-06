# React Crown Clothing - Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Initialize Project

In order to get the service-worker.js file, you will need to use pwa template:

npx create-react-app react-crwn-clothing --template cra-template-pwa

## Additional Packages

package allows you to natively compile .scss files to css
npm i node-sass

memoization package to stop reduce from running constantly when state changes

> npm i reselect

### React Router v5

[v5 Docs](https://v5.reactrouter.com/web/guides/quick-start)
npm i react-router-dom@^5.3.0

## Using .env File

[documentation](https://www.pluralsight.com/guides/how-to-store-and-read-configuration-files-using-react)

## Backend with Firebase

[console](https://console.firebase.google.com/)

use [firebase](https://firebase.google.com/) for:

> Authentication
> Database
> other

npm i firebase

[documentation](https://firebase.google.com/docs/reference/js/)

```text
If you are using a version of firebase that's greater than v8, you will encounter the import error

Attempted import error: 'firebase/app' does not contain a default export (imported as 'firebase').

The same will be true for other firebase imports that we use in this project!

There is an easy fix for this though, firebase includes backward compatibility. All you need to is change your import from firebase/app to firebase/compat/app. The same is true for all our other imports.

So from:
```

```javascript
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
```

to:

```javascript
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
```

### Firebase Database - Cloud Firestore

Set up firebase firestore!

> Firebase has added the additional option of realtime database but DON'T use that one! Make sure you select Cloud Firestore

## State with Redux

> npm i redux redux-logger react-redux

![Redux Flow Diagram](https://user-images.githubusercontent.com/25551945/154748109-17c768f9-117d-4899-9702-2d97ef3a14fa.png)

### Storage with Redux

> npm i redux-persist

## Checkout with Stripe

> npm i react-stripe-checkout

## CSS in JS - styled-components

> npm i styled-components

## Async Redux

Use redux-thunk middleware to intercept dispatched actions and introduce workflow to:

> preform additional work like:
>
> > get data from database
> > read from file
> > dispatch additional actions to reducers

install package

> npm i redux-thunk

## Redux Saga

install package

> npm i redux-saga

remove thunk middleware

## move client app into /client/ folder

### install axios

npm i axios

## 404 Illustrations

[Link](https://www.kapwing.com/404-illustrations)
