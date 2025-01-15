import React, { useEffect, useState } from "react";
import { getTeams } from "../api/teamsService";
import Table from "../components/Table";

const TeamsPage: React.FC = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        getTeams()
            .then(setTeams)
            .catch(console.error);
    }, []);

    const headers = ["Team Name", "Wins", "Losses", "Win-Loss %", "Runs Scored"];

    return (
        <div>
            <h1>Team Stats</h1>
            <Table headers={headers} data={teams} />
        </div>
    );
};

export default TeamsPage;
