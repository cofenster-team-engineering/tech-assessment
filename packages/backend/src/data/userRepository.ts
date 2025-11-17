import { faker } from '@faker-js/faker';

export type User = {
  id: string;
  firstname: string;
  lastname: string;
};

export const mockUsers: User[] = Array.from({ length: 10 }, () => ({
  id: faker.string.uuid(),
  firstname: faker.person.firstName(),
  lastname: faker.person.lastName(),
}));

export type UserRepository = {
  getUsers: (filter?: { ids?: string[] }) => Promise<User[]>;
  getUserById: (id: string) => Promise<User>;
};

const createUserRepository = (): UserRepository => {
  const users: User[] = mockUsers;

  return {
    getUsers: async (filter) => {
      console.log('Get users with filter:', filter);

      const ids = filter?.ids;
      if (ids) {
        return ids.map((id) => {
          const user = users.find((user) => user.id === id);
          if (!user) throw new Error(`User with id ${id} not found`);
          return user;
        });
      }

      return users;
    },

    getUserById: async (id: string) => {
      console.log('Get user with id:', id);

      const user = users.find((user) => user.id === id);
      if (!user) throw new Error(`User with id ${id} not found`);

      return user;
    },
  };
};

export const userRepository = createUserRepository();
