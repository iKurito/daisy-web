interface Props {
  options: any;
}

function ClassAndSubclassOptions({ options }: Props) {
  return (
    <div className="flex flex-col w-full">
      {options.map((item: any) => {
        return (
          <div
            key={item.id}
            className={`flex justify-between space-x-4 overflow-x-auto items-center py-1 px-1.5 border border-gray-300 ${
              item.id === 0 ? 'rounded-t-lg border-b-0' : 'border-b-0'
            } ${
              item.id === options.length - 1
                ? 'rounded-b-lg border-b-[1px]'
                : ''
            }`}
          >
            <span
              className={`text-xs md:text-sm leading-5 text-gray-900 ${
                item.id === 0 ? '' : 'ml-2'
              }`}
            >
              {item.name}
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                // ref={refPermissionsByCompany[item.sku]}
                id={item.name}
                name={item.name}
                type="checkbox"
                value=""
                className="sr-only peer"
                // onChange={handleChangePermissions}
                disabled={item.id !== 0}
              />
              <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-primary peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default ClassAndSubclassOptions;
