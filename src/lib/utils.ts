import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn: merge class names and resolve Tailwind conflicts
 * Usage: cn("p-2", isActive && "bg-blue-600", "p-4") -> "bg-blue-600 p-4"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Re-export tailwind-variants helpers so you can:
 *	import { tv, type VariantProps } from "@/lib/utils";
 */
export { tv, type VariantProp } from "tailwind-variants";