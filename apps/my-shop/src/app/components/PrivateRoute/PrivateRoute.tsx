
import { Redirect, Route } from 'react-router-dom';
import useCurrentUser from '../../hooks/useCurrentUser';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const user = useCurrentUser();
  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;