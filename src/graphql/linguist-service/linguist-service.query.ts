import { resolver } from 'graphql-sequelize';
import { LinguistService } from '../../models';

export const Query = {
    getLinguistService: resolver(LinguistService),
};