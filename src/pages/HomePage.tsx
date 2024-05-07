import GradientControls from "../components/gradient/GradientControls";
import GradientPreview from "../components/gradient/GradientPreview";
import Header from "../components/gradient/Header";

const HomePage = () => {
  return (
    <main>
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex-1 main p-2 xl:flex xl:flex-col">
          <div className="text-xl xl:text-4xl text-center py-2 font-semibold">
            <p>Generate Css Gradient</p>
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
