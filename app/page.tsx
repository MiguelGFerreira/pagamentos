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
            <Label htmlFor="solicitante">Solicitante:</Label>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Input id="id" name="id" placeholder="Id da solicitação" />
            <Input id="data" type="date" name="data" />
            <Input id="solicitante" name="solicitante" placeholder="Solicitante" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Label htmlFor="empresa">Empresa:</Label>
            <Label htmlFor="centrocusto">Centro de Custo:</Label>
            <Label htmlFor="setor">Setor:</Label>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Input id="empresa" name="empresa" placeholder="Empresa" />
            <Input id="centrocusto" name="centrocusto" placeholder="Centro de Custo" />
            <Input id="setor" name="setor" placeholder="setor" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Label htmlFor="setor">Tipo da solicitação:</Label>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">NF-e/CT-e</SelectItem>
                  <SelectItem value="banana">DDA</SelectItem>
                  <SelectItem value="blueberry">outro</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </form>
      </div>
    </div>
  );
}
