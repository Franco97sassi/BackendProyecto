
import User from "../dao/classes/user.dao.js"

const usersService= new User()
export const getUsers=async(req,res)=>{
 let result=await usersService.getBusiness()
     res.send({status:"success",result})}

export const getUserById=async(req,res)=>{
    const{uid}=user.params
       let result=await usersService.getUserById(uid)
       if(!result)return res.status(500).send({status:"error",error:"Something went wrong, try again later"})
       res.send({status:"success",result:user})}
 

export const saveUser=async(req,res)=>{
    const user=req.body
    let result=await usersService.saveBusiness(user)
     res.send({status:"success",result:result})
}