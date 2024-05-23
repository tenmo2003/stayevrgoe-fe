import { toast } from "sonner";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-auto">
      
      <button
        className="rounded-xl border border-black bg-blue-400 p-3"
        onClick={() => toast("Hello, World!")}
      >
        Hello world
      </button>
    </div>
  );
}
