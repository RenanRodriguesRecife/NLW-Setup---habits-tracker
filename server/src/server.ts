import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

// cors - cross-origin resource sharing - é um mecanismo de segurança que diz quais aplicações vão poder acessar os dados
// se não configurar quais a aplicação frontend não vai conseguir acessar a aplicação backend
app.register(cors)

app.get('/', async ()=>{
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Comer',
            }
        }}
    )

    return habits

})


app.listen({
    port:3333,
}).then(()=>{
    console.log('http server running')
})