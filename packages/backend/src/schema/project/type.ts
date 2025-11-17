import { userRepository } from '../../data/userRepository';
import type { Resolvers } from '../generated';

// const userLoader = createBatchloader((ids: string[]) => userRepository.getUsers({ ids }));

export const ProjectType: Resolvers = {
  Project: {
    creator: ({ creatorId }) => {
      return userRepository.getUserById(creatorId);

      // return userLoader.load(creatorId);
    },
  },
};
