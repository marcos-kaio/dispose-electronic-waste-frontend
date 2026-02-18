import logosImage from "@/assets/images/logo-ufpe-sti-cstic.png";
import {
  Input,
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  Button,
} from "@/components/ui";
import { EyeOff } from "lucide-react";

function LoginPage() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <img src={logosImage} alt="" className="w-[40%] my-10" />

      <h1 className="font-bold text-[32px] mb-10">
        Sistema de descarte de equipamentos de TIC e eletrônicos
      </h1>

      <div className="flex flex-col items-center w-[35%] h-auto border-2 border-[#224185] rounded-[10px] p-9">
        <h2 className="font-bold text-[36px] text-[#224185] mb-9">Login</h2>

        <form className="flex flex-col gap-9 w-full px-4">
          <Input
            className="w-full border border-[#224185] h-12.5"
            placeholder="Usuário"
          />

          <InputGroup className="w-full border border-[#224185] h-12.5">
            <InputGroupInput type="password" placeholder="Senha" />
            <InputGroupAddon align="inline-end">
              <EyeOff color="#224185" />
            </InputGroupAddon>
          </InputGroup>

          <Button className="w-[70%] self-center bg-[#224185] color-white h-12.5 cursor-pointer" type="submit">
            Acessar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
