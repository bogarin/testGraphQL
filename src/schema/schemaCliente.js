import { descCliente } from "./../descripciones";

export default `
"""${descCliente.typeCliente}"""
type Cliente{
    id:ID
    nombre:String
    apellido:String
    empresa:String
    emails:[Email]
    edad:Int
    tipo:TipoCliente
    pedidos: [Pedido]
}
type Query{
    """${descCliente.getClientes}"""
   getClientes:[Cliente]
   """${descCliente.getCliente}"""
   getCliente(input:Int):Cliente
}

"""${descCliente.TipoCliente}"""
enum TipoCliente{
    BASICO
    PREMIUM
}
"""${descCliente.ClienteInput}"""
input ClienteInput{
    nombre:String!
    apellido:String
    empresa:String
    emails:[EmailInput]
    edad:Int
    tipo:TipoCliente
    pedidos: [PedidoInput]
}

type Mutation{
    """ ${descCliente.crearCliente}"""
    #resolve crearCliente,
    #entrada eschema ClienteINput
    #salida eschema de tipo Cliente
   crearCliente(input:ClienteInput):Cliente
}
`;
