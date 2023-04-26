import { DownloadOptions, SubjectManager } from '../models';

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
    name: 'Chain structure file (.pdb)',
    href: 'BASE_URL/pdb',
  },
  {
    id: 1,
    name: 'ReUPred identified units file (.db)',
    href: 'BASE_URL/db',
  },
  {
    id: 2,
    name: 'Mapping file (.mapping)',
    href: 'BASE_URL/mapping',
  },
];

export const downloadRegionOptions: DownloadOptions[] = [
  {
    id: 0,
    name: 'Units .pdb structure files (.zip)',
    href: 'BASE_URL/units',
  },
  {
    id: 1,
    name: 'Aligned units structure file (.pdb)',
    href: 'BASE_URL/pdb',
  },
  {
    id: 2,
    name: 'Structural similarity matrix',
    href: 'BASE_URL/matrix',
  },
  {
    id: 3,
    name: 'Aligned units Fasta File (.afasta)',
    href: 'BASE_URL/afasta',
  },
  {
    id: 4,
    name: 'Aligned units DSSP File (.dssp)',
    href: 'BASE_URL/dssp',
  },
];

export const downloadPdbStructureOptions: DownloadOptions[] = [
  {
    id: 0,
    name: 'Download structure file (.pdb)',
    href: 'https://files.rcsb.org/download/',
  },
];

export const downloadAlphaFoldStructureOptions: DownloadOptions[] = [
  {
    id: 0,
    name: 'Download structure file (.cif)',
    href: 'https://alphafold.ebi.ac.uk/files/AF-UNIPROT-F1-model_v4.cif',
  },
];

export const openDialogSubject$ = new SubjectManager<boolean>();
