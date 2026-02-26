export default function FooterInfoCard({ title, children }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-purple-500/40">
      <h4 className="mb-2 font-medium text-white">{title}</h4>
      <p className="text-sm text-gray-400">{children}</p>
    </div>
  );
}
