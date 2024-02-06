import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Solicitação de Pagamentos</h1>
      <div className="flex items-center justify-between">
        <form className="p-4 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <Label htmlFor="id">ID da solicitação:</Label>
            <Label htmlFor="data">Data da solicitação:</Label>
            <Label htmlFor="solicitante">Status:</Label>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Input id="id" name="id" placeholder="Id da solicitação" />
            <Input id="data" type="date" name="data" />
            <Input id="status" name="status" placeholder="Solicitante" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Label htmlFor="solicitante">Solicitante:</Label>
            <Label htmlFor="email">Email do Solicitante:</Label>
            <Label htmlFor="matricula">Matrícula:</Label>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Input id="solicitante" name="solicitante" placeholder="Solicitante" />
            <Input id="email" name="email" placeholder="Email" />
            <Input id="matricula" name="matricula" placeholder="Matrícula" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Label htmlFor="tipo">Tipo da solicitação:</Label>
            <Label htmlFor="servico">Serviço:</Label>
            <Label htmlFor="anexo">Anexar Arquivo:</Label>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Select name="tipo">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                  <SelectItem value="nfe-cte">NF-e/CT-e</SelectItem>
                  <SelectItem value="dda">DDA</SelectItem>
                  <SelectItem value="outro">outro</SelectItem>
              </SelectContent>
            </Select>
            <Select name="servico">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Serviço" />
              </SelectTrigger>
              <SelectContent>
                  <SelectItem value="servico1">Serviço 1</SelectItem>
                  <SelectItem value="servico2">Serviço 2</SelectItem>
                  <SelectItem value="servico3">Serviço 3</SelectItem>
              </SelectContent>
            </Select>
            <Input id="anexo" type="file" />
          </div>
        </form>
      </div>
    </div>
  );
}
