# GraphQL-Intro

--> GraphQL or Graph Query Language is a way of writing the schema of the database in such a way that performing operations on data becomes less expensive and fast as compared to other methods. 
This repository contains the GraphQL basics and is enough to understand how to make schemas and how to perform CRUD (create, read, update, delete) operations with GraphQL. 

--> Libraries used :
  - @apollo/server - Used for creating server for working with GraphQL queries.
  - @apollo/server/standalone - for working with project that dont require any kind of server configuration like NodeJs server. It helps to get started with apollo server.
  - graphql-tag - For parsing GraphQL queries.

--> Steps to run the project :

  After cloning, move to the index.js file and run command node index.js. the server will be started, you can test the API through [Apollo SandBox](https://studio.apollographql.com/sandbox/explorer/)

--> Preview of the functionality :

  - Data from Games table and Authors table.
  ![db-tables-data](https://github.com/siddhapurahet/GraphQL-Intro/assets/84630752/372d916d-17ac-473b-b23b-00fd05c2764f)


  - Data from Reviews table and Authors table.
  ![customized-data](https://github.com/siddhapurahet/GraphQL-Intro/assets/84630752/d0ff0fee-b064-4127-b60b-39b434776b73)


  - Fetchind data through parameter (id) from Reviews table.
  ![fetching-by-parameter](https://github.com/siddhapurahet/GraphQL-Intro/assets/84630752/fa112b83-a90f-440b-b656-730628df9489)


  - Connecting Games and Review table and fetching data through parameter (id) from games and later from Reviews table matching the same id.
  ![connected-game-review-table](https://github.com/siddhapurahet/GraphQL-Intro/assets/84630752/ad4b17a2-fbb3-4af5-b534-85737d07b785)


  - Connecting Author and Review table and fetching data through parameter (id) from Author and later from Reviews table matching the same id.
  ![connected-author-review-table](https://github.com/siddhapurahet/GraphQL-Intro/assets/84630752/96dcdb49-99ee-48c7-804a-4ad022cfe9a3)


  - Connecting Games and Author table and fetching data through parameter (id) from games and later from Author table matching the same id.
  ![connected-game-author-table](https://github.com/siddhapurahet/GraphQL-Intro/assets/84630752/3035735a-fdaa-437a-947d-d71a2cdecec5)


  - Deleting data through passing id as a parameter.
  ![deleting-object](https://github.com/siddhapurahet/GraphQL-Intro/assets/84630752/add18b08-490b-417b-a236-0282d9cf8969)


  - Updating data through passing id as a parameter.
  ![image](https://github.com/siddhapurahet/GraphQL-Intro/assets/84630752/bb20171e-d98d-4d10-87e9-0b61da7f8435)




