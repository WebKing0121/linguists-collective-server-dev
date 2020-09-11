import { resolver } from 'graphql-sequelize';
import { TranslationAssignment } from '../../models';
import to from 'await-to-js';

export const Query = {
    getTranslationAssignment: resolver(TranslationAssignment),
    getTranslationAssignments: resolver(TranslationAssignment, {
        before: async (findOptions) => {
            return findOptions;
        },
        after: (translationAssignment) => {
            return translationAssignment;
        }
    }),
};