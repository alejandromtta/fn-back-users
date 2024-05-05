import {Router} from "express";
import { prisma } from "../const/db.js";
const router = Router();


router.get('/user', async (req, res) => {
    const data = await prisma.user.findMany()
    res.json(data)
})

router.get('/user/:id', async (req, res) =>{
    const data = await prisma.user.findFirst({where: {id: parseInt(req.params.id)}});
    if(!data) 
    return res.status(404).json({message: "not found"});
    res.json(data)
});

router.post('/user', async (req, res) => {
    if(!req?.body?.email) 
    return res.status(404).json({message: "not found"});

   const currentData= await prisma.user.create({data: req.body})
    res.json(currentData)
})

router.put('/user/:id', async (req, res) => {
    const data = await prisma.user.update({where: {id: parseInt(req.params.id)},data: req.body});
    if(!data) 
    return res.status(404).json({message: "not found"});
     res.json(data)
 })

 router.delete('/user/:id', async (req, res) =>{
    const data = await prisma.user.delete({where: {id: parseInt(req.params.id)}});
    if(!data) 
    return res.status(404).json({message: "not found"});
    res.json(data)
});
export default router;