import React, { useEffect, useState } from "react";
import { getHitters } from "../api/hittersService";
import Table from "../components/Table";

const HittersPage: React.FC = () => {
    const [hitters, setHitters] = useState([]);

    useEffect(() => {
        getHitters()
            .then(setHitters)
            .catch(console.error);
    }, []);

    const headers = ["Player Name", "Position", "Games", "At-Bats", "Runs", "Hits"];

    return (
        <div>
            <h1>Hitters Stats</h1>
            <Table headers={headers} data={hitters} />
        </div>
    );
};

export default HittersPage;
