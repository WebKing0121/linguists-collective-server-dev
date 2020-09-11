import { GraphQLEnumType } from "graphql";

const TranslationAssignmentFileType = new GraphQLEnumType({
    name: 'TranslationAssignmentFileType',
    values: {
        INITIAL: {
            value: 0,
        },
        DELIVERY: {
            value: 1,
        }
    },
});

export {
    TranslationAssignmentFileType as default,
};