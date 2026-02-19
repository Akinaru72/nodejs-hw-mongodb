# Homework — CRUD for Contacts (Node.js)

Welcome! 👋

Get ready for the next stage in your journey to mastery!  
This **Node.js** assignment will take you to new heights in understanding full-featured backend development.

This time, you will extend your application for managing a collection of contacts, adding the ability to:

- add new contacts;
- delete contacts;
- update existing contacts.

In this assignment, you'll get not only hands-on practice with Node.js but also learn best development practices, such as:

- building routes;
- using controllers;
- error handling.

Your application will be ready to respond to HTTP requests and interact with other systems.

Don't forget to save your changes on GitHub and deploy your project on [**render.com**](https://render.com/).  
This is your chance to apply your skills in practice and see them in action.

Step-by-step instructions will help you master all aspects of this assignment, and each successfully completed step will give you more confidence and experience in your developer career.

**Don't waste time — go practice! 🚀**

---

## Assignment

You need to continue developing your application for managing a collection of contacts.

Add the following functionality:

- adding new contacts;
- deleting contacts;
- updating existing contacts.

---

## Acceptance Criteria

- The assignment is completed on the **hw3-crud** branch.
- When submitting your homework, include:
  - a link to the source files on GitHub;
  - a link to the deployed project for this homework (branch **hw3-crud**) on [**render.com**](https://render.com/).
- The code runs without errors.
- The application file structure matches the structure provided in the course materials.

---

## Step-by-Step Instructions

### Step 1

Create a branch **hw3-crud** from **hw2-mongodb** and complete this assignment in the **hw3-crud** branch.

Organize routing in your application:

- Move the route definitions from  
  `src/server.js`  
  to  
  `src/routers/contacts.js`;

- Move the controller logic from  
  `src/server.js`  
  to  
  `src/controllers/contacts.js`.

---

### Step 2

Improve error handling in your application.

To do this:

1. Add the dependency:

[http-errors](https://www.npmjs.com/package/http-errors)

2. Create a middleware file:

src/middlewares/errorHandler.js

3. Import and apply `errorHandler` in:

src/server.js

The `errorHandler` middleware should accept **four arguments**.

When an error occurs, it should send a response to the client with status **500** and an object like this:

```js
{
  status: 500,
  message: "Something went wrong",
  data:
    // the specific error message obtained from the error object
}
```

Create the file `src/middlewares/notFoundHandler.js` and apply the `notFoundHandler` middleware in `src/server.js`.  
This middleware is responsible for handling requests when a client accesses a non-existent route.

`notFoundHandler` should use [**http-errors**](https://www.npmjs.com/package/http-errors) to create an error with status **404** and the message **"Route not found"**.

---

Create the file `src/utils/ctrlWrapper.js` and apply the `ctrlWrapper` function in `src/routers/contacts.js`.  
This function will act as a wrapper for controllers in your Express application, automatically handling errors that may occur during request execution.  
Inside the wrapper, call `next(err)` if an error occurs to forward it to the `errorHandler` middleware.

---

For the route `GET /contacts/:contactId`, if the contact is not found, use [**http-errors**](https://www.npmjs.com/package/http-errors) to create an error with status **404** and message **"Contact not found"**:

```js
httpErrors(404, 'Contact not found');
```

### Step 3

Create the route `POST /contacts` for creating a new contact.

The request body should include the following properties:

- `name` — required
- `phoneNumber` — required
- `email` — optional
- `isFavourite` — optional
- `contactType` — required

Handling this route should include:

- registering the route in `src/routers/contacts.js`;
- creating a controller for this route in `src/controllers/contacts.js`;
- creating a service in `src/services/contacts.js`.

The server response in case of successful creation should have status **201** and return an object like:

```js
{
  status: 201,
  message: "Successfully created a contact!",
  data:
  // the newly created contact data
}
```

### Step 4

Create the route `PATCH /contacts/:contactId` to update an existing contact.

The request body may include the following properties (all optional):

- `name`
- `phoneNumber`
- `email`
- `isFavourite`
- `contactType`

Handling this route should include:

- registering the route in `src/routers/contacts.js`;
- creating a controller for this route in `src/controllers/contacts.js`;
- creating a service in `src/services/contacts.js`.

The server response in case of successful update should have status **200** and return an object like:

```js
{
  status: 200,
  message: "Successfully patched a contact!",
  data:
  // the updated contact data
}
```

If a contact is not found, use **http-errors** to create an error with status **404** and message **"Contact not found"**:

```js
httpErrors(404, 'Contact not found');
```

### Step 5

Create the route `DELETE /contacts/:contactId` to delete an existing contact.

Handling this route should include:

- registering the route in `src/routers/contacts.js`;
- creating a controller for this route in `src/controllers/contacts.js`;
- creating a service in `src/services/contacts.js`.

The server response in case of successful deletion should have status **204** with no response body.

If the contact is not found, use [**http-errors**](https://www.npmjs.com/package/http-errors) to create an error with status **404** and the message: `"Contact not found"`.

```js
httpErrors(404, 'Contact not found');
```

### Step 6

Switch the branch from which your project is currently deployed on [**render.com**](https://render.com/).  
Make sure your changes are successfully deployed.

---

It is very important to check the functionality of your deployed application on [**render.com**](https://render.com/) before submitting your homework for mentor review.

Pay attention:

- If you forgot to add environment variables (env) during deployment, the deployed backend will not work.
- Make sure all backend routes you created are working as expected according to the assignment.

---

**Live page:** [GitHub Pages](https://nodejs-hw-mongodb-03-i3as.onrender.com)
