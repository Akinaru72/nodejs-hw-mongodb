# Homework №4 — Node.js

## Pagination, Sorting, Filtering and Validation

Welcome! 👋

This is your fourth homework assignment in the **Node.js** course. You are doing a great job with the practical tasks — and we are confident that you will successfully complete this one as well.

---

## 🎯 During this assignment you will:

- learn how to implement **pagination**, which allows you to efficiently work with large data sets and improve application performance;
- master **sorting data by a specific property**, which will help you better understand sorting algorithms and their impact on performance;
- learn **data filtering techniques**, which will allow you to build a more dynamic and user-friendly interface;
- deepen your knowledge of **input data validation**, which ensures safe request handling and helps prevent possible errors.

These skills will become an important addition to your professional toolkit and will help you become more confident in the field of web development.

**So — let’s start learning! 🚀**

---

## 📝 Task

You need to continue developing the application for working with a contacts collection.

You must add:

- pagination;
- sorting by name;
- contacts filtering;
- input data validation.

---

## ✅ Acceptance criteria

- The task is completed in the **`hw4-validation`** branch.
- When submitting the homework, you provide:
  - a link to the GitHub repository with the source code;
  - a link to the deployed project on [**render.com**](https://render.com/) (the `hw4-validation` branch).
- There are no errors when running the project.
- The file structure of the application follows the structure specified in the course materials.

---

## 🪜 Step-by-step instructions

---

### Step 1

Create a **`hw4-validation`** branch from the **`hw3-crud`** branch  
and complete this assignment in the `hw4-validation` branch.

---

### Step 2

Improve input data handling (validation) in your application.

To do this:

- create a `validateBody` function that:
  - accepts a validation schema;
  - returns middleware for validating the request `body`;
- add validation for the following routes:
  - `POST /contacts`
  - `PATCH /contacts/:contactId`
- build validation schemas based on the way your MongoDB model properties are defined;
- for all fields of type `string`, add the following constraints:
  - minimum length — **3 characters**;
  - maximum length — **20 characters**;
- add the `isValidId` middleware to validate `id` and use it in all routes that work with `id`.

---

### Step 3

Add pagination to the following route: GET /contacts

Use the following query parameters:

- `page` — page number (default is `1`);
- `perPage` — number of items per page (default is `10`).

---

### 📦 Server response requirements

Inside the `data` property, the server response must contain:

- `data` — an array of contacts from the current page;
- `page` — current page number;
- `perPage` — number of items per page;
- `totalItems` — total number of contacts in the collection;
- `totalPages` — total number of pages;
- `hasPreviousPage` — indicates whether a previous page exists;
- `hasNextPage` — indicates whether a next page exists.

---

### 📄 Server response format

```json
{
  "status": 200,
  "message": "Successfully found contacts!",
  "data": {
    "data": [
      /* contacts */
    ],
    "page": 2,
    "perPage": 4,
    "totalItems": 6,
    "totalPages": 2,
    "hasPreviousPage": true,
    "hasNextPage": false
  }
}
```

### Step 4

Add the ability to specify the sorting order of contacts by name in the response for the following route: GET /contacts

Use the following query parameters:

- `sortBy` — specifies the property by which the data should be sorted;
- `sortOrder` — specifies the sorting order:
  - `asc` — ascending order (default value);
  - `desc` — descending order.

---

### Step 5 (optional)

Optionally, add the ability to filter contacts in the response for the following route: GET /contacts

using these query parameters:

- `type` — represents the contact type (the value of the `contactType` property);
- `isFavourite` — indicates whether the contact is marked as favourite.

---

### Step 6

Change the branch used to deploy your project on **render.com** to the **`hw4-validation`** branch.  
Make sure that all changes have been successfully deployed.

---

⚠️ **Important!**

Before submitting your homework for mentor review, make sure to check that your deployed application works correctly on [**render.com**](https://render.com/).

In particular, make sure that:

- all required environment variables (`env`) were added during deployment;
- the backend starts correctly;
- all implemented routes work as expected according to the task requirements.
