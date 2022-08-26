import { trpc } from '@/utils/trpc';
import { DropdownArrow } from 'assets/icons/dropdownArrow';
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Icon, { ColorEnum, IconEnum, SizeEnum } from '../icon/Icon';

export interface ILayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const Layout: React.FC<ILayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  const { data: session, status } = useSession();
  const [showProfilDropdown, setShowProfilDropdown] = useState(false);
  return (
    <>
      <Head>
        <title>AdminECO E-commerce Admin Panel</title>
      </Head>
      <div className="bg-base-100 drawer drawer-mobile" data-theme="halloween">
        <input type="checkbox" id="drawer" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-300">
            <nav className="navbar w-full flex justify-between items-center">
              <div className="flex-1"></div>
              <div className="flex items-center gap-4 ">
                <div
                  className="flex items-center gap-4 p-2 hover:bg-base-100 hover:cursor-pointer relative"
                  onClick={() => {
                    setShowProfilDropdown(!showProfilDropdown);
                  }}
                >
                  <span className="w-8 h-8 bg-red-500 rounded-full">
                    <Image
                      src={session?.user?.image || ''}
                      width={96}
                      height={96}
                      alt="user profile"
                      className="rounded-full"
                    />
                  </span>
                  <span>{session?.user?.name}</span>
                  <DropdownArrow />
                  {showProfilDropdown ? (
                    <ul className="absolute flex flex-col w-full p-2 m-0 top-16 right-0 bg-base-300">
                      <li className="h-8 flex items-center hover:bg-base-100 hover:cursor-pointer">
                        Profil
                      </li>
                      <li
                        className="h-8 flex items-center hover:bg-base-100 hover:cursor-pointer"
                        onClick={() => {
                          signOut();
                          setShowProfilDropdown(false);
                        }}
                      >
                        Se deconnecter
                      </li>
                    </ul>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </nav>
          </div>
          <div className="p-4">{children}</div>
        </div>
        <div className="drawer-side">
          <label htmlFor="drawer" className="drawer-overlay"></label>
          <aside className="bg-base-200">
            <div className="z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 hidden lg:flex">
              <button className="flex-0 btn btn-ghost px-2">
                <div className="font-title text-primary text-lg transition-all duration-200 md:text-3xl">
                  <span className="lower">admin</span>
                  <span className="text-base-content uppercase">eco</span>
                </div>
              </button>
            </div>
            <div className="h-4"></div>
            <ul className="menu menu-compact flex flex-col p-0 px-4">
              <li>
                <Link href="/">
                  <a href="#" className="flex gap-4">
                    <span className="flex-none">
                      <Icon
                        name={IconEnum.HOME}
                        color={ColorEnum.WHITE}
                        size={SizeEnum.SMALL}
                      />
                    </span>
                    <span className="flex-1">Dashboard</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/users">
                  <a href="#" className="flex gap-4">
                    <span className="flex-none">
                      <Icon
                        name={IconEnum.USER}
                        color={ColorEnum.WHITE}
                        size={SizeEnum.SMALL}
                      />
                    </span>
                    <span className="flex-1">Utilisateurs</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/stock">
                  <a href="#" className="flex gap-4">
                    <span className="flex-none">
                      <Icon
                        name={IconEnum.STOCK}
                        color={ColorEnum.WHITE}
                        size={SizeEnum.SMALL}
                      />
                    </span>
                    <span className="flex-1">Stock</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/commands">
                  <a href="#" className="flex gap-4">
                    <span className="flex-none">
                      <Icon
                        name={IconEnum.COMMAND}
                        color={ColorEnum.WHITE}
                        size={SizeEnum.SMALL}
                      />
                    </span>
                    <span className="flex-1">Commandes</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/accounting">
                  <a href="#" className="flex gap-4">
                    <span className="flex-none">
                      <Icon
                        name={IconEnum.ACCOUNTING}
                        color={ColorEnum.WHITE}
                        size={SizeEnum.SMALL}
                      />
                    </span>
                    <span className="flex-1">Comptabilité</span>
                  </a>
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Layout;
