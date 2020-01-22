# chucknorris-graphql-API
GraphQL App wrapped around ChuckNorris.io API

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
