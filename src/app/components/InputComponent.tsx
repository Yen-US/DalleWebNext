import {Input} from "@nextui-org/input";

export default function NavBar() {
    return (
      <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
              key={1}
              type="email"
              label="Email"
              description="Enter your email"
            />
        </div>
      
    )
  }