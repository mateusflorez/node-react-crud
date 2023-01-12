import express from 'express'
import { PrismaClient } from '@prisma/client'

const toDosRoutes = express.Router()
const prisma = new PrismaClient()

toDosRoutes.post('/todos', async function (req, res) {
    const { name, status } = req.body
    const todo = await prisma.todo.create({
        data: {
            name,
            status
        }
    })
    return res.status(201).json(todo)
})

toDosRoutes.get('/todos', async function (req, res) {
    const todos = await prisma.todo.findMany()
    return res.status(200).json(todos)
})

toDosRoutes.put('/todos', async function (req, res) {
    const { name, id, status } = req.body

    if (!id) {
        return res.status(400).json({
            message: 'Missing id'
        })
    }

    const todoAlreadyExist = await prisma.todo.findUnique({ where: { id } })

    if (!todoAlreadyExist) {
        return res.status(404).json({ "message": "Todo not found" })
    }

    const todo = await prisma.todo.update({
        where: {
            id
        },
        data: {
            name,
            status
        }
    })

    return res.status(200).json(todo)
})

export { toDosRoutes }
