import * as yup from 'yup';

export const curationProcessForm = yup.object().shape({
  proteinID: yup
    .string()
    .trim()
    .matches(
      /(^[0-9][a-zA-Z_0-9]{3}$)|(^UP[0-9]{9}$)|(^([OPQ][0-9][A-Z0-9]{3}[0-9]|[A-NR-Z][0-9]([A-Z][A-Z0-9]{2}[0-9]){1,2})$)/,
      'Please enter a valid PDB ID, Alphafold ID or Proteome ID'
    )
    .required('Is required'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Is required'),
});

export const curationProcessAdvancedForm = yup.object().shape({
  proteinID: yup
    .string()
    .trim()
    .matches(
      /(^[0-9][a-zA-Z_0-9]{3}$)|(^UP[0-9]{9}$)|(^([OPQ][0-9][A-Z0-9]{3}[0-9]|[A-NR-Z][0-9]([A-Z][A-Z0-9]{2}[0-9]){1,2})$)/,
      'Please enter a valid PDB ID, Alphafold ID or Proteome ID'
    )
    .required('Is required'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Is required'),
  threshold: yup
    .number()
    .min(0, 'Please enter a number between 0 and 50')
    .max(100, 'Please enter a number between 0 and 50'),
  selectedClasses: yup.object().shape({
    'III_1': yup.boolean(),
    'III_2': yup.boolean(),
    'III_3': yup.boolean(),
    'III_4': yup.boolean(),
    'III_5': yup.boolean(),
    'III_6': yup.boolean(),
    'IV_1': yup.boolean(),
    'IV_2': yup.boolean(),
    'IV_3': yup.boolean(),
    'IV_4': yup.boolean(),
    'IV_5': yup.boolean(),
    'IV_6': yup.boolean(),
    'IV_7': yup.boolean(),
    'IV_0': yup.boolean(),
    'IV_9': yup.boolean(),
    'IV_10': yup.boolean(),
    'V_1': yup.boolean(),
    'V_2': yup.boolean(),
    'V_3': yup.boolean(),
    'V_4': yup.boolean(),
    'V_5': yup.boolean(),
  }),
});