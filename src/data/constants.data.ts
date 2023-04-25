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
    href: 'https://alphafold.ebi.ac.uk/files/AF-MMCIF-F1-model_VERSION.cif',
  },
  {
    id: 1,
    name: 'Identified unit DB file',
    href: 'https://alphafold.ebi.ac.uk/files/AF-MMCIF-F1-model_VERSION.cif',
  },
  {
    id: 2,
    name: 'Mapping file',
    href: 'https://alphafold.ebi.ac.uk/files/AF-MMCIF-F1-model_VERSION.cif',
  },
];

export const downloadRegionOptions: DownloadOptions[] = [
  {
    id: 0,
    name: 'Unit PDBs files',
    href: '',
  },
  {
    id: 1,
    name: 'Aligned units PDB file',
    href: '',
  },
  {
    id: 2,
    name: 'Structural similarity matrix',
    href: '',
  },
  {
    id: 3,
    name: 'Structural similarity summary',
    href: '',
  },
  {
    id: 4,
    name: 'Aligned units Fasta File',
    href: '',
  },
  {
    id: 5,
    name: 'Aligned units DSSP File',
    href: '',
  },
];

export const downloadPdbStructureOptions: DownloadOptions[] = [
  {
    id: 0,
    name: 'Download PDB',
    href: 'https://files.rcsb.org/download/',
  },
];

export const downloadAlphaFoldStructureOptions: DownloadOptions[] = [
  {
    id: 0,
    name: 'Download Alphafold',
    href: 'https://alphafold.ebi.ac.uk/files/AF-UNIPROT-F1-model_v4.cif',
  },
];
