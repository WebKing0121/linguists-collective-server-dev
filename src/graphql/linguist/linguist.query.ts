import { resolver } from 'graphql-sequelize';
import { Linguist } from '../../models';

export const Query = {
    getLinguist: resolver(Linguist),
};