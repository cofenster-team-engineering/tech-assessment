# Coding Challenge Tasks

Welcome to the cofenster tech assessment!  
This repository already contains the skeleton code for both a frontend and a backend.  
Your goal is to complete the following core tasks. Tackle them in any order.

## 1. Frontend Router

Implement the custom router that lives in `packages/frontend/src/components/Router.tsx`.  

- Provide working implementations for `Router`, `Route`, `RouterLink`, `useCurrentRoute`, and `useNavigateTo`.
- Check the usage of the Router components in `packages/frontend/src/App.tsx`.
- The router should keep track of the current page and rerender the matching `Route`.
- `RouterLink` should change the active route without reloading the page.
- Keep the API surface that already exists in the file (context names, props) intact so the rest of the app can use it as-is.
- Feel free to add small helper utilities or types if it helps keep the code clear.

### Suggested checks
- Start the frontend dev server using `yarn dev` and verify navigation works.

## 2. Backend Batch Loader

Implement the batching utility in `packages/backend/src/utils/createBatchLoader.ts` so it can be used for DataLoader-style batching.

- The function should accept a loader callback and batch window duration (defaults to 10 ms).
- Check the usage of the batch loader in `packages/backend/src/schema/project/type.ts` (commented out code).
- Multiple calls to `load` within the batch window should be combined into a single loader invocation.
- `load` should return a promise that resolves with the corresponding value from the loader result array, preserving request order.
- Handle errors from the loader by rejecting the relevant `load` promises.
- Remove the temporary logging and placeholder implementation once the real logic is in place.

### Suggested checks
- Start the backend server via `yarn dev` and ensure repeated requests demonstrate batching (you can add temporary logging if helpful).
- Consider writing unit tests to cover edge cases such as errors and out-of-order resolutions.
