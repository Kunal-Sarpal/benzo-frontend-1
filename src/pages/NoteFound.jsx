export const NotFoundPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-lg mb-6">Oops! The page you are looking for does not exist.</p>
            <a
                href="/"
                className="px-6 py-2 bg-green-500 text-white font-medium rounded-lg shadow hover:bg-green-600 transition"
            >
                Go Back to Home
            </a>
        </div>
    );
};