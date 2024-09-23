import { useNavigate } from "@tanstack/react-router";

import Logo from "@/assets/logo.svg?react";
import { Button } from "@/components/ui-library/button.tsx";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-8 gap-3 flex flex-col items-center">
      <Logo height={64} width={64} />
      <h1 className="font-bold items-center text-5xl mb-4 bg-gradient-to-b bg-clip-text text-transparent from-blue-500 to-violet-700">
        protected-supabase-vite-starter
      </h1>

      <p className="mb-4">
        Menu on top comes from the
        <code className="bg-gray-900 rounded-sm py-1 px-2 text-white mx-2 cursor-jakub">
          __root.tsx
        </code>
        file and helps me navigate during development. It's safe to change it.
      </p>
      <div className="flex gap-2">
        <Button onClick={() => navigate({ to: "/login" })} variant="default">
          Login
        </Button>
        <Button
          onClick={() =>
            navigate({
              to: "/register",
            })
          }
          variant="outline"
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Index;
