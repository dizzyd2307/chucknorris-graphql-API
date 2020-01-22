# chucknorris-graphql-API
GraphQL App wrapped around ChuckNorris.io API

### To Start API
open up Terminal and enter **node index.js** to start up the API on localhost:4000
### First Type

```javascript
type Joke{
    icon_url: String
    id: String
    url: String
    value: String
}
```

### API URL -

[Chuck Norris API](https://api.chucknorris.io)

### 2 Queries for API Call

```Javascript
categories: [String]
```
```Javascript
joke(category: ID!): Joke
```
