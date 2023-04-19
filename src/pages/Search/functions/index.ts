// https://biocomputingup.github.io/ProSeqViewer-documentation/doc
// https://embed.plnkr.co/plunk/WlRx73uuGA9EJbpn

declare let ProSeqViewer: any;
declare let LiteMol: any;
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

export function liteMolFunction() {
  const plugin = LiteMol.Plugin.create({ target: '#litemol' });
  plugin.loadMolecule(
    {
      id: '1tqn',
      url: 'https://www.ebi.ac.uk/pdbe/entry-files/download/pdb1tqn.ent',
      format: 'pdb',
    },
    {
      hideControls: true,
    }
  );
}
