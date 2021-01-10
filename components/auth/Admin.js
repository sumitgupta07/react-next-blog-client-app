import {useRouter} from 'next/router';
import {isAuth} from 'actions/auth';

const Admin = ({children}) => {
  const router = useRouter();

  if (typeof window !== 'undefined') {
    if (!isAuth()) {
      router.push(`/signin`);
      return null;
    } else if (isAuth().role !== 1) {
      router.push(`/user`);
      return null;
    }
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Admin;
