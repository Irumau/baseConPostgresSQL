const { faker } = require('@faker-js/faker');
const boom = require("@hapi/boom");

class UsersService {

  constructor() {
    this.users = [],
      this.generateUsers()
  }

  generateUsers() {
    const limit = 100
    for (let i = 0; i < limit; i++) {
      this.users.push({
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        image: faker.image.avatarLegacy(),
        id: faker.string.uuid(),
      })
    }
  }

  async create(data) {
    const newUser = {
      id: faker.string.uuid(),
      ...data,
    }

    this.users.push(newUser);
    return newUser;
  }

  async find() {
    if (this.users.length != 0) {
      return this.users;
    } else {
      throw boom.notFound(`Couldn't be find any users`);
    }
  }

  async findOne(id) {
    const user = this.users.find(item => item.id === id);
    if(!user){
      throw boom.notFound(`Couldn't be find user by ${id}`)
    }
    return user;
  }


  async update(id, changes) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('User not found')
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    }
    return this.users[index];
  }

  async delete(id) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('User not found')
    }
    this.users.splice(index, 1);
    return {
      message: `Deleted user with id: ${id}`
    }
  }
}


module.exports = UsersService;
