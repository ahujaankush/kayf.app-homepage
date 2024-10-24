"use client"

import Section from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heading1, Heading2, Heading3, Large, Paragraph } from "@/components/ui/typography";
import React from "react";

import editorImage from "@/../public/homepage/editor/Editor.png"
import tracerImage from "@/../public/homepage/editor/Tracer.png"
import workflowsImage from "@/../public/homepage/editor/Workflows.png"
import kayfLogo from "@/../public/logo.svg"
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Home() {
    const { resolvedTheme } = useTheme()
    return (
        <main className="flex w-screen flex-col grow items-center">
            <Section className="h-screen">
                <div className="h-full w-[65vw] flex flex-col justify-end space-y-4">
                    <Heading1 className="lg:text-7xl font-semibold">
                        Track, Access, and Process all your data on one platform.
                    </Heading1>
                    <Large className="lg:text-4xl font-light">
                        Secure and open-source with Kayf.
                    </Large>
                    <Button size="lg" className="text-xl p-6 rounded-lg self-start">
                        Learn more
                    </Button>
                </div>
            </Section>
            <Separator />
            <Section className="flex flex-col grow justify-center text-center space-y-14">
                <Heading2 className="lg:text-5xl border-b-0 line leading-loose">
                    Kayf is a <u>hyper-extendable</u> editor with scalable <br /><u>enterprise search and automation platform</u>,
                    <br />
                    fully tailored to your requirements.
                    <br />
                    <b>Powerful, private, and tracking-free.</b>
                </Heading2>
                <div className="flex flex-col w-[90vw] text-left space-y-24">
                    {
                        [
                            {
                                title: "Why?",
                                text: <>Many organizations fail to fully leverage social technologies, limiting their productivity. <Link className="underline" href={"https://www.mckinsey.com/~/media/mckinsey/industries/technology%20media%20and%20telecommunications/high%20tech/our%20insights/the%20social%20economy/mgi_the_social_economy_full_report.pdf"}>The McKinsey Global Institute</Link> estimates that companies could boost knowledge worker productivity by 20 to 25% by improving internal communication. With significant time spent managing emails and searching for information, there's a critical need for solutions that streamline data management and enhance collaboration.</>
                            },
                            {
                                title: "How?",
                                text: "Centralizing organizational information on a single platform makes it easier to manage and access. By streamlining search capabilities and automating repetitive tasks, efficiency is enhanced and time spent on information retrieval is reduced. This solution fosters better communication and collaboration within teams, empowering them to work smarter and more effectively."
                            },
                            {
                                title: "When?",
                                text: <>This project is part of a diploma thesis, with the first prototype expected in November 2024. The code will be accessible on GitHub throughout the development process. Research results are planned for release in April 2025, with additional details available in our <Link className="underline" href='/progress'>milestone plan</Link>.</>
                            },
                        ].map((e, i) => {
                            return (<div key={`${i}-homepage-product-features`} className="flex grow items-center rounded-lg p-10 border-2">
                                <Large className="lg:text-5xl font-normal">
                                    {e.title}
                                </Large>
                                <div className="flex grow justify-end">
                                    <Paragraph className="w-3/5 justify-end">{e.text}</Paragraph>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </Section>
            <Separator />
            <Section className="space-y-48">
                {
                    [
                        {
                            title: 'Note-taking and collaboration simplified', text: <>KEditor is where note-taking meets creativity in the coolest way possible! With two modes to match your flow - a sleek, polished <span className="font-bold">Writing Mode</span> for structured notes and a limitless <span className="font-bold">Canvas Mode</span> that turns your workspace into a whiteboard - your ideas can go from organized to out-of-the-box in a snap. Seamless integration between these modes means you can switch gears without missing a beat.
                                <br />
                                KEditor is the next-level editor and whiteboard hybrid that never tracks your data. Whether you're mapping out a masterpiece or jotting down quick thoughts, you're in complete control. <span className="font-bold">Get creative, stay organized, and do it all with total privacy—because KEditor is all about freedom, without limits.</span></>, img: editorImage
                        },
                        {
                            title: 'Meet Tracer, the ultimate enterprise search', text: <>Tracer lets you search across multiple channels - like Email, Teams, and more—all at once. It doesn&apos;t just skim the surface; it understands your query&apos;s true meaning to deliver the most relevant results, using your data securely without ever collecting any.
                                <br />
                                <span className="font-bold">And here&apos;s the game-changer</span>: You can actually ask an chat bot questions directly about your data! Whether you need quick insights, detailed breakdowns, or just want to explore your information in a whole new way, the model gets you the answers instantly - no more digging through endless files and threads. It&apos;s like having a super-smart, data-savvy assistant built right in.
                            </>,
                            img: tracerImage
                        },
                        {
                            title: 'Simplify tasks and easily automate workflows', text: <>Workflows are small, repetitive tasks in organizations that often go unautomated due to the hassle. We’ve made saving time easier by integrating popular workflow services and enhancing them with powerful AI tools!
                                <br />
                                <span className="font-bold">And here&apos;s the best part</span>: You can access data directly from the editor, allowing you to process information automatically in real-time. Plus, by integrating with hundreds of additional services, you can solve tasks more efficiently and streamline operations like never before. Whether it&apos;s automating routine steps or managing complex processes, everything becomes faster, smarter, and more effective.</>, img: workflowsImage
                        }
                    ].map((e, i) => {
                        return (
                            <div className={`flex flex-row space-x-28`}>
                                {
                                    (i % 2 == 0) ?
                                        (
                                            <>
                                                <Image src={e.img} alt="Tracer demo" className="rounded-2xl w-3/5 drop-shadow-lg" />
                                                <div>
                                                    <Heading3 className="lg:text-4xl font-normal">
                                                        {e.title}
                                                    </Heading3>
                                                    <Paragraph>
                                                        {e.text}
                                                    </Paragraph>
                                                </div>
                                            </>
                                        )
                                        :
                                        (
                                            <>
                                                <div>
                                                    <Heading3 className="lg:text-4xl font-normal">
                                                        {e.title}
                                                    </Heading3>
                                                    <Paragraph>
                                                        {e.text}
                                                    </Paragraph>
                                                </div>
                                                <Image src={e.img} alt="Tracer demo" className="rounded-2xl w-3/5 drop-shadow-lg" />
                                            </>
                                        )
                                }
                            </div>
                        )
                    })
                }
            </Section>
            <Separator />
            <Section className="flex flex-row grow w-full justify-center">
                <div className="flex flex-col w-3/5 rounded-2xl p-8 py-8 bg-accent drop-shadow-lg">
                    <Image src={kayfLogo} alt="logo" width={60} className={`absolute ${resolvedTheme == 'dark' ? 'invert' : ''}`} />
                    <div className="flex flex-col px-8 py-20 justify-center items-center">
                        <Heading3 className="text-center lg:text-5xl">
                            Built by the community
                            <br />
                            for the community
                        </Heading3>
                        <Paragraph className="text-center w-3/5">
                            This project is built for the community and will always remain free. Our mission is to simplify data management and make powerful tools accessible to all. As an open-source solution under GPL-3.0, it allows everyone to use, modify, and enhance the software.
                        </Paragraph>
                    </div>
                </div>
            </Section>
        </main >
    );
}
