import React from 'react'
import CustomisedButton from '../CustomisedButton'
import { withRouter } from 'react-router-dom';
import FreeHunter from './Project/FreeHunter'
import SmartEat from './Project/SmartEat'
import FintechScraping from './Project/FintechScraping'

import {
    Switch,
    Route
} from "react-router-dom";

function MainContentProject(props) {
    console.log(props)
    return (
        <div className="MainContentProject">
            <span className="lable">My Project</span>

            <div className="project_obtion">
                <CustomisedButton
                    type="A"
                    text="Fintech Scraping"
                    handler={() => { props.history.push('/project/fintech_scraping') }}
                />

                <CustomisedButton
                    type="A"
                    text="Smart Eat"
                    handler={() => { props.history.push('/project/smart_eat') }}
                />

                <CustomisedButton
                    type="A"
                    text="Free hunter"
                    handler={() => { props.history.push('/project/free_hunter') }}
                />
            </div>


            <Switch>

                <Route path="/project/free_hunter">
                    <FreeHunter />
                </Route>

                <Route path="/project/smart_eat">
                    <SmartEat />
                </Route>

                <Route path="/project/fintech_scraping">
                    <FintechScraping />
                </Route>

                <Route path="/project/">
                    <FintechScraping />
                </Route>

            </Switch>



        </div>
    )
}

export default withRouter(MainContentProject);
