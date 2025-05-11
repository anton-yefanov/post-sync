import {
  socialPlatformsData,
  SocialPlatformCard,
} from "@/components/socialPlatforms";

export default function Page() {
  return (
    <div className="space-y-4 p-6">
      {socialPlatformsData.map((item, i) => (
        <SocialPlatformCard key={i} item={item} />
      ))}
    </div>
  );
}
