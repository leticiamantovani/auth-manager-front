// src/pages/EmailSent.tsx
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";

export default function EmailSent() {
  return (
    <Card className="w-80 p-6 bg-primary text-white rounded-2xl shadow-lg flex flex-col items-center space-y-4">
      <CardContent>
        <h2 className="text-2xl font-semibold text-center">Email enviado!</h2>
        <p className="mt-2 text-center text-white/80">
          Verifique sua caixa de entrada para resetar a senha.
        </p>
      </CardContent>
      <CardFooter className="w-full">
        <Link to="/" className="w-full">
          <Button className="w-full">Voltar ao Login</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
