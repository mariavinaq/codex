# Codex

## Overview

**Codex** is a feed-based platform where developers can discover, preview, and share reusable snippets of code. The name is an ode to "codex", which is the historical term for "book with pages" that replaced scrolls as primary modes for sharing knowledge (interestingly, it contains the word "code" which is fitting for this project!).

### Problem Space

Developers often look for pre-existing solutions to common problems, such as UI elements, useful functions, or code setups, and scavenge for solutions in places like Stack Overflow Q&As, blog posts, or generally text-heavy platforms. There are more targetted platforms for sharing code snippets, such as GitHub gists, but lack visual emphasis or an engaging experience. There exist platforms for sharing code snippets with visual emphasis, such as CodePen, but moreso focus on the coding environment rather than a community-driven sharing experience. 

Codex aims to fill a perceived gap in the global developer community by offering a scrolling-feed style, social media-like, experience for discovering and sharing code snippets through posts, effortlessly. 

### User Profile

- Developers of all levels of experience
- Full-stack developers who code using HTML, CSS, and JS will be targetted first for the purpose of this MVP
- Front-end developers might find this useful, due to being able to preview the output of code through images or short videos that post authors include in their posts
- Coding hobbyists may find this a good resource for discovering new features or elements to try out

### Features

- Main feed where users can scroll through posts of latest code snippets shared by other users
  - By default, the posts shown will be a mix of topics/functions
  - This will have an explorative/search functionality where users can specifically indicate the type of content they want to see, and the feed will adjust accordingly
  - The feed can be sorted by newest or most popular (by likes)
- Each post in the feed will contain:
  - a consise title (50-70 characters for readability)
  - an image or short video to showcase some sort of output of the code
  - author name (links to profile)
  - number of likes and comments
  - save/bookmark function
- When a post is clicked, additional information will be shown, such as:
  -  code for HTML, CSS, and/or JS that the user can easily copy to the clipboard
  -  description (if needed) provided by author
  -  the post comments and ability to post a comment
  -  Note: the post does not provide a live preview of the code (such as that of CodePen), and it is up to the author to provide their own image/screenshot or video of the code output
- When a user profile is clicked, it will show some user information and bio, and a feed of posts that are authored by that user
- When logged in, users can:
  - Have their own profile
  - Author a post
  - Like a post
  - Comment on a post
  - Be able to save/bookmark a post, and be able to view all their saved posts

## Implementation

### Tech Stack

- SASS
- React.js
- Node.js
- Express
- MySQL
- Netlify
- Heroku
- JawsDB

### APIs

No external APIs will be used.

### Sitemap

- Main feed
- Register or login
- User profile
- Submit post
- Saved posts

### Wireframe (Sketches)

[Feed](https://wireframe.cc/bDiAQR)
[Individual Post](https://wireframe.cc/uFSz1O)

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
