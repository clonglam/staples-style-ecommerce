

![cover_page](https://user-images.githubusercontent.com/86845927/166130454-2e7c13db-d12c-4c7b-89df-3714f03d2cca.png)
# E-commerce in Staples style
## Introduction
This is a Ecommerce web application used *NextJS* & *headlessCMS Sanity*. In this project I mainly want to create a basic E commerce system, included view product => add Product to cart => handle payment.
<img width="1247" alt="image" src="https://user-images.githubusercontent.com/86845927/180926802-8da0fac2-14f4-4a1c-b782-f0936da6ca0a.png">

## Endpoints
<img width="722" alt="image" src="https://user-images.githubusercontent.com/86845927/180925940-eb7d7a97-844d-4c8c-a1fa-4fb8f2542650.png">

## Data Schema
I want to keep it simple, so I only included basic Product info and User info in this project. Schema design as the below

<img width="638" alt="image" src="https://user-images.githubusercontent.com/86845927/180928692-f651bddf-845b-4534-882c-e0622ef6d8af.png">

## Feature
### Dynamic Product Pages

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/86845927/166128162-289527fc-fbed-4de9-8d3c-34c3ac5cf8f5.gif)
we need to fetch data form the headless CMS, we need to useusegetstaticProps & getstaticPaths in Nextj. So that we can use the data to generate dynamic product page.


### Cart

![cart](https://user-images.githubusercontent.com/86845927/166130969-f963b119-d914-4c4b-8dc2-59a8eae466c9.gif)

In this Project we mainly need to set user and cart as global elements, therefore I choose to use "useContext" but not redux. And simply save the data in array Object.

### Strip 

![strip](https://user-images.githubusercontent.com/86845927/166130963-dcc92564-9b1e-497a-b633-fa6d53423e55.gif)

using third party api can reduce many workload, in small ecommerce application using Payment Api like Strip or Square is more cost effective than build one by myself.
Strip Api is easy to use, just simply pass the product data and quantity by using json to the API. Strip Api will return status 200 / 4XX, 200 = success and error do some error handle. </p>

## Special Thanks
JS Mastery :https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A
really thanks to JS Mastery provide many inspire ideas and skills and ways to excute
