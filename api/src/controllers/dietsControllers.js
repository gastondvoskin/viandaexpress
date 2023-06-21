const getDietsController = async () => {
    //console.log('getDietsController')
    const allDiets=await Diet.findAll();
    return allDiets;
};


module.exports = {getDietsController};