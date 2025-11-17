import { projectRepository } from '../../data/projectRepository';
import type { QueryResolvers } from '../generated';

export const ProjectQueries: QueryResolvers = {
  searchProjects: (_parent, { searchTerm }) => projectRepository.searchProjects(searchTerm),
};
