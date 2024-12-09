import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
      <div className="text-center space-y-6 max-w-md mx-auto p-6">
        <CheckCircle className="w-24 h-24 text-primary mx-auto" />
        <h1 className="text-3xl font-bold text-primary">Success!</h1>
        <p className="text-xl font-medium text-white">
          Thank you for being a part of Efficient.
        </p>
        <p className="text-neutral-400">
          We will keep you updated regarding the product and other important
          information.
        </p>
      </div>
    </div>
  );
}
