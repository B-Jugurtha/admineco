import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

type Props = {};

const Dialog = DialogPrimitive.Root;
const DialogAjoutClientTrigger = DialogPrimitive.Trigger;
const DialogTitle = DialogPrimitive.Title;
const DialogDescription = DialogPrimitive.Description;
const DialogClose = DialogPrimitive.Close;

export const AjoutClient: React.FC<Props> = (props: Props) => {
  return (
    <Dialog>
      <DialogAjoutClientTrigger asChild>
        <button className="btn" data-state="closed">
          open di
        </button>
      </DialogAjoutClientTrigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0" />
        <DialogPrimitive.Content className="bg-base-200 rounded-lg shadow-lg fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-1/2 w-8/12 p-4">
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you re done.
          </DialogDescription>
          <DialogClose asChild>
            {/* <IconButton aria-label="Close">
         <Cross2Icon />
       </IconButton> */}
          </DialogClose>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </Dialog>
  );
};
