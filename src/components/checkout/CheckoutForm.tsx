import React, { forwardRef, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import SRSButton from "../SRSButton";

interface CheckoutFormProps {
  initialValues?: {
    name: string;
    phoneEmail: string;
    emergencyPhone: string;
    country: string;
    district: string;
    city: string;
    address: string;
    deliveryMethod: string;
    orderNote?: string;
  };
  onSubmit: (values: any) => void;
}

const CheckoutForm = forwardRef<any, CheckoutFormProps>(
  (
    {
      initialValues = {
        name: "",
        phoneEmail: "",
        emergencyPhone: "",
        country: "BD",
        district: "",
        city: "",
        address: "",
        deliveryMethod: "office",
        orderNote: "",
      },
      onSubmit,
    },
    ref
  ) => {
    const form = useForm({
      defaultValues: initialValues,
    });

    // Expose form submit handler to parent
    useImperativeHandle(ref, () => ({
      submitForm: () => {
        form.handleSubmit(onSubmit)();
      },
      getValues: () => form.getValues(),
    }));

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone/Email */}
            <FormField
              control={form.control}
              name="phoneEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Phone / Email <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input className="custom-input-focus" {...field} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Emergency Phone */}
            <FormField
              control={form.control}
              name="emergencyPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Emergency Phone <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Country */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Country <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-white select-background-fix ">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="BH">Bahrain</SelectItem>
                      <SelectItem value="BD">Bangladesh</SelectItem>
                      <SelectItem value="CA">Canada</SelectItem>
                      <SelectItem value="MY">Malaysia</SelectItem>
                      <SelectItem value="OM">Oman</SelectItem>
                      <SelectItem value="SA">Saudi Arabia</SelectItem>
                      <SelectItem value="SG">Singapore</SelectItem>
                      <SelectItem value="AE">United Arab Emirates</SelectItem>
                      <SelectItem value="US">United States</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* District */}
            <FormField
              control={form.control}
              name="district"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    District <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* City/Upazila */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    City / Upazila <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Address */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Address <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Delivery Method */}
            <FormField
              control={form.control}
              name="deliveryMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Delivery Method <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-white select-background-fix ">
                        <SelectValue placeholder="Select delivery method" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="office">Office Collection</SelectItem>
                      <SelectItem value="skyexpress">SkyExpress</SelectItem>
                      <SelectItem value="courier">Courier</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Order Note (Full width) */}
            <FormField
              control={form.control}
              name="orderNote"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>
                    Order Note{" "}
                    <span className="text-gray-400 text-sm">
                      (Please leave a note, if you have any special instruction
                      about your order.)
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={3} className="min-h-[80px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    );
  }
);

export default CheckoutForm;
