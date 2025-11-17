import merge from 'lodash.merge';

import { resolvers as projectResolvers } from './project';

const rootResolvers = {
  Query: {
    _version: () => '',
  },
  Mutation: {
    _version: () => '',
  },
};

export const resolvers = merge({}, rootResolvers, projectResolvers);
