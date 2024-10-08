import BasicIncomeButton from 'components/BasicIncomeButton';
import Hero from 'components/Hero';

function HomePage() {
  return (
    <div className="flex h-full min-h-[calc(100dvh-108px)] w-[100dvw] flex-col items-center justify-center p-4 xl:w-[80rem]">
      <Hero />
      <BasicIncomeButton />
    </div>
  );
}

export default HomePage;
