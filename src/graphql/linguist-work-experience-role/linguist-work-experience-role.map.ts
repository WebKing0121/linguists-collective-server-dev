import { resolver } from 'graphql-sequelize';
import { LinguistWorkExperienceRole } from '../../models';

export const LinguistWorkExperienceRoleMap = {
    linguist: resolver(LinguistWorkExperienceRole.associations.linguist)
};