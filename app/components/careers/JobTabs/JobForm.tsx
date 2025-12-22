"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


export const jobApplySchema = z.object({
    firstname: z.string().min(1, "First name is required"),
    lastname: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    mobile: z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number is too long"),
    file: z
        .instanceof(File, { message: "Resume is required" })
        .refine(
            (file) => file.type === "application/pdf",
            "Only PDF files are allowed"
        )
        .refine(
            (file) => file.size <= 5 * 1024 * 1024,
            "File size must be less than 5MB"
        ),
    message: z.string().optional(),
});

export type JobApplyFormValues = z.infer<typeof jobApplySchema>;

export default function JobApplyForm({careerId}: {careerId: string}) {
    const form = useForm<JobApplyFormValues>({
        resolver: zodResolver(jobApplySchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            mobile: "",
            message: "",
        },
    });

    const onSubmit = (data: JobApplyFormValues) => {
        const formData = new FormData();

        Object.entries(data).forEach(([key, value]) => {
            if (value) formData.append(key, value);
        });


        console.log("Submitted data:", data);
    };

    return (
        <div className="job-apply-wrap">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full mx-auto bg-white p-8 rounded-xl shadow space-y-6"
                >
                    {/* NAME */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="firstname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="First Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="lastname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Last Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* EMAIL */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="Email Address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* PHONE */}
                    <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input placeholder="Phone Number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* FILE */}
                    <FormField
                        control={form.control}
                        name="file"
                        render={({ field: { onChange, ref } }) => (
                            <FormItem>
                                <FormLabel>Upload Resume (PDF)</FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        ref={ref}
                                        onChange={(e) => onChange(e.target.files?.[0])}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* MESSAGE */}
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea rows={4} placeholder="Your Message" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* SUBMIT */}
                    <Button type="submit" className="bg-black hover:bg-gray-800">
                        Apply
                    </Button>
                </form>
            </Form>
        </div>
    );
}
