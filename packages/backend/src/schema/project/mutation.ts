import { projectRepository } from '../../data/projectRepository';
import type { MutationResolvers } from '../generated';

export const ProjectMutations: MutationResolvers = {
  updateProject: (_parent, { id, input }) => projectRepository.updateProject(id, input),
};
