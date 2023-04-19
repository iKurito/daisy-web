// https://biocomputingup.github.io/ProSeqViewer-documentation/doc
// https://embed.plnkr.co/plunk/WlRx73uuGA9EJbpn

declare let ProSeqViewer: any;
declare let PDBeMolstarPlugin: any;

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
    sequenceColor: 'clustal',
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

export function alphaFunction() {
  // Create plugin instance
  const viewerInstance = new PDBeMolstarPlugin();

  // Set options (Checkout available options list in the documentation)
  const options = {
    customData: {
      url: 'https://alphafold.ebi.ac.uk/files/AF-O15552-F1-model_v1.cif',
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
