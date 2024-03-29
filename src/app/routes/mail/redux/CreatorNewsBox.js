import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Checkbox from "@material-ui/core/Checkbox";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import folders from "../data/folders";
import filters from "../data/filters";
import labels from "../data/labels";
import options from "../data/options";
import CreatorNews from "components/mail/MailList/CreatorNews";

import ComposeMail from "components/mail/Compose/index";
import AppModuleHeader from "components/AppModuleHeader/index";
import {
  fetchMails,
  getAllMail,
  getImportantMail,
  getMailNavFilters,
  getMailNavLabels,
  getNavFolders,
  getReadMail,
  getStarredMail,
  getUnimportantMail,
  getUnreadMail,
  getUnselectedAllMail,
  getUnStarredMail,
  handleMailRequestClose,
  hideMailLoader,
  onAllMailSelect,
  onComposeMail,
  onDeleteMail,
  onFolderMenuItemSelect,
  onFolderSelect,
  onImportantSelect,
  onMailChecked,
  onMailLabelMenuItemSelect,
  onMailLabelSelect,
  onMailOptionMenuSelect,
  onMailSelect,
  onMailSend,
  onMailToggleDrawer,
  onOptionMenuItemSelect,
  onSearchMail,
  onStartSelect,
  setCurrentMailNull,
  updateMailSearch
} from "actions/Mail";
import IntlMessages from "util/IntlMessages";
import CustomScrollbars from "util/CustomScrollbars";
import DatePickers from "../../components/routes/date/DatePickers";
import NewsDetail from "../../../../components/mail/MailDetail/NewsDetail";

class CreatorNewsBox extends Component {
  MailSideBar = () => {
    return (
      <div className="module-side">
        <div className="module-side-header">
          <div className="module-logo">
            <i className="zmdi zmdi-email mr-4" />
            <span>
              <IntlMessages id="newsbox" />
            </span>
          </div>
        </div>

        <div className="module-side-content">
          <CustomScrollbars
            className="module-side-scroll scrollbar"
            style={{
              height:
                this.props.width >= 1200
                  ? "calc(100vh - 200px)"
                  : "calc(100vh - 80px)"
            }}
          >
            <div className="module-add-task">
              <Button
                variant="contained"
                color="primary"
                className="btn-block"
                onClick={() => {
                  this.props.onComposeMail();
                }}
              >
                <i className="zmdi zmdi-edit mr-3" />
                <IntlMessages id="mail.compose" />{" "}
              </Button>
            </div>

            <ul className="module-nav">
              {this.getNavFolders()}
              {/* 
            <li className="module-nav-label">
              <IntlMessages id="mail.filters"/>
            </li>

            {this.getNavFilters()} */}

              <li className="module-nav-label">
                <IntlMessages id="mail.labels" />
              </li>

              {this.getNavLabels()}
            </ul>
          </CustomScrollbars>
        </div>
      </div>
    );
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  onDeleteMail = () => {
    this.props.onDeleteMail();
  };
  getNavFolders = () => {
    return folders.map((folder, index) => (
      <li
        key={index}
        onClick={() => {
          this.props.getNavFolders(folder);
          setTimeout(() => {
            this.props.hideMailLoader();
          }, 1500);
        }}
      >
        <span
          className={`jr-link ${
            this.props.selectedFolder === folder.id ? "active" : ""
          }`}
        >
          <i className={`zmdi zmdi-${folder.icon}`} />
          <span>{folder.title}</span>
        </span>
      </li>
    ));
  };
  onFolderMenuItemSelect = folderId => {
    this.props.handleMailRequestClose();
    this.props.onFolderMenuItemSelect(folderId);
  };
  onLabelMenuItemSelect = label => {
    this.props.handleMailRequestClose();
    this.props.onMailLabelMenuItemSelect(label);
  };
  handleRequestClose = () => {
    this.props.handleMailRequestClose();
  };
  getNavFilters = () => {
    return filters.map((filter, index) => (
      <li
        key={index}
        onClick={() => {
          this.props.getMailNavFilters(filter);
          setTimeout(() => {
            this.props.hideMailLoader();
          }, 1500);
        }}
      >
        <span className="jr-link">
          <i className={`zmdi zmdi-${filter.icon}`} />
          <span>{filter.title}</span>
        </span>
      </li>
    ));
  };

  onFolderSelect = event => {
    this.props.onFolderSelect();
    this.setState({
      anchorEl: event.currentTarget
    });
  };
  onLabelSelect = event => {
    this.props.onMailLabelSelect();
    this.setState({
      anchorEl: event.currentTarget
    });
  };
  onOptionMenuSelect = event => {
    this.props.onMailOptionMenuSelect();
    this.setState({
      anchorEl: event.currentTarget
    });
  };
  onOptionMenuItemSelect = option => {
    switch (option.title) {
      case "All":
        this.props.handleMailRequestClose();
        this.props.getAllMail();
        break;
      case "None":
        this.props.handleMailRequestClose();
        this.props.getUnselectedAllMail();
        break;
      case "Read":
        this.props.handleMailRequestClose();
        this.props.getReadMail();
        break;
      case "Unread":
        this.props.handleMailRequestClose();
        this.props.getUnreadMail();
        break;
      case "Starred":
        this.props.handleMailRequestClose();
        this.props.getStarredMail();
        break;
      case "Unstarred":
        this.props.handleMailRequestClose();
        this.props.getUnStarredMail();
        break;
      case "Important":
        this.props.handleMailRequestClose();
        this.props.getImportantMail();
        break;
      case "Unimportant":
        this.props.handleMailRequestClose();
        this.props.getUnimportantMail();
        break;
      default:
        this.props.handleMailRequestClose();
        this.props.getAllMail();
    }
  };
  getAllMail = () => {
    this.props.getAllMail();
  };
  getUnselectedAllMail = () => {
    this.props.getUnselectedAllMail();
  };
  getReadMail = () => {
    this.props.getReadMail();
  };
  getUnreadMail = () => {
    this.props.getUnreadMail();
  };
  getStarredMail = () => {
    this.props.getStarredMail();
  };
  getUnStarredMail = () => {
    this.props.getUnStarredMail();
  };
  getImportantMail = () => {
    this.props.getImportantMail();
  };
  getUnimportantMail = () => {
    this.props.getUnimportantMail();
  };
  getNavLabels = () => {
    return labels.map((label, index) => (
      <li
        key={index}
        onClick={() => {
          this.props.getMailNavLabels(label);
          setTimeout(() => {
            this.props.hideMailLoader();
          }, 1500);
        }}
      >
        <span className="jr-link">
          <i className={`zmdi zmdi-label-alt text-${label.color}`} />
          {/* <span>{label.title}</span> */}
        </span>
      </li>
    ));
  };
  searchMail = searchText => {
    this.props.onSearchMail(searchText);
  };
  displayMail = (currentMail, folderMails, noContentFoundMessage) => {
    return (
      <div className="module-box-column">
        {currentMail === null ? (
          folderMails.length === 0 ? (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                height:
                  this.props.width >= 1200
                    ? "calc(100vh - 259px)"
                    : "calc(100vh - 238px)"
              }}
            >
              {noContentFoundMessage}
            </div>
          ) : (
            <CreatorNews
              mails={folderMails}
              onStartSelect={this.onStartSelect.bind(this)}
              onMailSelect={this.onMailSelect.bind(this)}
              width={this.props.width}
              onMailChecked={this.onMailChecked.bind(this)}
            />
          )
        ) : (
          <NewsDetail
            mail={currentMail}
            onStartSelect={this.onStartSelect.bind(this)}
            width={this.props.width}
            onImportantSelect={this.onImportantSelect.bind(this)}
          />
        )}
      </div>
    );
  };
  getMailActions = () => {
    return (
      <div>
        <IconButton
          onClick={this.onFolderSelect.bind(this)}
          className="icon-btn"
        >
          <i className="zmdi zmdi-folder" />
        </IconButton>

        <IconButton onClick={this.onDeleteMail.bind(this)} className="icon-btn">
          <i className="zmdi zmdi-delete" />
        </IconButton>

        <IconButton
          onClick={this.onLabelSelect.bind(this)}
          className="icon-btn"
        >
          <i className="zmdi zmdi-label-alt" />
        </IconButton>
      </div>
    );
  };

  constructor() {
    super();
    this.state = {
      anchorEl: null
    };
  }

  componentWillMount() {
    this.props.fetchMails();
  }

  onMailChecked(data) {
    this.props.onMailChecked(data);
  }

  onAllMailSelect() {
    const selectAll = this.props.selectedMails <= this.props.folderMails.length;
    if (selectAll) {
      this.getAllMail();
    } else {
      this.getUnselectedAllMail();
    }
  }

  onStartSelect(data) {
    this.props.onStartSelect(data);
  }

  onImportantSelect(data) {
    this.props.onImportantSelect(data);
  }

  onMailSend(data) {
    this.props.onMailSend(data);
  }

  onMailSelect(mail) {
    this.props.onMailSelect(mail);
    setTimeout(() => {
      this.props.hideMailLoader();
    }, 1500);
  }

  updateSearch(evt) {
    this.props.updateMailSearch(evt.target.value);
    this.props.onSearchMail(evt.target.value);
  }

  onToggleDrawer() {
    this.props.onMailToggleDrawer();
  }

  render() {
    const {
      selectedMails,
      loader,
      currentMail,
      folderMails,
      composeMail,
      user,
      alertMessage,
      showMessage,
      noContentFoundMessage
    } = this.props;
    return (
      <div className="app-wrapper">
        <div className="animated slideInUpTiny animation-duration-3">
          <div className="app-module">
            <div className="d-block d-xl-none">
              <Drawer
                open={this.props.drawerState}
                onClose={this.onToggleDrawer.bind(this)}
              >
                {this.MailSideBar()}
              </Drawer>
            </div>
            <div className="app-module-sidenav d-none d-xl-flex">
              {this.MailSideBar()}
            </div>

            <div className="module-box">
              <div className="module-box-header">
                <IconButton
                  className="drawer-btn d-block d-xl-none"
                  aria-label="Menu"
                  onClick={this.onToggleDrawer.bind(this)}
                >
                  <i className="zmdi zmdi-menu" />
                </IconButton>
                <AppModuleHeader
                  placeholder="Search News"
                  user={this.props.user}
                  onChange={this.updateSearch.bind(this)}
                  value={this.props.searchMail}
                />
              </div>

              <div className="module-box-content">
                <div className="module-box-topbar">
                  {this.props.currentMail === null ? (
                    <div className="d-flex">
                      <Checkbox
                        color="primary"
                        indeterminate={
                          selectedMails > 0 &&
                          selectedMails < folderMails.length
                        }
                        checked={selectedMails > 0}
                        onChange={this.onAllMailSelect.bind(this)}
                        value="SelectMail"
                      />

                      <div
                        className="d-flex align-items-center"
                        onClick={this.onOptionMenuSelect.bind(this)}
                      >
                        <span className="px-2"> {this.props.optionName}</span>
                        <IconButton className="icon-btn-sm">
                          <i className="zmdi zmdi-caret-down" />
                        </IconButton>
                      </div>
                      <div style={{ display: "inherit" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            margin: "0 20px"
                          }}
                        >
                          From :
                        </div>
                        <DatePickers />{" "}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            margin: "0 20px"
                          }}
                        >
                          - To
                        </div>{" "}
                        <DatePickers />
                        <div style={{ display: "flex", margin: "-16px 20px" }}>
                          <FormControl
                            className="mb-2"
                            style={{
                              width: "100px"
                            }}
                          >
                            <InputLabel htmlFor="age-simple">Label</InputLabel>
                            <Select
                              value={this.state.age}
                              onChange={this.handleChange("age")}
                              input={<Input id="ageSimple1" />}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              {labels.map(e => (
                                <MenuItem value={e.title} key={e.title}>
                                  {e.title}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <IconButton
                      className="icon-btn"
                      onClick={() => {
                        this.props.setCurrentMailNull();
                      }}
                    >
                      <i className="zmdi zmdi-arrow-back" />
                    </IconButton>
                  )}

                  {selectedMails > 0 && this.getMailActions()}

                  <Menu
                    id="option-menu"
                    anchorEl={this.state.anchorEl}
                    open={this.props.optionMenuState}
                    onClose={this.handleRequestClose}
                    MenuListProps={{
                      style: {
                        width: 150
                      }
                    }}
                  >
                    {options.map(option => (
                      <MenuItem
                        key={option.title}
                        onClick={this.onOptionMenuItemSelect.bind(this, option)}
                      >
                        {option.title}
                      </MenuItem>
                    ))}
                  </Menu>

                  <Menu
                    id="folder-menu"
                    anchorEl={this.state.anchorEl}
                    open={this.props.folderMenuState}
                    onClose={this.handleRequestClose}
                    MenuListProps={{
                      style: {
                        width: 150
                      }
                    }}
                  >
                    {folders.map(folder => (
                      <MenuItem
                        key={folder.id}
                        onClick={this.onFolderMenuItemSelect.bind(
                          this,
                          folder.id
                        )}
                      >
                        {folder.title}
                      </MenuItem>
                    ))}
                  </Menu>
                  <Menu
                    id="label-menu"
                    anchorEl={this.state.anchorEl}
                    open={this.props.labelMenuState}
                    onClose={this.handleRequestClose}
                    MenuListProps={{
                      style: {
                        width: 150
                      }
                    }}
                  >
                    {labels.map(label => (
                      <MenuItem
                        key={label.id}
                        onClick={this.onLabelMenuItemSelect.bind(this, label)}
                      >
                        {label.title}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>

                {loader ? (
                  <div
                    className="loader-view"
                    style={{
                      height:
                        this.props.width >= 1200
                          ? "calc(100vh - 259px)"
                          : "calc(100vh - 238px)"
                    }}
                  >
                    <CircularProgress />
                  </div>
                ) : (
                  this.displayMail(
                    currentMail,
                    folderMails,
                    noContentFoundMessage
                  )
                )}

                <ComposeMail
                  open={composeMail}
                  user={user}
                  onClose={this.handleRequestClose.bind(this)}
                  onMailSend={this.onMailSend.bind(this)}
                />
              </div>
            </div>
          </div>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={showMessage}
            autoHideDuration={3000}
            onClose={this.handleRequestClose}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            message={<span id="message-id">{alertMessage}</span>}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mail, settings }) => {
  const { width } = settings;
  const {
    searchMail,
    noContentFoundMessage,
    alertMessage,
    showMessage,
    drawerState,
    anchorEl,
    allMail,
    optionName,
    loader,
    currentMail,
    user,
    selectedMails,
    selectedFolder,
    composeMail,
    labelMenuState,
    folderMenuState,
    optionMenuState,
    folderMails
  } = mail;

  return {
    width,
    searchMail,
    noContentFoundMessage,
    alertMessage,
    showMessage,
    drawerState,
    anchorEl,
    allMail,
    optionName,
    loader,
    currentMail,
    user,
    selectedMails,
    selectedFolder,
    composeMail,
    labelMenuState,
    folderMenuState,
    optionMenuState,
    folderMails
  };
};

export default connect(
  mapStateToProps,
  {
    getAllMail,
    fetchMails,
    getImportantMail,
    getMailNavFilters,
    getMailNavLabels,
    getNavFolders,
    getReadMail,
    getStarredMail,
    getUnimportantMail,
    getUnreadMail,
    getUnselectedAllMail,
    getUnStarredMail,
    handleMailRequestClose,
    hideMailLoader,
    onAllMailSelect,
    onComposeMail,
    onDeleteMail,
    onFolderMenuItemSelect,
    onFolderSelect,
    onImportantSelect,
    onMailChecked,
    onMailLabelMenuItemSelect,
    onMailLabelSelect,
    onMailOptionMenuSelect,
    onMailSelect,
    onMailSend,
    onMailToggleDrawer,
    onOptionMenuItemSelect,
    onSearchMail,
    onStartSelect,
    setCurrentMailNull,
    updateMailSearch
  }
)(CreatorNewsBox);
