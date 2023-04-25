export interface DaisyInfo {
  response: DaisyResponse;
}

export interface DaisyResponse {
  isReady?: boolean;
  proteinResult: ProteinResult;
  requestID: number;
  result: boolean;
}

interface ProteinResult {
  chains: Chain[];
  id: string;
  isProcessed: boolean;
  isRepeat: boolean;
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
  repeatClass: string;
  repeatSubclass: string;
}

export interface DaisyRequest {
  proteinID: string;
  email: string;
}
