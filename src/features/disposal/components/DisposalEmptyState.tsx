import { Button } from "@/components/ui";
import { CirclePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function DisposalEmptyState() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-100">
      <Button
        onClick={() => navigate("/")}
        className="bg-[#224185] hover:bg-[#3e5fa4] text-[#F3F4F6] text-[20px] font-medium flex items-center gap-3 p-7 rounded-md transition-all cursor-pointer"
      >
        <CirclePlus className="w-8! h-8!" color="#F3F4F6" />
        <div>Clique aqui para cadastrar o descarte</div>
      </Button>
    </div>
  );
}

export default DisposalEmptyState;
