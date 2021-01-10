import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Header from "../Shared/Header/Header";
import Sidebar from "../Shared/Sidebar/Sidebar";
import { Link, NavLink } from "react-router-dom";
import "./Calender.scss";
import "../../styels/variables.scss";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";

import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  //just to get current  month
  var d = new Date();
  var m = (d.getMonth() + 1).toString();
  m = "0" + m;

  //right drawer to add event
  const [rightDrawer, setrightDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setrightDrawer(open);
  };

  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "The Lord of the Rings: The Return of the King", year: 2003 },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
    { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    { title: "The Lord of the Rings: The Two Towers", year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
    { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
    { title: "City of God", year: 2002 },
    { title: "Se7en", year: 1995 },
    { title: "The Silence of the Lambs", year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: "Life Is Beautiful", year: 1997 },
    { title: "The Usual Suspects", year: 1995 },
    { title: "Léon: The Professional", year: 1994 },
    { title: "Spirited Away", year: 2001 },
    { title: "Saving Private Ryan", year: 1998 },
    { title: "Once Upon a Time in the West", year: 1968 },
    { title: "American History X", year: 1998 },
    { title: "Interstellar", year: 2014 },
    { title: "Casablanca", year: 1942 },
    { title: "City Lights", year: 1931 },
    { title: "Psycho", year: 1960 },
    { title: "The Green Mile", year: 1999 },
    { title: "The Intouchables", year: 2011 },
    { title: "Modern Times", year: 1936 },
    { title: "Raiders of the Lost Ark", year: 1981 },
    { title: "Rear Window", year: 1954 },
    { title: "The Pianist", year: 2002 },
    { title: "The Departed", year: 2006 },
    { title: "Terminator 2: Judgment Day", year: 1991 },
    { title: "Back to the Future", year: 1985 },
    { title: "Whiplash", year: 2014 },
    { title: "Gladiator", year: 2000 },
    { title: "Memento", year: 2000 },
    { title: "The Prestige", year: 2006 },
    { title: "The Lion King", year: 1994 },
    { title: "Apocalypse Now", year: 1979 },
    { title: "Alien", year: 1979 },
    { title: "Sunset Boulevard", year: 1950 },
    {
      title:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      year: 1964,
    },
    { title: "The Great Dictator", year: 1940 },
    { title: "Cinema Paradiso", year: 1988 },
    { title: "The Lives of Others", year: 2006 },
    { title: "Grave of the Fireflies", year: 1988 },
    { title: "Paths of Glory", year: 1957 },
    { title: "Django Unchained", year: 2012 },
    { title: "The Shining", year: 1980 },
    { title: "WALL·E", year: 2008 },
    { title: "American Beauty", year: 1999 },
    { title: "The Dark Knight Rises", year: 2012 },
    { title: "Princess Mononoke", year: 1997 },
    { title: "Aliens", year: 1986 },
    { title: "Oldboy", year: 2003 },
    { title: "Once Upon a Time in America", year: 1984 },
    { title: "Witness for the Prosecution", year: 1957 },
    { title: "Das Boot", year: 1981 },
    { title: "Citizen Kane", year: 1941 },
    { title: "North by Northwest", year: 1959 },
    { title: "Vertigo", year: 1958 },
    { title: "Star Wars: Episode VI - Return of the Jedi", year: 1983 },
    { title: "Reservoir Dogs", year: 1992 },
    { title: "Braveheart", year: 1995 },
    { title: "M", year: 1931 },
    { title: "Requiem for a Dream", year: 2000 },
    { title: "Amélie", year: 2001 },
    { title: "A Clockwork Orange", year: 1971 },
    { title: "Like Stars on Earth", year: 2007 },
    { title: "Taxi Driver", year: 1976 },
    { title: "Lawrence of Arabia", year: 1962 },
    { title: "Double Indemnity", year: 1944 },
    { title: "Eternal Sunshine of the Spotless Mind", year: 2004 },
    { title: "Amadeus", year: 1984 },
    { title: "To Kill a Mockingbird", year: 1962 },
    { title: "Toy Story 3", year: 2010 },
    { title: "Logan", year: 2017 },
    { title: "Full Metal Jacket", year: 1987 },
    { title: "Dangal", year: 2016 },
    { title: "The Sting", year: 1973 },
    { title: "2001: A Space Odyssey", year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: "Toy Story", year: 1995 },
    { title: "Bicycle Thieves", year: 1948 },
    { title: "The Kid", year: 1921 },
    { title: "Inglourious Basterds", year: 2009 },
    { title: "Snatch", year: 2000 },
    { title: "3 Idiots", year: 2009 },
    { title: "Monty Python and the Holy Grail", year: 1975 },
  ];

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
                      
                      <Button  onClick={toggleDrawer(true)}> <div className='add-event-btn'>Add Event</div> </Button>
                      
                      <Drawer
                        anchor="right"
                        open={rightDrawer}
                        onClose={toggleDrawer(false)}
                        style={{ zIndex: "101" }}
                      >
                        {/* Drawer content */}
                        <form className="add-event-form">
                          <h3>Add Event</h3>

                          <InputLabel className="lable" shrink id="event-title">
                            Title
                          </InputLabel>
                          <TextField
                            labelId="event-title"
                            placeholder="Event title"
                            size="small"
                            variant="outlined"
                            // margin="dense"
                          />

                          <InputLabel
                            className="lable"
                            shrink
                            id="calender-type"
                            style={{ paddingBottom: "7px" }}
                          >
                            Event Type
                          </InputLabel>
                          <Select
                            variant="outlined"
                            labelId="calender-type"
                            value={"Personal"}
                            size="small"
                            margin="dense"
                            style={{ minWidth: "330px" }}
                          >
                            <MenuItem value={"Personal"}>Personal</MenuItem>
                            <MenuItem value={"Business"}>Business</MenuItem>
                            <MenuItem value={"Family"}>Family</MenuItem>
                            <MenuItem value={"Holiday"}>Holiday</MenuItem>
                            <MenuItem value={"ETC"}>ETC</MenuItem>
                          </Select>

                          <InputLabel className="lable" shrink id="start">
                            Start Date
                          </InputLabel>
                          <TextField
                            labelId="start"
                            size="small"
                            variant="outlined"
                            // margin="dense"
                            type="date"
                          />
                          <InputLabel className="lable" shrink id="end">
                            End Date
                          </InputLabel>
                          <TextField
                            labelId="end"
                            size="small"
                            variant="outlined"
                            // margin="dense"
                            type="date"
                          />

                          <InputLabel className="lable" shrink>
                            All Day <Switch />
                          </InputLabel>
                          <InputLabel className="lable" shrink id="url">
                            Event Url
                          </InputLabel>
                          <TextField
                            labelId="url"
                            size="small"
                            variant="outlined"
                            // margin="dense"
                            type="url"
                          />
                          <InputLabel className="lable" shrink id="tags">
                            Add People
                          </InputLabel>
                          <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={top100Films}
                            getOptionLabel={(option) => option.title}
                            defaultValue={[top100Films[13]]}
                            filterSelectedOptions
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                margin="dense"
                                style={{ maxWidth: "330px" }}
                                size="small"
                                variant="outlined"
                                labelId="tags"
                                placeholder="People"
                              />
                            )}
                          />
                          <InputLabel className="lable" shrink id="url">
                            Description
                          </InputLabel>
                          <TextField
                          multiline
                            labelId="url"
                            size="small"
                            variant="outlined"
                            rows={4}
                            type="url"
                          />
                          <div>
                            <Button onClick={toggleDrawer(true)}> <div className='add-btn' style={{marginLeft:'0px', color:'white', marginTop:'5px'}}>Add </div></Button>
                            <Button className='reset-btn' onClick={toggleDrawer(true)}>Reset</Button>
                          </div>
                        </form>
                      </Drawer>
                    </p>
                    <div className="checkboxes">
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
                      plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        listPlugin,
                        interactionPlugin,
                      ]}
                      initialView="dayGridMonth"
                      headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right:
                          "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                      }}
                      events={[
                        {
                          title: "event 1",
                          start: `2021-${m}-01`,
                          end: `2021-${m}-03`,
                          color: "#FF9F43",
                        },
                        {
                          title: "event 2",
                          date: `2021-${m}-10`,
                          color: "#EA5455",
                        },
                      ]}
                      buttonText={{
                        today: "today",
                        month: "month",
                        week: "week",
                        day: "day",
                        list: "list",
                      }}
                      dateClick={toggleDrawer(true)}
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
