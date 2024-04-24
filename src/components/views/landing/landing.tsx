import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckIcon } from "@/components/icons"
import Header from "./header"
import Footer from "./footer"

export function Landing() {
  return (
    <div key="1" className="flex flex-col justify-center min-h-[100vh] w-full">
      <Header/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="px-4 md:px-6 w-full">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] w-full">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Automate Your Developer Onboarding
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Streamline your developer onboarding process with our powerful automation tool. Get new hires up and
                    running in no time.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 :bg-gray-50"
                    href="#"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                alt="Automate Onboarding"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100" id="features">
          <div className="px-4 md:px-6 w-full">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Streamline Your Onboarding Process</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our Automated Onboarding System for Developers tool helps you streamline your onboarding process,
                  saving you time and resources.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Onboardly Onboarding"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Automated Provisioning</h3>
                      <p className="text-gray-500">
                        Automatically provision new hires with the necessary tools, accounts, and access.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Customizable Workflows</h3>
                      <p className="text-gray-500">
                        Tailor the onboarding process to your specific needs with our flexible workflows.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Centralized Dashboard</h3>
                      <p className="text-gray-500">
                        Monitor and manage the onboarding progress of all your new hires in one place.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="pricing">
          <div className="grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 w-full">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Pricing to Fit Your Needs</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose from our flexible pricing plans to find the right fit for your team.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:justify-end">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <div className="text-4xl font-bold">$99</div>
                  <p className="text-sm text-gray-500">per month</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="grid gap-2 text-sm text-gray-500">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Up to 10 users
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Automated provisioning
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Customizable workflows
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Centralized dashboard
                    </li>
                  </ul>
                  <Button size="lg">Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <div className="text-4xl font-bold">$499</div>
                  <p className="text-sm text-gray-500">per month</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="grid gap-2 text-sm text-gray-500">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Unlimited users
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Advanced automation
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Dedicated support
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                      Custom integrations
                    </li>
                  </ul>
                  <Button size="lg">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t" id="testimonials">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Customers Say</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our satisfied customers about how Onboardly has transformed their onboarding process.
              </p>
            </div>
            <div className="grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
                <CardContent className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex items-center space-x-4">
                    <img
                      alt="Avatar"
                      className="h-12 w-12 rounded-full"
                      height="48"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "48/48",
                        objectFit: "cover",
                      }}
                      width="48"
                    />
                    <div>
                      <p className="text-sm font-medium">Jane Doe</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">CTO, Acme Inc.</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    "Automate has been a game-changer for our onboarding process. It's saved us so much time and effort,
                    and our new hires are up and running in no time."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex items-center space-x-4">
                    <img
                      alt="Avatar"
                      className="h-12 w-12 rounded-full"
                      height="48"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "48/48",
                        objectFit: "cover",
                      }}
                      width="48"
                    />
                    <div>
                      <p className="text-sm font-medium">John Smith</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Engineering Manager, Acme Inc.</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    "I was skeptical at first, but Automate has completely transformed our onboarding process. It's made
                    my job so much easier, and our new hires are more productive than ever."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex items-center space-x-4">
                    <img
                      alt="Avatar"
                      className="h-12 w-12 rounded-full"
                      height="48"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "48/48",
                        objectFit: "cover",
                      }}
                      width="48"
                    />
                    <div>
                      <p className="text-sm font-medium">Sarah Johnson</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">HR Manager, Acme Inc.</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    "Automate has been a lifesaver for our HR team. It's streamlined our onboarding process and made it
                    so much easier to get new hires up to speed."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t" id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions or want to learn more about Onboardly? Contact us today.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Contact Us</Button>
              </form>
              <p className="text-xs text-gray-500">We&apos;ll get back to you as soon as possible.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

