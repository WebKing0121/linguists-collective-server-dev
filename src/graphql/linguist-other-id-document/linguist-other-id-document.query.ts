import { resolver } from 'graphql-sequelize';
import { LinguistOtherIdDocument } from '../../models';

export const Query = {
    getLinguistOtherIdDocument: resolver(LinguistOtherIdDocument),
};