import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export const useIsAuthUser = () => {
  const router = useRouter();

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      router.replace('/login');
    } else {
      setIsAuth(true);
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isAuth;
}