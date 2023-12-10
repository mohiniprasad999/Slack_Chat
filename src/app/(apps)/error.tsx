"use client";

const Error = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold text-error">Something went wrong!</h1>
      <p className="text-info">Refresh the screen or please try again in sometime.</p>
    </div>
  );
};

export default Error;
