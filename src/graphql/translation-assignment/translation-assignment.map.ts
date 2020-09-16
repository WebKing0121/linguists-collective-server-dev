import { resolver } from 'graphql-sequelize';
import { TranslationAssignment } from '../../models';

export const TranslationAssignmentMap = {
    translationAssignmentFiles: resolver(TranslationAssignment.associations.translationAssignmentFiles),
    // users: resolver(Company.associations.users),
};