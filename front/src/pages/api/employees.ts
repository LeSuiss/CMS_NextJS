import { faker } from '@faker-js/faker';

interface User {
  _id: string;
  portrait: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  description: string;
  job: string;
}

function createRandomUser(): User {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.helpers.unique(faker.internet.email, [
    firstName,
    lastName,
  ]);

  return {
    _id: faker.datatype.uuid(),
    portrait: faker.image.avatar(),
    job: faker.commerce.department(),
    email,
    firstName,
    lastName,
    phone: faker.phone.imei(),
    description: faker.lorem.paragraph(),
  };
}

const generateEmployees = [...Array(100)].map((x) => createRandomUser());

export default generateEmployees;
