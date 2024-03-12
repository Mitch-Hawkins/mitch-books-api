# Book Me Up! Book Search Engine Project

## Demo & Snippets

- Hosted Link: https://65adf63cbfe9a7efdb25c35c--glistening-jalebi-66ac47.netlify.app/

- A screenshot of the main search engine screen, featuring the dynamic background
  ![alt text](<screenshots/Screenshot 2024-03-12 at 12.29.21 pm.png>)
- A view from the search results section of the website as a user searches for 'Harry Potter'
  ![alt text](<screenshots/Screenshot 2024-03-12 at 12.29.33 pm.png>)

- An example of the use of the universal modal with information about a Harry Potter book
  ![alt text](<screenshots/Screenshot 2024-03-12 at 12.29.41 pm.png>)

---

## Requirements / Purpose

- This project will require both REACT and Asynchronous programming.
  The aim is for the user to be able to search for a book inside the Google Books database and to be able to get more details about a certain title.
- Create a page that allows users to search for books
  Page should include the following:

      - Header section introducing the page
      - Form containing a text input and a submit / search button

      - A grid of books

  Instructions:

- When the submit button is clicked the program needs the requested books from the Google books API using the input value as the query string
- The books that are received should be rendered in the books grid.
- Each book in the grid should have an image, author, title and description
- The grid should be responsive on different screen sizes

---

## Build Steps

- Clone the repository, and from the directory, run the following commands

```
npm install
```

```
npm run dev
```

---

## Design Goals / Approach

- I wanted to incorporate some sort of universal modal using React Context, as I was unfamiliar with this approach and wanted to force myself to learn
- Google Books API provides a very loose results estimate for pagination, so pagination had to be implemented in a slightly different way than standard pagination implementation
- I wanted a polite and friendly user interface, one that reminds users of official search engines and their cleanliness and functionality, sites like google scholar and bing, etc.
- I had the idea for a dynamic moving background based off a engingeered API call that appears to be a constantly rotating selection of popular book titles

---

## Features

- Dynamic book background that utilises an engineered API call to portray a semmingly endless cycle of popular book titles that blend into the background of the site. This adds a stand out charm to the site whilst also adding to the user experience through the project goals listed earlier.
- A universal modal that is filled with information a book selected by the user. Information is collected via a get request from the Google Books API
- Full implementation of Get Request functionality provided by the google books API to get book information.
- Error Handling to provide user feedback to the main screen, as Google Books will often reach its quota for requests for the day.

---

## Known issues

- Within the dynamic background, occasionally a 'missing image' will appear as a book cover, distracting from the illusion. This can be fixed by a combination of a more suitable placeholder image when the book image is unavailable, or with a more refined API prompt for the background books.
- Some Enlargened book photos will have a slightly pixelated appearance, as this is the largest size provided by the google books api

---

## Future Goals

- Update the styling of the website slightly to incorporate slightly better buttons, headings and fonts. The current styling can appear slightly too 'default' in certain viewings and situations

---

## Struggles

- Animating the background was an obvious challenge. An animation/css keyframe trick was used to have the books appear to be infinite, whilst its really just re moving and re dispaying the samme list of 40 books over and over again
  - Further more, having the background look consistent and professional at multiple different website sizings was a MASSIVE struggle

---
