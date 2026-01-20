import { cn } from '@/lib/utils'
import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className="font-paaji my-40 flex w-full flex-col items-center justify-center">
                <h1 className="max-w-2xl bg-linear-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent">
                    Discover Your Ideal Career Path
                </h1>
                <p className="mx-auto mt-10 max-w-3xl text-center text-xl text-neutral-500 selection:bg-white">
                    Our AI-powered platform  <span className="text-primary">for Carrier</span>{" "}
                    helps you find the perfect career based on your skills, interests, and market demands.{" "}
                    <span className="text-primary">business</span> like a pro. Simple.
                    Intuitive. And never boring.
                </p>

                <div className="mt-paaji-relaxed flex w-full max-w-lg justify-center">
                    <input
                        type="text"
                        className="focus:ring-primary mr-4 flex-1 rounded-xl border border-neutral-600 px-4 text-white transition duration-200 placeholder:text-neutral-500 focus:ring-1 focus:outline-none"
                        placeholder="Enter your email"
                    />
                    <div className='gap-2 flex flex-row'>

                        <button className="relative cursor-pointer text-neutral-600 rounded-xl border border-neutral-700 px-6 py-2  dark:border-neutral-600 tracking-tighter  ">
                            <div className={cn("via-primary absolute inset-x-0 -bottom-px h-px w-full bg-linear-to-r from-transparent to-transparent ")}></div>
                            Join Waitlist
                        </button>
                        <button className="relative cursor-pointer text-neutral-600 rounded-xl border border-neutral-700 px-4 py-2  dark:border-neutral-600 ">
                            <div className={cn("via-primary absolute inset-x-0 -bottom-px h-px w-full bg-linear-to-r from-transparent to-transparent")}></div>
                            Explore Resource
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
