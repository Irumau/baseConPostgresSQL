const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');


const pool = require('../libs/postgresPool');


class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
    this.pool = pool;
    //pool.on sirve para escuchar eventos... en este caso quiero escuchar el error en caso de que haya algún problema al realizar la conexión
    this.pool.on('error', (err)=> console.error(err));
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url({ width: 500 }),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }

    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(this.products);
    //   }, (5000));
    // })
    const query =  'SELECT * FROM tasks';
    const rta = await this.pool.query(query);
    return rta.rows;
    // return this.products;
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id)
    if(!product){
      throw boom.notFound("Product not found");
    }
    if(product.isBlock){
      throw boom.conflict("Product is block");
    }

    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    const product = this.products[index];
    if (index === -1) {
      throw boom.notFound("Product not found");
    }
    if(product.isBlock){
      throw boom.conflict("Product is block, is not available for changes.")
    }
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound("Product not found")
    }

    this.products.splice(index, 1);

    return { id };
  }

}

module.exports = ProductsService;
