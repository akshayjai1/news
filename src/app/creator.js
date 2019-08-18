import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "components/Header/index";
import Sidebar from "containers/SideNav/index";
import Footer from "components/Footer";
import Widgets from "./routes/widgets";
import Metrics from "./routes/metrics";
import Components from "./routes/components";
import Icons from "./routes/icons/index";
import Form from "./routes/form";
import Editors from "./routes/editors";
import Pickers from "./routes/pickers";
import Extensions from "./routes/extensions";
import Table from "./routes/table";
import Chart from "./routes/charts";
import Map from "./routes/map";
import Calendar from "./routes/calendar";
import TimeLine from "./routes/timeLine";
import CustomViews from "./routes/customViews";
import ExtraElements from "./routes/extraElements";
import eCommerce from "./routes/eCommerce";
import AppModule from "./routes/appModule";
import ExtraPages from "./routes/extraPages";
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
import SocialApps from "./routes/socialApps";
import { iDashboard } from "./routes/dashboard/routes/iDashboard";
import AllNews from "./routes/dashboard/routes/AllNews/AllNews";
import { cDashboard } from "./routes/dashboard/routes/cDashboard";
import ComposeNews from "./routes/dashboard/routes/cDashboard/ComposeNews";
import CreatorAllNews from "./routes/dashboard/routes/cDashboard/CreatorNews/CreatorAllNews";
import CreatorNewsBox from "./routes/mail/redux/CreatorNewsBox";
import CreatorSentItems from "./routes/mail/redux/CreatorSentItems";
import CreatorImages from "./routes/dashboard/routes/cDashboard/CreatorImages";
import CreatorVideos from "./routes/dashboard/routes/cDashboard/CreatorVideos";
import CreatorAudios from "./routes/dashboard/routes/cDashboard/CreatorAudios";

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
                <Route path={`${match.url}/dashboard`} component={cDashboard} />
                <Route path={`${match.url}/compose`} component={ComposeNews} />
                <Route
                  path={`${match.url}/newsbox`}
                  component={CreatorNewsBox}
                />
                <Route
                  path={`${match.url}/sent-items`}
                  component={CreatorSentItems}
                />
                <Route
                  path={`${match.url}/creator-images`}
                  component={CreatorImages}
                />
                <Route
                  path={`${match.url}/creator-videos`}
                  component={CreatorVideos}
                />
                <Route
                  path={`${match.url}/creator-audios`}
                  component={CreatorAudios}
                />
                <Route
                  path={`${match.url}/creator-report`}
                  component={asyncComponent(() =>
                    import("./routes/widgets/routes/Classic")
                  )}
                />

                <Route
                  path={`${match.url}/creator-chat`}
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
