import { CreateSkillData, ListCareersData, UpdateUserEmailData, UpdateUserEmailVariables, GetEducationProgramsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateSkill(options?: useDataConnectMutationOptions<CreateSkillData, FirebaseError, void>): UseDataConnectMutationResult<CreateSkillData, undefined>;
export function useCreateSkill(dc: DataConnect, options?: useDataConnectMutationOptions<CreateSkillData, FirebaseError, void>): UseDataConnectMutationResult<CreateSkillData, undefined>;

export function useListCareers(options?: useDataConnectQueryOptions<ListCareersData>): UseDataConnectQueryResult<ListCareersData, undefined>;
export function useListCareers(dc: DataConnect, options?: useDataConnectQueryOptions<ListCareersData>): UseDataConnectQueryResult<ListCareersData, undefined>;

export function useUpdateUserEmail(options?: useDataConnectMutationOptions<UpdateUserEmailData, FirebaseError, UpdateUserEmailVariables>): UseDataConnectMutationResult<UpdateUserEmailData, UpdateUserEmailVariables>;
export function useUpdateUserEmail(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserEmailData, FirebaseError, UpdateUserEmailVariables>): UseDataConnectMutationResult<UpdateUserEmailData, UpdateUserEmailVariables>;

export function useGetEducationPrograms(options?: useDataConnectQueryOptions<GetEducationProgramsData>): UseDataConnectQueryResult<GetEducationProgramsData, undefined>;
export function useGetEducationPrograms(dc: DataConnect, options?: useDataConnectQueryOptions<GetEducationProgramsData>): UseDataConnectQueryResult<GetEducationProgramsData, undefined>;
