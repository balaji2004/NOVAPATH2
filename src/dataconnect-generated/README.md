# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListCareers*](#listcareers)
  - [*GetEducationPrograms*](#geteducationprograms)
- [**Mutations**](#mutations)
  - [*CreateSkill*](#createskill)
  - [*UpdateUserEmail*](#updateuseremail)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListCareers
You can execute the `ListCareers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listCareers(): QueryPromise<ListCareersData, undefined>;

interface ListCareersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCareersData, undefined>;
}
export const listCareersRef: ListCareersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listCareers(dc: DataConnect): QueryPromise<ListCareersData, undefined>;

interface ListCareersRef {
  ...
  (dc: DataConnect): QueryRef<ListCareersData, undefined>;
}
export const listCareersRef: ListCareersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listCareersRef:
```typescript
const name = listCareersRef.operationName;
console.log(name);
```

### Variables
The `ListCareers` query has no variables.
### Return Type
Recall that executing the `ListCareers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListCareersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListCareersData {
  careers: ({
    id: UUIDString;
    name: string;
    description: string;
  } & Career_Key)[];
}
```
### Using `ListCareers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listCareers } from '@dataconnect/generated';


// Call the `listCareers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listCareers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listCareers(dataConnect);

console.log(data.careers);

// Or, you can use the `Promise` API.
listCareers().then((response) => {
  const data = response.data;
  console.log(data.careers);
});
```

### Using `ListCareers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listCareersRef } from '@dataconnect/generated';


// Call the `listCareersRef()` function to get a reference to the query.
const ref = listCareersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listCareersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.careers);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.careers);
});
```

## GetEducationPrograms
You can execute the `GetEducationPrograms` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getEducationPrograms(): QueryPromise<GetEducationProgramsData, undefined>;

interface GetEducationProgramsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetEducationProgramsData, undefined>;
}
export const getEducationProgramsRef: GetEducationProgramsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getEducationPrograms(dc: DataConnect): QueryPromise<GetEducationProgramsData, undefined>;

interface GetEducationProgramsRef {
  ...
  (dc: DataConnect): QueryRef<GetEducationProgramsData, undefined>;
}
export const getEducationProgramsRef: GetEducationProgramsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getEducationProgramsRef:
```typescript
const name = getEducationProgramsRef.operationName;
console.log(name);
```

### Variables
The `GetEducationPrograms` query has no variables.
### Return Type
Recall that executing the `GetEducationPrograms` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetEducationProgramsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetEducationProgramsData {
  educationPrograms: ({
    id: UUIDString;
    name: string;
    institution: string;
    programType: string;
  } & EducationProgram_Key)[];
}
```
### Using `GetEducationPrograms`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getEducationPrograms } from '@dataconnect/generated';


// Call the `getEducationPrograms()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getEducationPrograms();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getEducationPrograms(dataConnect);

console.log(data.educationPrograms);

// Or, you can use the `Promise` API.
getEducationPrograms().then((response) => {
  const data = response.data;
  console.log(data.educationPrograms);
});
```

### Using `GetEducationPrograms`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getEducationProgramsRef } from '@dataconnect/generated';


// Call the `getEducationProgramsRef()` function to get a reference to the query.
const ref = getEducationProgramsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getEducationProgramsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.educationPrograms);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.educationPrograms);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateSkill
You can execute the `CreateSkill` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createSkill(): MutationPromise<CreateSkillData, undefined>;

interface CreateSkillRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateSkillData, undefined>;
}
export const createSkillRef: CreateSkillRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createSkill(dc: DataConnect): MutationPromise<CreateSkillData, undefined>;

interface CreateSkillRef {
  ...
  (dc: DataConnect): MutationRef<CreateSkillData, undefined>;
}
export const createSkillRef: CreateSkillRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createSkillRef:
```typescript
const name = createSkillRef.operationName;
console.log(name);
```

### Variables
The `CreateSkill` mutation has no variables.
### Return Type
Recall that executing the `CreateSkill` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateSkillData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateSkillData {
  skill_insert: Skill_Key;
}
```
### Using `CreateSkill`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createSkill } from '@dataconnect/generated';


// Call the `createSkill()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createSkill();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createSkill(dataConnect);

console.log(data.skill_insert);

// Or, you can use the `Promise` API.
createSkill().then((response) => {
  const data = response.data;
  console.log(data.skill_insert);
});
```

### Using `CreateSkill`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createSkillRef } from '@dataconnect/generated';


// Call the `createSkillRef()` function to get a reference to the mutation.
const ref = createSkillRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createSkillRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.skill_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.skill_insert);
});
```

## UpdateUserEmail
You can execute the `UpdateUserEmail` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUserEmail(vars: UpdateUserEmailVariables): MutationPromise<UpdateUserEmailData, UpdateUserEmailVariables>;

interface UpdateUserEmailRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserEmailVariables): MutationRef<UpdateUserEmailData, UpdateUserEmailVariables>;
}
export const updateUserEmailRef: UpdateUserEmailRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUserEmail(dc: DataConnect, vars: UpdateUserEmailVariables): MutationPromise<UpdateUserEmailData, UpdateUserEmailVariables>;

interface UpdateUserEmailRef {
  ...
  (dc: DataConnect, vars: UpdateUserEmailVariables): MutationRef<UpdateUserEmailData, UpdateUserEmailVariables>;
}
export const updateUserEmailRef: UpdateUserEmailRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserEmailRef:
```typescript
const name = updateUserEmailRef.operationName;
console.log(name);
```

### Variables
The `UpdateUserEmail` mutation requires an argument of type `UpdateUserEmailVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateUserEmailVariables {
  id: UUIDString;
  email: string;
}
```
### Return Type
Recall that executing the `UpdateUserEmail` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserEmailData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserEmailData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUserEmail`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUserEmail, UpdateUserEmailVariables } from '@dataconnect/generated';

// The `UpdateUserEmail` mutation requires an argument of type `UpdateUserEmailVariables`:
const updateUserEmailVars: UpdateUserEmailVariables = {
  id: ..., 
  email: ..., 
};

// Call the `updateUserEmail()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUserEmail(updateUserEmailVars);
// Variables can be defined inline as well.
const { data } = await updateUserEmail({ id: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUserEmail(dataConnect, updateUserEmailVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUserEmail(updateUserEmailVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUserEmail`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserEmailRef, UpdateUserEmailVariables } from '@dataconnect/generated';

// The `UpdateUserEmail` mutation requires an argument of type `UpdateUserEmailVariables`:
const updateUserEmailVars: UpdateUserEmailVariables = {
  id: ..., 
  email: ..., 
};

// Call the `updateUserEmailRef()` function to get a reference to the mutation.
const ref = updateUserEmailRef(updateUserEmailVars);
// Variables can be defined inline as well.
const ref = updateUserEmailRef({ id: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserEmailRef(dataConnect, updateUserEmailVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

