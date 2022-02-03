import React from 'react';

const colors: any = {
    "Bug": {
        bgColor: "#729f3f",
        color: "white"
    },
    "Dragon": {
        bgColor: "#53a4cf",
        color: "white"
    },
    "Grass": {
        bgColor: "#9bcc50",
        color: "black"
    },
    "Poison": {
        bgColor: "#b97fc9",
        color: "white"
    },
    "Fire": {
        bgColor: "#fd7d24",
        color: "white"
    },
    "Flying": {
        bgColor: "#3dc7ef",
        color: "white"
    },
    "Water": {
        bgColor: "#4592c4",
        color: "white"
    },
    "Electric": {
        bgColor: "#eed535",
        color: "black"
    },
    "Ground": {
        bgColor: "#ab9842",
        color: "black"
    },
    "Fairy": {
        bgColor: "#fdb9e9",
        color: "black"
    },
    "Fighting": {
        bgColor: "#d56723",
        color: "white"
    },
    "Psychic": {
        bgColor: "#f366b9",
        color: "white"
    },
    "Rock": {
        bgColor: "#a38c21",
        color: "white"
    },
    "Steel": {
        bgColor: "#9eb7b8",
        color: "black"
    },
    "Ice": {
        bgColor: "#51c4e7",
        color: "black"
    },
    "Ghost": {
        bgColor: "#7b62a3",
        color: "white"
    }
}

const Types = ({ type }: {type: string }) => {
   
        const color = colors[type]?.color || "black";
        const backgroundColor = colors[type]?.bgColor || "#a4acaf";

        return <span style={{color, backgroundColor}} className="pokemon-type">{type}</span>
    
}

export default Types;