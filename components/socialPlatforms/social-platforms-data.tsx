import { ReactNode } from "react";
import Link from "next/link";
import { InstagramIcon, YoutubeIcon, TiktokIcon } from "@/public/icons";

export type SocialPlatformItem = {
  icon: string;
  alt: string;
  buttonLabel: string;
  dialogTitle: string;
  dialogDescription: string;
  content: {
    type: "accordion" | "text";
    warningIcon: boolean;
    label?: string;
    content: ReactNode;
  }[];
};

export const socialPlatformsData: SocialPlatformItem[] = [
  {
    icon: InstagramIcon,
    alt: "instagram_icon",
    buttonLabel: "Connect Instagram",

    dialogTitle: "Connect Instagram",
    dialogDescription:
      "Connect an Instagram Creator or Business profile to post and schedule posts on Instagram.",

    content: [
      {
        type: "accordion",
        warningIcon: true,
        label: "Must be a Business or Creator profile",
        content: (
          <>
            <p>
              Only Instagram Business or Creator profiles are supported.
              Personal profiles are not supported. Switching to a Business or
              Creator profile is easy and only takes a few minutes.
            </p>

            <div>
              <Link className="block hover:underline text-purple-700" href="#">
                How to set up a business account
              </Link>

              <Link className="block hover:underline text-purple-700" href="#">
                How to set up a creator account
              </Link>
            </div>
          </>
        ),
      },
      {
        type: "accordion",
        warningIcon: true,
        label: "Must be connected to a Facebook Page",
        content: (
          <>
            <p>
              Make sure you have connected your profile to a Facebook Page, even
              if it's not in use.
            </p>
            <Link className="block hover:underline text-purple-700" href="#">
              How to connect Instagram to a Facebook Page
            </Link>
          </>
        ),
      },
      {
        type: "text",
        warningIcon: false,
        content: (
          <Link
            href="#"
            className="text-purple-700 hover:underline text-[15px]"
          >
            Having trouble connecting? View troubleshooting guide
          </Link>
        ),
      },
    ],
  },

  {
    icon: YoutubeIcon,
    alt: "youtube_icon",
    buttonLabel: "Connect YouTube",

    dialogTitle: "Connect YouTube",
    dialogDescription:
      "Connect to a YouTube account to upload and schedule YouTube Shorts.",

    content: [
      {
        type: "text",
        warningIcon: true,
        content: (
          <span className="text-[15px] text-gray-700">
            Google account must have be associated with a YouTube channel
          </span>
        ),
      },

      {
        type: "text",
        warningIcon: false,
        content: (
          <span>
            You can revoke our access to your data at any time through the
            <Link
              className="hover:underline text-purple-700 text-[15px]"
              href="#"
            >
              {" "}
              Google security settings page.
            </Link>
          </span>
        ),
      },
    ],
  },
  {
    icon: TiktokIcon,
    alt: "tiktok_icon",
    buttonLabel: "Connect TikTok",

    dialogTitle: "Connect TikTok",
    dialogDescription:
      "Connect a TikTok Creator or Business profile to schedule posts, manage comments and more.",

    content: [
      {
        type: "text",
        warningIcon: true,
        content: (
          <p className="text-[15px] text-gray-700">
            Must be a Business or Creator profile
          </p>
        ),
      },
      {
        type: "text",
        warningIcon: true,
        content: (
          <p className="text-[15px] text-gray-700">
            Account must be older than 48 hours
          </p>
        ),
      },
      {
        type: "accordion",
        warningIcon: false,
        label: "Login to the account you want to connect",
        content: (
          <>
            <p>
              TikTok does not support logging in to multiple accounts at once on
              web. To connect multiple accounts to Post Bridge, you will need
              to:
            </p>
            <ol className="list-decimal list-inside">
              <li>
                Login to the account you wish to connect to Post Bridge (on this
                device, in the same browser)
              </li>
              <li>Press the Connect button below</li>
              <li>Connect</li>
              <li>
                Logout and then Login to the other account you wish to connect
              </li>
              <li>Connect</li>
              <li>
                Repeat until you have all your accounts connected to Post Bridge
              </li>
            </ol>
          </>
        ),
      },
      {
        type: "accordion",
        warningIcon: false,
        label: "Warm up account before posting",
        content: (
          <>
            <p>
              TikTok does not support logging in to multiple accounts at once on
              web. To connect multiple accounts to Post Bridge, you will need
              to:
            </p>
            <ol className="list-decimal list-inside">
              <li>
                Login to the account you wish to connect to Post Bridge (on this
                device, in the same browser)
              </li>
              <li>Press the Connect button below</li>
              <li>Connect</li>
              <li>
                Logout and then Login to the other account you wish to connect
              </li>
              <li>Connect</li>
              <li>
                Repeat until you have all your accounts connected to Post Bridge
              </li>
            </ol>
          </>
        ),
      },
    ],
  },
];
