import { toast } from "sonner";

export default function Test() {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-auto">
      <a
        className="absolute left-3 top-3 rounded-xl bg-green-300 p-3"
        href="/"
      >
        Go to Home page
      </a>
      <button
        className="rounded-xl border border-black bg-blue-400 p-3"
        onClick={() => toast("ĐỊT MẸ OOAD!!!!!")}
      >
        Try me
      </button>
    </div>
  );
}
