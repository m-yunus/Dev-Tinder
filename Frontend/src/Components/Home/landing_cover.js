import Link from 'next/link';

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
    
    >
      <h1 className="text-xl md:text-4xl lg:text-8xl font-bold text-center mb-4 text-white drop-shadow-lg">
  Connect with Professionals
</h1>

      
      <p className="text-lg text-center mb-6 text-gray-200 max-w-lg drop-shadow-lg">
        Build meaningful relationships, network, and explore new job opportunities with our community.
      </p>
      <Link href="/auth/register" className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-200">
        Create Your Account
      </Link>
      <p className="text-sm text-center mt-4 text-gray-400">
        Already have an account?{' '}
        <Link href="/auth/login" className="text-red-500 hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
