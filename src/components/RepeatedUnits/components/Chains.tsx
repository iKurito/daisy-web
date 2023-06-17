interface Props {
  baseUrl: string;
}

function Chains({ baseUrl }: Props) {
  return (
    <div
      id="chainViewer"
      className="w-auto h-[300px] sm:h-[400px] relative z-[99]"
    >
      <pdbe-molstar
        id="pdbeMolstarComponent"
        custom-data-url={`${baseUrl}/pdb`}
        custom-data-format="pdb"
        hide-controls="false"
      />
    </div>
  );
}

export default Chains;
