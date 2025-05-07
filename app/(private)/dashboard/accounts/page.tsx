import Image from "next/image";
import { ReusableDialog } from "@/components/reusable-dialog";
import { InstagramIcon, YoutubeIcon, TiktokIcon } from "@/public/icons";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="space-y-4 p-6">
      <div className="flex items-center gap-4">
        <Image
          src={InstagramIcon}
          alt="instagram_icon"
          className="h-8 w-8 shrink-0 "
        />

        <ReusableDialog
          title="Connect Instagram"
          description="Ya v dushe ne ebu chto ti tut hotel uvidet. Nada bilo task norm opisuvat. No ya dumayu 4etko"
        >
          <Button className="h-8">Connect Instagram</Button>
        </ReusableDialog>
      </div>

      <div className="flex items-center gap-4">
        <Image
          src={YoutubeIcon}
          alt="youtube_icon"
          className="h-8 w-8 shrink-0 "
        />

        <ReusableDialog
          title="Connect YouTube"
          description="Ya v dushe ne ebu chto ti tut hotel uvidet. Nada bilo task norm opisuvat. No ya dumayu 4etko"
        >
          <Button className="h-8">Connect YouTube</Button>
        </ReusableDialog>
      </div>

      <div className="flex items-center gap-4">
        <Image
          src={TiktokIcon}
          alt="tiktok_icon"
          className="h-8 w-8 shrink-0 "
        />

        <ReusableDialog
          title="Connect TikTok"
          description="Ya v dushe ne ebu chto ti tut hotel uvidet. Nada bilo task norm opisuvat. No ya dumayu 4etko"
        >
          <Button className="h-8">Connect TikTok</Button>
        </ReusableDialog>
      </div>
    </div>
  );
}
