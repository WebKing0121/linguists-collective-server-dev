import { resolver } from 'graphql-sequelize';
import { LinguistOtherIdDocument } from '../../models';

export const LinguistOtherIdDocumentMap = {
    linguist: resolver(LinguistOtherIdDocument.associations.linguist)
};