interface Props {
  loading: boolean;
}

function ProcessResult({ loading }: Props) {
  if (loading)
    return (
      <div className="flex items-center justify-center w-full py-10">
        <div className="custom-loader" />
      </div>
    );

  return (
    <div>
      <h1>HOLA</h1>
    </div>
  );
}

export default ProcessResult;
