import { buildSchema } from "graphql";
import schemaCliente from "./schemaCliente";
const schema = buildSchema(schemaCliente);
module.exports = schema;
