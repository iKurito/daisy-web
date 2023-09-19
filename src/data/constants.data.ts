import { DownloadOptions, IdNameValue, SubjectManager } from '../models';

export const pfamHeader = [
  '#',
  'ID',
  'Name',
  'Clan',
  'Type'
]

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

export const openAdvancedRequestSubject$ = new SubjectManager<boolean>();

export const classAndSubclassThree: IdNameValue[] = [
  { id: 0, name: 'Class_III', value: 'Class III' },
  { id: 1, name: 'III_1', value: 'III.1' },
  { id: 2, name: 'III_2', value: 'III.2' },
  { id: 3, name: 'III_3', value: 'III.3' },
  { id: 4, name: 'III_4', value: 'III.4'},
  { id: 5, name: 'III_5', value: 'III.5'},
  { id: 6, name: 'III_6', value: 'III.6'},
];

export const classAndSubclassFour: IdNameValue[] = [
  { id: 0, name: 'Class_IV', value: 'Class IV' },
  { id: 1, name: 'IV_1', value: 'IV.1' },
  { id: 2, name: 'IV_2', value: 'IV.2' },
  { id: 3, name: 'IV_3', value: 'IV.3' },
  { id: 4, name: 'IV_4', value: 'IV.4' },
  { id: 5, name: 'IV_5', value: 'IV.5' },
  { id: 6, name: 'IV_6', value: 'IV.6' },
  { id: 7, name: 'IV_7', value: 'IV.7' },
  { id: 8, name: 'IV_8', value: 'IV.8' },
  { id: 9, name: 'IV_9', value: 'IV.9' },
  { id: 10, name: 'IV_10', value: 'IV.10' },
];

export const classAndSubclassFive: IdNameValue[] = [
  { id: 0, name: 'Class_V', value: 'Class V' },
  { id: 1, name: 'V_1', value: 'V.1' },
  { id: 2, name: 'V_2', value: 'V.2' },
  { id: 3, name: 'V_3', value: 'V.3' },
  { id: 4, name: 'V_4', value: 'V.4' },
  { id: 5, name: 'V_5', value: 'V.5' },
];

export const unitsColor = [
  { r: 255, g: 0, b: 0 },         // Rojo
  { r: 0, g: 0, b: 255 },         // Azul
  { r: 0, g: 255, b: 0 },         // Verde
  { r: 255, g: 255, b: 0 },       // Amarillo
  { r: 255, g: 165, b: 0 },       // Naranja
  { r: 255, g: 192, b: 203 },     // Rosa
  { r: 128, g: 0, b: 128 },       // Morado
  { r: 64, g: 224, b: 208 },      // Turquesa
  { r: 255, g: 0, b: 255 },       // Magenta
  { r: 165, g: 42, b: 42 },       // Marrón
  { r: 0, g: 100, b: 0 },         // Verde oscuro
  { r: 255, g: 215, b: 0 },       // Oro
  { r: 0, g: 255, b: 255 },       // Cian
  { r: 230, g: 230, b: 250 },     // Lavanda
  { r: 245, g: 245, b: 220 },     // Beige
  { r: 128, g: 128, b: 0 },       // Verde oliva
  { r: 255, g: 20, b: 147 },      // Rosa chicle
  { r: 218, g: 165, b: 32 },      // Oro viejo
  { r: 75, g: 0, b: 130 },        // Índigo
  { r: 139, g: 0, b: 0 },         // Marrón oscuro
  { r: 173, g: 255, b: 47 },      // Verde amarillento
  { r: 30, g: 144, b: 255 },      // Azul real
  { r: 210, g: 105, b: 30 },      // Chocolate
  { r: 147, g: 112, b: 219 },     // Azul medio
  { r: 255, g: 228, b: 196 },     // Almendra
  { r: 0, g: 139, b: 139 },       // Cian oscuro
  { r: 220, g: 20, b: 60 },       // Carmesí
  { r: 255, g: 99, b: 71 },       // Tomate
  { r: 70, g: 130, b: 180 },      // Acero
  { r: 0, g: 255, b: 255 },       // Celeste
  { r: 184, g: 134, b: 11 },      // Oro antiguo
  { r: 0, g: 128, b: 0 },         // Verde
  { r: 210, g: 180, b: 140 },     // Marrón claro
  { r: 135, g: 206, b: 235 },     // Azul cielo
  { r: 255, g: 165, b: 79 },      // Melocotón
  { r: 0, g: 191, b: 255 },       // Azul claro
  { r: 144, g: 238, b: 144 },     // Verde claro
  { r: 255, g: 140, b: 0 },       // Naranja oscuro
  { r: 176, g: 224, b: 230 },     // Azul claro pálido
  { r: 255, g: 192, b: 0 },       // Amarillo oscuro
  { r: 210, g: 105, b: 30 },      // Chocolate
  { r: 176, g: 224, b: 230 },     // Azul claro pálido
  { r: 255, g: 192, b: 0 },       // Amarillo oscuro
  { r: 60, g: 179, b: 113 },      // Verde mar
  { r: 139, g: 69, b: 19 },       // Siena
  { r: 240, g: 230, b: 140 },     // Amarillo claro
  { r: 128, g: 0, b: 0 },         // Granate
  { r: 46, g: 139, b: 87 },       // Verde mar oscuro
  { r: 205, g: 133, b: 63 },      // Burlywood
  { r: 0, g: 0, b: 128 }          // Azul marino
]