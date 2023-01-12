import express from 'express'

const toDosData = [{ name: 'Test', status: false }]
const toDosRoutes = express.Router()

toDosRoutes.post('/todos', function (req, res) {
    const { name } = req.body
    toDosData.push({ name, status: false })
    return res.status(201).json(toDosData)
})

toDosRoutes.get('/todos', function (req, res) {
    return res.status(200).json(toDosData);
})

export { toDosRoutes }
