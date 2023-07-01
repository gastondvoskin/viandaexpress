const deleteItemController = async (itemId) => {
    await Item.destroy({
        where: {
          id: itemId,
        },
      });
};

module.exports = { deleteItemController }