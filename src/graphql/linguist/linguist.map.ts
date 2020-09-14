import { resolver } from 'graphql-sequelize';
import { Linguist } from '../../models';

export const LinguistMap = {
    user: resolver(Linguist.associations.user)
};