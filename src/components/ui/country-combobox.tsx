"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { countrycodes } from "@/constants";

export function CountryCodeCombobox() {
  const [open, setOpen] = React.useState(false);
  // Store the selected country code (e.g., "US", "CA") instead of dial_code
  const [value, setValue] = React.useState("");

  // Find the selected entry using the country code
  const selectedCode = countrycodes.find((c) => c.code === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[150px] justify-between text-white"
        >
          {selectedCode
            ? `${selectedCode.dial_code} ${selectedCode.code}`
            : "Country Code"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search country code..." />
          <CommandList>
            <CommandEmpty>No country code found.</CommandEmpty>
            <CommandGroup>
              {countrycodes.map((code) => (
                <CommandItem
                  key={code.code}
                  // Use the country code as the value
                  value={code.code}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === code.code ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {code.dial_code} {code.code}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
