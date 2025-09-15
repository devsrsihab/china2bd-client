import { BadgeCheck, Clock, Bell, Heart, Home, Store } from "lucide-react";

const RightPanel: React.FC = () => {
  return (
    <aside className="w-full lg:w-[340px] py-6">
      <div className="rounded-xl border bg-gradient-to-b from-purple-50 to-orange-50 shadow-sm">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 p-4">
          <div>
            <p className="text-sm text-neutral-600">Good morning,</p>
            <p className="text-base font-semibold text-neutral-900">
              tb038213...
              <span className="ml-2 rounded bg-neutral-900 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                Lv.3 Member
              </span>
            </p>
            <div className="mt-1 flex items-center gap-2 text-xs text-neutral-600">
              <span className="inline-flex items-center gap-1 rounded bg-red-500/10 px-1.5 py-0.5 text-red-600">
                <BadgeCheck size={12} /> Red envelope
              </span>
              <span className="inline-flex items-center gap-1 rounded bg-amber-500/10 px-1.5 py-0.5 text-amber-600">
                <Clock size={12} /> 2 open ⏐ account period
              </span>
            </div>
          </div>
          <button className="rounded-lg border bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50">
            Open & enjoy
          </button>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-4 gap-3 px-4 pb-3">
          {[
            { icon: Home, label: "Procure" },
            { icon: Heart, label: "Collect…" },
            { icon: Store, label: "Shops…" },
            { icon: Bell, label: "My Foll…" },
          ].map((a, i) => (
            <button
              key={i}
              className="flex flex-col items-center gap-1 rounded-lg border bg-white py-2 text-center text-[12px] text-neutral-700 hover:bg-neutral-50"
            >
              <a.icon size={18} />
              <span>{a.label}</span>
            </button>
          ))}
        </div>

        {/* Order stats */}
        <div className="px-4 pb-2">
          <div className="grid grid-cols-4 rounded-lg border bg-white py-2 text-center text-[12px] text-neutral-700">
            <div>
              <p className="text-lg font-semibold">0</p>
              <p className="text-[11px] text-neutral-500">Pending</p>
            </div>
            <div>
              <p className="text-lg font-semibold">5</p>
              <p className="text-[11px] text-neutral-500">Awaiting</p>
            </div>
            <div>
              <p className="text-lg font-semibold">35</p>
              <p className="text-[11px] text-neutral-500">Waiting…</p>
            </div>
            <div>
              <p className="text-lg font-semibold">0</p>
              <p className="text-[11px] text-neutral-500">Returns</p>
            </div>
          </div>
          <button className="mt-1 w-full text-right text-xs font-medium text-neutral-700 hover:underline">
            All orders
          </button>
        </div>

        {/* Alerts */}
        <div className="space-y-2 px-4 pb-4">
          <div className="flex items-center justify-between gap-3 rounded-lg border bg-white p-3">
            <div>
              <p className="text-sm font-medium text-neutral-900">
                Delivery timed out
              </p>
              <p className="text-xs text-neutral-600">3 orders have time…</p>
            </div>
            <button className="rounded-md bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-orange-600">
              Deal with
            </button>
          </div>

          <div className="flex items-center justify-between gap-3 rounded-lg border bg-white p-3">
            <div>
              <p className="text-sm font-medium text-neutral-900">
                Essential price compare
              </p>
              <p className="text-xs text-neutral-600">
                Official product, safe…
              </p>
            </div>
            <button className="rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-neutral-800">
              Check
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightPanel;
