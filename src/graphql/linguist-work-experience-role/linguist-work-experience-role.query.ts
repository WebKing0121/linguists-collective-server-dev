import { resolver } from 'graphql-sequelize';
import { LinguistWorkExperienceRole } from '../../models';

export const Query = {
    getLinguistWorkExperienceRole: resolver(LinguistWorkExperienceRole),
};