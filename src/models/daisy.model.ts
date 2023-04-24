export interface DaisyInfo {
  response: DaisyResponse;
}

export interface DaisyResponse {
  isReady: boolean;
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

interface Chain {
  classPrediction: { [key: string]: number };
  isRepeat: boolean;
  name: string;
  regions?: Region[];
}

interface Region {
  classRegionNumber: number;
  repeatClass: string;
  repeatSubclass: string;
}

export interface DaisyRequest {
  proteinID: string;
  email: string;
}
