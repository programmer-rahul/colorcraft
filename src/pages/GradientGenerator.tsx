import GradientControls from "../components/gradient/GradientControls";
import GradientPreview from "../components/gradient/GradientPreview";
import Header from "../components/gradient/Header";

const HomePage = () => {
  return (
    <main>
      <div className="flex min-h-screen flex-col bg-slate-200 dark:bg-slate-900">
        <Header />

        <div className="main flex-1 p-2 xl:flex xl:flex-col">
          <div className="py-2 text-center text-xl font-semibold xl:text-4xl">
            <p className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Generate Css Gradient
            </p>
          </div>

          <div className="flex flex-col gap-2 xl:flex-1 xl:flex-row">
            {/* preview  */}
            <GradientPreview />

            {/* controls  */}
            <GradientControls />
          </div>
        </div>
      </div>
    </main>
  );
};
export default HomePage;
