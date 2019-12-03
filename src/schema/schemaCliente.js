export default `
type Cliente{
    id:ID
    nombre:String
    apellido:String
    empresa:String
    email:String
    edad:Int
}
type Query{
   getClientes:[Cliente]
   getCliente(input:Int):Cliente
}

input ClienteInput{
    nombre:String!
    apellido:String
    empresa:String
    email:String!
    edad:Int
}

type Mutation{
   crearCliente(input:ClienteInput):Cliente
}
`;
