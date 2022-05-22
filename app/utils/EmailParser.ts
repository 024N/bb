import {userDB} from '../db/userDB';

const users: any = userDB;

export async function emailParser() {
  const domainList: any = {};
  for (const user in users) {
    const email = users[user];
    const fullName = email.split('@')[0];
    const domain = email.split('@')[1];
    const name = user.toLocaleLowerCase().split(' ')[0];
    if (fullName.includes(name)) {
      domainList[domain] = 0;
    } else {
      domainList[domain] = 1;
    }
  }
  return domainList;
}
