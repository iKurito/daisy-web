/* eslint-disable new-cap */
// https://biocomputingup.github.io/ProSeqViewer-documentation/doc
// https://embed.plnkr.co/plunk/WlRx73uuGA9EJbpn

import { unitsColor } from "../data";
import { Chain } from "../models";

declare let PDBeMolstarPlugin: any;
declare let msa: any;

export function proteinBuilder(
  baseUrl: string,
  proteinContainer: React.RefObject<HTMLDivElement>
) {
  const viewerInstance = new PDBeMolstarPlugin();
  const options = {
    customData: {
      url: `${baseUrl}/pdb`,
      format: 'pdb',
    },
    bgColor: { r: 0, g: 0, b: 0 },
    hideControls: true,
  };  
  const viewerContainer = proteinContainer!.current;
  viewerInstance.render(viewerContainer, options);
  return viewerInstance;
}

export function alphaBuilder(
  id: string,
  alphaFoldContainer: React.MutableRefObject<null>
) {
  const viewerInstance = new PDBeMolstarPlugin();
  const options = {
    customData: {
      url: `https://alphafold.ebi.ac.uk/files/AF-${id}-F1-model_v4.cif`,
      format: 'cif',
    },
    alphafoldView: true,
    bgColor: { r: 0, g: 0, b: 0 },
    hideCanvasControls: [
      'selection',
      'animation',
      'controlToggle',
      'controlInfo',
    ],
  };  
  const viewerContainer = alphaFoldContainer.current;
  viewerInstance.render(viewerContainer, options);
  return viewerInstance;
}

export function msaBuilder(
  reference: React.MutableRefObject<null>,
  url: string
) {
  const opts = {} as any;

  opts.el = reference.current;
  opts.vis = {
    conserv: false,
    overviewbox: false,
    seqlogo: false,
  };
  opts.conf = {
    dropImport: true,
  };
  opts.zoomer = {
    menuFontsize: '12px',
    autoResize: true,
  };
  opts.conf = {
    registerMouseHover: false,
    registerMouseClicks: true,
    importProxy: 'https://cors-anywhere.herokuapp.com/',
    eventBus: true,
    alphabetSize: 20,
    dropImport: false,
    debug: false,
  };

  const m = new msa(opts);
  m.render();
  m.u.file.importURL(url);
  m.render();
}

export function readFile(url: string) {
  const textArea = document.getElementById('text-area-file');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function l() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        if (textArea) textArea.innerHTML += this.responseText;
      } else {
        throw new Error("can't load data");
      }
    }
  };
  xhr.send();
}

export function getSelectedUnitsColorFromChain(chain: Chain) {
  const { regions, name } = chain;
  const newRegions = regions!.map((region) => {
    const { start, end, units } = region;
    const init = {
      struct_asym_id: name,
      start_residue_number: start,
      end_residue_number: end,
      color: { r: 255, g: 255, b: 255 },
    };
    const newUnits = units!.map((unit, index) => {
      const mult = Math.floor(index / (unitsColor.length));
      const idx = index > unitsColor.length - 1 ? index - (unitsColor.length) * mult : index;
      return {
        struct_asym_id: name,
        start_residue_number: unit.start,
        end_residue_number: unit.end,
        color: unitsColor[idx],
      }
    });
    return [init, ...newUnits];
  });
  return newRegions.flat(Infinity);
}

export function getSelectedUnitsColor(chains: Chain[]) {
  return chains
    .filter((chain) => chain.isRepeat)
    .map((chain) => {      
      return getSelectedUnitsColorFromChain(chain);
    });
}

export function getSelectedUnitsColorFromRegion(chain: Chain, regionIndex: number) {
  const { regions } = chain;
  const region = regions![regionIndex];
  const { start, end, units } = region;
    const init = {
      start_residue_number: start,
      end_residue_number: end,
      color: { r: 255, g: 255, b: 255 },
    };
    const newUnits = units!.map((unit, index) => {
      const mult = Math.floor(index / (unitsColor.length));
      const idx = index > unitsColor.length - 1 ? index - (unitsColor.length) * mult : index;
      return ({
        start_residue_number: unit.start,
        end_residue_number: unit.end,
        color: unitsColor[idx],
      })
    }
  );      
  return [init, ...newUnits];
}