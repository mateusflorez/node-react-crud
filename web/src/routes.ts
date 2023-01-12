import express from 'express'
import { PrismaClient } from '@prisma/client'

const toDosRoutes = express.Router()
const prisma = new PrismaClient()

toDosRoutes.post('/todos', async function (req, res) {
    const { name } = req.body
    const todo = await prisma.todo.create({
        data: {
            name,
            status: false
        }
    })
    return res.status(201).json(todo)
})

toDosRoutes.get('/todos', async function (req, res) {
    const todos = await prisma.todo.findMany()
    return res.status(200).json(todos)
})

export { toDosRoutes }
