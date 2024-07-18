import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex h-[500px] w-full items-center justify-center">
            <Loader2 className="animate-spin size-20 text-slate-300" />
        </div>
    )
}