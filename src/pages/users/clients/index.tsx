import { trpc } from '@/utils/trpc';
import { Arrow } from 'assets/icons/arrow';
import { Cog } from 'assets/icons/cog';
import { DropdownArrow } from 'assets/icons/dropdownArrow';
import React from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { AjoutClient } from './AjoutClient';

type Props = {};

const DialogTrigger = DialogPrimitive.Trigger;
const DialogContent = DialogPrimitive.Content;
const DialogClose = DialogPrimitive.Close;

export const Clients = (props: Props) => {
  const { data, isLoading } = trpc.proxy.user.getAllClients.useQuery();
  const [open, setOpen] = React.useState(false);
  const isSSR = () => typeof window === undefined;
  return (
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
      <div className="flex">{!isLoading ? JSON.stringify(data) : ''}</div>
      <div className="flex">
        {/* {dialogueWindow} */}
        <button
          className="btn"
          onClick={() => {
            setOpen(true);
          }}
        >
          open dialog
        </button>
        {/* <DialogBox open={open} setOpen={setOpen}>
          <div className="fixed flex w-[80vw] h-[80vh] items-center top-0 left-0 justify-center z-10">
            <div className="flex flex-col items-center justify-center bg-base-300 p-4">
              <span className="prose">
                <h3>Nouveau Client</h3>
              </span>
              <span className="w-full h-1 bg-base-100"></span>
              <span className="flex flex">
                <span className="flex">salut</span>
                <span className="flex">salut2</span>
              </span>
            </div>
          </div>
        </DialogBox> */}
      </div>
      <div className="h-4"></div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full ">
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
  );
};
