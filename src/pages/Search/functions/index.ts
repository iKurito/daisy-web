/* eslint-disable new-cap */
// https://biocomputingup.github.io/ProSeqViewer-documentation/doc
// https://embed.plnkr.co/plunk/WlRx73uuGA9EJbpn

declare let PDBeMolstarPlugin: any;
declare let msa: any;

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

export function readFile() {
  const textArea = document.getElementById('text-area-file');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://files.rcsb.org/download/4uug.pdb', true);
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
