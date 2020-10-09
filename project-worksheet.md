# Project Overview

## Project Links

- [My github repo link](https://github.com/kimrass14/project2-react)
- [My netlify link](https://project-2-react.netlify.app/) Lesson learned: the free version of the News API is only available locally and is not deployable.

## Project Description

I developed a news app that provides a variety of up to date news to the user. Upon initially opening the app, the user will see a preview of the headlines for that day. Users can also view a listing of articles by category (i.e. health, sports, business, etc.) or do a keyword search for a specific topic. At any point the user can click on the preview to go to the full article in a new tab. As the user browses the article previews they can click the bookmark icon which saves the article to read later and are aggregated on the Saved page. If the user changes their mind about bookmarking the article, they can click the bookmark icon again and it will be removed from the Saved articles list. When the user is ready to read their saved articles, they can navigate to the Saved page and click on the preview which directs them to the full article. Once they have read the article, an 'x' button can be clicked to remove it from the Saved list.

## API

[News API - US Top Headlines link](https://newsapi.org/v2/top-headlines?country=us&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53)

[News API - US Business link](https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53)

[News API - US Entertainment link](https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53)

[News API - US Health link](https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53)

[News API - US Science link](https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53)

[News API - US Sports link](https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53)

[News API - US Tech link](https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53)

[News API - by keywork link (keyword example: chicago)](https://newsapi.org/v2/everything?q=chicago&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53)

```
{
"status": "ok",
"totalResults": 38,
"articles": [
{
"source": {
"id": "cnn",
"name": "CNN"
},
"author": "Ray Sanchez, CNN",
"title": "Breonna Taylor grand jury audio recordings released to the public - CNN",
"description": "The highly anticipated audio recordings of the secret grand jury proceedings in the Breonna Taylor case were submitted to a Kentucky court and made public Friday following a two-day delay.",
"url": "https://www.cnn.com/2020/10/02/us/breonna-taylor-grand-jury-recordings/index.html",
"urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/200930011154-daniel-cameron-file-super-tease.jpg",
"publishedAt": "2020-10-02T16:06:00Z",
"content": "(CNN)The highly anticipated audio recordings of the secret grand jury proceedings in the Breonna Taylor case were submitted to a Kentucky court and made public Friday following a two-day delay. \r\nAtt… [+3694 chars]"
},
{
"source": {
"id": null,
"name": "New York Times"
},
"author": "Matt Phillips, Eshe Nelson",
"title": "Stock Markets Fall After Trump's Positive Virus Test - The New York Times",
"description": "Mr. Trump’s disclosure injected a huge amount of uncertainty into financial markets, and uncertainty is what investors like least.",
"url": "https://www.nytimes.com/2020/10/02/business/trump-covid-stock-market.html",
"urlToImage": "https://static01.nyt.com/images/2020/10/02/world/02virus-trump-markets-1/02virus-trump-markets-1-facebookJumbo.jpg",
"publishedAt": "2020-10-02T15:50:00Z",
"content": "Even with markets muted reaction, the announcement only added to the deep uncertainty already facing the economy: The pandemic has killed more than one million people around the world, and Mr. Trump … [+1325 chars]"
},
```


## Wireframes

- [Mobile wireframes](https://res.cloudinary.com/dzxytz23k/image/upload/v1601663309/SEI%20-%20Project%202/IMG-3794_so8m9z.jpg)
	- The header / navigation bar is fixed to the top in all views. Each view provides a listing of the articles in a preview form. The preview shows the image and title from the API. Upon clicking the preview, the user is redirected to the full article on another tab. The preview also has a button that can be clicked to save the article. A dropdown menu is in the nav bar to view news by different categories. There is also a Saved component that has a form with an input field and button to search keywords within the API returning related articles.
- [Laptop wireframe](https://res.cloudinary.com/dzxytz23k/image/upload/v1601663309/SEI%20-%20Project%202/IMG-3795_idmfjl.jpg)
	- The same functionality as the mobile view. Use grid or flex to include more article previews in the width of the page. The previews also include a brief description of the article. The categories are image buttons along the left side of the page instead of in the nav bar dropdown.
- [Architecture](https://docs.google.com/drawings/d/1iy7YauR9sp2b4lV-bjIHMD1sanXL0K9Yw-xD2r5Xfxc/edit?usp=sharing) 

#### MVP
- Confirm retrieval of API data
- Render news article previews (image, title, source)
- In navigation, create routes / links to Homepage component and each of the seven categories
- onClick of a category, re-render of corresponding news listing
- onClick of article preview, link to Full Article component
- Create mobile first and make responsive
- Deploy site to Netlify

#### PostMVP

- Add another component containing a form to conduct keyword searches and return results
- Add bookmark button to article preview that saves article and pushes to Saved articles component
- Saved articles component renders listing of bookmarked articles

## Components

| Component | Description | 
| --- | :---: |  
| App | This will be the parent component to the category components, homepage component, search and saved components. Will contain navigation bar.|
| Homepage | Stateful and fetch headline news API |
| Business | Stateful and fetch business news API | 
| Entertainment | Stateful and fetch entertainment news API |
| Health | Stateful and fetch health news API | 
| Science | Stateful and fetch science news API |
| Sports | Stateful and fetch sports news API | 
| Tech | Stateful and fetch tech news API |
| Search | Stateful and fetches news API based on keyword input into search form |  
| NewsListing | Stateful and renders listing of article previews based on which category and search is submitted |
| Saved | Stateful and maintains list of articles saved |


| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating structure of components and linking | H | 2hrs| .5hrs |
| Navigation bar | H | 3hrs | 2.75hrs |
| Homepage component | H | 1hr | .5hrs |
| Business component | H | 1hr| .25hrs |
| Entertainment component | H | 1hr| .25hrs |
| Health component | H | 1hr| .25hrs |
| Science component | H | 1hr| .25hrs |
| Sports component | H | 1hr| .25hrs |
| Tech component | H | 1hr| .25hrs |
| NewsListings component | H | 2hr| 2.1hrs |
| Saved component | H | 2hr| 4.5hrs |
| Search component | H | 2hr| 2.1hrs |
| Responsiveness from mobile to laptop | H | 3hrs| 4.6hrs |
| Styling | H | 4hrs | 4.75hrs |
| Deploying and setup | H | 0hrs| 1.5hrs |
| Code clean up and worksheet | H | 0hrs| 2hrs |
| Total | H | 25hrs | 25.8hrs |

## Additional Libraries
  - Bootstrap: dropdown menu in nav bar to select different categories
  - Font Awesome: for icon buttons saving articles and removing articles from list
  - Router: to create links and routes for components

## Code Snippet

```
//onClick of article preview bookmark icon saves article. If click same article again, removes it from saved list. The array.indexOf() tests if the item and items in array are EXACTLY the same and therefore it will not recognize when you are comparing objects. Needed to find the index of the article clicked on, so used array.findIndex() and compared just the title to find and exact match and then return the object index in the array.
 const handleSave = (article) => {

      const newSaved = [...savedList]
      let articleIndex = newSaved.findIndex((item) => article.title === item.title)

      if (articleIndex >= 0) {
        newSaved.splice(articleIndex, 1)
      } else {
        newSaved.push(article)
      }
      setSavedList(newSaved)

//Shows the current date - so simple, but it took me a while to figure out!
const [currentDate, setCurrentDate] = useState('')

  React.useEffect(() => {
    let d = new Date();
    let n = d.toDateString();
    setCurrentDate(n)
  }, [])
```
