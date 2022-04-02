import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";


const Tally = () =>{

    const [inactive,setInactive] = useState(false);

    return(

        <div className={`con ${inactive ? 'con-act' : ""}`}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />

       <div className="line"> </div>
           <div className="inner-container">
           <div className="self__task">
                <h2>Tally Records</h2>
                <div className="import-form tally-form">
                <form>
                <div class="row">
                       <div class="col-25">
                            <label>From</label>
                       </div>
                       <div class="col-75">
                             <input type="date" />
                       </div>
                       <div class="col-25">
                            <label>To</label>
                       </div>
                       <div class="col-75">
                             <input type="date" />
                       </div>
                </div>
                <div class="row">
                       <div class="col-25">
                            <label>Keyword</label>
                       </div>
                       <div class="col-75">
                             <input type="text" placeholder="Enter Contact Person, Email id, Refrence no, Language, Country" />
                             <div className="tally-search-btn">
                                 <button className="tally-btn">Search</button>
                             </div>
                       </div>
                </div>
                </form>
             </div>
            </div>

            <div className="selfTask-table">
            <div className="overflow-table">
                <table className="selfTask-table-data">
                 <thead>
                   <tr>
                   <th className="st-bg">#</th>
                   <th className="st-bg">Star/Square</th>
                   <th className="st-bg">Refrence No.</th>
                   <th className="st-bg">Submission Date & Time</th>
                   <th className="st-bg">Contact</th>
                   <th className="st-bg">Company</th>
                   <th className="st-bg">Work Type</th>
                   <th className="st-bg">Source</th>
                   <th className="st-bg">Target</th>
                   <th className="st-bg">Translator</th>
                   <th className="st-bg">Action</th>
                   </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            </div>
            </div>
            </div>
   </div>
    )
}

export default Tally;

