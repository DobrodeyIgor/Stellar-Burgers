import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppHeader } from "../app-header/app-header";
import { getIngredientsList } from "../../services/actions/ingredients-list";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Modal } from "../../components/modal/modal";
import { IngredientDetails } from "../../components/ingredient-details/ingredient-details";
import { DndProvider } from "react-dnd";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { ProtectedRoute } from "../protected-route";
import {
  Main,
  Registration,
  LoginPage,
  ForgotPassword,
  ResetPassword,
  ProfilePage,
  PageNotFound,
  IngredientPage,
} from "../../pages/index";

export function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch(getIngredientsList());
  }, [dispatch]);

  const closeIngredientsModal = useCallback(() => {
    history.push("/");
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <AppHeader />
      <Switch location={background || location}>
        <Route path='/' exact={true} component={Main} />
        <Route path='/login' exact={true} component={LoginPage} />
        <Route path='/register' exact={true} component={Registration} />
        <Route
          path='/forgot-password'
          exact={true}
          component={ForgotPassword}
        />
        <Route path='/reset-password' exact={true} component={ResetPassword} />
        <ProtectedRoute path='/profile' exact={true} component={ProfilePage} />
        <ProtectedRoute
          path='/profile/orders'
          exact={true}
          component={ProfilePage}
        />
        <ProtectedRoute path='/ingredients/:id' component={IngredientPage} />
        <Route component={PageNotFound} />
      </Switch>
      {background && (
        <>
          <Route path='/ingredients/:id'>
            <Modal onClose={closeIngredientsModal} title='Детали ингредиента'>
              <IngredientDetails />
            </Modal>
          </Route>
        </>
      )}
    </DndProvider>
  );
}
