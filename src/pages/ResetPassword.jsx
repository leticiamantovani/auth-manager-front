import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { resetPassword } from "../api/auth";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword({ email });
      alert("Verifique seu email para resetar a senha");
    } catch {
      alert("Erro ao solicitar reset");
    }
  };

  return (
    <Card className="w-80 p-4 bg-primary text-white rounded-2xl shadow-lg">
      <CardContent>
        <h2 className="text-xl mb-4">Resetar Senha</h2>
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
          Enviar
        </Button>
        <Link to="/" className="mt-2 text-sm text-accent text-center">
          Voltar ao login
        </Link>
      </CardFooter>
    </Card>
  );
}
