import {useEffect} from 'react';
import {NextPage} from 'next';
import {useRouter} from 'next/router';

const HomePage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push('/home');
  }, []);

  return null;
};

export default HomePage;
