"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/assistant-ui/select";
import { GitHubIcon } from "@/components/icons/github";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { DEMOS, getDemo } from "@/lib/demos";

export function DemoHeader({ slug }: { slug: string }) {
  const router = useRouter();
  const demo = getDemo(slug);

  return null; // Header removed
}
