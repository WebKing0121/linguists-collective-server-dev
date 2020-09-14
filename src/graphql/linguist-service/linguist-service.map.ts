import { resolver } from 'graphql-sequelize';
import { LinguistService } from '../../models';

export const LinguistServiceMap = {
    linguist: resolver(LinguistService.associations.linguist)
};