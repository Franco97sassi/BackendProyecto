import mongoose from "mongoose";
 

const collection="Users"

const schema= new mongoose.Schema({
    name:String,
    products:[] 
})

const usersModel=mongoose.model(collection,schema)
export default usersModel