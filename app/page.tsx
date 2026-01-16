'use client';

import Header from './layouts/header/Header';
import MainPage from './pages/main/page';

export default function Home() {
  return (
    <>
      <main className="page">
        <Header />
        <MainPage />
      </main>
    </>
  );
}
