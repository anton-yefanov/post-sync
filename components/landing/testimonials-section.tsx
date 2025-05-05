import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg px-3 py-1 text-sm">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Loved by Social Media Managers
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don&#39;t just take our word for it. Here&#39;s what our customers
              have to say.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="font-bold">Jane Doe</h3>
                  <p className="text-sm">Marketing Director</p>
                </div>
              </div>
              <div className="mt-4">
                <p>
                  &#34;PostSync has completely transformed our social media
                  workflow. We save hours every week and our engagement has
                  improved dramatically.&#34;
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="font-bold">John Smith</h3>
                  <p className="text-sm">Small Business Owner</p>
                </div>
              </div>
              <div className="mt-4">
                <p>
                  &#34;As a solopreneur, I was struggling to maintain a
                  consistent social media presence. PostSync made it possible
                  for me to schedule content in batches and stay active on all
                  platforms.&#34;
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="font-bold">Alex Rodriguez</h3>
                  <p className="text-sm">Social Media Agency</p>
                </div>
              </div>
              <div className="mt-4">
                <p>
                  &#34;Our agency manages dozens of client accounts, and
                  PostSync&#39;s team collaboration features have been a
                  game-changer for our workflow efficiency.&#34;
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
