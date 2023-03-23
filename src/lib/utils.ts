import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function UniqueId() {
  const randomString = Math.random().toString(36).substr(2, 9);
  const timestamp = Date.now().toString(36);
  return randomString + timestamp;
}