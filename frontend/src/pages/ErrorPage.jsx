import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <main className="mt-12">
      <div className="flex flex-col w-3/4 gap-4 mx-auto text-center text-pretty">
        <h2 className="text-3xl font-bold text-primaryColor">404 Error</h2>
        <p>Uh oh looks like there was an error...</p>
      </div>
    </main>
  );
};

export default ErrorPage;
