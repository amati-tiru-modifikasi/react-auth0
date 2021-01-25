import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      colorScheme="teal"
      variant="outline"
      onClick={() => loginWithRedirect()}
    >
      Please Login
    </Button>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      colorScheme="teal"
      variant="outline"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </Button>
  );
};

const Auth = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default Auth;
