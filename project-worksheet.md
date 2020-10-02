# Project Overview

## Project Links

- [My github repo link](https://github.com/kimrass14/project2-react)
- [add your deployment link]()

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
- [Architecture](https://docs.google.com/drawings/d/1pzxqIVePfGaewHMTGc26Aj93EXsJi5kyexUHAKjm7Bk/edit?usp=sharing)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
