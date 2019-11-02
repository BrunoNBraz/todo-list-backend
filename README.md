# ToDo List - Backend

## About

For the bootcamp express at Rentcars.com this backend project was made with node and express.

## Dependencies

- node @10.16.2
- yarn @1.19.0
- cors @^2.8.5
- express @^4.17.1
- mongoose @^5.7.1

### Development dependencies

- nodemon @^1.19.3

## Resources

For data submit you need to send the payload as json format on request body.

```
GET     localhost:3333/items
POST    localhost:3333/items          Payload ~> { "description":"Todo List Test" }
PUT     localhost:3333/items/{id}     Payload ~> { "description":"Todo List Test" , "checked": true }
DELETE  localhost:3333/items/{id}
```

## Build

```bash
$ cp .env.example .env
$ yarn install
```

## Running Dev

```bash
$ yarn dev
```

## Running Prod

```bash
$ yarn start
```

## Database configuration

Now for the project you need a moogodb connection, you follow these steps below:

1. Create an account on [MongoDB Cloud](https://cloud.mongodb.com/)
2. Create a mongo db cluster
3. Create a database with name **BOOTCAMP_EXPRESS**
4. Create a user to database connection **BOOTCAMP_EXPRESS** with your password
5. Get URL connection on cluster configuration
6. Replace **MONGO_URL_CONNECTION** key on .env
   > **Ex**: mongodb+srv://<username\>:<password\>@cluster0-45kku.mongodb.net/bootcamp_express?retryWrites=true&w=majority
