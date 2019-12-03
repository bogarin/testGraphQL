import { buildSchema } from "graphql";
import schemaCliente from "./schemaCliente";
import schemaPedido from "./schemaPedido";
import schemaEmail from "./schemaEmail";
const schema = buildSchema(`
    ${schemaCliente} 
    ${schemaPedido}
    ${schemaEmail}
`);
module.exports = schema;
