import { resolver } from 'graphql-sequelize';
import { LinguistEducationalInstitution } from '../../models';

export const LinguistEducationalInstitutionMap = {
    linguist: resolver(LinguistEducationalInstitution.associations.linguist),
    // subjectsStudied: resolver(LinguistEducationalInstitution.associations.linguistEducationalInstitutionSubjects)
};