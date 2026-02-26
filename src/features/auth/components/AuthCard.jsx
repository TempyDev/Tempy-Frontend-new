export default function AuthCard({ title, subtitle, children }) {
  return (
    <div className="rounded-xl bg-white p-9 shadow-md">
      <h2 className="text-center text-xl font-semibold text-gray-800">{title}</h2>
      {subtitle && <p className="mb-8 mt-2 text-center text-sm text-gray-500">{subtitle}</p>}
      {children}
    </div>
  );
}
