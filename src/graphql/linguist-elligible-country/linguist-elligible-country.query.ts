import { resolver } from 'graphql-sequelize';
import { LinguistElligibleCountry } from '../../models/';

export const Query = {
    getLinguistElligibleCountry: resolver(LinguistElligibleCountry),
};