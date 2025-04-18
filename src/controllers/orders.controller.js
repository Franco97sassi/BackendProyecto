import Business from "../dao/classes/business.dao.js"
import Order from "../dao/classes/order.dao.js"
import User from "../dao/classes/user.dao.js"




const usersService= new User()
const ordersService= new Order()
const businessService=new Business()





export const getOrders=async(req,res)=>{
    let result=await ordersService.getOrders()
    res.send({status:"success",result})}
 

export const getOrderById=async(req,res)=>{
    const{oid}=req.params
    let result=await businessService.getUserById(oid)
    res.send({status:"success",result:order})
}



export const createOrder=async(req,res)=>{
    const {user,business,products}=req.body
    const resultUser= await usersService.getUserById(user)
    const resultBusiness= await businessService.getBusinessById(business)
let actualOrders= resultBusiness.products.filter(product=>products.includes(product.id))
let sum=actualOrders.reduce((acc,prev)=>{
    acc+=prev.price
    return acc;
},0)
let orderNumber=Date.now()+Math.floor(Math.random()*10000+1);
let order={
    number:orderNumber,
    business,
    user,
    status:"pending",
    products:actualOrders.map(product=>product.id),
    totalPrice:sum
}
let orderResult=await ordersService.createOrder(order)
resultUser.orders.push(orderResult._id)
await usersService.updateUser(user,resultUser)
res.send({status:"success",orderResult}) 

 }
export const resolveOrder=async(req,res)=>{

    const {resolve}=req.query;
    let order=await ordersService.getOrderById(req.params.id)
    order.status=resolve;
    await ordersService.resolveOrder(order._id,order)
    res.send({status:"success",result:"resolveOrder"})
}