import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = (props) => {
  const authorization = useSelector((state) => state.getLogin.login);
  const location = useLocation();

  if (!authorization) {
    return (
      <Route path={props.path} exact={props.exact}>
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      </Route>
    );
  }
  return <Route {...props} />;
};
