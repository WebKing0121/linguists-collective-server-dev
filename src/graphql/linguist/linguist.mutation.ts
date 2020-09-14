import { resolver as rs } from 'graphql-sequelize';
import { Linguist, LinguistService, LinguistWorkExperienceRole, User } from '../../models';
import to from 'await-to-js';
import { NOW } from 'sequelize';
import { LinguistElligibleCountry } from '../../models/linguistelligiblecountry.model';

export const Mutation = {
    saveLinguistRegistrationForm: rs(Linguist, {
        before: async (findOptions, { data }) => {
          let err, linguist, user, elligibleCountries, elligibleCountriesResult,
            workExperienceRoles, workExperienceRolesResult, interpretingServices, interpretingServicesResult;
            console.log(data);
          [err, linguist] = await to(Linguist.update(data, { where: { id: data.linguistId } }));
          if (err) { throw err;}

            // Elligible Countries
            if (data.elligibleCountries) {
                elligibleCountries = data.elligibleCountries.map((country) => {
                    return {
                    linguistId: data.linguistId,
                    name: country
                    };
                });
                [err, elligibleCountriesResult] = await to(LinguistElligibleCountry.bulkCreate(elligibleCountries));
                if (err) { throw err;}
            }

            // Interpreting Services
            if (data.interpretingServices) {
                interpretingServices = data.interpretingServices.map((service) => {
                    return { linguistId: data.linguistId, name: service };
                });
                console.log(interpretingServices);
                [err, interpretingServicesResult] = await to(LinguistService.bulkCreate(interpretingServices));
                if (err) { throw err;}
            }

            // Work Experience Roles
            if (data.workExperienceRoles) {
                workExperienceRoles = data.elligibleCountries.map((role) => {
                    return { linguistId: data.linguistId, ...role };
                });
                [err, workExperienceRolesResult] = await to(LinguistWorkExperienceRole.bulkCreate(workExperienceRoles));
                if (err) { throw err;}
            }

          [err, user] = await to(User.update({updatedAt: NOW}, { where: { id: data.userId } }));
          if (err) { throw err;}
          
          return true;
        },
        after: () => {
          return true;
        }
    }),
};