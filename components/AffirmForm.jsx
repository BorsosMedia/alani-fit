"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import affirmLogo from "../public/assets/affirm-logo.webp";

const formSchema = z.object({
  shipping_name: z
    .string({ required_error: "Please, complete this field" })
    .min(2, { message: "Please, input your full name" })
    .includes(" "),

  shipping_address_line1: z
    .string({ required_error: "Please, complete this field" })
    .min(2, { message: "Please, input a valid address" }),
  shipping_address_line2: z.string(),
  shipping_address_city: z
    .string({ required_error: "Please, complete this field" })
    .min(2, { message: "Please, input the city name" }),
  shipping_address_state: z
    .string({ required_error: "Please, complete this field" })
    .min(2, { message: "Please, input the state name" })
    .toUpperCase(),
  shipping_address_zipcode: z
    .string({ required_error: "Please, complete this field" })
    .min(1, { message: "Please, input a valid ZIP Code" }),
  shipping_address_country: z
    .string({ required_error: "Please, complete this field" })
    .min(2, { message: "Please, input the country name" })
    .toUpperCase(),

  shipping_phone_number: z
    .string({
      required_error: "Please, complete this field",
    })
    .min(3, { message: "Please, complete this field" }),
  shipping_email: z
    .string({ required_error: "Please, complete this field" })
    .email({ message: "Invalid email address" })
    .toLowerCase(),

  billing_name: z
    .string({ required_error: "Please, complete this field" })
    .min(2, { message: "Please, input your full name" })
    .includes(" "),

  billing_address_line1: z
    .string({ required_error: "Please, complete this field" })
    .min(2, { message: "Please, input a valid address" }),
  billing_address_line2: z.string(),
  billing_address_city: z
    .string({ required_error: "Please, complete this field" })
    .min(2, { message: "Please, input the city name" }),
  billing_address_state: z
    .string({ required_error: "Please, complete this field" })
    .min(2, { message: "Please, input the state name" })
    .toUpperCase(),
  billing_address_zipcode: z
    .string({ required_error: "Please, complete this field" })
    .min(1, { message: "Please, input a valid ZIP Code" }),
  billing_address_country: z
    .string({ required_error: "Please, complete this field" })
    .min(2, { message: "Please, input the country name" })
    .toUpperCase(),

  billing_phone_number: z
    .string({
      required_error: "Please, complete this field",
    })
    .min(3, { message: "Please, complete this field" }),
  billing_email: z
    .string({ required_error: "Please, complete this field" })
    .email({ message: "Invalid email address" })
    .toLowerCase(),
});

const AffirmForm = ({ onClose, TypeOfPlan }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  function handleAffirmButton(data) {
    affirm.checkout({
      merchant: {
        user_confirmation_url: `${baseUrl}/checkout`,
        user_cancel_url: `${baseUrl}`,
        user_confirmation_url_action: "GET",
        name: "Bodybuilding & BS",
      },
      shipping: {
        name: {
          full: data.shipping_name,
        },
        address: {
          line1: data.shipping_address_line1,
          line2: data.shipping_address_line2,
          city: data.shipping_address_city,
          state: data.shipping_address_state,
          zipcode: data.shipping_address_zipcode,
          country: data.shipping_address_country,
        },
        phone_number: data.shipping_phone_number,
        email: data.shipping_email,
      },
      billing: {
        name: {
          full: data.billing_name,
        },
        address: {
          line1: data.billing_address_line1,
          line2: data.billing_address_line2,
          city: data.billing_address_city,
          state: data.billing_address_state,
          zipcode: data.billing_address_zipcode,
          country: data.billing_address_country,
        },
        phone_number: data.billing_phone_number,
        email: data.billing_email,
      },
      items: [
        {
          display_name: (() => {
            switch (TypeOfPlan) {
              case "a":
                return "Monthly";
              case "b":
                return "3-month";
              case "d":
                return "6-Month";
              case "e":
                return "Annual";
              case "f":
                return "Bloodwork";
              case "g":
                return "Gut Health Test";
            }
          })(),
          sku: (() => {
            switch (TypeOfPlan) {
              case "a":
                return "Monthly";
              case "b":
                return "3-month";
              case "d":
                return "6-Month";
              case "e":
                return "Annual";
              case "f":
                return "Bloodwork";
              case "g":
                return "Gut Health Test";
            }
          })(),
          unit_price: (() => {
            switch (TypeOfPlan) {
              case "a":
                return 29500;
              case "b":
                return 79650;
              case "d":
                return 150450;
              case "e":
                return 283200;
              case "f":
                return 29900;
              case "g":
                return 79900;
            }
          })(),
          qty: 1,
        },
      ],
      metadata: {
        mode: "modal",
      },
      order_id: crypto.randomUUID(),
      currency: "USD",
      shipping_amount: 0,
      tax_amount: 0,
      total: (() => {
        switch (TypeOfPlan) {
          case "a":
            return 29500;
          case "b":
            return 79650;
          case "d":
            return 150450;
          case "e":
            return 283200;
          case "f":
            return 29900;
          case "g":
            return 79900;
        }
      })(),
    });

    affirm.checkout.open();
  }

  const [info, setInfo] = useState({
    shipping_name: "",

    shipping_address_line1: "",
    shipping_address_line2: "",
    shipping_address_city: "",
    shipping_address_state: "",
    shipping_address_zipcode: "",
    shipping_address_country: "",

    shipping_phone_number: "",
    shipping_email: "",

    billing_name: "",

    billing_address_line1: "",
    billing_address_line2: "",
    billing_address_city: "",
    billing_address_state: "",
    billing_address_zipcode: "",
    billing_address_country: "",

    billing_phone_number: "",
    billing_email: "",
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shipping_name: "",
      shipping_address_line1: "",
      shipping_address_line2: "",
      shipping_address_city: "",
      shipping_address_state: "",
      shipping_address_zipcode: "",
      shipping_address_country: "",
      shipping_phone_number: "",
      shipping_email: "",

      billing_name: "",
      billing_address_line1: "",
      billing_address_line2: "",
      billing_address_city: "",
      billing_address_state: "",
      billing_address_zipcode: "",
      billing_address_country: "",
      billing_phone_number: "",
      billing_email: "",
    },
  });

  const onSubmit = () => {};

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-light-blue"
      >
        <h2 className="dragna text-center text-xl md:text-3xl lg:text-4xl 2xl:text-6xl">
          shipping information
        </h2>
        <section className="mx-4 grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="shipping_name"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Joe Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shipping_address_line1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address 1</FormLabel>
                <FormControl>
                  <Input placeholder="633 Folsom St" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shipping_address_line2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address 2</FormLabel>
                <FormControl>
                  <Input placeholder="Floor 7" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shipping_address_city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="San Francisco" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shipping_address_state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="CA" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shipping_address_zipcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ZIP Code</FormLabel>
                <FormControl>
                  <Input placeholder="94107" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shipping_address_country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="USA" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shipping_phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="4153334567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shipping_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="joedoe@123fakestreet.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>
        <h2 className="dragna text-center text-xl md:text-3xl lg:text-4xl 2xl:text-6xl">
          billing information
        </h2>
        <section className="mx-4 grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="billing_name"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Joe Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="billing_address_line1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address 1</FormLabel>
                <FormControl>
                  <Input placeholder="633 Folsom St" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="billing_address_line2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address 2</FormLabel>
                <FormControl>
                  <Input placeholder="Floor 7" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="billing_address_city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="San Francisco" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="billing_address_state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="CA" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="billing_address_zipcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ZIP Code</FormLabel>
                <FormControl>
                  <Input placeholder="94107" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="billing_address_country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="USA" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="billing_phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="4153334567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="billing_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="joedoe@123fakestreet.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>
        <Button
          type="submit"
          className="w-full bg-light-blue text-white"
          onPress={onClose}
        >
          Pay with
          <Image
            src={affirmLogo}
            alt="Affirm Logo"
            className="mx-4 h-[1.2rem] w-auto translate-x-[-7px] translate-y-[-4px] hover:bg-dark-blue"
          />
        </Button>
      </form>
    </Form>
  );
};

export default AffirmForm;
