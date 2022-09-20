import validator from 'validator';
import { faker } from 'faker';

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
// console.log(validator.isEmail('shoobert@dylan'))
// //Ex. 2
// //Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
// console.log(validator.isMobilePhone("786-329-9958"))
// //Ex. 3
// //Use the following blacklist
// let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
// //Along with validator's `blacklist` method to clean this text:
// let text = "I'M SO EXCITED!!!~!"
// //Ultimately, it should print "im so excited"
// console.log(validator.blacklist(text,blacklist).toLowerCase())

export const users = [];

export function createRandomUser(number) {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  USERS.push(createRandomUser());
});