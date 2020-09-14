import { resolver } from 'graphql-sequelize';
import { LinguistElligibleCountry } from '../../models';

export const LinguistElligibleCountryMap = {
    linguist: resolver(LinguistElligibleCountry.associations.linguist)
};