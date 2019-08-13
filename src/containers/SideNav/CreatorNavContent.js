import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import IntlMessages from "util/IntlMessages";
import CustomScrollbars from "util/CustomScrollbars";
import { SingleMenu } from "./SingleMenu";
import { ParentMenu } from "./ParentMenu";

const AgencyChild = [
  {
    to: "/app/newsagency/news-agency-1",
    nameId: "sidebar.newsagency.one"
  },
  {
    to: "/app/newsagency/news-agency-2",
    nameId: "sidebar.newsagency.two"
  },
  {
    to: "/app/newsagency/news-agency-3",
    nameId: "sidebar.newsagency.three"
  }
];
const FreelancerChild = [
  {
    to: "/app/freelancers/freelancer-1",
    nameId: "sidebar.freelancer.one"
  },
  {
    to: "/app/freelancers/freelancer-2",
    nameId: "sidebar.freelancer.two"
  },
  {
    to: "/app/freelancers/freelancer-3",
    nameId: "sidebar.freelancer.three"
  }
];
const OnaChild = [
  {
    to: "/app/onateam/onateam-1",
    nameId: "ona1"
  },
  {
    to: "/app/onateam/onateam-2",
    nameId: "ona2"
  },
  {
    to: "/app/onateam/onateam-3",
    nameId: "ona3"
  }
];
const GovernChilds = [
  {
    to: "/app/government/government-1",
    nameId: "government1"
  },
  {
    to: "/app/government/government-2",
    nameId: "government2"
  },
  {
    to: "/app/government/government-3",
    nameId: "government3"
  }
];
class SidenavContent extends Component {
  componentDidMount() {
    const { history } = this.props;
    const that = this;
    const pathname = `${history.location.pathname}`; // get current path

    const menuLi = document.getElementsByClassName("menu");
    for (let i = 0; i < menuLi.length; i++) {
      menuLi[i].onclick = function(event) {
        const parentLiEle = that.closest(this, "li");
        if (menuLi[i].classList.contains("menu") && parentLiEle !== null) {
          event.stopPropagation();

          if (menuLi[i].classList.contains("open")) {
            menuLi[i].classList.remove("open", "active");
          } else {
            menuLi[i].classList.add("open", "active");
          }
        } else {
          for (let j = 0; j < menuLi.length; j++) {
            const parentLi = that.closest(this, "li");
            if (
              menuLi[j] !== this &&
              (parentLi === null || !parentLi.classList.contains("open"))
            ) {
              menuLi[j].classList.remove("open");
            } else {
              if (menuLi[j].classList.contains("open")) {
                menuLi[j].classList.remove("open");
              } else {
                menuLi[j].classList.add("open");
              }
            }
          }
        }
      };
    }

    const activeLi = document.querySelector('a[href="' + pathname + '"]'); // select current a element
    try {
      const activeNav = this.closest(activeLi, "ul"); // select closest ul
      if (activeNav.classList.contains("sub-menu")) {
        this.closest(activeNav, "li").classList.add("open");
      } else {
        this.closest(activeLi, "li").classList.add("open");
      }
    } catch (error) {}
  }

  componentWillReceiveProps(nextProps) {
    const { history } = nextProps;
    const pathname = `${history.location.pathname}`; // get current path

    const activeLi = document.querySelector('a[href="' + pathname + '"]'); // select current a element
    try {
      const activeNav = this.closest(activeLi, "ul"); // select closest ul
      if (activeNav.classList.contains("sub-menu")) {
        this.closest(activeNav, "li").classList.add("open");
      } else {
        this.closest(activeLi, "li").classList.add("open");
      }
    } catch (error) {}
  }

  closest(el, selector) {
    try {
      let matchesFn;
      // find vendor prefix
      [
        "matches",
        "webkitMatchesSelector",
        "mozMatchesSelector",
        "msMatchesSelector",
        "oMatchesSelector"
      ].some(function(fn) {
        if (typeof document.body[fn] === "function") {
          matchesFn = fn;
          return true;
        }
        return false;
      });

      let parent;

      // traverse parents
      while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
          return parent;
        }
        el = parent;
      }
    } catch (e) {}

    return null;
  }

  render() {
    return (
      <CustomScrollbars className=" scrollbar">
        <ul className="nav-menu">
          <li className="nav-header">
            <IntlMessages id="sidebar.main" />
          </li>
          <SingleMenu
            to="/app/dashboard"
            nameId="sidebar.dashboard"
            icon="view-dashboard"
          />
          <SingleMenu
            to="/app/compose"
            nameId="compose-news"
            icon="email-open"
          />
          <SingleMenu to="/app/newsbox" nameId="newsbox" icon="email" />
          <SingleMenu
            to="/app/dashboard"
            nameId="sent-items"
            icon="arrow-right-top"
          />
          <SingleMenu
            to="/app/allnews"
            nameId="images"
            icon="collection-image"
          />
          <SingleMenu to="/app/allnews" nameId="audios" icon="playlist-audio" />
          <SingleMenu
            to="/app/allnews"
            nameId="videos"
            icon="collection-video"
          />
          <SingleMenu to="/app/chat" nameId="chat" icon="comment" />
          <SingleMenu to="/app/allnews" nameId="report" icon="view-list" />
        </ul>
      </CustomScrollbars>
    );
  }
}

export default withRouter(SidenavContent);
