import { toast } from "sonner";

export default function Test() {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-auto">
    
      <button
        className="rounded-xl border border-black bg-blue-400 p-3"
        onClick={() => toast("ĐỊT MẸ OOAD!!!!!")}
      >
        Test page
      </button>
    </div>
  );
}
