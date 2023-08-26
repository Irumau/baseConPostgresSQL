const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');



class CategoriesService {

  constructor(){

  }

  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find() {
    const categories = await models.Category.findAll();
    if (categories.length === -1) {
      throw new boom.notFound(`We couldn't found the categories`);
    } else {
      return categories;
    }
  }

  async findOne(id){
    const category = await models.Category.findByPk(id, {
      include: ['products']
    });
    if(!category){
      throw boom.notFound(`Category with id: ${id} couldn't be found`)
    }else{
      return category;
    }
  }

  async update(id, changes){
    const category = await this.findOne(id);
    const rta = category.update(changes);
    return rta;
  }

  async delete(id){
    const category = await this.findOne(id);
    await category.destroy();

    return{
      message: `Category with:${id} has been deleted`
    }
  }


}


module.exports = CategoriesService;
