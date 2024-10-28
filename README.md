# Codex

## Links

- [Overview](#overview)
  - [Problem Space](#problem-space)
  - [User Profile](#user-profile)
  - [Features](#features)
- [Implementation](#implementation)
  - [Tech Stack](#tech-stack)
  - [Sitemap](#sitemap)
  - [Wireframes](#wireframes)
  - [Data](#data)
  - [Endpoints](#endpoints) 
- [Upcoming Features](#upcoming-features)
- [Instructions](#instructions)

## Overview

**Codex** is a feed-based platform where developers can discover, preview, and share reusable snippets of code. The name is an ode to "codex", which is the historical term for "book with pages" that replaced scrolls as primary modes for sharing knowledge (interestingly, it contains the word "code" which is fitting for this project!).

### Problem Space

Developers often look for pre-existing solutions to common problems, such as UI elements, useful functions, or code setups, and scavenge for solutions in places like Stack Overflow Q&As, blog posts, or generally text-heavy platforms. There are more targetted platforms for sharing code snippets, such as GitHub gists, but lack visual emphasis or an engaging experience. There exist platforms for sharing code snippets with visual emphasis, such as CodePen, but moreso focus on the coding environment rather than a user-driven sharing experience. 

Codex aims to fill a perceived gap in the global developer community by offering a scrolling-feed style, social media-like, experience for discovering and sharing code snippets through posts, effortlessly. 

### User Profile

- Developers of all levels of experience
- Full-stack developers who code using HTML, CSS, and JS will be targetted first for the purpose of this MVP
- Front-end developers might find this useful, due to being able to preview the output of code through images or short videos that post authors include in their posts
- Coding hobbyists may find this a good resource for discovering new features or elements to try out

### Features

- Main feed:
  - user can scroll through posts of latest code snippets shared by other users
  - user can like a post
  - user can un/bookmark a post
  - user can click on the author's username/avatar to view posts by that author
  - user can click the post to find out more information
- Selected post:
  - user can see a live preview of the provided html, css, js code
  - user can edit the provided code and have a live preview of it
  - user can like the post
  - user can un/bookmark the post
  - user can leave a comment
  - user can click on the author's username/avatar to view other posts by that author
- Bookmarks page:
  - if there are no bookmarked posts, user is prompted to go back to the feed to bookmark a post
  - if there are bookmarked posts, user can see them on this page  
- Profile page:
  - user can view all posts authored by a particular user
- Post page:
  - user can input data in a form for a new post to submit
  - user can have a live preview showing the ouput of the provided code
  - user can submit the form and the submission will be seen as the first/newest post on the main feed

## Implementation

### Tech Stack

- TypeScript
- React
- Node
- Express
- MySQL
- Client libraries:
  - axios
  - react-dom
  - react-router-dom
  - sass
- Server libraries:
  - cors
  - dotenv
  - express
  - knex
  - multer
  - mysql2

### APIs

No external APIs are used.

### Sitemap

- Main feed
- User profile
- Submit post
- Bookmarked posts

### Wireframes

Unstyled sketches of the initial idea:

[Feed](https://wireframe.cc/bDiAQR)

[Individual Post](https://wireframe.cc/uFSz1O)

### Data

![db_diagram](https://github.com/user-attachments/assets/5ee0d1fc-29d3-46af-be1e-2cf79e8e3c01)

### Endpoints

**GET /posts**

Response: 
```
[
    {
        "id": 1,
        "author": "Isaiah Teran",
        "timestamp": 1729063825,
        "title": "Three dots loading html animation",
        "media": (firebase file url),
        "likes": 45,
        "comments": [
            "id": 1,
            "author": "Ren Delmor",
            "comment": "This is exactly what I needed!"
          ]
    },
    ...
]
```

**GET /posts/:id**

Response: 
```
{
    "id": 1,
    "author": "Isaiah Teran",
    "timestamp": 1729063825,
    "title": "Three dots loading html animation",
    "media": (firebase file url),
    "description": "...",
    "html": "...",
    "css": "...",
    "js": "...",
    "likes": 45,
    "comments": [
        "id": 1,
        "author": "Ren Delmor",
        "comment": "This is exactly what I needed!"
      ]
}
```

**POST /posts**

Post body: 
```
{
    "author": "Isaiah Teran",
    "title": "Three dots loading html animation",
    "media": "...",
    "html": "...",
    "css": "...",
    "js": "..."
}
```

Response: 
```
{
    "id": 1,
    "author": "Isaiah Teran",
    "timestamp": 1729063825,
    "title": "Three dots loading html animation",
    "media": "...",
    "html": "...",
    "css": "...",
    "js": "..."
}
```

**POST /posts/:id/comments**

Post body: 
```
{
    "author": "Ren Delmor",
    "comment": "This is exactly what I needed!"
}
```

Response: 
```
{
    "id": 1,
    "author": "Ren Delmor",
    "timestamp": 1729063825,
    "comment": "This is exactly what I needed!"
}
```

**PUT /posts/:id/like**

Response: 
```
{
    "id": 1,
    "author": "Isaiah Teran",
    "timestamp": 1729063825,
    "title": "Three dots loading html animation",
    "media": "...",
    "description": "...",
    "html": "...",
    "css": "...",
    "js": "...",
    "likes": 45,
    "comments": [
        "id": 1,
        "author": "Ren Delmor",
        "comment": "This is exactly what I needed!"
      ]
}
```
## Upcoming Features

- Integrate an explorative/search functionality where users can specifically indicate the type of content they want to see, and the feed will adjust accordingly
- Allow the feed to be sorted by newest or most popular (by likes)
- Add authorization and login features, using jwauth and bcrpyt
- Deployment using Netlify, Heroku, and JawsDB

## Instructions

### How to run Codex locally

A. Set up the server
   1. [Download the zip file of the server repository](https://github.com/mariavinaq/codex-server)
   2. Open the folder in VSCode
   3. Open the terminal and use command `npm install`
   4. Create a `.env` file using the `.env.example`
   5. Create a new schema on MySQL Workbench using the same `DB_NAME` from .env
   6. In the terminal, use command `npm run migrate`
   7. Then, use command `npm run seed`
   8. Then, use command run `npm start`
   9. Server should now be successfully running
       
B. Set up the client
   1. Download the zip file of this repository
   2. Open the folder in VSCode
   3. Open the terminal and use command `npm install`
   4. Then, use command `npm run dev`
   5. Client should now be successfully running, and connected to the server
