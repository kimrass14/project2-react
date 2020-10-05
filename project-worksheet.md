# Project Overview

## Project Links

- [My github repo link](https://github.com/kimrass14/project2-react)
- [My netlify link](https://project-2-react.netlify.app/)

## Project Description

I want to develop a news app that will allow users to see headlines upon inital opening of page. Users can browse article previews and bookmark them to read later. They can also browse articles by different categories such as general news, business, entertainment, health, science, sports and tech.

## API

[News API - US Top Headlines link](https://newsapi.org/v2/top-headlines?country=us&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53)

[News API - US Business link](https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53)

[News API - US Entertainment link](https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53)

[News API - US Health link](https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53)

[News API - US Science link](https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53)

[News API - US Sports link](https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53)

[News API - US Tech link](https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53)

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

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile wireframes](https://res.cloudinary.com/dzxytz23k/image/upload/v1601663309/SEI%20-%20Project%202/IMG-3794_so8m9z.jpg)
- [Laptop wireframe](https://res.cloudinary.com/dzxytz23k/image/upload/v1601663309/SEI%20-%20Project%202/IMG-3795_idmfjl.jpg)
- [Architecture](https://docs.google.com/drawings/d/1iy7YauR9sp2b4lV-bjIHMD1sanXL0K9Yw-xD2r5Xfxc/edit?usp=sharing)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

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
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will be the parent component to the seven category components and homepage component. Will contain navigation bar.|
| Homepage | Stateful and fetch headline news API |
| Business | Stateful and fetch business news API | 
| Entertainment | Stateful and fetch entertainment news API |
| Health | Stateful and fetch health news API | 
| Science | Stateful and fetch science news API |
| Sports | Stateful and fetch sports news API | 
| Tech | Stateful and fetch tech news API | 
| NewsListing | Stateful and renders listing of article previews based on which category is clicked on |
| Tile | Stateful and renders preview of individual article, including image, title and source |
| Article | Stateful and renders the full article of tile that was clicked on| 


| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating structure of components and linking | H | 2hrs| hrs | hrs |
| Navigation bar | H | 3hrs| hrs | hrs |
| Homepage component | H | 1hr| hrs | hrs |
| Business component | H | 1hr| hrs | hrs |
| Entertainment component | H | 1hr| hrs | hrs |
| Health component | H | 1hr| hrs | hrs |
| Science component | H | 1hr| hrs | hrs |
| Sports component | H | 1hr| hrs | hrs |
| Tech component | H | 1hr| hrs | hrs |
| NewsListings component | H | 2hr| hrs | hrs |
| Tile component | H | 2hr| hrs | hrs |
| Article component | H | 2hr| hrs | hrs |
| onClick of categories rendering news list extra time | H | 2hr| hrs | hrs |
| Responsiveness from mobile to laptop | H | 3hrs| hrs | hrs |
| Styling | H | 4hrs| hrs | hrs |
| Total | H | 27hrs| hrs | hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
