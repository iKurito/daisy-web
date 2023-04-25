import { DownloadOptions } from '../models';

export const predictionsHeader = [
  'III_1',
  'III_2',
  'III_3',
  'III_4',
  'III_5',
  'III_6',
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
  'V_1',
  'V_2',
  'V_3',
  'V_4',
  'V_5',
];

export const downloadChainOptions: DownloadOptions[] = [
  {
    id: 0,
    name: 'PDB Chain file',
    href: 'https://alphafold.ebi.ac.uk/files/AF-Q5VSL9-F1-model_v4.cif',
  },
  {
    id: 1,
    name: 'Identified unit DB file',
    href: 'https://alphafold.ebi.ac.uk/files/AF-Q5VSL9-F1-model_v4.cif',
  },
  {
    id: 2,
    name: 'Mapping file',
    href: 'https://alphafold.ebi.ac.uk/files/AF-Q5VSL9-F1-model_v4.cif',
  },
];
