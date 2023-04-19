/* eslint-disable no-console */
import ReactSequenceViewer from 'react-sequence-viewer';

function RepeatedUnits() {
  const mySeq =
    'CAGTCGATCGTAGCTAGCTAGCTGATCGATGCCAGTCGATCGTAGCTAGCTAGCTGATCGATGCCAGTCGATCGTAGCTAGCTAGCTGATCGATGC';

  const mouseClick = (e: any) => {
    console.log('Mouse Region clicked');
    console.log(e.detail);
  };
  const subPart = (e: any) => {
    console.log('Subpart');
    console.log(e.detail);
  };

  return (
    <section className="shadow-lg bg-primary border-none rounded-b-lg sm:rounded-tr-lg">
      <div className="p-2 sm:px-6 sm:py-4 mb-40 sm:mb-20 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <h2 className="text-[20px] sm:text-[25px] font-bold">
              Chain ID: <span className="text-fourth">A</span>
            </h2>
            <div className="flex flex-col">
              <ReactSequenceViewer
                id="protein"
                sequence={mySeq}
                title="1RSA"
                charsPerLine="50"
                className="border border-gray-500 rounded-lg p-4 bg-white"
                search={false}
                toolbar={false}
                showLineNumbers
                onSubpartSelected={subPart}
                onMouseSelection={mouseClick}
                coverage={[
                  {
                    start: 0,
                    end: 7,
                    color: '#E54155',
                    underscore: false,
                    tooltip: 'this is a tooltip',
                  },
                ]}
                legend={[
                  {
                    name: 'Units',
                    color: '#E54155',
                    underscore: false,
                  },
                  {
                    name: 'Units',
                    color: '#4B95CB',
                    underscore: false,
                  },
                  {
                    name: 'Insertions',
                    color: '#E8E02D',
                    underscore: false,
                  },
                ]}
              />
            </div>
          </div>
          <div>h2</div>
        </div>
      </div>
    </section>
  );
}

export default RepeatedUnits;
