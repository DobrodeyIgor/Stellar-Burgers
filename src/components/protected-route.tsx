import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "../services/hooks/hooks";

export const ProtectedRoute = (props: any) => {
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
