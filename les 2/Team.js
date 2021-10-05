"use strict"

class Team {
    constructor(teamName, trainer, roster) {
        this.teamName = teamName;
        this.trainer = trainer;
        this.roster = [...roster];
    }
    describe() {
        let htmlString = `Meet ${this.teamName}: led by ${this.trainer}, consisting of ${this.roster}`
        document.getElementById('team').innerHTML = htmlString
    }
}

export default Team;