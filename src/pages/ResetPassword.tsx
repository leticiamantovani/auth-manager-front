import { useState } from "react";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardFooter } from "@/components/ui/card.tsx";
import { resetPassword } from "../api/auth.ts";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword({ email });
      alert("Verify your email for reset link");
    } catch {
      alert("Error sending reset link");
    }
  };

  return (
    <Card className="w-80 p-4 bg-primary text-white rounded-2xl shadow-lg">
      <CardContent>
        <h2 className="text-xl mb-4">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button onClick={handleSubmit} className="w-full">
          Send Reset Link
        </Button>
        <Link to="/" className="mt-2 text-sm text-accent text-center">
          Back to Login
        </Link>
      </CardFooter>
    </Card>
  );
}
