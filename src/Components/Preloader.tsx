import { DefaultLayout } from "Layouts/DefaultLayout";

export const Preloader = () => {
  return (
    <DefaultLayout>
      <div className="flex column align-center">
        <span className="loading-main-text">Get ready</span>
        <div className="loading-circle"> </div>
        <span className="loading-secondary-text">Loading...</span>
      </div>
    </DefaultLayout>
  );
};
