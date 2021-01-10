import {useRouter} from 'next/router';
import {isAuth} from 'actions/auth';

const Private = ({children}) => {
  const router = useRouter();

  if (typeof window !== 'undefined') {
    if (!isAuth()) {
      router.push(`/signin`);
      return null;
    }
  }
  return <React.Fragment>{children}</React.Fragment>;
};

export default Private;
