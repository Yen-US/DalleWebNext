"use client";
import { useState, useMemo, SetStateAction, Key } from "react";
import { Textarea } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button, ButtonGroup } from "@nextui-org/button";

export default function InputComponent() {
  const [value, setValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(new Set(["text"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <div className="flex justify-center max-w-4xl mt-12">
      <ButtonGroup>
        <Textarea
          key={1}
          type="text"
          label="Prompt"
          variant="bordered"
          description="Enter your prompt here, words separated by comma"
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue("")}
          value={value}
          minRows={1}
        />
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" className="h-28 capitalize">
              {selectedValue}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection actions"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={(e) =>
              setSelectedKeys(e as SetStateAction<Set<Key>>)
            }
          >
            <DropdownItem key="text">Text</DropdownItem>
            <DropdownItem key="number">Number</DropdownItem>
            <DropdownItem key="date">Date</DropdownItem>
            <DropdownItem key="single_date">Single Date</DropdownItem>
            <DropdownItem key="iteration">Iteration</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </ButtonGroup>
    </div>
  );
}
