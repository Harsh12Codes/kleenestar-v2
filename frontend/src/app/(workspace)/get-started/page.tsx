"use client";

import { Icons } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline/next"));

const GetStarted: React.FC = () => {
    return (
        <div className="relative h-full flex flex-col items-center animate-fade-in-up pt-[10%] max-xl:pt-[10%] z-10">
            <div className="h-72 w-full flex justify-center items-center">
                <Suspense fallback={<Icons.logoDark className="w-52 h-52 blur-md" />}>
                    <Spline scene="https://prod.spline.design/ecypVgD7JeyQUdGF/scene.splinecode" />
                </Suspense>
            </div>

            <p className="text-2xl sm:text-3xl xl:text-5xl min-[1240px]:text-6xl 2xl:text-7xl   text-center font-mainhead font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 dark:from-neutral-400 to-neutral-700 dark:to-neutral-600 ">
                Welcome to Kleenestar
            </p>
            <div className="px-9 my-12 text-center">
                <p className="xl:max-w-2xl max-w-md w-full text-muted-foreground">
                    Kleenestar collects every event from your marketing effort and provides
                    real-time decision-making insights and recommendations in natural language.
                </p>
            </div>
            <Link
                href="/workspace"
                className={cn(
                    buttonVariants({ variant: "default" }),
                    "text-lg py-7 px-11 rounded-full primary-btn-gradient transition-all duration-300 ease-in-out hover:scale-105",
                )}
            >
                Get Started
            </Link>
        </div>
    );
};

export default GetStarted;
