import { useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";

import { useProxy } from "../../hooks/useProxy";

import "./PersonPage.css";

function PersonPage (){
    const proxy= useProxy();
    const [character, setCharacter]=useState({});
    const params = useParams();
   
    useEffect(() => {

        async function fetchData() {
            const getItem = await proxy.getSingleItemPr(params.id);
            setCharacter(getItem);
        }

    fetchData();
    // eslint-disable-next-line
    }, []);

    return (
        <div className="page-display">
            <div className="image-frame">
            <img className="image-single" src={character.image} alt="" />
            </div>
            <div className="image-data">
                <ul>
                    <li>name: {character.name}</li>
                    <li>status: {character.status}</li>
                    <li>gender: {character.gender}</li>
                    <li>species: {character.species}</li>
                </ul>
            </div>
        </div>
    )

}

export default PersonPage;