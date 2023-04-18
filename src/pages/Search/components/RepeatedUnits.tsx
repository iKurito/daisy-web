import ReactSequenceViewer from 'react-sequence-viewer';

function RepeatedUnits() {
  const mySeq = 'CAGTCGATCGTAGCTAGCTAGCTGATCGATGC';

  return (
    <section className="shadow-lg bg-primary border-none rounded-b-lg sm:rounded-tr-lg">
      <h1>RepeatedUnits</h1>
      <ReactSequenceViewer sequence={mySeq} />
    </section>
  );
}

export default RepeatedUnits;
