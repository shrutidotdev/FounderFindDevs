"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Stats from '../components/Frontend/Stats';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { Building2, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import CreateJobPostForm from '../components/forms/Hire/CreateJobPostForm';

const companies = [
    {
        id: 1,
        name: 'Anthropic',
        logo: "/companiesLogo/anthropic_black_wordmark.svg"
    },
    {
        id: 2,
        name: 'DeepSeek',
        logo: "/companiesLogo/deepseek_wordmark.svg"
    },
    {
        id: 3,
        name: 'Qwen',
        logo: "/companiesLogo/qwen_light.svg"
    },
    {
        id: 4,
        name: 'Socket.io',
        logo: "/companiesLogo/socketio-light.svg"
    },
    {
        id: 5,
        name: 'TanStack',
        logo: "/companiesLogo/tanstack.svg"
    }
];

const testimonials = [
    {
        "quote": "Working with this team has been a game-changer for our business. Their expertise and dedication are unmatched.",
        "author": "John Doe",
        "company": "Tech Innovators Inc."
    },
    {
        "quote": "The quality of their work is exceptional. They delivered on time and exceeded our expectations.",
        "author": "Jane Smith",
        "company": "Green Leaf Solutions"
    },
    {
        "quote": "I've never seen such attention to detail and professionalism. Highly recommend their services!",
        "author": "Emily Johnson",
        "company": "FutureTech Enterprises"
    },
    {
        "quote": "Their customer support is outstanding. They were always available to address our concerns and provide solutions.",
        "author": "Michael Brown",
        "company": "Innovatech Solutions"
    },
    {
        "quote": "This team went above and beyond to ensure our project was a success. We'll definitely be working with them again.",
        "author": "Sarah Davis",
        "company": "EcoFriendly Products"
    }
];

const PostJob = () => {
    return (
        <div className="container mx-auto px-4 py-12 min-h-screen">

              <Stats />
              <CreateJobPostForm />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-7">
                {/* Job Posting Form Card
                <CreateJobPostForm /> */}

                {/* Companies and Testimonials Section */}
                <div className="min-h-screen lg:col-span-2 space-y-8">
                    {/* Trusted Companies Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">
                                Trusted by Industry Leaders
                            </CardTitle>
                            <CardDescription>
                                Join thousands of companies and individuals who trust us to help them find the right talent.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center py-8">
                                {companies.map((company, index) => (
                                    <motion.div
                                        key={company.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative w-32 h-16 flex items-center justify-center"
                                    >
                                        <Image
                                            src={company.logo}
                                            alt={company.name}
                                            fill
                                            className="object-contain filter hover:brightness-75 transition-all duration-200"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Testimonials Section */}
                    <Card className="col-span-3 h-full  text-white">
                        <CardHeader>
                            <div className="flex items-center gap-2 mb-2">
                                <Quote className="w-5 h-5 text-primary" />
                                <CardTitle>What People Say</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[400px] pr-4">
                                <div className="space-y-6">
                                    {testimonials.map((testimonial, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.2 }}
                                            className="relative"
                                        >
                                            <div className="border border-rose-300 text-white p-6 rounded-lg">
                                                <blockquote className="text-lg italic text-muted-foreground mb-4">
                                                    "{testimonial.quote}"
                                                </blockquote>
                                                <Separator className="my-4" />
                                                <footer className="flex items-center justify-between">
                                                    <div>
                                                        <div className="font-semibold">{testimonial.author}</div>
                                                        <div className="text-sm text-muted-foreground mt-3">{testimonial.company}</div>
                                                    </div>
                                                </footer>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>

             
            </div>
        </div>
    );
};

export default PostJob;