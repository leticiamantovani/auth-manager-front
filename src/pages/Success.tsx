import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";

export default function Success() {
  const navigate = useNavigate();

  return (
    <Card className="w-80 p-6 bg-primary text-white rounded-2xl shadow-lg flex flex-col items-center space-y-4">
      <CardContent>
        <h2 className="text-2xl font-semibold text-center">Logado com sucesso!</h2>
      </CardContent>
      <CardFooter className="w-full">
        <Button
          onClick={() => navigate("/dashboard")}
          className="w-full"
        >
          Ir para Dashboard
        </Button>
      </CardFooter>
    </Card>
  );
}
