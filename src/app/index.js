import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "components/Header/index";
import Sidebar from "containers/SideNav/index";
import Footer from "components/Footer";
import Tour from "../components/Tour/index";
import {
  ABOVE_THE_HEADER,
  BELOW_THE_HEADER,
  COLLAPSED_DRAWER,
  FIXED_DRAWER,
  HORIZONTAL_NAVIGATION
} from "constants/ActionTypes";
import ColorOption from "containers/Customizer/ColorOption";
import { isIOS, isMobile } from "react-device-detect";
import asyncComponent from "../util/asyncComponent";
import TopNav from "components/TopNav";
import { iDashboard } from "./routes/dashboard/routes/iDashboard";
import AllNews from "./routes/dashboard/routes/AllNews/AllNews";

class App extends React.Component {
  render() {
    const {
      match,
      drawerType,
      navigationStyle,
      horizontalNavPosition
    } = this.props;
    const drawerStyle = drawerType.includes(FIXED_DRAWER)
      ? "fixed-drawer"
      : drawerType.includes(COLLAPSED_DRAWER)
      ? "collapsible-drawer"
      : "mini-drawer";

    //set default height and overflow for iOS mobile Safari 10+ support.
    if (isIOS && isMobile) {
      document.body.classList.add("ios-mobile-view-height");
    } else if (document.body.classList.contains("ios-mobile-view-height")) {
      document.body.classList.remove("ios-mobile-view-height");
    }

    return (
      <div className={`app-container ${drawerStyle}`}>
        <Tour />

        <Sidebar />
        <div className="app-main-container">
          <div
            className={`app-header ${
              navigationStyle === HORIZONTAL_NAVIGATION
                ? "app-header-horizontal"
                : ""
            }`}
          >
            {navigationStyle === HORIZONTAL_NAVIGATION &&
              horizontalNavPosition === ABOVE_THE_HEADER && (
                <TopNav styleName="app-top-header" />
              )}
            <Header />
            {navigationStyle === HORIZONTAL_NAVIGATION &&
              horizontalNavPosition === BELOW_THE_HEADER && <TopNav />}
          </div>

          <main className="app-main-content-wrapper">
            <div className="app-main-content">
              <Switch>
                <Route path={`${match.url}/dashboard`} component={iDashboard} />
                <Route path={`${match.url}/allnews`} component={AllNews} />
                <Route
                  path={`${match.url}/newsagency/news-agency-1`}
                  component={AllNews}
                />
                <Route
                  path={`${match.url}/newsagency/news-agency-2`}
                  component={AllNews}
                />
                <Route
                  path={`${match.url}/newsagency/news-agency-3`}
                  component={AllNews}
                />
                <Route
                  path={`${match.url}/government/government-1`}
                  component={AllNews}
                />
                <Route
                  path={`${match.url}/government/government-2`}
                  component={AllNews}
                />
                <Route
                  path={`${match.url}/government/government-3`}
                  component={AllNews}
                />
                <Route
                  path={`${match.url}/onateam/onateam-1`}
                  component={AllNews}
                />
                <Route
                  path={`${match.url}/onateam/onateam-2`}
                  component={AllNews}
                />
                <Route
                  path={`${match.url}/onateam/onateam-3`}
                  component={AllNews}
                />
                <Route
                  path={`${match.url}/freelancers/freelancer-1`}
                  component={AllNews}
                />
                <Route
                  path={`${match.url}/freelancers/freelancer-2`}
                  component={AllNews}
                />
                <Route
                  path={`${match.url}/freelancers/freelancer-3`}
                  component={AllNews}
                />

                <Route
                  path={`${match.url}/mail-redux`}
                  component={asyncComponent(() =>
                    import("./routes/mail/redux/index")
                  )}
                />
                <Route
                  path={`${match.url}/chat`}
                  component={asyncComponent(() =>
                    import("./routes/chatPanel/basic/index")
                  )}
                />
                <Route
                  path={`${match.url}/chat-redux`}
                  component={asyncComponent(() =>
                    import("./routes/chatPanel/redux/index")
                  )}
                />
                <Route
                  component={asyncComponent(() =>
                    import("app/routes/extraPages/routes/404")
                  )}
                />
              </Switch>
            </div>
            <Footer />
          </main>
        </div>
        <ColorOption />
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { drawerType, navigationStyle, horizontalNavPosition } = settings;
  return { drawerType, navigationStyle, horizontalNavPosition };
};
export default withRouter(connect(mapStateToProps)(App));
