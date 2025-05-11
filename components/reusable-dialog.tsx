import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";

interface ReusableDialogProps {
  trigger: React.ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
  submitLabel: string;
}

export const ReusableDialog = ({
  title,
  description,
  trigger,
  children,
  submitLabel,
}: ReusableDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="[&>button]:hidden pt-5 pb-3 px-5 w-100 gap-y-2 max-h-screen overflow-y-auto mt-2 ">
        <DialogHeader className="space-y-1">
          <DialogTitle>{title}</DialogTitle>

          <DialogDescription className="text-gray-700 text-[15px]">
            {description}
          </DialogDescription>
        </DialogHeader>

        {children}

        <DialogFooter className="mt-1">
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>

          <Button type="submit">{submitLabel}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
