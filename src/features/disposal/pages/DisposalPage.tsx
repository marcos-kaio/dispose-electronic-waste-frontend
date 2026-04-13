import { ArrowLeft } from "lucide-react";

// interface DisposalGeneralData {
//   equipmentType: "desktop" | "laptop" | "monitor" | "printer" | "other" | "";
//   tombamento: number;
//   equipmentBrand: string;
//   origin: string;
//   classification: string;
//   evaluationDate: Date;
// }

function DisposalPage() {
  return (
    <div className="flex flex-col">
      <h1 className="">Formulário de descarte</h1>
      <div className="flex flex-row">
        <div className="border rounded-[100%] border-[#224185] p-2">
          <ArrowLeft color="#224185" size={24} />
        </div>
      </div>
    </div>
  );
}

export default DisposalPage;
