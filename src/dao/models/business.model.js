import mongoose from "mongoose";

const collection="Business"

const schema= new mongoose.Schema({
    number:Number,
    email:String,
    role:String,
    business:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Business"
    },
    orders:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Orders"
    },
     
})

const businessModel=mongoose.model(collection,schema)
export default businessModel