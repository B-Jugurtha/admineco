import { getTheAuthSession } from '@/server/common/get-server-session';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React, { useState } from 'react';
import Icon, {
  IconEnum,
  ColorEnum,
  SizeEnum,
} from '../../components/icon/Icon';
import { Clients } from './clients';
import { DialogAjoutClientTrigger } from './clients/AjoutClient';

const Users = (props: any) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [openNewClientDialog, setOpenNewClientDialog] = useState(false);
  return (
    <div className="prose max-w-screen-2xl">
      <div className="text-sm breadcrumbs">
        <ul className="m-0 p-0">
          <li className="p-0">
            <Icon
              name={IconEnum.USER}
              color={ColorEnum.WHITE}
              size={SizeEnum.SMALL}
              className="pr-2"
            />
            Utilisateurs
          </li>
          {selectedTab === 0 ? (
            <>
              <li>Clients</li>
              <li>
                <a
                  onClick={() => {
                    setOpenNewClientDialog(true);
                  }}
                >
                  Ajout. Client
                </a>
              </li>
            </>
          ) : selectedTab === 1 ? (
            <>
              <li>Admins/Staffs</li>
              <li>
                <a>Ajout. Admin / Staff</a>
              </li>
            </>
          ) : selectedTab === 2 ? (
            <>
              <li>Fournisseurs</li>
              <li>
                <a>Ajout. Fournisseur</a>
              </li>
            </>
          ) : selectedTab === 3 ? (
            <>
              <li>Livreurs</li>
              <li>
                <a>Ajout. Livreur</a>
              </li>
            </>
          ) : (
            ''
          )}
        </ul>
      </div>
      <h2 className="mt-1 w-full">
        {selectedTab === 0
          ? 'Clients'
          : selectedTab === 1
          ? 'Admins / Staffs'
          : selectedTab === 2
          ? 'Fournisseurs'
          : selectedTab === 3
          ? 'Livreurs'
          : ''}
      </h2>
      <div className="tabs">
        <a
          className={
            selectedTab == 0 ? 'tab tab-lifted tab-active' : 'tab tab-lifted'
          }
          onClick={() => {
            setSelectedTab(0);
          }}
        >
          Clients
        </a>
        <a
          className={
            selectedTab == 1 ? 'tab tab-lifted tab-active' : 'tab tab-lifted'
          }
          onClick={() => {
            setSelectedTab(1);
          }}
        >
          Admin/staff
        </a>
        <a
          className={
            selectedTab == 2 ? 'tab tab-lifted tab-active' : 'tab tab-lifted'
          }
          onClick={() => {
            setSelectedTab(2);
          }}
        >
          Fournisseurs
        </a>
        <a
          className={
            selectedTab == 3 ? 'tab tab-lifted tab-active' : 'tab tab-lifted'
          }
          onClick={() => {
            setSelectedTab(3);
          }}
        >
          Livreurs
        </a>
      </div>
      {selectedTab === 0 ? (
        <Clients />
      ) : selectedTab === 1 ? (
        'Admin/Staff'
      ) : selectedTab === 2 ? (
        'Fournisseurs'
      ) : (
        'Livreurs'
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const session = await getTheAuthSession(ctx);
  if (!session) {
    return {
      redirect: { destination: '/auth/sign-in', permanent: false },
    };
  }
  if (session.user?.role !== 'Admin' && session.user?.role !== 'Superadmin') {
    return {
      redirect: { destination: '/unauthorized', permanent: false },
    };
  }
  return {
    props: {
      session,
    },
  };
};

export default Users;
