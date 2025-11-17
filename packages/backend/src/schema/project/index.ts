import { ProjectMutations } from './mutation';
import { ProjectQueries } from './query';
import { ProjectType } from './type';

export const resolvers = {
  ...ProjectType,
  Query: {
    ...ProjectQueries,
  },
  Mutation: {
    ...ProjectMutations,
  },
};
