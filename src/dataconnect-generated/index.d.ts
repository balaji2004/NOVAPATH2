import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CareerSkill_Key {
  careerId: UUIDString;
  skillId: UUIDString;
  __typename?: 'CareerSkill_Key';
}

export interface Career_Key {
  id: UUIDString;
  __typename?: 'Career_Key';
}

export interface CreateSkillData {
  skill_insert: Skill_Key;
}

export interface EducationProgram_Key {
  id: UUIDString;
  __typename?: 'EducationProgram_Key';
}

export interface GetEducationProgramsData {
  educationPrograms: ({
    id: UUIDString;
    name: string;
    institution: string;
    programType: string;
  } & EducationProgram_Key)[];
}

export interface ListCareersData {
  careers: ({
    id: UUIDString;
    name: string;
    description: string;
  } & Career_Key)[];
}

export interface Skill_Key {
  id: UUIDString;
  __typename?: 'Skill_Key';
}

export interface UpdateUserEmailData {
  user_update?: User_Key | null;
}

export interface UpdateUserEmailVariables {
  id: UUIDString;
  email: string;
}

export interface UserCareerInterest_Key {
  userId: UUIDString;
  careerId: UUIDString;
  __typename?: 'UserCareerInterest_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateSkillRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateSkillData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateSkillData, undefined>;
  operationName: string;
}
export const createSkillRef: CreateSkillRef;

export function createSkill(): MutationPromise<CreateSkillData, undefined>;
export function createSkill(dc: DataConnect): MutationPromise<CreateSkillData, undefined>;

interface ListCareersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCareersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListCareersData, undefined>;
  operationName: string;
}
export const listCareersRef: ListCareersRef;

export function listCareers(): QueryPromise<ListCareersData, undefined>;
export function listCareers(dc: DataConnect): QueryPromise<ListCareersData, undefined>;

interface UpdateUserEmailRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserEmailVariables): MutationRef<UpdateUserEmailData, UpdateUserEmailVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateUserEmailVariables): MutationRef<UpdateUserEmailData, UpdateUserEmailVariables>;
  operationName: string;
}
export const updateUserEmailRef: UpdateUserEmailRef;

export function updateUserEmail(vars: UpdateUserEmailVariables): MutationPromise<UpdateUserEmailData, UpdateUserEmailVariables>;
export function updateUserEmail(dc: DataConnect, vars: UpdateUserEmailVariables): MutationPromise<UpdateUserEmailData, UpdateUserEmailVariables>;

interface GetEducationProgramsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetEducationProgramsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetEducationProgramsData, undefined>;
  operationName: string;
}
export const getEducationProgramsRef: GetEducationProgramsRef;

export function getEducationPrograms(): QueryPromise<GetEducationProgramsData, undefined>;
export function getEducationPrograms(dc: DataConnect): QueryPromise<GetEducationProgramsData, undefined>;

