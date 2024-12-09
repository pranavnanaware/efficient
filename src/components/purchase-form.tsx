"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TermsDialog } from "./terms-dialog";
import { Textarea } from "./ui/textarea";

export function PurchaseForm() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
    agreedToTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreedToTerms) {
      alert("You must agree to the terms.");
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
          address: formData.address,
          phoneNumber: formData.phoneNumber,
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
          <Label htmlFor="address">Address</Label>
          <Textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
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
