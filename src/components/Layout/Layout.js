import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Climbers from "../../pages/climbers";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/3dc/dashboard" component={Dashboard} />
              <Route path="/3dc/climbers" component={Climbers} />
              <Route path="/3dc/typography" component={Typography} />
              <Route path="/3dc/tables" component={Tables} />
              <Route path="/3dc/notifications" component={Notifications} />
              <Route
                exact
                path="/3dc/ui"
                render={() => <Redirect to="/3dc/ui/icons" />}
              />
              <Route path="/3dc/ui/maps" component={Maps} />
              <Route path="/3dc/ui/icons" component={Icons} />
              <Route path="/3dc/ui/charts" component={Charts} />
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
