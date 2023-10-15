const { User } = require("../../db");

const putAddressController= async (id,address)=>{
    userUpdate=await User.update(
        {address},
        {where:{id:id}}
    )
    return userUpdate;
}

module.exports={putAddressController};