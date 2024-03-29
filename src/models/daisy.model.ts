export interface DaisyInfo {
  response: DaisyResponse;
  protein: ProteinResponse;
}

export interface DaisyResponse {
  isAdvanced?: boolean;
  isReady?: boolean;
  requestID?: string;
  proteinResult?: ProteinResult;
  proteomeResult?: ProteomeResult;
  type: string;
  valid: boolean;
}

export interface ProteinResult {
  chains: Chain[];
  id: string;
  isProcessed: boolean;
  isRepeat: boolean;
  pfamScan: PfamScan;
  time: number;
  type: string;
}

export interface PfamScan {
  chains: ChainPS[];
  id: string;
}

export interface ChainPS {
  chain: string;
  classes: any[];
  families: FamilyPS[];
  hasRepeat: boolean;
}

export interface FamilyPS {
  clan: string;
  classes: any[];
  id: string;
  name: string;
  type: string;
}

export interface Chain {
  classPrediction: { [key: string]: number };
  isRepeat: boolean;
  name: string;
  regions?: Region[];
}

export interface Region {
  classRegionNumber: number;
  confidence: number;
  end: number;
  repeatClass: string;
  repeatSubclass: string;
  start: number;
  units: Unit[];
}

export interface Unit {
  end: number;
  start: number;
}

export interface ProteomeResult {
  components: Component[];
  id: string;
  isProcessed: boolean;
  timeMean: number;
}

export interface Component {
  name: string;
  structures: Structure[];
}

export interface Structure {
  id: string;
  isProcessed: boolean;
  isRepeat: boolean;
  time: number;
  type: string;
}

export interface ProteinResponse {
  proteinResult: ProteinResult;
  result: boolean;
}

export interface DaisyRequest {
  proteinID: string;
  email: string;
}

export interface DaisyRequestAdvanced {
  proteinID: string;
  email: string;
  threshold: number;
  selectedClasses: { [key: string]: boolean };
}

export interface IdNameValue {
  id: number;
  name: string;
  value: string;
}