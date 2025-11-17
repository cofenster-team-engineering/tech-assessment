import styled from '@emotion/styled';
import type { FC } from 'react';

import { useSearchProjectsQuery } from '../api/generated';
import { Page } from '../components/Page';

const SearchInput = styled('input')(() => ({
  width: '100%',
  padding: 8,
  fontSize: 14,
  marginBottom: 16,
  borderRadius: 4,
  border: '1px solid #ccc',
}));

const ProjectCard = styled('div')(() => ({
  padding: 16,
  borderRadius: 8,
  backgroundColor: '#fff',

  '& + &': {
    marginTop: 12,
  },

  '> h2': {
    margin: 0,
    fontSize: 16,
  },

  '> small': {
    color: '#666',
  },
}));

export const Projects: FC = () => {
  const { data, error, loading } = useSearchProjectsQuery({ variables: { searchTerm: 'Engineer' } });

  return (
    <Page>
      <h1>Projects</h1>

      <SearchInput type="text" placeholder="Search projects..." />

      {error ? (
        <p>Error loading projects: {error.message}</p>
      ) : loading ? (
        <p>Loading projects...</p>
      ) : !data?.searchProjects.length ? (
        <p>No projects found.</p>
      ) : (
        data.searchProjects.map((project) => (
          <ProjectCard key={project.id}>
            <h2>{project.name}</h2>{' '}
            <small>
              (Created by: {project.creator.firstname} {project.creator.lastname})
            </small>
          </ProjectCard>
        ))
      )}
    </Page>
  );
};
