const {ApolloServer}=require("@apollo/server")
const {startStandaloneServer} =require("@apollo/server/standalone")
const {typeDefs}=require("../src/graphQl/schema")
const {resolvers}=require("../src/graphQl/resolver")


async function startServer(){
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    })
    const {url}=await startStandaloneServer(server,{
        listen:{port :4000}
    });

    console.log('Serevr is running at : ${url}',url);
    

}
startServer()