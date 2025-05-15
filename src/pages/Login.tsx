import { useState } from "react";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardFooter } from "@/components/ui/card.tsx";
import { login } from "../api/auth.ts";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate("/dashboard");
    } catch (err) {
      alert("Error logging in");
    }
  };

  return (
    <Card className="w-80 p-4 bg-primary text-white rounded-2xl shadow-lg">
      <CardContent>
        <h2 className="text-xl mb-4">Log in</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Link to="/reset-password" className="text-sm text-accent">
            Forgot my password
          </Link>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button onClick={handleSubmit} className="w-full">
          Log in
        </Button>
        <Link to="/register" className="mt-2 text-sm text-accent text-center">
          Don't have an account? Register
        </Link>
      </CardFooter>
    </Card>
  );
}
