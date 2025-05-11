import Image from "next/image";
import { ReusableAccordion } from "../reusable-accordion";
import { ReusableDialog } from "../reusable-dialog";
import { Button } from "@/components/ui";
import { WarningIcon } from "@/public/icons";
import { SocialPlatformItem } from "./social-platforms-data";

interface SocialPlatformCardProps {
  item: SocialPlatformItem;
}

export const SocialPlatformCard = ({ item }: SocialPlatformCardProps) => {
  return (
    <div key={item.alt} className="flex items-center gap-4">
      <Image src={item.icon} alt={item.alt} className="h-8 w-8" />

      <ReusableDialog
        trigger={<Button className="h-7.5">{item.buttonLabel}</Button>}
        title={item.dialogTitle}
        description={item.dialogDescription}
        submitLabel="Connect"
      >
        <h2 className="font-medium">Requirements:</h2>

        <div className="space-y-1.5">
          {item.content.map((block, i) => {
            switch (block.type) {
              case "accordion":
                return (
                  <ReusableAccordion
                    key={i}
                    trigger={
                      <div className="flex items-center gap-x-2">
                        {block.warningIcon && (
                          <Image
                            src={WarningIcon}
                            alt="warning_icon"
                            className="w-4.5 h-4.5"
                          />
                        )}
                        <p className="text-[15px] text-gray-700">
                          {block.label}
                        </p>
                      </div>
                    }
                    content={<div className="space-y-2">{block.content}</div>}
                  />
                );
              case "text":
                return (
                  <div className="flex items-center gap-x-2" key={i}>
                    {block.warningIcon && (
                      <Image
                        src={WarningIcon}
                        alt="warning_icon"
                        className="w-4.5 h-4.5"
                      />
                    )}
                    {block.content}
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      </ReusableDialog>
    </div>
  );
};
