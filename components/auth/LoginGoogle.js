import {useRouter} from 'next/router';
import GoogleLogin from 'react-google-login';
import {loginWithGoogle, authenticate, isAuth} from 'actions/auth';
import {GOOGLE_CLIENT_ID} from '../../config';

const LoginGoogle = () => {
  const router = useRouter();
  const responseGoogle = (response) => {
    const tokenId = response.tokenId;
    const user = {tokenId};

    loginWithGoogle(user).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        authenticate(data, () => {
          if (isAuth() && isAuth().role === 1) {
            router.push(`/admin`);
          } else {
            router.push(`/user`);
          }
        });
      }
    });
  };

  return (
    <div className="pb-3">
      <GoogleLogin
        clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        theme="dark"
      />
    </div>
  );
};

export default LoginGoogle;
