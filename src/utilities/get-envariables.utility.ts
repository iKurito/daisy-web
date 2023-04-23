export const getEnvEnvariables = () => {
  const envVariables = import.meta.env;
  return {
    ...envVariables,
  };
};
