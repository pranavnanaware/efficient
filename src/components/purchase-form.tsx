"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TermsDialog } from "./terms-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countrycodes } from "@/constants";

export function PurchaseForm() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipcode: "",
    phoneNumber: "",
    agreedToTerms: false,
  });
  const [countryCode, setCountryCode] = useState("+1");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const zipRegex = /^\d+$/;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!phoneRegex.test(formData.phoneNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }

    if (!zipRegex.test(formData.zipcode)) {
      alert("Please enter a valid zipcode.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreedToTerms) {
      alert("You must agree to the terms.");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          address:
            formData.addressLine1 +
            " " +
            formData.addressLine2 +
            " " +
            formData.city +
            " " +
            formData.state +
            " " +
            formData.zipcode,
          phoneNumber: countryCode + formData.phoneNumber,
        }),
      });

      const result = await response.json();
      if (response.ok && result.url) {
        // Redirect the user to the Stripe Checkout page
        window.location.href = result.url;
      } else {
        console.error("Error creating checkout session:", result.error);
        alert("There was an error. Please try again.");
      }
    } catch (error: any) {
      console.error("Exception during order creation:", error.message);
      alert("There was an error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="addressLine1">Address Line 1</Label>
          <Input
            id="addressLine1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="addressLine2">Address Line 2</Label>
          <Input
            id="addressLine2"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="state">State</Label>
          <Input
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="zipcode">Zipcode</Label>
          <Input
            id="zipcode"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <div className="flex">
            <Select value={countryCode} onValueChange={setCountryCode}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Code" />
              </SelectTrigger>
              <SelectContent>
                {countrycodes.map((code: Record<any, any>) => (
                  <SelectItem key={code["dial_code"]} value={code["dial_code"]}>
                    {code["dial_code"] + " " + code["code"]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                setFormData((prev) => ({ ...prev, phoneNumber: value }));
              }}
              required
              className="flex-1 ml-2"
              maxLength={10}
            />
          </div>
        </div>
      </div>
      <div>
        <Label htmlFor="terms" className="text-xs">
          Note: A charge of $3000 will be put on hold upon submission. You
          won&apos;t be charged until the product is shipped.
        </Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          className="outline"
          checked={formData.agreedToTerms}
          onCheckedChange={(checked) =>
            setFormData((prev) => ({
              ...prev,
              agreedToTerms: !!checked,
            }))
          }
          required
        />
        <Label htmlFor="terms" className="text-sm">
          I have read and agree to the{" "}
          <Button
            variant="link"
            type="button"
            className="p-0 h-auto text-sm"
            onClick={() => setIsDialogOpen(true)}
          >
            terms of purchase
          </Button>
        </Label>
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Processing..." : "Submit"}
      </Button>
      <TermsDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </form>
  );
}
