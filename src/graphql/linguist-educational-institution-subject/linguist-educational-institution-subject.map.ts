import { resolver } from 'graphql-sequelize';
import { LinguistEducationalInstitutionSubject } from '../../models';

export const LinguistEducationalInstitutionSubjectMap = {
    linguistEducationalInstitution: resolver(LinguistEducationalInstitutionSubject.associations.linguistEducationalInstitution)
};