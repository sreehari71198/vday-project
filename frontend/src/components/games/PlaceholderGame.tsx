type PlaceholderGameProps = {
  id: string;
  title: string;
};

export default function PlaceholderGame({ id, title }: PlaceholderGameProps) {
  return (
    <section id={id} className="glass-card rounded-3xl p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-white/70 mt-2">Coming soon...</p>
      <div className="mt-4 h-40 rounded-2xl bg-white/10 flex items-center justify-center">
        <span className="text-xs text-white/70">Game placeholder</span>
      </div>
    </section>
  );
}