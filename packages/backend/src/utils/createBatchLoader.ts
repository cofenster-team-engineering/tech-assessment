// biome-ignore-all lint/suspicious/noExplicitAny: TODO, add proper types

export const createBatchloader = (_loader: (args: any[]) => Promise<any[]>, _batchWindowMs = 10) => {
  return {
    load: (arg: any): Promise<any> => {
      console.log('Batch loader load called with arg:', arg);

      return Promise.resolve(null);
    },
  };
};
