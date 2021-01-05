import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Header from "../Shared/Header/Header";
import Sidebar from "../Shared/Sidebar/Sidebar";
import { Link, NavLink } from "react-router-dom";
import "./Calender.scss";

const Calendar = () => {


  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 sidebar_area">
            <Sidebar />
          </div>
          <div className="col-md-10 analytics_area">
            <Header />
            <div className="content_area">
              <div className="container">
                <div className="row">
                  <div className="add-event col-md-3">
                    <p>
                      <NavLink
                        className="add-event text-decoration-none"
                        to="#"
                      >
                        Add Event
                      </NavLink>
                    </p>
                    <div className='checkboxes'>
                    <p>CALENDARS</p>
                    <ul className="list-unstyled">
                      <li>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label text-gray"
                          for="flexCheckDefault"
                        >
                          &nbsp; Event
                        </label>
                      </li>
                      <li>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label text-gray"
                          for="flexCheckDefault"
                        >
                          &nbsp; Event
                        </label>
                      </li>
                      <li>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label text-gray"
                          for="flexCheckDefault"
                        >
                          &nbsp; Event
                        </label>
                      </li>
                      <li>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label text-gray"
                          for="flexCheckDefault"
                        >
                          &nbsp; Event
                        </label>
                      </li>
                    </ul>
                 
                    </div>
                    
                     </div>
                  <div className="col-md-9">
                    <FullCalendar
                      plugins={[dayGridPlugin]}
                      initialView="dayGridMonth"
                      headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,dayGridWeek,dayGridDay"
                      }}
                    />
                  </div>
                </div>

                <footer className="row user_edit_footer pt-3">
                  <div className="col-md-12">
                    <p>
                      <span>COPYRIGHT ©</span>
                      <span>2021 </span>
                      <Link
                        className="text-decoration-none text-purple"
                        to="https://1.envato.market/vuexy_admin"
                        target="_blank"
                        rel="nofollow"
                      >
                        Pixinvent
                      </Link>
                      <span class="hidden sm:inline-block">
                        , All rights Reserved
                      </span>
                    </p>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
