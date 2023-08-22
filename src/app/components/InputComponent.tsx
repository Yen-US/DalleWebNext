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
import { useDisclosure} from "@nextui-org/modal";
import { ModalComponent } from "./ModalComponent";

export default function InputComponent() {
  const [value, setValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(new Set(["256px"]));
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <>
      <div className="flex justify-center mt-12 items-end">
        <Textarea
          key={1}
          type="text"
          label="Prompt"
          variant="bordered"
          placeholder="Enter your prompt here, words separated by comma"
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue("")}
          value={value}
          minRows={2}
          className="w-4/6 mr-4"
        />
      </div>
      <div className="flex justify-center mt-4 items-end">
        <ButtonGroup>
          <Button onPress={onOpen} className="h-14  min-w-min">Prompt Option</Button>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="h-14 capitalize min-w-[85px]"
              >
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
              <DropdownItem key="256px" value={"256x256"}>
                256px
              </DropdownItem>
              <DropdownItem key="512px" value={"512x512"}>
                512px
              </DropdownItem>
              <DropdownItem key="1024px" value={"1024x1024"}>
                1024px
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button className="h-14 min-w-min">Generate</Button>
        </ButtonGroup>
      </div>
      <ModalComponent isOpen={isOpen} onOpenChange={onOpenChange}/>
    </>
  );
}
