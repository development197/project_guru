import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import OnceHeader from "../OncePages/OnceHeader";
import Axios from "axios";
import { setUserId } from "firebase/analytics";

const Permission = () => {
  const [inactive, setInactive] = useState(false);
  const [userList, setUserList] = useState([]);
  const [languagelist, setLanguagelist] = useState([]);
  const [userId, setUserId] = useState("");

  const [waspChecked, setWaspChecked] = useState();
  const [taskADChecked, setTaskADChecked] = useState();
  const [taskATChecked, setTaskATChecked] = useState();
  const [taskAPChecked, setTaskAPChecked] = useState();
  const [tactChecked, setTactChecked] = useState();
  const [searchTactChecked, setSearchTactChecked] = useState();
  const [importCSVChecked, setImportCSVChecked] = useState();
  const [exportCSVChecked, setExportCSVChecked] = useState();
  const [addTactChecked, setAddTactChecked] = useState();
  const [costChecked, setCostChecked] = useState();
  const [spCostChecked, setSpCostChecked] = useState();
  const [checkerChecked, setCheckerChecked] = useState();
  const [recheckerChecked, setRecheckerChecked] = useState();
  const [onceChecked, setOnceChecked] = useState();
  const [bossChecked, setBossChecked] = useState();
  const [ourCompanyChecked, setOurCompanyChecked] = useState();
  const [usersDirectoryChecked, setUsersDirectoryChecked] = useState();
  const [staffMailerChecked, setStaffMailerChecked] = useState();
  const [tactWhiteChecked, setTactWhiteChecked] = useState();
  const [exportPriceListChecked, setExportPriceListChecked] = useState();
  const [archiveChecked, setArchiveChecked] = useState();
  const [tactOtherTaskChecked, setTactOtherTaskChecked] = useState();
  const [allowEditChecker, setAllowEditChecker] = useState();
  const [allowEditRechecker, setAllowEditRechecker] = useState();
  const [allowAddOnceChecked, setAllowAddOnceChecked] = useState();
  const [editTactChecked, setEditTactChecked] = useState();
  const [showInWaspTactChecked, setShowInWaspTactChecked] = useState();
  const [editSpCostChecked, setEditSpCostChecked] = useState();
  const [allowEditOnceChecked, setAllowEditOnceChecked] = useState();
  const [createSellingSpCostChecked, setCreateSellingSpCostChecked] =
    useState();
  const [allowDeleteOnceChecked, setAllowDeleteOnceChecked] = useState();
  const [importExportChecked, setImportExportChecked] = useState();
  const [deleteLanguagePairSpCostChecked, setDeleteLanguagePairSpCostChecked] =
    useState();
  const [sendMaileRsSMAChecked, setSendMaileRsSMAChecked] = useState();
  const [tactAddWorkInfoChecked, setTactAddWorkInfoChecked] = useState();
  const [clearCompleteListSpCostChecked, setClearCompleteListSpCostChecked] =
    useState();
  const [sendAlertsSmaChecked, setSendAlertsSmaChecked] = useState();
  const [sendBackrestSmaChecked, setSendBackrestSmaChecked] = useState();
  const [sendReportsSmaChecked, setSendReportsSmaChecked] = useState();
  const [waspQuickAddClientChecked, setWaspQuickAddClientChecked] = useState();
  const [allowEditListChecked, setAllowEditListChecked] = useState();
  const [onceCountryChecked, setOnceCountryChecked] = useState();
  const [onceLanguageChecked, setOnceLanguageChecked] = useState();
  const [onceCurrencyChecked, setOnceCurrencyChecked] = useState();
  const [onceMeasureChecked, setOnceMeasureChecked] = useState();
  const [onceWorkTypeChecked, setOnceWorkTypeChecked] = useState();
  const [onceCategoryChecked, setOnceCategoryChecked] = useState();
  const [onceStatusChecked, setOnceStatusChecked] = useState();
  const [onceCodeChecked, setOnceCodeChecked] = useState();
  const [onceOutGoingMailChecked, setOnceOutGoingMailChecked] = useState();
  const [onceOurCompanyChecked, setOnceOurCompanyChecked] = useState();
  const [onceDomainChecked, setOnceDomainChecked] = useState();
  const [
    allowWorkZoneTactTranslatorChecked,
    setAllowWorkZoneTactTranslatorChecked,
  ] = useState();
  const [allowAsQualityCheckerChecked, setAllowAsQualityCheckerChecked] =
    useState();
  const [taskChecked, setTaskChecked] = useState();
  const [allowDeleteWaspClientChecked, setAllowDeleteWaspClientChecked] =
    useState();
  const [allowDeleteTactClientChecked, setAllowDeleteTactClientChecked] =
    useState();
  const [allowEditCountryChecked, setAllowEditCountryChecked] = useState();
  const [allowDeleteCountryChecked, setAllowDeleteCountryChecked] = useState();
  const [allowEditLanguageChecked, setAllowEditLanguageChecked] = useState();
  const [allowDeleteLanguageChecked, setAllowDeleteLanguageChecked] =
    useState();
  const [allowEditCurrencyChecked, setAllowEditCurrencyChecked] = useState();
  const [allowDeleteCurrencyChecked, setAllowDeleteCurrencyChecked] =
    useState();
  const [allowEditMeasureChecked, setAllowEditMeasureChecked] = useState();
  const [allowDeleteMeasureChecked, setAllowDeleteMeasureChecked] = useState();
  const [allowEditWorkTypeChecked, setAllowEditWorkTypeChecked] = useState();
  const [allowDeleteWorkTypeChecked, setAllowDeleteWorkTypeChecked] =
    useState();
  const [allowEditCategoryChecked, setAllowEditCategoryChecked] = useState();
  const [allowDeleteCategoryChecked, setAllowDeleteCategoryChecked] =
    useState();
  const [allowEditStatusChecked, setAllowEditStatusChecked] = useState();
  const [allowDeleteStatusChecked, setAllowDeleteStatusChecked] = useState();
  const [allowEditCodeChecked, setAllowEditCodeChecked] = useState();
  const [allowDeleteCodeChecked, setAllowDeleteCodeChecked] = useState();

  //const [selectedUser, setSelectedUser] = useState("");

  const getUsers = () => {
    Axios.get("http://dithemes.in/users").then((response) => {
      setUserList(response.data);
    });
  };

  // console.log(userId);

  const getPermissions = () => {
    Axios.post("http://dithemes.in/getdata", {
      userId: userId,
    }).then((response) => {
      let inp = document.querySelectorAll("#wasp");
      inp.forEach((val) => {
        if (response.data[0].wasp === "Y") {
          console.log("wasp");
          setWaspChecked(true);
        } else {
          console.log("none");
          setWaspChecked(false);
        }

        if (response.data[0].add_tact === "Y") {
          console.log("add_tact");
          setAddTactChecked(true);
        } else {
          console.log("none");
          setAddTactChecked(false);
        }

        if (response.data[0].search_tact === "Y") {
          console.log("search_tact");
          setSearchTactChecked(true);
        } else {
          console.log("none");
          setSearchTactChecked(false);
        }

        if (response.data[0].task_AT === "Y") {
          console.log("task_AT");
          setTaskATChecked(true);
        } else {
          console.log("none");
          setTaskATChecked(false);
        }
      });
    });
  };

  const getLanguageList = () => {
    Axios.get("http://dithemes.in/languageDropD").then((response) => {
      setLanguagelist(response.data);
    });
  };

  const onLoad = () => {
    getUsers();
    getLanguageList();
  };

  return (
    <div className={`con ${inactive ? "con-act" : ""}`} onLoad={onLoad}>
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <OnceHeader heading="Permission" />

      <div className="inner-container">
        <div className="permission-form">
          <form>
            <div className="user">
              <label className="user-label">Users</label>
              <select
                id="country"
                name="country"
                className="user-select"
                onClick={getPermissions}
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
              >
                <option>Select User</option>
                {userList.map((val, key) => {
                  return <option value={val.user_id}>{val.user_email}</option>;
                })}
              </select>
            </div>

            <div class="angry-grid user-checkbox">
              <div id="item-0">
                <div className="wasp-check chk">
                  <ul>
                    <p>
                      {" "}
                      <input
                        className="permission-check"
                        type="checkbox"
                        name="allselect"
                        defaultChecked={waspChecked}
                        id="permission_value"
                      />
                      Wasp
                    </p>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        name="allselect"
                        defaultChecked={waspQuickAddClientChecked}
                        id="permission_value"
                      />
                      Quick Add Client
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        name="allselect"
                        defaultChecked={tactWhiteChecked}
                        id="permission_value"
                      />
                      Tact Translator - White Zone
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        name="allselect"
                        defaultChecked={allowWorkZoneTactTranslatorChecked}
                        id="permission_value"
                      />
                      Allow Work Zone For Tack Translator
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        name="allselect"
                        defaultChecked={allowAsQualityCheckerChecked}
                        id="permission_value"
                      />
                      Allow As Quality Checker
                    </li>
                  </ul>
                </div>
              </div>

              <div id="item-1">
                <div className="cost-check c-chk">
                  <ul>
                    <p>
                      {" "}
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={costChecked}
                        id="permission_value"
                      />
                      Cost
                    </p>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={spCostChecked}
                        id="permission_value"
                      />
                      Allow view SP & Cost
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={editSpCostChecked}
                        id="permission_value"
                      />
                      Allow edit SP & Cost
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={deleteLanguagePairSpCostChecked}
                        id="permission_value"
                      />
                      Delete Language Pair{" "}
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={createSellingSpCostChecked}
                        id="permission_value"
                      />
                      Allow create selling
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={exportPriceListChecked}
                        id="permission_value"
                      />
                      Allow export price list
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={clearCompleteListSpCostChecked}
                        id="permission_value"
                      />
                      Clear complete list
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={checkerChecked}
                        id="permission_value"
                      />
                      Checker
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={allowEditChecker}
                        id="permission_value"
                      />
                      Allow edit checker
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={recheckerChecked}
                        id="permission_value"
                      />
                      Re Checker
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={allowEditRechecker}
                        id="permission_value"
                      />
                      Allow edit rechecker
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={archiveChecked}
                        id="permission_value"
                      />
                      Archive
                    </li>
                  </ul>
                </div>
              </div>

              <div id="item-2">
                <div className="once-check chk">
                  <ul>
                    <p>
                      {" "}
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={onceChecked}
                        id="permission_value"
                      />
                      Once
                    </p>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={allowEditOnceChecked}
                        id="permission_value"
                      />
                      Allow Edit Once
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={allowDeleteOnceChecked}
                        id="permission_value"
                      />
                      Allow Delete Once
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={onceCountryChecked}
                        id="permission_value"
                      />
                      Country
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowEditCountryChecked}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowDeleteCountryChecked}
                            id="permission_value"
                          />
                          Allow Delete{" "}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={onceLanguageChecked}
                        id="permission_value"
                      />
                      Languages
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowEditLanguageChecked}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowDeleteLanguageChecked}
                            id="permission_value"
                          />
                          Allow Delete{" "}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={onceMeasureChecked}
                        id="permission_value"
                      />
                      Measure
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowEditMeasureChecked}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowDeleteMeasureChecked}
                            id="permission_value"
                          />
                          Allow Delete{" "}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={onceWorkTypeChecked}
                        id="permission_value"
                      />
                      Work Type
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowEditWorkTypeChecked}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowDeleteWorkTypeChecked}
                            id="permission_value"
                          />
                          Allow Delete{" "}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={onceCategoryChecked}
                        id="permission_value"
                      />
                      Category
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowEditCategoryChecked}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowDeleteCategoryChecked}
                            id="permission_value"
                          />
                          Allow Delete{" "}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={onceStatusChecked}
                        id="permission_value"
                      />
                      Status
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowEditStatusChecked}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowDeleteStatusChecked}
                            id="permission_value"
                          />
                          Allow Delete{" "}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={onceCodeChecked}
                        id="permission_value"
                      />
                      Codes
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowEditCodeChecked}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowDeleteCodeChecked}
                            id="permission_value"
                          />
                          Allow Delete{" "}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={onceOutGoingMailChecked}
                        id="permission_value"
                      />
                      Outgoing Email Master
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowEditOutMailMaster}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowDeleteOutMailMaster}
                            id="permission_value"
                          />
                          Allow Delete{" "}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={onceOurCompanyChecked}
                        id="permission_value"
                      />
                      Our Company
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowEditOurCompany}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowDeleteOurCompany}
                            id="permission_value"
                          />
                          Allow Delete{" "}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={onceDomainChecked}
                        id="permission_value"
                      />
                      Domain
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowEditDomain}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowDeleteDomain}
                            id="permission_value"
                          />
                          Allow Delete{" "}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="item-3">
                <div className="task-check chk">
                  <ul>
                    <p>
                      {" "}
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={taskChecked}
                        id="permission_value"
                      />
                      Task
                    </p>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={tactOtherTaskChecked}
                        id="permission_value"
                      />
                      Task - View Other Task
                    </li>
                    <li>
                      <input className="permission-check" type="checkbox" />
                      Approval for client
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={taskATChecked}
                        id="permission_value"
                      />
                      Approval for Translator{" "}
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={taskAPChecked}
                        id="permission_value"
                      />
                      Approval for Project
                    </li>
                  </ul>
                </div>
              </div>

              <div id="item-4">
                <div className="tact-check chk">
                  <ul>
                    <p>
                      {" "}
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={tactChecked}
                        id="permission_value"
                      />
                      Tact
                    </p>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={importExportChecked}
                        id="permission_value"
                      />
                      Import & Export Tact
                    </li>
                    <li>
                      <input className="permission-check" type="checkbox" />
                      Allow Edit List
                    </li>
                    <li>
                      <input className="permission-check" type="checkbox" />
                      Allow Tact Import
                    </li>
                    <li>
                      <input className="permission-check" type="checkbox" />
                      Allow Tact Export{" "}
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={searchTactChecked}
                        id="permission_value"
                      />
                      Search Tact
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={addTactChecked}
                        id="permission_value"
                      />
                      Add Tact
                    </li>
                    <li>
                      <input className="permission-check" type="checkbox" />
                      Edit Tact
                    </li>
                    <li>
                      <input className="permission-check" type="checkbox" />
                      Allow Work Info
                    </li>
                    <li>
                      <input className="permission-check" type="checkbox" />
                      Show In Wasp
                    </li>
                    <li>
                      <input className="permission-check" type="checkbox" />
                      Allow Delete Wasp Client
                    </li>
                    <li>
                      <input className="permission-check" type="checkbox" />
                      Allow Delete Tact Client
                    </li>
                  </ul>
                </div>
              </div>

              <div id="item-5">
                <div className="boss-check chk">
                  <ul>
                    <p>
                      {" "}
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={bossChecked}
                        id="permission_value"
                      />
                      Boss
                    </p>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={usersDirectoryChecked}
                        id="permission_value"
                      />
                      User Directory
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowEditUsersDirectory}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowDeleteUsersDirectory}
                            id="permission_value"
                          />
                          Allow Delete{" "}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={ourCompanyChecked}
                        id="permission_value"
                      />
                      Our Company & Stationary
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={
                              allowEditOurCompanyStationaryChecked
                            }
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            // defaultChecked={allowDeleteOurCompany}
                            id="permission_value"
                          />
                          Allow Delete{" "}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={staffMailerChecked}
                        id="permission_value"
                      />
                      Staff Mailers & Alert
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input className="permission-check" type="checkbox" />
                          Allow Delete{" "}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <input className="permission-check" type="checkbox" />
                      Permission
                      <ul>
                        <li>
                          <input className="permission-check" type="checkbox" />
                          Allow Edit{" "}
                          <input className="permission-check" type="checkbox" />
                          Allow Delete{" "}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <input className="permission-check" type="checkbox" />
                      Reports
                      <ul>
                        <li>
                          <input className="permission-check" type="checkbox" />
                          Allow Edit{" "}
                          <input className="permission-check" type="checkbox" />
                          Allow Delete{" "}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <input className="permission-check" type="checkbox" />
                      Backup & Restore
                      <ul>
                        <li>
                          <input className="permission-check" type="checkbox" />
                          Allow Edit{" "}
                          <input className="permission-check" type="checkbox" />
                          Allow Delete{" "}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={onceCodeChecked}
                        id="permission_value"
                      />
                      Codes
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowEditCodeChecked}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowDeleteCodeChecked}
                            id="permission_value"
                          />
                          Allow Delete{" "}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={onceOutGoingMailChecked}
                        id="permission_value"
                      />
                      Outgoing Email Master
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowEditOutMailMaster}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            id="permission_value"
                            defaultChecked={allowDeleteOutMailMaster}
                          />
                          Allow Delete{" "}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={onceOurCompanyChecked}
                        id="permission_value"
                      />
                      Our Company
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowEditOurCompany}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowDeleteOurCompany}
                            id="permission_value"
                          />
                          Allow Delete{" "}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        defaultChecked={onceDomainChecked}
                        id="permission_value"
                      />
                      Domain
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowEditDomain}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            defaultChecked={allowDeleteDomain}
                            id="permission_value"
                          />
                          Allow Delete{" "}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            <div className="user-checkbox">
              <div className="cost-check lang-check">
                <p>Language</p>
                <ul>
                  {languagelist.map((val, key) => {
                    return (
                      <>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            checked
                          />
                          {val.language_name}
                        </li>
                      </>
                    );
                  })}
                </ul>
                <div className="staff-mailer-btn">
                  <button className="staff-btn">Save</button>
                </div>
              </div>
              <div className="alias f-b user-cc">
                <label>User CC(Email id)</label>
                <input type="text" placeholder="User CC(Email id)" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Permission;

// ----------------------- [extra part]

// <div className="wasp-check chk">
//                 <ul>
//                   <p>
//                     {" "}
//                     <input
//                       className="permission-check"
//                       type="checkbox"
//                       name="allselect"
//                       defaultChecked={waspChecked}
//                       id="wasp"
//                     />
//                     Wasp
//                   </p>
//                   <li>
//                     <input
//                       className="permission-check"
//                       type="checkbox"
//                       name="allselect"
//                       defaultChecked={waspChecked}
//                       //id="wasp"
//                     />
//                     Quick Add Client
//                   </li>
//                   <li>
//                     <input
//                       className="permission-check"
//                       type="checkbox"
//                       name="allselect"
//                       defaultChecked={waspChecked}
//                       //id="wasp"
//                     />
//                     Tact Translator - White Zone
//                   </li>
//                   <li>
//                     <input
//                       className="permission-check"
//                       type="checkbox"
//                       name="allselect"
//                       defaultChecked={waspChecked}
//                       //id="wasp"
//                     />
//                     Allow Work Zone For Tack Translator
//                   </li>
//                   <li>
//                     <input
//                       className="permission-check"
//                       type="checkbox"
//                       name="allselect"
//                       defaultChecked={waspChecked}
//                       //id="wasp"
//                     />
//                     Allow As Quality Checker
//                   </li>
//                 </ul>
//               </div>
//               <div className="cost-check c-chk">
//                 <ul>
//                   <p>
//                     {" "}
//                     <input
//                       className="permission-check"
//                       type="checkbox"
//                       defaultChecked={waspChecked}
//                     />
//                     Cost
//                   </p>
//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Allow view SP & Cost
//                   </li>
//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Allow edit SP & Cost
//                   </li>
//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Delete Language Pair{" "}
//                   </li>
//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Allow create selling
//                   </li>
//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Allow export price list
//                   </li>
//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Clear complete list
//                   </li>
//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Checker
//                   </li>
//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Allow edit checker
//                   </li>
//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Re Checker
//                   </li>
//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Allow edit rechecker
//                   </li>
//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Archive
//                   </li>
//                 </ul>
//               </div>

//               <div className="once-check chk">
//                 <ul>
//                   <p>
//                     {" "}
//                     <input className="permission-check" type="checkbox" />
//                     Once
//                   </p>
//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Allow Edit Once
//                   </li>
//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Allow Delete Once
//                   </li>
//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Country
//                     <ul>
//                       <li>
//                         <input className="permission-check" type="checkbox" />
//                         Allow Edit{" "}
//                         <input className="permission-check" type="checkbox" />
//                         Allow Delete{" "}
//                       </li>
//                     </ul>
//                   </li>

//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Languages
//                     <ul>
//                       <li>
//                         <input className="permission-check" type="checkbox" />
//                         Allow Edit{" "}
//                         <input className="permission-check" type="checkbox" />
//                         Allow Delete{" "}
//                       </li>
//                     </ul>
//                   </li>

//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Measure
//                     <ul>
//                       <li>
//                         <input className="permission-check" type="checkbox" />
//                         Allow Edit{" "}
//                         <input className="permission-check" type="checkbox" />
//                         Allow Delete{" "}
//                       </li>
//                     </ul>
//                   </li>

//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Work Type
//                     <ul>
//                       <li>
//                         <input className="permission-check" type="checkbox" />
//                         Allow Edit{" "}
//                         <input className="permission-check" type="checkbox" />
//                         Allow Delete{" "}
//                       </li>
//                     </ul>
//                   </li>

//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Category
//                     <ul>
//                       <li>
//                         <input className="permission-check" type="checkbox" />
//                         Allow Edit{" "}
//                         <input className="permission-check" type="checkbox" />
//                         Allow Delete{" "}
//                       </li>
//                     </ul>
//                   </li>

//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Status
//                     <ul>
//                       <li>
//                         <input className="permission-check" type="checkbox" />
//                         Allow Edit{" "}
//                         <input className="permission-check" type="checkbox" />
//                         Allow Delete{" "}
//                       </li>
//                     </ul>
//                   </li>

//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Codes
//                     <ul>
//                       <li>
//                         <input className="permission-check" type="checkbox" />
//                         Allow Edit{" "}
//                         <input className="permission-check" type="checkbox" />
//                         Allow Delete{" "}
//                       </li>
//                     </ul>
//                   </li>

//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Outgoing Email Master
//                     <ul>
//                       <li>
//                         <input className="permission-check" type="checkbox" />
//                         Allow Edit{" "}
//                         <input className="permission-check" type="checkbox" />
//                         Allow Delete{" "}
//                       </li>
//                     </ul>
//                   </li>

//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Our Company
//                     <ul>
//                       <li>
//                         <input className="permission-check" type="checkbox" />
//                         Allow Edit{" "}
//                         <input className="permission-check" type="checkbox" />
//                         Allow Delete{" "}
//                       </li>
//                     </ul>
//                   </li>

//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Domain
//                     <ul>
//                       <li>
//                         <input className="permission-check" type="checkbox" />
//                         Allow Edit{" "}
//                         <input className="permission-check" type="checkbox" />
//                         Allow Delete{" "}
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </div>

//               <div className="task-check chk">
//                 <ul>
//                   <p>
//                     {" "}
//                     <input className="permission-check" type="checkbox" />
//                     Task
//                   </p>
//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Task - View Other Task
//                   </li>
//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Approval for client
//                   </li>
//                   <li>
//                     <input
//                       className="permission-check"
//                       type="checkbox"
//                       defaultChecked={taskATChecked}
//                       id="wasp"
//                     />
//                     Approval for Translator{" "}
//                   </li>
//                   <li>
//                     <input
//                       className="permission-check"
//                       type="checkbox"
//                       defaultChecked={taskAPChecked}
//                       id="wasp"
//                     />
//                     Approval for Project
//                   </li>
//                 </ul>
//               </div>

//               <div className="tact-check chk">
//                 <ul>
//                   <p>
//                     {" "}
//                     <input
//                       className="permission-check"
//                       type="checkbox"
//                       defaultChecked={tactChecked}
//                       id="wasp"
//                     />
//                     Tact
//                   </p>
//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Import & Export Tact
//                   </li>
//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Allow Tact Import
//                   </li>
//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Allow Tact Export{" "}
//                   </li>
//                   <li>
//                     <input
//                       className="permission-check"
//                       type="checkbox"
//                       defaultChecked={searchTactChecked}
//                       id="wasp"
//                     />
//                     Search Tact
//                   </li>
//                   <li>
//                     <input
//                       className="permission-check"
//                       type="checkbox"
//                       defaultChecked={addTactChecked}
//                       id="wasp"
//                     />
//                     Add Tact
//                   </li>
//                 </ul>
//               </div>

//               <div className="boss-check chk">
//                 <ul>
//                   <p>
//                     {" "}
//                     <input className="permission-check" type="checkbox" />
//                     Boss
//                   </p>
//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     User Directory
//                     <ul>
//                       <li>
//                         <input className="permission-check" type="checkbox" />
//                         Allow Edit{" "}
//                         <input className="permission-check" type="checkbox" />
//                         Allow Delete{" "}
//                       </li>
//                     </ul>
//                   </li>

//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Our Company & Stationary
//                     <ul>
//                       <li>
//                         <input className="permission-check" type="checkbox" />
//                         Allow Edit{" "}
//                         <input className="permission-check" type="checkbox" />
//                         Allow Delete{" "}
//                       </li>
//                     </ul>
//                   </li>

//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Staff Mailers & Alert
//                     <ul>
//                       <li>
//                         <input className="permission-check" type="checkbox" />
//                         Allow Edit{" "}
//                         <input className="permission-check" type="checkbox" />
//                         Allow Delete{" "}
//                       </li>
//                     </ul>
//                   </li>

//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Permission
//                     <ul>
//                       <li>
//                         <input className="permission-check" type="checkbox" />
//                         Allow Edit{" "}
//                         <input className="permission-check" type="checkbox" />
//                         Allow Delete{" "}
//                       </li>
//                     </ul>
//                   </li>

//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Reports
//                     <ul>
//                       <li>
//                         <input className="permission-check" type="checkbox" />
//                         Allow Edit{" "}
//                         <input className="permission-check" type="checkbox" />
//                         Allow Delete{" "}
//                       </li>
//                     </ul>
//                   </li>

//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Backup & Restore
//                     <ul>
//                       <li>
//                         <input className="permission-check" type="checkbox" />
//                         Allow Edit{" "}
//                         <input className="permission-check" type="checkbox" />
//                         Allow Delete{" "}
//                       </li>
//                     </ul>
//                   </li>

//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Codes
//                     <ul>
//                       <li>
//                         <input className="permission-check" type="checkbox" />
//                         Allow Edit{" "}
//                         <input className="permission-check" type="checkbox" />
//                         Allow Delete{" "}
//                       </li>
//                     </ul>
//                   </li>

//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Outgoing Email Master
//                     <ul>
//                       <li>
//                         <input className="permission-check" type="checkbox" />
//                         Allow Edit{" "}
//                         <input className="permission-check" type="checkbox" />
//                         Allow Delete{" "}
//                       </li>
//                     </ul>
//                   </li>

//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Our Company
//                     <ul>
//                       <li>
//                         <input className="permission-check" type="checkbox" />
//                         Allow Edit{" "}
//                         <input className="permission-check" type="checkbox" />
//                         Allow Delete{" "}
//                       </li>
//                     </ul>
//                   </li>

//                   <li>
//                     <input className="permission-check" type="checkbox" />
//                     Domain
//                     <ul>
//                       <li>
//                         <input className="permission-check" type="checkbox" />
//                         Allow Edit{" "}
//                         <input className="permission-check" type="checkbox" />
//                         Allow Delete{" "}
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </div>
