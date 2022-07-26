

![cover_page](https://user-images.githubusercontent.com/86845927/166130454-2e7c13db-d12c-4c7b-89df-3714f03d2cca.png)
# E-commerce in Staples style
## Introduction
This is a Ecommerce web application used <span style={font-style:italic; font-weight:bold;}> NextJS </span> & headlessCMS <span> Sanity </span>. In this project I mainly want to create a basic E commerce system, included view product => add Product to cart => handle payment.

## Endpoints



## Public Endpoints

<img width="500" alt="image" src="https://user-images.githubusercontent.com/86845927/166131179-8b29c55a-f3a2-4f38-90e7-492f82a543fb.png">

Design a good schema is important for db, 

<h2> comments </h2>
Leave the comments and share your ideas.


## Dynamic Product Pages

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/86845927/166128162-289527fc-fbed-4de9-8d3c-34c3ac5cf8f5.gif)
we need to fetch data form the headless CMS, we need to useusegetstaticProps & getstaticPaths in Nextj. So that we can use the data to generate dynamic product page.


## Cart

![cart](https://user-images.githubusercontent.com/86845927/166130969-f963b119-d914-4c4b-8dc2-59a8eae466c9.gif)

In this Project we mainly need to set user and cart as global elements, therefore I choose to use "useContext" but not redux. And simply save the data in array Object.

<h2> Strip </h2>

![strip](https://user-images.githubusercontent.com/86845927/166130963-dcc92564-9b1e-497a-b633-fa6d53423e55.gif)

using third party api can reduce many workload, in small ecommerce application using Payment Api like Strip or Square is more cost effective than build one by myself.
Strip Api is easy to use, just simply pass the product data and quantity by using json to the API. Strip Api will return status 200 / 4XX, 200 = success and error do some error handle. </p>

<h2> Special Thanks </h2>
JS Mastery :https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A
really thanks to JS Mastery provide many inspire ideas and correct skills and ways to excute
