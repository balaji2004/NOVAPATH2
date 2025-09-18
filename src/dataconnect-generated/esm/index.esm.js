import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'studio',
  location: 'us-central1'
};

export const createSkillRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateSkill');
}
createSkillRef.operationName = 'CreateSkill';

export function createSkill(dc) {
  return executeMutation(createSkillRef(dc));
}

export const listCareersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCareers');
}
listCareersRef.operationName = 'ListCareers';

export function listCareers(dc) {
  return executeQuery(listCareersRef(dc));
}

export const updateUserEmailRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUserEmail', inputVars);
}
updateUserEmailRef.operationName = 'UpdateUserEmail';

export function updateUserEmail(dcOrVars, vars) {
  return executeMutation(updateUserEmailRef(dcOrVars, vars));
}

export const getEducationProgramsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetEducationPrograms');
}
getEducationProgramsRef.operationName = 'GetEducationPrograms';

export function getEducationPrograms(dc) {
  return executeQuery(getEducationProgramsRef(dc));
}

