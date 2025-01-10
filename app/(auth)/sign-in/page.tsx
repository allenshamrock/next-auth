"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signInFormSchema } from "@/lib/auth-schema";
import { authClient } from "@/lib/auth-client";
import { toast } from "@/hooks/use-toast";

function SignIn() {
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signInFormSchema>) {
    const { email, password } = values;
    const { data, error } = await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: "/dashboard",
      },
      {
        onRequest: () => {
          toast({
            title: "Please wait...",
          });
        },
        onSuccess: () => {
          form.reset();
        },
        onError: (ctx) => {
          // Handle the error
          // if (ctx.error.status === 403) {
          //   alert("Please verify your email address");
          // }
          //you can also show the original error message
           toast({ title: ctx.error.message, variant: "destructive" });
           form.setError("email", {
             type: "manual",
             message: ctx.error.message,
           });
        },
      }
    );
    console.log(values);
  }
  return (
    <Card className="w-full  max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Welcome Back,We've missed you!</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className=" w-full">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <p>
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-primary hover:underline">
            Sign up
          </Link>{" "}
        </p>
      </CardFooter>
    </Card>
  );
}

export default SignIn;
