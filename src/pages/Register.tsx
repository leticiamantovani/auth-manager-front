import { useState } from "react";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardFooter } from "@/components/ui/card.tsx";
import { register } from "../api/auth.ts";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ email, password });
      navigate("/");
    } catch {
      alert("Error registering");
    }
  };

  return (
    <Card className="w-80 p-4 bg-primary text-white rounded-2xl shadow-lg">
      <CardContent>
        <h2 className="text-xl mb-4">Register</h2>
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
        </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button onClick={handleSubmit} className="w-full">
          Register
        </Button>
        <Link to="/" className="mt-2 text-sm text-accent text-center">
          Already have an account? Log in
        </Link>
      </CardFooter>
    </Card>
  );
}
