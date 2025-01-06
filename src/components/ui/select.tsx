"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  // Add any other props you need
}

const Select: React.FC<SelectProps> = ({ children, ...props }) => {
  return <select {...props}>{children}</select>;
};

export default Select;
