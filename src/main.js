import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./scenes/home";
import Witcon from "./scenes/witcon/witcon-main";
import UpcomingEvents from "./scenes/upcoming-events";
import Witcon18 from "./scenes/witcon/witcon-18";
import Witcon19 from "./scenes/witcon/witcon-19";
import Witcon20 from "./scenes/witcon/witcon-20";
import About from "./scenes/about/main";
import Sponsor from "./scenes/sponsor";
import Gallery from "./scenes/gallery/gallery-main";
import Gallery_ball19 from "./scenes/gallery/ball19";
import Gallery_ball18 from "./scenes/gallery/ball18";
import Gallery_gamenight18 from "./scenes/gallery/gn18";
import Gallery_igictd18 from "./scenes/gallery/igictd18";
import Gallery_physhack18 from "./scenes/gallery/physhack18";
import Gallery_quiz18 from "./scenes/gallery/quiz18";
import Gallery_tdfg18 from "./scenes/gallery/tdfg18";
import Gallery_witcon18 from "./scenes/gallery/witcon18";
import Gallery_bbq19 from "./scenes/gallery/bbq19";
import Gallery_igictd19 from "./scenes/gallery/igictd19";
import Gallery_techweek19 from "./scenes/gallery/techweek19";
import Gallery_witcon19 from "./scenes/gallery/witcon19";
import Gallery_witcon20 from "./scenes/gallery/witcon19";
import Gallery_tdfg19 from "./scenes/gallery/tdfg19";
import Gallery_hackathon19 from "./scenes/gallery/hackathon19";
import Committee from "./scenes/about/committee";
import Committee2020 from "./scenes/about/committee2020";
import Media from "./scenes/media";
//import Mentoring from "./scenes/mentoring";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/witcon" component={Witcon} />
      <Route path="/upcoming-events" component={UpcomingEvents} />
      <Route path="/witcon-2018" component={Witcon18} />
      <Route path="/witcon-2019" component={Witcon19} />
<Route path="/witcon-2020" component={Witcon20} />
      <Route path="/about" component={About} />
      <Route path="/sponsor" component={Sponsor} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/ball18" component={Gallery_ball18} />
      <Route path="/ball19" component={Gallery_ball19} />
      <Route path="/gn18" component={Gallery_gamenight18} />
      <Route path="/igictd18" component={Gallery_igictd18} />
      <Route path="/physhack18" component={Gallery_physhack18} />
      <Route path="/quiz18" component={Gallery_quiz18} />
      <Route path="/tdfg18" component={Gallery_tdfg18} />
      <Route path="/witcon18" component={Gallery_witcon18} />
      <Route path="/bbq19" component={Gallery_bbq19} />
      <Route path="/igictd19" component={Gallery_igictd19} />
      <Route path="/techweek19" component={Gallery_techweek19} />
      <Route path="/witcon19" component={Gallery_witcon19} />
      <Route path="/tdfg19" component={Gallery_tdfg19} />
      <Route path="/hackathon19" component={Gallery_hackathon19} />
      <Route path="/about-committee" component={Committee} />
        <Route path="/about-committee2020" component={Committee2020} />
      <Route path="/media" component={Media} />

    </Switch>
  </main>
);

export default Main;
