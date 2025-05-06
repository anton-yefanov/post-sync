"use client";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ReusableDialogProps {
  buttonLabel: string;
  title: string;
  description: string;
}

export const ReusableDialog = ({
  buttonLabel,
  title,
  description,
}: ReusableDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-8">{buttonLabel}</Button>
      </DialogTrigger>

      <DialogContent className="pt-5 pb-3">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>

          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
