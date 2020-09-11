import { resolver } from 'graphql-sequelize';
import { User } from '../../models';

export const UserMap = {
    // company: resolver(User.associations.company),
    customer: resolver(User.associations.customer),
    linguist: resolver(User.associations.linguist),
    admin: resolver(User.associations.admin),
    jwt: (user) => user.getJwt(),
};