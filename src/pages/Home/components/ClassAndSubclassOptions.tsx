interface Props {
  options: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ClassAndSubclassOptions({ options, handleChange }: Props) {
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
              {/* <input
                // ref={refPermissionsByCompany[item.sku]}
                id={item.name}
                name={item.name}
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={(e) => handleChange(e)}
                disabled={item.id !== 0}
              /> */}
              <input
                // ref={refPermissionsByCompany[item.sku]}
                id={item.name}
                name={item.name}
                type="checkbox"
                className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                onChange={handleChange}
                // disabled={item.id !== 0}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
}
