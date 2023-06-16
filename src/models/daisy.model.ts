export interface DaisyInfo {
  response: DaisyResponse;
}

export interface DaisyResponse {
  isReady?: boolean;
  proteinResult?: ProteinResult;
  proteomeResult?: ProteomeResult;
  type: string;
  valid: boolean;
}

interface ProteinResult {
  chains: Chain[];
  id: string;
  isProcessed: boolean;
  isRepeat: boolean;
  time: number;
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

export interface DaisyRequest {
  proteinID: string;
  email: string;
}
