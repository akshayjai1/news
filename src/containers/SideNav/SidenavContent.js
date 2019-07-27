import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

import IntlMessages from "util/IntlMessages";
import CustomScrollbars from "util/CustomScrollbars";
import { SingleMenu } from "./SingleMenu";
import { ParentMenu } from "./ParentMenu";

const AgencyChild = [
  {
    to: "/app/newsagency",
    nameId: "sidebar.newsagency.one"
  },
  {
    to: "/app/dashboard/listing",
    nameId: "sidebar.newsagency.two"
  },
  {
    to: "/app/dashboard/listing",
    nameId: "sidebar.newsagency.three"
  }
];
const FreelancerChild = [
  {
    to: "/app/freelancer",
    nameId: "sidebar.freelancer.one"
  },
  {
    to: "/app/freelancer",
    nameId: "sidebar.freelancer.two"
  },
  {
    to: "/app/freelancer",
    nameId: "sidebar.freelancer.three"
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
          <SingleMenu to="/app/dashboard" nameId="sidebar.allnews" icon="rss" />
          <ParentMenu
            childLinks={AgencyChild}
            parentNameId="sidebar.newsagency"
            parentIcon="group-work"
          />
          <ParentMenu
            childLinks={FreelancerChild}
            parentNameId="sidebar.freelancer"
            parentIcon="account-o"
          />
          <SingleMenu
            to="/app/dashboard"
            nameId="sidebar.onateam"
            icon="account-box-phone"
          />
          <SingleMenu
            to="/app/dashboard"
            nameId="sidebar.government"
            icon="city-alt"
          />
          <SingleMenu
            to="/app/mail-redux"
            nameId="sidebar.inbox"
            icon="email"
          />
          <SingleMenu
            to="/app/dashboard"
            nameId="sidebar.sentitems"
            icon="arrow-right-top"
          />
          <SingleMenu
            to="/app/dashboard"
            nameId="sidebar.chat"
            icon="comment"
          />
        </ul>
      </CustomScrollbars>
    );
  }
}

export default withRouter(SidenavContent);
