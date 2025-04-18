import Business from "../dao/classes/business.dao.js"

const businessService= new Business()
export const getBusiness=async(req,res)=>{
    let result=await businessService.getBusiness()
    if(!result)return res.status(500).send({status:"error",error:"Something went wrong, try again later"})
    res.send({status:"success",result})
}

export const getBusinessById=async(req,res)=>{
    const{bid}=req.params
    let result=await businessService.getBusinessById(bid)
    if(!result)return res.status(500).send({status:"error",error:"Something went wrong, try again later"})
    res.send({status:"success",result:result})}

export const createBusiness=async(req,res)=>{
    const business=req.body
    let result=await businessService.saveBusiness(business)
    if(!result)return res.status(500).send({status:"error",error:"Something went wrong, try again later"})
    res.send({status:"success",result:result})
}
export const addProduct=async(req,res)=>{
    let product=req.body
    let business= await  businessService.getBusinessById(product)
    business.product.push(product)
    await businessService.updateBusiness(business_id,business)
     if(!result)return res.status(500).send({status:"error",error:"Something went wrong, try again later"})
    res.send({status:"success",result:result})}