import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TermsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TermsDialog({ open, onOpenChange }: TermsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Terms of Purchase</DialogTitle>
          <DialogDescription>
            Please read these Terms of Purchase carefully before making a
            purchase. By completing a purchase, you agree to be bound by these
            terms.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-6">
          {/* Section 1: Product Description */}
          <section>
            <h3 className="text-lg font-semibold">1. Product Description</h3>
            <p>You are purchasing the following product:</p>
            <ul className="list-disc list-inside">
              <li>
                <strong>Product:</strong> 65 inch 8K Internet-Enabled Smart
                Television
              </li>
              <li>
                <strong>Retail Price:</strong> $3,000.00
              </li>
              <li>
                <strong>Bundled Subscription:</strong> $139.99/month (requires
                one registration for access to all included content and
                services)
              </li>
              <li>
                <strong>Warranty:</strong> Includes a 1-year manufacturer
                warranty
              </li>
            </ul>
          </section>

          {/* Section 2: Payment Terms */}
          <section>
            <h3 className="text-lg font-semibold">2. Payment Terms</h3>
            <p>The following payment terms apply to your purchase:</p>
            <ul className="list-disc list-inside">
              <li>
                <strong>Authorization Hold:</strong> A hold of $3,000.00 will be
                placed on your credit card upon signing this agreement.
              </li>
              <li>
                <strong>Charging Conditions:</strong> Your credit card will not
                be charged unless the television is delivered to you.
              </li>
              <li>
                <strong>Future Equity:</strong> A SAFE (Simple Agreement for
                Future Equity) agreement will be issued in conjunction with this
                purchase, as described above.
              </li>
              <li>
                <strong>Pre-Order Campaign:</strong> This pre-order validates
                consumer demand to advance Efficient’s business objectives and
                attract additional funding.
              </li>
            </ul>
          </section>

          {/* Section 3: Delivery */}
          <section>
            <h3 className="text-lg font-semibold">3. Delivery Date</h3>
            <p>
              The estimated delivery date for your purchase is{" "}
              <strong>December 25th, 2025</strong>. Please note that delivery
              dates are subject to change based on availability and other
              factors beyond our control.
            </p>
          </section>

          {/* Additional Terms */}
          <section>
            <h3 className="text-lg font-semibold">4. Acceptance of Terms</h3>
            <p>
              By making a purchase, you agree to be bound by these Terms of
              Purchase.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">5. Pricing and Payment</h3>
            <p>
              All prices are listed in USD. Payment is due at the time of
              purchase as outlined in the Payment Terms section above.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">6. Shipping and Delivery</h3>
            <p>
              Shipping times may vary. We are not responsible for delays outside
              our control. Please ensure that the delivery address provided is
              accurate to avoid any delays.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">7. Privacy Policy</h3>
            <p>
              Your personal information will be handled in accordance with our
              Privacy Policy. By making a purchase, you consent to the
              collection and use of your information as described therein.
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
