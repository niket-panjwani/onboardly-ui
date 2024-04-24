import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { SheetTrigger, SheetTitle, SheetDescription, SheetHeader, SheetFooter, SheetContent, Sheet } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { HomeIcon, UserPlusIcon, UsersIcon, FolderIcon, SettingsIcon, TerminalIcon, BellIcon, GroupIcon, SearchIcon } from "@/components/icons"

export function Dashboard() {
  return (
    <div key="1" className="flex min-h-screen w-full flex-col lg:grid lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <TerminalIcon className="h-6 w-6" />
              <span className="text-xl font-bold">Onboardly</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                href="#"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900"
                href="#"
              >
                <UserPlusIcon className="h-4 w-4" />
                Onboarding
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                href="#"
              >
                <UsersIcon className="h-4 w-4" />
                Developers
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                href="#"
              >
                <FolderIcon className="h-4 w-4" />
                Projects
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                href="#"
              >
                <SettingsIcon className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6">
          <Link className="lg:hidden" href="#">
            <GroupIcon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3"
                  placeholder="Search developers..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full border border-gray-200 w-8 h-8" size="icon" variant="ghost">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Onboarding</h1>
            <Button className="ml-auto" size="sm">
              Onboard New Developer
            </Button>
          </div>
          <div className="border shadow-sm rounded-lg p-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4">No Projects Found</h2>
              <p className="text-gray-500 mb-6">Please add a new project to onboard new users.</p>
              <Button>Add New Project</Button>
            </div>
          </div>
          {/* <div className="border shadow-sm rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="max-w-[150px]">Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="hidden md:table-cell">Status</TableHead>
                  <TableHead className="hidden md:table-cell">Progress</TableHead>
                  <TableHead>Issues</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Olivia Davis</TableCell>
                  <TableCell>olivia.davis@acme.com</TableCell>
                  <TableCell className="hidden md:table-cell">In Progress</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Progress value={75} />
                  </TableCell>
                  <TableCell>
                    <Badge variant="destructive">Blocker</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jared Palmer</TableCell>
                  <TableCell>jared.palmer@acme.com</TableCell>
                  <TableCell className="hidden md:table-cell">Completed</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Progress value={100} />
                  </TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Emma Wilson</TableCell>
                  <TableCell>emma.wilson@acme.com</TableCell>
                  <TableCell className="hidden md:table-cell">Not Started</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Progress value={0} />
                  </TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div> */}
          <Sheet>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Onboard New Developer</SheetTitle>
                <SheetDescription>Fill in the details to initiate the onboarding process.</SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="name">
                    Name
                  </Label>
                  <Input className="col-span-3" id="name" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="email">
                    Email
                  </Label>
                  <Input className="col-span-3" id="email" type="email" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="role">
                    Role
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Engineering</SelectLabel>
                        <SelectItem value="frontend">Frontend Developer</SelectItem>
                        <SelectItem value="backend">Backend Developer</SelectItem>
                        <SelectItem value="fullstack">Full Stack Developer</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Design</SelectLabel>
                        <SelectItem value="ux">UX Designer</SelectItem>
                        <SelectItem value="ui">UI Designer</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <SheetFooter>
                <Button variant="outline">Cancel</Button>
                <Button className="ml-auto">Initiate Onboarding</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </main>
      </div>
    </div>
  )
}