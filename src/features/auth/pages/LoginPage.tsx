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
    <div className="flex flex-col w-full min-h-screen justify-center items-center py-10 px-5">
      <img src={logosImage} alt="" className="w-9/10 md:w-[40%] max-w-125. mb-8 md:mb-10" />

      <h1 className="font-bold text-xl text-center md:text-[32px] mb-8 md:mb-10 max-w-300">
        Sistema de descarte de equipamentos de TIC e eletrônicos
      </h1>

      <div className="flex flex-col items-center w-full max-w-112.5 h-auto border-2 border-[#224185] rounded-[10px] p-6 md:p-9 bg-white mb-5">
        <h2 className="font-bold text-2xl md:text-[36px] text-[#224185] mb-6 md:mb-9">Login</h2>

        <form className="flex flex-col gap-6 md:gap-9 w-full">
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

          <Button className="w-full sm:w-[70%] self-center bg-[#224185] hover:bg-[#60749e] text-white text-sm sm:text-2xl h-12.5 cursor-pointer mb-2" type="submit">
            Acessar
          </Button>

          <div className="flex flex-col items-center sm:flex-row gap-1 justify-center text-sm md:text-auto text-black font-light">
            <p>Problemas com o acesso?</p>
            <a href="" className="underline underline-offset-3 hover:decoration-[#6076A6]">Entre em contato com o CMI</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
