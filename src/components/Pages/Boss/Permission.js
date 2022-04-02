import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import OnceHeader from "../OncePages/OnceHeader";
import Axios from "axios";

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

  const [allowDeleteOutMailMaster, setAllowDeleteOutMailMaster] = useState();
  const [allowEditOutMailMaster, setAllowEditOutMailMaster] = useState();

  const [allowDeleteOurCompany, setAllowDeleteOurCompany] = useState();
  const [allowEditOurCompany, setAllowEditOurCompany] = useState();

  const [allowDeleteDomain, setAllowDeleteDomain] = useState();
  const [allowEditDomain, setAllowEditDomain] = useState();

  const [languageIgnoreIdChecked, setLanguageIgnoreIdChecked] = useState();
  const [userCcEmailChecked, setUserCcEmailChecked] = useState();

  const [allowDeleteUsersDirectory, setAllowDeleteUsersDirectory] = useState();
  const [allowEditUsersDirectory, setAllowEditUsersDirectory] = useState();

  const [
    allowEditOurCompanyStationaryChecked,
    setAllowEditOurCompanyStationaryChecked,
  ] = useState();
  const [addedByChecked, setAddedByChecked] = useState();
  const [timestampChecked, setTimestampChecked] = useState();

  const [langChecked, setLangChecked] = useState();

  const getUsers = () => {
    Axios.get("http://localhost:3001/users").then((response) => {
      setUserList(response.data);
    });
  };

  const getPermissions = () => {
    Axios.post("http://localhost:3001/get/permissions/data", {
      userId: userId,
    }).then((response) => {
      console.log(response.data[0].once);
      let inp = document.querySelectorAll("#permission_value");
      inp.forEach(() => {
        let searchTact = response.data[0].search_tact;
        if (searchTact === "Y") {
          setSearchTactChecked(true);
        } else {
          setSearchTactChecked(false);
        }

        if (response.data[0].add_tact === "Y") {
          setAddTactChecked(true);
        } else {
          setAddTactChecked(false);
        }

        if (response.data[0].tact === "Y") {
          setTactChecked(true);
        } else {
          setTactChecked(false);
        }

        if (response.data[0].wasp === "Y") {
          setWaspChecked(true);
        } else {
          setWaspChecked(false);
        }

        if (response.data[0].task_AD === "Y") {
          setTaskADChecked(true);
        } else {
          setTaskADChecked(false);
        }

        if (response.data[0].task_AT === "Y") {
          setTaskATChecked(true);
        } else {
          setTaskATChecked(false);
        }

        if (response.data[0].task_AP === "Y") {
          setTaskAPChecked(true);
        } else {
          setTaskAPChecked(false);
        }

        if (response.data[0].import_csv === "Y") {
          setImportCSVChecked(true);
        } else {
          setImportCSVChecked(false);
        }

        if (response.data[0].export_csv === "Y") {
          setExportCSVChecked(true);
        } else {
          setExportCSVChecked(false);
        }

        if (response.data[0].add_tact === "Y") {
          setAddTactChecked(true);
        } else {
          setAddTactChecked(false);
        }

        if (response.data[0].cost === "Y") {
          setCostChecked(true);
        } else {
          setCostChecked(false);
        }

        if (response.data[0].cost === "Y") {
          setSpCostChecked(true);
        } else {
          setSpCostChecked(false);
        }

        if (response.data[0].checker === "Y") {
          setCheckerChecked(true);
        } else {
          setCheckerChecked(false);
        }

        if (response.data[0].rechecker === "Y") {
          setRecheckerChecked(true);
        } else {
          setRecheckerChecked(false);
        }

        if (response.data[0].once === "Y") {
          setOnceChecked(true);
        } else {
          setOnceChecked(false);
        }

        if (response.data[0].boss === "Y") {
          setBossChecked(true);
        } else {
          setBossChecked(false);
        }

        if (response.data[0].our_compnay_stationary === "Y") {
          setOurCompanyChecked(true);
        } else {
          setOurCompanyChecked(false);
        }

        if (response.data[0].users_directory === "Y") {
          setUsersDirectoryChecked(true);
        } else {
          setUsersDirectoryChecked(false);
        }

        if (response.data[0].staff_mailer_alerts === "Y") {
          setStaffMailerChecked(true);
        } else {
          setStaffMailerChecked(false);
        }

        if (response.data[0].tact_white_zone === "Y") {
          setTactWhiteChecked(true);
        } else {
          setTactWhiteChecked(false);
        }

        if (response.data[0].export_price_list_sp_cost === "Y") {
          setExportPriceListChecked(true);
        } else {
          setExportPriceListChecked(false);
        }

        if (response.data[0].archive === "Y") {
          setArchiveChecked(true);
        } else {
          setArchiveChecked(false);
        }

        if (response.data[0].tact_other_task === "Y") {
          setTactOtherTaskChecked(true);
        } else {
          setTactOtherTaskChecked(false);
        }

        if (response.data[0].allow_edit_checker === "Y") {
          setAllowEditChecker(true);
        } else {
          setAllowEditChecker(false);
        }

        if (response.data[0].allow_edit_rechecker === "Y") {
          setAllowEditRechecker(true);
        } else {
          setAllowEditRechecker(false);
        }

        if (response.data[0].allow_add_once === "Y") {
          setAllowAddOnceChecked(true);
        } else {
          setAllowAddOnceChecked(false);
        }

        if (response.data[0].edit_tact === "Y") {
          setEditTactChecked(true);
        } else {
          setEditTactChecked(false);
        }

        if (response.data[0].show_in_wasp_tact === "Y") {
          setShowInWaspTactChecked(true);
        } else {
          setShowInWaspTactChecked(false);
        }

        if (response.data[0].edit_sp_cost === "Y") {
          setEditSpCostChecked(true);
        } else {
          setEditSpCostChecked(false);
        }

        if (response.data[0].allow_edit_once === "Y") {
          setAllowEditOnceChecked(true);
        } else {
          setAllowEditOnceChecked(false);
        }

        if (response.data[0].create_selling_sp_cost === "Y") {
          setCreateSellingSpCostChecked(true);
        } else {
          setCreateSellingSpCostChecked(false);
        }

        if (response.data[0].allow_delete_once === "Y") {
          setAllowDeleteOnceChecked(true);
        } else {
          setAllowDeleteOnceChecked(false);
        }

        if (response.data[0].import_export_tact === "Y") {
          setImportExportChecked(true);
        } else {
          setImportExportChecked(false);
        }

        if (response.data[0].delete_language_pair_sp_cost === "Y") {
          setDeleteLanguagePairSpCostChecked(true);
        } else {
          setDeleteLanguagePairSpCostChecked(false);
        }

        if (response.data[0].send_mailers_sma === "Y") {
          setSendMaileRsSMAChecked(true);
        } else {
          setSendMaileRsSMAChecked(false);
        }

        if (response.data[0].tact_add_work_info === "Y") {
          setTactAddWorkInfoChecked(true);
        } else {
          setTactAddWorkInfoChecked(false);
        }

        if (response.data[0].clear_complete_list_sp_cost === "Y") {
          setClearCompleteListSpCostChecked(true);
        } else {
          setClearCompleteListSpCostChecked(false);
        }

        if (response.data[0].send_alerts_sma === "Y") {
          setSendAlertsSmaChecked(true);
        } else {
          setSendAlertsSmaChecked(false);
        }

        if (response.data[0].send_backrest_sma === "Y") {
          setSendBackrestSmaChecked(true);
        } else {
          setSendBackrestSmaChecked(false);
        }

        if (response.data[0].send_reports_sma === "Y") {
          setSendReportsSmaChecked(true);
        } else {
          setSendReportsSmaChecked(false);
        }

        if (response.data[0].wasp_quick_add_client === "Y") {
          setWaspQuickAddClientChecked(true);
        } else {
          setWaspQuickAddClientChecked(false);
        }

        if (response.data[0].allow_edit_list === "Y") {
          setAllowEditListChecked(true);
        } else {
          setAllowEditListChecked(false);
        }

        if (response.data[0].once_country === "Y") {
          setOnceCountryChecked(true);
        } else {
          setOnceCountryChecked(false);
        }

        if (response.data[0].once_languages === "Y") {
          setOnceLanguageChecked(true);
        } else {
          setOnceLanguageChecked(false);
        }

        if (response.data[0].once_currency === "Y") {
          setOnceCurrencyChecked(true);
        } else {
          setOnceCurrencyChecked(false);
        }

        if (response.data[0].once_measure === "Y") {
          setOnceMeasureChecked(true);
        } else {
          setOnceMeasureChecked(false);
        }

        if (response.data[0].once_work_type === "Y") {
          setOnceWorkTypeChecked(true);
        } else {
          setOnceWorkTypeChecked(false);
        }

        if (response.data[0].once_category === "Y") {
          setOnceCategoryChecked(true);
        } else {
          setOnceCategoryChecked(false);
        }

        if (response.data[0].once_status === "Y") {
          setOnceStatusChecked(true);
        } else {
          setOnceStatusChecked(false);
        }

        if (response.data[0].once_codes === "Y") {
          setOnceCodeChecked(true);
        } else {
          setOnceCodeChecked(false);
        }

        if (response.data[0].once_out_going_email_master === "Y") {
          setOnceOutGoingMailChecked(true);
        } else {
          setOnceOutGoingMailChecked(false);
        }

        if (response.data[0].once_our_company === "Y") {
          setOnceOurCompanyChecked(true);
        } else {
          setOnceOurCompanyChecked(false);
        }

        if (response.data[0].once_domain === "Y") {
          setOnceDomainChecked(true);
        } else {
          setOnceDomainChecked(false);
        }

        if (response.data[0].allow_work_zone_tact_translator === "Y") {
          setAllowWorkZoneTactTranslatorChecked(true);
        } else {
          setAllowWorkZoneTactTranslatorChecked(false);
        }

        if (response.data[0].allow_as_quality_checker === "Y") {
          setAllowAsQualityCheckerChecked(true);
        } else {
          setAllowAsQualityCheckerChecked(false);
        }

        if (response.data[0].task === "Y") {
          setTaskChecked(true);
        } else {
          setTaskChecked(false);
        }

        if (response.data[0].allow_delete_wasp_client === "Y") {
          setAllowDeleteWaspClientChecked(true);
        } else {
          setAllowDeleteWaspClientChecked(false);
        }

        if (response.data[0].allow_delete_tact_client === "Y") {
          setAllowDeleteTactClientChecked(true);
        } else {
          setAllowDeleteTactClientChecked(false);
        }

        if (response.data[0].allow_edit_country === "Y") {
          setAllowEditCountryChecked(true);
        } else {
          setAllowEditCountryChecked(false);
        }

        if (response.data[0].allow_delete_country === "Y") {
          setAllowDeleteCountryChecked(true);
        } else {
          setAllowDeleteCountryChecked(false);
        }

        if (response.data[0].allow_delete_languages === "Y") {
          setAllowDeleteLanguageChecked(true);
        } else {
          setAllowDeleteLanguageChecked(false);
        }

        if (response.data[0].allow_edit_languages === "Y") {
          setAllowEditLanguageChecked(true);
        } else {
          setAllowEditLanguageChecked(false);
        }

        if (response.data[0].allow_delete_currency === "Y") {
          setAllowDeleteCurrencyChecked(true);
        } else {
          setAllowDeleteCurrencyChecked(false);
        }

        if (response.data[0].allow_edit_currency === "Y") {
          setAllowEditCurrencyChecked(true);
        } else {
          setAllowEditCurrencyChecked(false);
        }

        if (response.data[0].allow_delete_measures === "Y") {
          setAllowDeleteMeasureChecked(true);
        } else {
          setAllowDeleteMeasureChecked(false);
        }

        if (response.data[0].allow_edit_measure === "Y") {
          setAllowEditMeasureChecked(true);
        } else {
          setAllowEditMeasureChecked(false);
        }

        if (response.data[0].allow_delete_work_type === "Y") {
          setAllowDeleteWorkTypeChecked(true);
        } else {
          setAllowDeleteWorkTypeChecked(false);
        }

        if (response.data[0].allow_edit_work_type === "Y") {
          setAllowEditWorkTypeChecked(true);
        } else {
          setAllowEditWorkTypeChecked(false);
        }

        if (response.data[0].allow_delete_category === "Y") {
          setAllowDeleteCategoryChecked(true);
        } else {
          setAllowDeleteCategoryChecked(false);
        }

        if (response.data[0].allow_edit_category === "Y") {
          setAllowEditCategoryChecked(true);
        } else {
          setAllowEditCategoryChecked(false);
        }

        if (response.data[0].allow_delete_status === "Y") {
          setAllowDeleteStatusChecked(true);
        } else {
          setAllowDeleteStatusChecked(false);
        }

        if (response.data[0].allow_edit_status === "Y") {
          setAllowEditStatusChecked(true);
        } else {
          setAllowEditStatusChecked(false);
        }

        if (response.data[0].allow_delete_codes === "Y") {
          setAllowDeleteCodeChecked(true);
        } else {
          setAllowDeleteCodeChecked(false);
        }

        if (response.data[0].allow_edit_code === "Y") {
          setAllowEditCodeChecked(true);
        } else {
          setAllowEditCodeChecked(false);
        }

        if (response.data[0].allow_delete_out_going_email_master === "Y") {
          setAllowDeleteOutMailMaster(true);
        } else {
          setAllowDeleteOutMailMaster(false);
        }

        if (response.data[0].allow_edit_out_going_email_master === "Y") {
          setAllowEditOutMailMaster(true);
        } else {
          setAllowEditOutMailMaster(false);
        }

        if (response.data[0].allow_edit_our_company === "Y") {
          setAllowEditOurCompany(true);
        } else {
          setAllowEditOurCompany(false);
        }

        if (response.data[0].allow_delete_our_company === "Y") {
          setAllowDeleteOurCompany(true);
        } else {
          setAllowDeleteOurCompany(false);
        }

        if (response.data[0].allow_edit_domain === "Y") {
          setAllowEditDomain(true);
        } else {
          setAllowEditDomain(false);
        }

        if (response.data[0].allow_delete_domain === "Y") {
          setAllowDeleteDomain(true);
        } else {
          setAllowDeleteDomain(false);
        }

        if (response.data[0].allow_edit_users_directory === "Y") {
          setAllowEditUsersDirectory(true);
        } else {
          setAllowEditUsersDirectory(false);
        }

        if (response.data[0].allow_delete_users_directory === "Y") {
          setAllowDeleteUsersDirectory(true);
        } else {
          setAllowDeleteUsersDirectory(false);
        }

        if (response.data[0].language_ignore_id === "Y") {
          setLanguageIgnoreIdChecked(true);
        } else {
          setLanguageIgnoreIdChecked(false);
        }

        if (response.data[0].user_cc_email === "Y") {
          setUserCcEmailChecked(true);
        } else {
          setUserCcEmailChecked(false);
        }

        if (response.data[0].allow_edit_our_company_stationary === "Y") {
          setAllowEditOurCompanyStationaryChecked(true);
        } else {
          setAllowEditOurCompanyStationaryChecked(false);
        }

        if (response.data[0].added_by === "Y") {
          setAddedByChecked(true);
        } else {
          setAddedByChecked(false);
        }

        if (response.data[0].timestamp === "Y") {
          setTimestampChecked(true);
        } else {
          setTimestampChecked(false);
        }

        if (response.data[0] === "" || response.data[0] === null) {
          setLangChecked(false);
        } else {
          setLangChecked(true);
        }
      });
    });
  };

  const getLanguageList = () => {
    Axios.get("http://localhost:3001/languageDropD").then((response) => {
      setLanguagelist(response.data);
    });
  };

  const addPermissions = () => {
    console.log(
      userId,
      "userId",
      waspChecked,
      waspQuickAddClientChecked,
      tactWhiteChecked
    );
    Axios.post(`http://localhost:3001/update/add/permissions`, {
      userId: userId,
      waspChecked: waspChecked,
      waspQuickAddClientChecked: waspQuickAddClientChecked,
      tactWhiteChecked: tactWhiteChecked,
    }).then((response) => {
      window.alert("Permissions Added Successfully");
    });
  };

  const onClick = () => {
    getUsers();
    getPermissions();
  };

  return (
    <div
      className={`con ${inactive ? "con-act" : ""}`}
      onLoad={getLanguageList}
    >
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
                onClick={onClick}
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
                // onSelect={window.location.reload()}
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
                        value="Y"
                        onChange={(e) => setWaspChecked(e.target.value)}
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
                        value="Y"
                        onChange={(e) =>
                          setWaspQuickAddClientChecked(e.target.value)
                        }
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
                        value="Y"
                        onChange={(e) => setTactWhiteChecked(e.target.value)}
                        id="permission_value"
                      />
                      Tact Translator - White Zone
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        name="allselect"
                        value="Y"
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
                        value="Y"
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
                        value="Y"
                        defaultChecked={costChecked}
                        id="permission_value"
                      />
                      Cost
                    </p>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={spCostChecked}
                        id="permission_value"
                      />
                      Allow view SP & Cost
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={editSpCostChecked}
                        id="permission_value"
                      />
                      Allow edit SP & Cost
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={deleteLanguagePairSpCostChecked}
                        id="permission_value"
                      />
                      Delete Language Pair{" "}
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={createSellingSpCostChecked}
                        id="permission_value"
                      />
                      Allow create selling
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={exportPriceListChecked}
                        id="permission_value"
                      />
                      Allow export price list
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={clearCompleteListSpCostChecked}
                        id="permission_value"
                      />
                      Clear complete list
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={checkerChecked}
                        id="permission_value"
                      />
                      Checker
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={allowEditChecker}
                        id="permission_value"
                      />
                      Allow edit checker
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={recheckerChecked}
                        id="permission_value"
                      />
                      Re Checker
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={allowEditRechecker}
                        id="permission_value"
                      />
                      Allow edit rechecker
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
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
                        value="Y"
                        defaultChecked={onceChecked}
                        id="permission_value"
                      />
                      Once
                    </p>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={allowEditOnceChecked}
                        id="permission_value"
                      />
                      Allow Edit Once
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={allowDeleteOnceChecked}
                        id="permission_value"
                      />
                      Allow Delete Once
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={onceCountryChecked}
                        id="permission_value"
                      />
                      Country
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
                            defaultChecked={allowEditCountryChecked}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
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
                        value="Y"
                        defaultChecked={onceLanguageChecked}
                        id="permission_value"
                      />
                      Languages
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
                            defaultChecked={allowEditLanguageChecked}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
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
                        value="Y"
                        defaultChecked={onceCurrencyChecked}
                        id="permission_value"
                      />
                      Currency
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
                            defaultChecked={allowEditCurrencyChecked}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
                            defaultChecked={allowDeleteCurrencyChecked}
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
                        value="Y"
                        defaultChecked={onceMeasureChecked}
                        id="permission_value"
                      />
                      Measure
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
                            defaultChecked={allowEditMeasureChecked}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
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
                        value="Y"
                        defaultChecked={onceWorkTypeChecked}
                        id="permission_value"
                      />
                      Work Type
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
                            defaultChecked={allowEditWorkTypeChecked}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
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
                        value="Y"
                        defaultChecked={onceCategoryChecked}
                        id="permission_value"
                      />
                      Category
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
                            defaultChecked={allowEditCategoryChecked}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
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
                        value="Y"
                        defaultChecked={onceStatusChecked}
                        id="permission_value"
                      />
                      Status
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
                            defaultChecked={allowEditStatusChecked}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
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
                        value="Y"
                        defaultChecked={onceCodeChecked}
                        id="permission_value"
                      />
                      Codes
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
                            defaultChecked={allowEditCodeChecked}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
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
                        value="Y"
                        defaultChecked={onceOutGoingMailChecked}
                        id="permission_value"
                      />
                      Outgoing Email Master
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
                            defaultChecked={allowEditOutMailMaster}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
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
                        value="Y"
                        defaultChecked={onceOurCompanyChecked}
                        id="permission_value"
                      />
                      Our Company
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
                            defaultChecked={allowEditOurCompany}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
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
                        value="Y"
                        defaultChecked={onceDomainChecked}
                        id="permission_value"
                      />
                      Domain
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
                            defaultChecked={allowEditDomain}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
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
                        value="Y"
                        defaultChecked={taskChecked}
                        id="permission_value"
                      />
                      Task
                    </p>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={tactOtherTaskChecked}
                        id="permission_value"
                      />
                      Task - View Other Task
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={taskADChecked}
                        id="permission_value"
                      />
                      Approval for client
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={taskATChecked}
                        id="permission_value"
                      />
                      Approval for Translator{" "}
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
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
                        value="Y"
                        defaultChecked={tactChecked}
                        id="permission_value"
                      />
                      Tact
                    </p>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={importExportChecked}
                        id="permission_value"
                      />
                      Import & Export Tact
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={allowEditListChecked}
                        id="permission_value"
                      />
                      Allow Edit List
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={importCSVChecked}
                        id="permission_value"
                      />
                      Allow Tact Import
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={exportCSVChecked}
                        id="permission_value"
                      />
                      Allow Tact Export{" "}
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={searchTactChecked}
                        id="permission_value"
                      />
                      Search Tact
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={addTactChecked}
                        id="permission_value"
                      />
                      Add Tact
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultValue={editTactChecked}
                        id="permission_value"
                      />
                      Edit Tact
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultValue={tactAddWorkInfoChecked}
                        id="permission_value"
                      />
                      Allow Work Info
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultValue={showInWaspTactChecked}
                        id="permission_value"
                      />
                      Show In Wasp
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultValue={allowDeleteWaspClientChecked}
                        id="permission_value"
                      />
                      Allow Delete Wasp Client
                    </li>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultValue={allowDeleteTactClientChecked}
                        id="permission_value"
                      />
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
                        value="Y"
                        defaultChecked={bossChecked}
                        id="permission_value"
                      />
                      Boss
                    </p>
                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={usersDirectoryChecked}
                        id="permission_value"
                      />
                      User Directory
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
                            defaultChecked={allowEditUsersDirectory}
                            id="permission_value"
                          />
                          Allow Edit{" "}
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
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
                        value="Y"
                        defaultChecked={ourCompanyChecked}
                        id="permission_value"
                      />
                      Our Company & Stationary
                      <ul>
                        <li>
                          <input
                            className="permission-check"
                            type="checkbox"
                            value="Y"
                            defaultChecked={
                              allowEditOurCompanyStationaryChecked
                            }
                            id="permission_value"
                          />
                          Allow Edit{" "}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultChecked={staffMailerChecked}
                        id="permission_value"
                      />
                      Staff Mailers & Alert
                    </li>

                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultValue={sendMaileRsSMAChecked}
                        id="permission_value"
                      />
                      Send Mailers
                    </li>

                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultValue={sendAlertsSmaChecked}
                        id="permission_value"
                      />
                      Send Alerts
                    </li>

                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultValue={sendAlertsSmaChecked}
                        id="permission_value"
                      />
                      Reports
                    </li>

                    <li>
                      <input
                        className="permission-check"
                        type="checkbox"
                        value="Y"
                        defaultValue={sendBackrestSmaChecked}
                        id="permission_value"
                      />
                      Backup & Restore
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
                            id="permission_value"
                            defaultChecked={langChecked}
                          />
                          {val.language_name}
                        </li>
                      </>
                    );
                  })}
                </ul>
                <div className="staff-mailer-btn">
                  <button className="staff-btn" onClick={addPermissions}>
                    Save
                  </button>
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
