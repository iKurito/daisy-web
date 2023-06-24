import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { MiniChevronDownIcon, MiniDownloadIcon } from '../../icons';
import { DownloadOptions } from '../../models';

interface Props {
  items: DownloadOptions[];
}

export function Dropdown({ items }: Props) {
  return (
    <div className="z-[200] w-full sm:w-auto">
      <Menu as="div" className="relative sm:inline-block text-left">
        <div>
          <Menu.Button className="rounded-lg bg-third px-4 py-2 hover:shadow-lg font-bold tracking-wide text-[15px] sm:text-[20px] w-full sm:w-auto flex items-center gap-2 justify-center">
            <div className="text-fourth">
              <MiniDownloadIcon />
            </div>
            <span>Download</span>
            <div>
              <MiniChevronDownIcon />
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              {items.map((item) => (
                <Menu.Item key={item.id}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={`${
                        active ? 'bg-third' : ''
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
