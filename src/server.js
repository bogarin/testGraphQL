import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema/index";
import resolvers from "./resolvers";
const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);
app.get("/", (req, res) => {
  res.send("todo listo");
});
app.listen(3000, () => console.log("funcionando servidor nodemon"));
