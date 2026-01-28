import Header from '@/components/Header/Header';

export default function MainLayout({ children, showHeader = true }) {
  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && <Header />}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
