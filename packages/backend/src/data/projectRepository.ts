import { faker } from '@faker-js/faker';

import { delay } from '../utils/delay';
import { mockUsers } from './userRepository';

export type Project = {
  id: string;
  name: string;
  creatorId: string;
  isFavorite: boolean;
};

const mockProjects: Project[] = Array.from({ length: 100 }, () => {
  return {
    id: faker.string.uuid(),
    name: `Job ad: ${faker.person.jobTitle()}`,
    creatorId: faker.helpers.arrayElement(mockUsers).id,
    isFavorite: false,
  };
});

export type ProjectRepository = {
  searchProjects: (searchTerm: string) => Promise<Project[]>;
  updateProject: (id: string, data: unknown) => Promise<Project>;
};

const createProjectRepository = (): ProjectRepository => {
  const projects: Project[] = mockProjects;

  return {
    searchProjects: async (searchTerm: string) => {
      console.log('Search projects', { searchTerm });

      // Simulate network/database delay
      await delay({ min: 20, max: 300 });

      return projects;
    },

    // biome-ignore lint/suspicious/noExplicitAny: TODO, add proper types
    updateProject: async (id: string, data: any) => {
      console.log('Update project', { id, data });

      throw new Error('Not implemented');
    },
  };
};

export const projectRepository = createProjectRepository();
