import classes from "../../Styles/BattlefieldsStyles.module.css";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import { BackButton } from "../../Button/BackButton/BackButton";
import { useState } from "react";


const randomIntegerFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const OrcsBattlefieldLwl4 = () => {
    const [dwarfHealth, setDwarfHealth] = useState(1000);
    const [orcHealth, setOrcHealth] = useState(1000);
    const [diceRoll, setDiceRoll] = useState(0);
    const [poultice, setPoultice] = useState(1)


    const handlePoultice = () => {
        if (poultice === -1) { 
        } else {
            setPoultice( -1);
            setOrcHealth(orcHealth + 100);
            return
        }
    };

    const rollDice = () => {
        setDiceRoll(randomIntegerFromInterval(1, 2));
    };

    const handleOrcAttack = () => {
        rollDice();
        if (dwarfHealth > 0 && diceRoll !== null) {
            setDwarfHealth(dwarfHealth - diceRoll * 10);
            setTimeout(() => {
                setOrcHealth(orcHealth - 10);
            }, 100);
        }
        if (dwarfHealth < 200 && diceRoll !== null) {
            setTimeout(() => {
                setOrcHealth(orcHealth - 40)
            }, 100)
        }
        if (dwarfHealth <= 10){
            window.location.href = "battlefieldorlwl4";
        }
    };

    return (
        <div className={classes.orcsBattlefield}>
            <div className={classes.buttonOrcsBattlefield}><HomeButton/><span>Battlefield</span><BackButton/></div>
            <div className={classes.unitsFlex}>
                <div className={classes.unitsBlock}>
                    <div className={classes.dwarfLwl4}>
                        {dwarfHealth}<button className={classes.buttonDwarfLwl4} onClick={handleOrcAttack} ></button>
                    </div>
                </div>
                <div>{diceRoll}</div>
                <div className={classes.unitsBlock}>
                    <div className={classes.orcLwl4}>
                        {orcHealth}<button className={classes.buttonOrcLwl4}></button>
                        <button className={classes.poultice} onClick={handlePoultice}>{poultice}</button>
                    </div>
                </div>
            </div>
        
        </div>
    );
};