![LandingPage](https://github.com/silviaparadag/module-3-evaluation/assets/130361802/14a35a75-1b75-439b-a23c-638aa2994d78)


# Rick & Morty Characters Finder

This exercise  has the following main objectives:
- Create a web browser with Rick & Morty Characters.
- Filter and search options for an easy location of characters.
- A detailed page for each character.


In this web you have an initial landing page that invites you to access the browser. In the browser home page, you can use a search engine to find your favorite characters, and you can also filter by origin and species.



&nbsp;

## The following issues are done: 

1. **Landing page**. When loading the page, you have and intro that invites the user to looking for more information.
2. **Main/home page**. Basic design with character list, and a form with a search input to search characters by name and a select for filter characters by origin an species. In this list of articles the user can see in each character card: a photo, name, origin plante and species. With clicking in each card, tt's possible having more details, as number of episodes and status. 
3. All the character info is **fetching by an API** request to the following website: https://rickandmortyapi.com/documentation
4. This page is divided into **several components**, including some intermediate ones.
    The most remarkable components are:
    - Filters.js for the form components children: FilterByName.js, FilterByOrigin.js and FilterBySpecies.js
    - CharacterList.js for the whole list of characters, with a children EachCharacterData.js
    - CharacterDetailCard.js with a different route for the detailed information character. 
    - NotFoundPage for a compatible URL if the link is broken, whit an error message, and the option to go back to the home page.
5. Quality details as form control, error message for unexisting characters, etc.
6. Some of the required bonus:
    - As the URL mentioned above.
    - Alphabetic order of the fetch.
    - Extra filters.
    - Design issues: mobile first, responsive, icons, etc.
7. Other extras:
    - Landing page. 
    - Local storage.
    - Testing
    - Loader component.
  

&nbsp;
## ⚒️ | Tools 

- `HTML`
- `CSS, Saas`
- `JavaScript`
- `React`
- `Visual Studio Code`
- `GitHub`
- `GitHub Pages`

&nbsp;

## 🎲 | Getting started

1. To start the project, download or fork the repository.

2. To install NPM packages & dependencies, run the following line in your terminal:
~~~
npm install
~~~

3. To be able to view the page in the browser, run:
~~~
npm start
~~~

> **Note** In this project, we can find the following files and folders:
>- The folder 📂 `src/` is the files of this web page: HTML, SCSS, JavaScript and images.
>- The folders 📚 `public/` and `docs/`, are generated automatically when we start the project. GULP reads the files found in the src/ folder, processes them and then generates them inside `public/` and `docs/`.
>- Other 📝 files found in the repository root as 'gulpfile.js', 'package.json', etc. are configuration files and we don't need to modify them.
>-  To publish on GitHub Pages and generate your page for production run the command: `npm run githubpages`



&nbsp;

   ### 💫 and... That's all folks ! 💫


&nbsp;

*"Welcome to club, pal."* Rick

© Silvia Parada | 2023 
