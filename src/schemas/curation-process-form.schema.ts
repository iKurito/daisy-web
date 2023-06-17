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
});