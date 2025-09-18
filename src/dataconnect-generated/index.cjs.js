const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'studio',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const createSkillRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateSkill');
}
createSkillRef.operationName = 'CreateSkill';
exports.createSkillRef = createSkillRef;

exports.createSkill = function createSkill(dc) {
  return executeMutation(createSkillRef(dc));
};

const listCareersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCareers');
}
listCareersRef.operationName = 'ListCareers';
exports.listCareersRef = listCareersRef;

exports.listCareers = function listCareers(dc) {
  return executeQuery(listCareersRef(dc));
};

const updateUserEmailRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUserEmail', inputVars);
}
updateUserEmailRef.operationName = 'UpdateUserEmail';
exports.updateUserEmailRef = updateUserEmailRef;

exports.updateUserEmail = function updateUserEmail(dcOrVars, vars) {
  return executeMutation(updateUserEmailRef(dcOrVars, vars));
};

const getEducationProgramsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetEducationPrograms');
}
getEducationProgramsRef.operationName = 'GetEducationPrograms';
exports.getEducationProgramsRef = getEducationProgramsRef;

exports.getEducationPrograms = function getEducationPrograms(dc) {
  return executeQuery(getEducationProgramsRef(dc));
};
