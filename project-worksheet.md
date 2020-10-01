# Project Overview

## Project Links

- [My github repo link](https://github.com/kimrass14/project2-react)
- [add your deployment link]()

## Project Description

I want to develop a site where a user can search and/or filter on a list of charity projects and non-profit organizations. They can click on an an organization of interest to learn more and find out how the user can donate to the cause. User can save their favorite organizations to revisit.

## API

[Active API link] (https://api.globalgiving.org/api/public/projectservice/featured/projects?api_key=df250065-c194-49e4-a1b9-3f35d4abf54c)
 - The data is for 10 featured projects that are refreshed hourly. The data includes information on the purpose of the project, location, a link to more details, etc.

```
<projects numberFound="10">
<project>
<active>true</active>
<activities>All donations to this fund will support relief and recovery efforts for Californians affected by the 2020 wildfires. Initially, the fund will help first responders meet survivors' immediate needs for food, fuel, clean water, medicine, and shelter. The fund will transition to support longer-term recovery efforts run by local, vetted organizations in the region. We monitor the impact on affected communities and work with partners on the ground to allocate funds to where they're needed most.</activities>
<additionalDocumentation>https://www.globalgiving.org/pfil/48572/projdoc.pdf</additionalDocumentation>
<approvedDate>2020-08-20T11:59:58-04:00</approvedDate>
<contactAddress>1110 Vermont Ave NW Ste 550</contactAddress>
<contactCity>Washingtonz</contactCity>
<contactCountry>United States</contactCountry>
<contactName>Sandrina da Cruz</contactName>
<contactPostal>20005</contactPostal>
<contactState>DC</contactState>
<contactUrl>https://www.globalgiving.org</contactUrl>
<countries>
<country>
<iso3166CountryCode>US</iso3166CountryCode>
<name>United States</name>
</country>
</countries>
<country>United States</country>
<dateOfMostRecentReport>2020-06-16T17:17:45-04:00</dateOfMostRecentReport>
<donationOptions>
<donationOption>
<amount>35</amount>
<description>emergency wildfire relief and long-term recovery support</description>
</donationOption>
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes]()
- [add link to your react architecture]()


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
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
