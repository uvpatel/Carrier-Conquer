import { Lightbulb, MessagesSquare, Network, NetworkIcon, TrendingUp, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";


export function FeatureGrid() {
    return (
        <section>
            <h1 className="flex justify-center m-4 mx-auto text-3xl text-neutral-400">Features</h1>
            <BentoGrid className="max-w-4xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-linear-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">

    </div>
);




const items = [
    {
        title: "Skills Assessment",
        description: "Analyze your technical, soft, and industry-specific skills to understand your strengths.",
        header: <Skeleton />,
        icon: <UserRound className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Market Analysis",
        description: "Compare your skills with current job market demands to identify opportunities.",
        header: <Skeleton />,
        icon: <TrendingUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Career Matching",
        description: "Get personalized career suggestions based on your skills and market needs.",
        header: <Skeleton />,
        icon: <MessagesSquare className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Resume Builder",
        description: "Create effective resumes tailored to your target roles with AI assistance.",
        header: <Skeleton />,
        icon: <Lightbulb className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Interview Prep",
        description: "Practice with AI-generated interview questions specific to your desired jobs.",
        header: <Skeleton />,
        icon: <Network className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Networking",
        description: "Discover valuable professional connections and networking opportunities.",
        header: <Skeleton />,
        icon: <NetworkIcon className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Skills Assessment",
        description: "Analyze your technical, soft, and industry-specific skills to understand your strengths.",
        header: <Skeleton />,
        icon: <UserRound className="h-4 w-4 text-neutral-500" />,
    },

];
