import React from 'react';
import { Button } from "@/components/ui/button"

const Onboarding = () => {
  return (
    <div>
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">Onboarding</h1>
        <Button className="ml-auto" size="sm" disabled>
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
    </div>
  );
};

export default Onboarding;


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
          {/* <Sheet>
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
          </Sheet> */}