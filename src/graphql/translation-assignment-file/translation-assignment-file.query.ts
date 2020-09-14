import { resolver } from 'graphql-sequelize';
import { TranslationAssignmentFile } from '../../models';
import to from 'await-to-js';

export const Query = {
    getTranslationAssignmentFile: resolver(TranslationAssignmentFile),
    getTranslationAssignmentFiles: resolver(TranslationAssignmentFile, {
        before: async (findOptions) => {
            return findOptions;
        },
        after: (translationAssignmentFile) => {
            return translationAssignmentFile;
        }
    }),
};