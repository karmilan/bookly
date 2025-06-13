import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type ProtectedRouteProps = {
  children?: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [isAuthenticated, router]);

  if (isLoading) {
    // Optionally a spinner or blank while checking auth
    return <div>Loading...</div>;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
