import { getTheAuthSession } from '@/server/common/get-server-session';
import { helloRouter } from '@/server/router/subRoutes/hello';
import { userRouter } from '@/server/router/subRoutes/user';
import { trpc } from '@/utils/trpc';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react';
import { Arrow } from '../../../assets/icons/arrow';
import { Cog } from '../../../assets/icons/cog';
import { DropdownArrow } from '../../../assets/icons/dropdownArrow';
import Icon, {
  IconEnum,
  ColorEnum,
  SizeEnum,
} from '../../components/icon/Icon';

const Users = (props: any) => {
  const { data, isLoading } = trpc.proxy.user.getUserInfo.useQuery();
  // const { data, isLoading } = trpc.useQuery(['user.getRole']);
  // const authorizedEmails = trpc.useQuery([
  //   'authorizedEmails.getAuthorizedEmails',
  // ]).data;
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
          <li>Clients</li>
          <li>
            <a>Ajout. Client</a>
          </li>
        </ul>
      </div>
      <h2 className="mt-1">Utilisateurs</h2>
      <div className="tabs">
        <a className="tab tab-lifted tab-active">Clients</a>
        <a className="tab tab-lifted">Admin/staff</a>
        <a className="tab tab-lifted">Fournisseurs</a>
        <a className="tab tab-lifted">Livreurs</a>
      </div>
      {/* Clients */}
      <div className="p-4">
        {/* Filter */}
        <div className="flex justify-between">
          <div className="flex gap-4 items-center ">
            <span>Filter:</span>
            <input
              type="text"
              placeholder="dd.mm.yy"
              className="input input-bordered max-w-xs h-10"
            />
            <span>-</span>
            <input
              type="text"
              placeholder="dd.mm.yy"
              className="input input-bordered max-w-xs h-10"
            />
            <div>sort by:</div>
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn min-h-0 h-10 flex items-center gap-2"
              >
                <div className="w-fit flex gap-2">
                  <span>Prix</span>
                  <span>
                    <Arrow />
                  </span>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-32"
              >
                <li className="btn ">
                  <div>
                    <span>Prix</span>
                    <span>
                      <Arrow />
                    </span>
                  </div>
                </li>
                <li className="btn ">
                  <div>
                    <div>Prix</div>
                    <span>
                      <Arrow className="rotate-180" />
                    </span>
                  </div>
                </li>
                <li className="btn ">
                  <div>
                    <div>Date</div>
                    <span>
                      <Arrow />
                    </span>
                  </div>
                </li>
                <li className="btn ">
                  <div>
                    <div>Date</div>
                    <span>
                      <Arrow className="rotate-180" />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <input
              type="text"
              placeholder="Value"
              className="input input-bordered max-w-xs h-10"
            />
            <button className="btn glass min-h-0 h-10">
              <span>Filter</span>
            </button>
          </div>
          <div className="flex gap-4 items-center w-fit">
            <span>show by: </span>
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn min-h-0 h-10 flex items-center gap-2"
              >
                <span>20</span>
                <DropdownArrow />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-200 rounded-box"
              >
                <li className="btn">10</li>
                <li className="btn">20</li>
                <li className="btn">50</li>
              </ul>
            </div>
            <button className="btn min-h-0 h-10">
              <Cog />
            </button>
          </div>
        </div>
        <div className="h-4"></div>
        {/* <div>{data && data}</div> */}
        {/* <ul>
          {authorizedEmails?.map((email, i) => {
            return <li key={i}>{email.email}</li>;
          })}
        </ul> */}
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th>Nom & Prénom</th>
                <th>Email</th>
                <th>Confirmed Email</th>
                <th>Confirmed Email</th>
                <th>Confirmed Email</th>
                <th>Confirmed Email</th>
                <th>Confirmed Email</th>
                <th>Confirmed Email</th>
                <th>Confirmed Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
              </tr>

              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
                <td>Purple</td>
                <td>Purple</td>
                <td>Purple</td>
                <td>Purple</td>
                <td>Purple</td>
                <td>Purple</td>
              </tr>

              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td>Red</td>
                <td>Red</td>
                <td>Red</td>
                <td>Red</td>
                <td>Red</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const session = await getTheAuthSession(ctx);
  const userInfo = await prisma?.user.findFirst({
    where: { id: session?.user?.id },
  });
  if (!session) {
    return {
      redirect: { destination: '/auth/sign-in', permanent: false },
    };
  }
  if (userInfo?.role !== 'ADMIN' && userInfo?.role !== 'SUPERADMIN') {
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
