import { resolver } from 'graphql-sequelize';
import { TranslationAssignmentFile } from '../../models';

export const TranslationAssignmentFileMap = {
    translationAssignment: resolver(TranslationAssignmentFile.associations.translationAssignment),
};