/* eslint-disable new-cap */
// https://biocomputingup.github.io/ProSeqViewer-documentation/doc
// https://embed.plnkr.co/plunk/WlRx73uuGA9EJbpn

declare let ProSeqViewer: any;
declare let PDBeMolstarPlugin: any;
declare let msa: any;

export function test() {
  const sequences = [
    {
      sequence: 'GARALEALLTVAGEL--RGP-PLQLDTGQLLKIAKRG------',
      id: 1,
      label: '4gg4A 234-267',
    },
    {
      sequence: 'GVTAVEAVHAWRNAL--TGAPLN-L----TPEQVVAIASHDGG',
      id: 2,
      label: '4gg4A 268-303',
    },
    {
      sequence: '-KQALETVQRLLPVL--CQA-HG-L----TPQQVVAIASHDG-',
      id: 3,
      label: '4gg4A 304-336',
    },
  ];

  // Input icons
  // const icons = [
  //   { sequenceId: 1, start: 2, end: 2, icon: 'helix' },
  //   { sequenceId: 1, start: 13, end: 13, icon: 'lollipop' },
  // ];

  // Options and configuration
  const options = {
    chunkSize: 0,
    sequenceColor: 'turn',
    lateralIndexes: false,
    indexesLocation: 'lateral',
    wrapLine: true,
    lineSeparation: '10px',
    fontSize: '16px',
  };

  // Initialize the viewer
  const psv1 = new ProSeqViewer('psv1');
  const psv2 = new ProSeqViewer('psv2');

  // Generate the HTML
  // psv.draw({ sequences, options, icons });
  psv1.draw({ sequences, options });
  psv2.draw({ sequences, options });
}

export function alphaBuilder() {
  // Create plugin instance
  const viewerInstance = new PDBeMolstarPlugin();

  // Set options (Checkout available options list in the documentation)
  const options = {
    customData: {
      // url: '/assets/test/AF-O95905-F1-model_v4.cif',
      url: '/assets/script/AF-O95905-F1-model_v4.cif',
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

  // Get element from HTML/Template to place the viewer
  const viewerContainer = document.getElementById('myViewer2');

  // Call render method to display the 3D view
  viewerInstance.render(viewerContainer, options);
}

export function msaBuilder() {
  const opts = {} as any;

  opts.el = document.getElementById('yourDiv');
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
  const az = document.getElementById('fasta-file')?.innerText;
  opts.seqs = msa.io.fasta.parse(az);

  const m = new msa(opts);
  m.render();
  // const url =
  //   'https://raw.githubusercontent.com/wilzbach/msa/master/snippets/data/fer1.clustal';
}
