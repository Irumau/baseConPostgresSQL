const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');


class OrderService {
  constructor(){

  }

  async create(data){
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async addItem(data){
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  }


  async find(){
    const orders = await models.Order.findAll();
    return orders;
  }

  async findOne(id){
    const order = await models.Order.findByPk(id, {include: [
      {
        // aca le estamos especificando que ademas de traernos la asociación de customer también le decimos que nos traiga la asociación que tiene customer que en este caso es user
        association: 'customer',
        include: ['user']
      },
      'items'
    ]})
    if(!order){
      throw boom.notFound(`Order with id:${id} couldn't be found`);
    }
    return  order;
  }

  async update(id,changes){
    return {
      id,
      changes
    }
  }

  async delete(id){
    return {
      message: `Order with ${id} has been deleted`
    }
  }
}



module.exports = OrderService;
