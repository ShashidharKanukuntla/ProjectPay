import {useEffect} from 'react';
import {NextPage} from 'next';
import {useRouter} from 'next/router';


const AdminNextPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push('/admin/dashboard');
  }, []);

  return null;
};

export default AdminNextPage;