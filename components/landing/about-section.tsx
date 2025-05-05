export default function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg px-3 py-1 text-sm">
              About PostSync
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Choose Our Platform?
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              PostSync was built by social media managers for social media
              managers. We understand the challenges of managing multiple
              platforms.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
            <div className="p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M7 14.5l3-3 3 3 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Time Efficiency</h3>
            <p className="text-center">
              Post once, reach everywhere. Cut your posting time by 80%.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
            <div className="p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Analytics Dashboard</h3>
            <p className="text-center">
              Track performance across all platforms in one central location.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
            <div className="p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Multi-Account Support</h3>
            <p className="text-center">
              Manage unlimited accounts across all major social platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
