const Vendor = require("../models/vendor")
const Photographer = require("../models/photographer")
const { handleCreateNewBookingForVendor, handleCreateNewBookingForPhotographer } = require("./booking");

async function handleNullVendor(req, res){
   
        const body = req.body

        if(
            !body.vendor_Name || 
            !body.vendor_Image ||
            !body.vendor_Discription || 
            !body.vendor_Price ||
            !body.user_name
        ){
         
            return res.status(400).json({msg : "All fields are required in newservices"});
        }
         
        const result = {
            vendorName: body.vendor_Name,
            vendorImage: body.vendor_Image,
            vendorDiscription: body.vendor_Discription,
            vendorPrice: body.vendor_Price,
        };

        await Vendor.create(result)
    
    await handleCreateNewBookingForVendor({
        body: {
            user_name: body.user_name,
            vendorName: body.vendor_Name 
        },
       
    }, res);

}

// for photographers

async function handleNullPhotographer(req, res){
   
    const body = req.body

    if(
        !body.photographer_Name || 
        !body.photographer_Image ||
        !body.photographer_Discription ||
        !body.photographer_Price ||
        !body.user_name
    ){
     
        return res.status(400).json({msg : "All fields are required"});
    }
     
    const result = {
        photographerName: body.photographer_Name,
        photographerImage: body.photographer_Image,
        photographerDiscription: body.photographer_Discription,
        photographerPrice: body.photographer_Price
    }

    await Photographer.create(result)

await handleCreateNewBookingForPhotographer({
    body: {
        user_name: body.user_name,
        photographerName: body.photographer_Name 
    },
   
}, res);

}

module.exports = {handleNullVendor, handleNullPhotographer}
