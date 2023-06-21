/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useRef, useState } from 'react';
import { FormikErrors, FormikHelpers, FormikTouched, useFormik } from 'formik';
import { openAdvancedRequestSubject$ } from '../../../data';
import useFetchAndLoad from '../../../hooks/useFecthAndLoad.hook';
import { useSearch } from '../../../hooks';
import { DaisyRequestAdvanced } from '../../../models';
import { curationProcessAdvancedForm } from '../../../schemas';

interface HomeContextProps {
  refClassesSubclasses: {
    [classOrSubclass: string]: React.RefObject<HTMLInputElement>;
  };
  values: DaisyRequestAdvanced;
  selected: string;
  touched: FormikTouched<DaisyRequestAdvanced>;
  errors: FormikErrors<DaisyRequestAdvanced>;
  loading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChangeSubclasses: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleOpenAdvancedRequestModal: () => void;
  handleExitAdvancedRequestModal: () => void;
}

const HomeContext = createContext<HomeContextProps>({} as HomeContextProps);

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export function HomeProvider({ children }: Props) {
  const [selected, setSelected] = useState<string>('threshold');

  const refIII = useRef<HTMLInputElement>(null);
  const refIII1 = useRef<HTMLInputElement>(null);
  const refIII2 = useRef<HTMLInputElement>(null);
  const refIII3 = useRef<HTMLInputElement>(null);
  const refIII4 = useRef<HTMLInputElement>(null);
  const refIII5 = useRef<HTMLInputElement>(null);
  const refIII6 = useRef<HTMLInputElement>(null);
  const refIV = useRef<HTMLInputElement>(null);
  const refIV1 = useRef<HTMLInputElement>(null);
  const refIV2 = useRef<HTMLInputElement>(null);
  const refIV3 = useRef<HTMLInputElement>(null);
  const refIV4 = useRef<HTMLInputElement>(null);
  const refIV5 = useRef<HTMLInputElement>(null);
  const refIV6 = useRef<HTMLInputElement>(null);
  const refIV7 = useRef<HTMLInputElement>(null);
  const refIV8 = useRef<HTMLInputElement>(null);
  const refIV9 = useRef<HTMLInputElement>(null);
  const refIV10 = useRef<HTMLInputElement>(null);
  const refV = useRef<HTMLInputElement>(null);
  const refV1 = useRef<HTMLInputElement>(null);
  const refV2 = useRef<HTMLInputElement>(null);
  const refV3 = useRef<HTMLInputElement>(null);
  const refV4 = useRef<HTMLInputElement>(null);
  const refV5 = useRef<HTMLInputElement>(null);
  const refClassesSubclasses = {
    Class_III: refIII,
    III_1: refIII1,
    III_2: refIII2,
    III_3: refIII3,
    III_4: refIII4,
    III_5: refIII5,
    III_6: refIII6,
    Class_IV: refIV,
    IV_1: refIV1,
    IV_2: refIV2,
    IV_3: refIV3,
    IV_4: refIV4,
    IV_5: refIV5,
    IV_6: refIV6,
    IV_7: refIV7,
    IV_8: refIV8,
    IV_9: refIV9,
    IV_10: refIV10,
    Class_V: refV,
    V_1: refV1,
    V_2: refV2,
    V_3: refV3,
    V_4: refV4,
    V_5: refV5,
  };

  const { loading, callEndpoint } = useFetchAndLoad();

  const { requestAdvanced } = useSearch(callEndpoint);

  const { values, touched, errors, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        proteinID: '',
        email: '',
        threshold: 100,
        selectedClasses: {
          III_1: false,
          III_2: false,
          III_3: false,
          III_4: false,
          III_5: false,
          III_6: false,
          IV_1: false,
          IV_2: false,
          IV_3: false,
          IV_4: false,
          IV_5: false,
          IV_6: false,
          IV_7: false,
          IV_8: false,
          IV_9: false,
          IV_10: false,
          V_1: false,
          V_2: false,
          V_3: false,
          V_4: false,
          V_5: false,
        },
      } as DaisyRequestAdvanced,
      validationSchema: curationProcessAdvancedForm,
      onSubmit: async (
        data: DaisyRequestAdvanced,
        actions: FormikHelpers<DaisyRequestAdvanced>
      ) => {
        let formData;
        if (selected === 'threshold') {
          formData = {
            ...data,
            proteinID: data.proteinID.toUpperCase(),
            selectedClasses: {},
          };
        } else {
          formData = {
            ...data,
            proteinID: data.proteinID.toUpperCase(),
            threshold: -1,
          };
        }
        const wasSuccessful = await requestAdvanced(formData);
        if (wasSuccessful) {
          actions.resetForm();
          openAdvancedRequestSubject$.setSubject = false;
        }
      },
    });

  const handleChangeSubclasses = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (['Class_III', 'Class_IV', 'Class_V'].includes(name)) {
      if (name === 'Class_III') {
        Object.entries(refClassesSubclasses).forEach(([key, value]) => {
          if (
            ['III_1', 'III_2', 'III_3', 'III_4', 'III_5', 'III_6'].includes(key)
          ) {
            if (value && value.current) {
              const reference = value.current;
              reference.checked = checked;
            }
          }
        });
        setFieldValue('selectedClasses', {
          ...values.selectedClasses,
          III_1: checked,
          III_2: checked,
          III_3: checked,
          III_4: checked,
          III_5: checked,
          III_6: checked,
        });
      } else if (name === 'Class_IV') {
        Object.entries(refClassesSubclasses).forEach(([key, value]) => {
          if (
            [
              'IV_1',
              'IV_2',
              'IV_3',
              'IV_4',
              'IV_5',
              'IV_6',
              'IV_7',
              'IV_8',
              'IV_9',
              'IV_10',
            ].includes(key)
          ) {
            if (value && value.current) {
              const reference = value.current;
              reference.checked = checked;
              setFieldValue('selectedClasses', {
                ...values.selectedClasses,
                [key]: checked,
              });
            }
          }
        });
        setFieldValue('selectedClasses', {
          ...values.selectedClasses,
          IV_1: checked,
          IV_2: checked,
          IV_3: checked,
          IV_4: checked,
          IV_5: checked,
          IV_6: checked,
          IV_7: checked,
          IV_8: checked,
          IV_9: checked,
          IV_10: checked,
        });
      } else {
        Object.entries(refClassesSubclasses).forEach(([key, value]) => {
          if (['V_1', 'V_2', 'V_3', 'V_4', 'V_5'].includes(key)) {
            if (value && value.current) {
              const reference = value.current;
              reference.checked = checked;
              setFieldValue('selectedClasses', {
                ...values.selectedClasses,
                [key]: checked,
              });
            }
          }
        });
        setFieldValue('selectedClasses', {
          ...values.selectedClasses,
          V_1: checked,
          V_2: checked,
          V_3: checked,
          V_4: checked,
          V_5: checked,
        });
      }
      return;
    }
    setFieldValue('selectedClasses', {
      ...values.selectedClasses,
      [name]: checked,
    });
    if (checked) {
      if (
        ['III_1', 'III_2', 'III_3', 'III_4', 'III_5', 'III_6'].includes(name)
      ) {
        if (
          refIII1.current &&
          refIII1.current.checked &&
          refIII2.current &&
          refIII2.current.checked &&
          refIII3.current &&
          refIII3.current.checked &&
          refIII4.current &&
          refIII4.current.checked &&
          refIII5.current &&
          refIII5.current.checked &&
          refIII6.current &&
          refIII6.current.checked &&
          refIII.current
        ) {
          const reference = refIII.current;
          reference.checked = true;
        }
      } else if (['V_1', 'V_2', 'V_3', 'V_4', 'V_5'].includes(name)) {
        if (
          refV1.current &&
          refV1.current.checked &&
          refV2.current &&
          refV2.current.checked &&
          refV3.current &&
          refV3.current.checked &&
          refV4.current &&
          refV4.current.checked &&
          refV5.current &&
          refV5.current.checked &&
          refV.current
        ) {
          const reference = refV.current;
          reference.checked = true;
        }
      } else if (
        refIV1.current &&
        refIV1.current.checked &&
        refIV2.current &&
        refIV2.current.checked &&
        refIV3.current &&
        refIV3.current.checked &&
        refIV4.current &&
        refIV4.current.checked &&
        refIV5.current &&
        refIV5.current.checked &&
        refIV6.current &&
        refIV6.current.checked &&
        refIV7.current &&
        refIV7.current.checked &&
        refIV8.current &&
        refIV8.current.checked &&
        refIV9.current &&
        refIV9.current.checked &&
        refIV10.current &&
        refIV10.current.checked &&
        refIV.current
      ) {
        const reference = refIV.current;
        reference.checked = true;
      }
    } else if (
      ['III_1', 'III_2', 'III_3', 'III_4', 'III_5', 'III_6'].includes(name)
    ) {
      if (refIII.current) {
        const reference = refIII.current;
        reference.checked = false;
      }
    } else if (['V_1', 'V_2', 'V_3', 'V_4', 'V_5'].includes(name)) {
      if (refV.current) {
        const reference = refV.current;
        reference.checked = false;
      }
    } else if (refIV && refIV.current) {
      const reference = refIV.current;
      reference.checked = false;
    }
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  const handleOpenAdvancedRequestModal = () => {
    openAdvancedRequestSubject$.setSubject = true;
  };

  const handleExitAdvancedRequestModal = () => {
    openAdvancedRequestSubject$.setSubject = false;
  };

  return (
    <HomeContext.Provider
      value={{
        refClassesSubclasses,
        values,
        selected,
        touched,
        errors,
        loading,
        handleChange,
        handleSubmit,
        handleChangeSubclasses,
        handleSelect,
        handleOpenAdvancedRequestModal,
        handleExitAdvancedRequestModal,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (context === undefined) {
    throw new Error('useHomeContext must be used within a SearchProvider');
  }
  return context;
};
