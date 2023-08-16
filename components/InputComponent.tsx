"use client";
import { useState } from "react";
import { Input } from "@nextui-org/input";

export default function InputComponent() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="flex justify-center max-w-lg mt-12">
      <Input
        key={1}
        type="email"
        label="Email"
        labelPlacement="outside"
        description="Enter your email"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
}
