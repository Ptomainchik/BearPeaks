import { useEffect, useState } from "react";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import classes from "../../Styles/BattlefieldsStyles.module.css";
import { RestartButton } from "../../Button/RestartButton/RestartButton";
import { ModalRules } from "../OverallBattlefield/ModalRules";
import { ModalDwarvesLose } from "./ModalsDwarves/ModalDwarvesLose";
import { ModalDwarvesWin123Lvl } from "./ModalsDwarves/ModalDwarvesWin123Lvl";

const randomIntegerFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const DwarvesBattlefieldLvl2 = () => {
    const [dwarfHealth, setDwarfHealth] = useState(2000);
    const [orcHealth, setOrcHealth] = useState(2000);
    const [damageMultiplier, setDamageMultiplier] = useState(0);
    const [dwarvesPoultice, setDwarvesPoultice] = useState(1);
    const [angryDwarf, setAngryDwarf] = useState(1);
    const [frozenGround, setFrozenGround] = useState(1);
    const [frozenGroundCount, setFrozenGroundCount] = useState(0);
    const [frozenGroundActive, setFrozenGroundActive] = useState(false);
    const [dwarvesPoulticeImg, setDwarvesPoulticeImg] = useState(true);
    const [skilAndryDwarfImg, setSkilAngryDwarfImg] = useState(true);
    const [skilFrozenGroundImg, setSkilFrozenGroundImg] = useState(true)
    const [showMessage, setShowMessage] = useState(false);
    const [showMessage2, setShowMessage2] = useState(false);
    const [showMessage3, setShowMessage3] = useState(false);
    const [showSkilContagiousBite, setShowSkilContagiousBite] = useState(false);
    const [showSkilFetters, setShowSkilFetters] = useState(false);
    const [showLoseDwarvesMessage, setShowLoseDwarvesMessage] = useState(false);
    const [showWinDwarves123LvlMessage, setShowWinDwarves123LvlMessage] = useState(false);

    const handlePoultice = () => {
        if (dwarvesPoultice === -1) { 
        } 
        else {
            setDwarvesPoultice( -1);
            setDwarfHealth(dwarfHealth + 100);
            setDwarvesPoulticeImg(false);
            return
        }
    };

    const handleAngryDwarf = () => {
        if (angryDwarf === -1) { 
        } else {
            setAngryDwarf( -1);
            setOrcHealth(orcHealth - 50);
            setSkilAngryDwarfImg(false);
            return
        }
    };

    const handleFrozenGround = () => {
        if (frozenGround === -1) {
            return
        }else{
            setFrozenGround(-1);
            setFrozenGroundActive(true);
            setFrozenGroundCount(0)
        }
    }

    const multiplier = () => {
        setDamageMultiplier(randomIntegerFromInterval(1, 2));
    };
    
    const handleDwarfAttack = () => {
        multiplier();
        if (orcHealth > 0 && damageMultiplier !== null && frozenGroundActive === true) {
            setOrcHealth(orcHealth - damageMultiplier * 20)
            setFrozenGroundCount(frozenGroundCount + 1)
        }
        if (frozenGroundCount >= 2) {
            setSkilFrozenGroundImg(false)
            setFrozenGroundActive(false)
        }
        if (orcHealth > 0 && damageMultiplier !== null && frozenGroundActive === false) {
            setOrcHealth(orcHealth - damageMultiplier * 20)
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 20)
            }, 100);
        }

        if (orcHealth < 400 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilContagiousBite(true)
        }
        else if (orcHealth < 400 && damageMultiplier !== null && frozenGroundActive === false) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 50)
            }, 100) 
            setShowSkilContagiousBite(true)
        }

        if (orcHealth <= 400 && orcHealth >= 360 && damageMultiplier !== null) {
            setShowMessage3(true);
        }   

        if (orcHealth <= 800 && orcHealth >= 720 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilFetters(true)
        }
        if (orcHealth <= 800 && orcHealth >= 720 && damageMultiplier !== null && frozenGroundActive === false) {
            setShowSkilFetters(true)
            const intervalId = setInterval(() => {
                setDwarfHealth(prevHealth => prevHealth - 15)
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId)
                setShowSkilFetters(false)
            }, 5000);
        }

        if (orcHealth <= 1000 && orcHealth >= 920 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilContagiousBite(true)
        }
        else if (orcHealth <= 1000 && orcHealth >= 920 && damageMultiplier !== null && frozenGroundActive === false) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 50)
            }, 100) 
            setShowMessage2(true)
            setShowSkilContagiousBite(true)
        }
        else if (orcHealth <= 920 && orcHealth >= 800 && damageMultiplier !== null) {
            setShowSkilContagiousBite(false)
        } 

        if (orcHealth <= 1500 && orcHealth >= 1420 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilFetters(true)
        }
        else if (orcHealth <= 1500 && orcHealth >= 1420 && damageMultiplier !== null && frozenGroundActive === false) {
            setShowSkilFetters(true)
            const intervalId = setInterval(() => {
                setDwarfHealth(prevHealth => prevHealth - 15)
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId)
                setShowSkilFetters(false)
            }, 5000);
        }
       
        if (orcHealth <= 1800 && orcHealth >= 1720 && damageMultiplier !== null && frozenGroundActive === true) {
            setShowSkilContagiousBite(true)
        }
        else if (orcHealth <= 1800 && orcHealth >= 1720 && damageMultiplier !== null && frozenGroundActive === false) {
            setTimeout(() => {
                setDwarfHealth(dwarfHealth - 60)
            }, 100) 
            setShowMessage(true)
            setShowSkilContagiousBite(true)
        }
        else if (orcHealth <= 1720 && orcHealth >= 1600 && damageMultiplier !== null) {
            setShowSkilContagiousBite(false)
        } 
        if (orcHealth < 10){
            setShowWinDwarves123LvlMessage(true)
        }
        if (dwarfHealth < 10){
            setShowLoseDwarvesMessage(true)
        }   
    };

    useEffect(() => {
        if (showMessage) {
            const timeoutId = setTimeout(() => {
                setShowMessage(false);
            }, 3000);
            return () => clearTimeout(timeoutId);
        }
    }, [showMessage]);

    useEffect(() => {
        if (showMessage2) {
            const timeoutId = setTimeout(() => {
                setShowMessage2(false);
            }, 3000);
            return () => clearTimeout(timeoutId);
        }
    }, [showMessage2]);
   
    useEffect(() => {
        if (showMessage3) {
            const timeoutId = setTimeout(() => {
                setShowMessage3(false);
            }, 3000);
            return () => clearTimeout(timeoutId);
        }
    }, [showMessage3]);

    return (
        <div className={classes.dwarvesBattlefield}>
            <div className={classes.buttonsBattlefields} style={{backgroundColor: "rgb(30, 46, 70)", border: "solid rgb(247,189,0) 2px"}}><HomeButton/><span>Battlefield</span><RestartButton/></div>
            <div className={classes.unitsFlex}>
                <div className={classes.unitsBlock}>
                    <div className={classes.dwarfLvl123}>
                    <progress className={classes.healthIndicatorDwarf} max="2000" value={dwarfHealth} ></progress>
                        <button className={classes.buttonDwarfLvl2}></button>
                    </div>
                </div>
                {showMessage && <div className={classes.textMessageOrcs}><span>Вам конец.</span></div>}
                {showMessage2 && <div className={classes.textMessageOrcs}><span>Гномье отродье.</span></div>}
                {showMessage3 && <div className={classes.textMessageOrcs}><span>Выродки!</span></div>}
                {showLoseDwarvesMessage && <ModalDwarvesLose/>}
                {showWinDwarves123LvlMessage && <ModalDwarvesWin123Lvl/>}
                <div className={classes.unitsBlock}>
                    <div className={classes.orcLvl123}>
                        <progress className={classes.healthIndicatorOrc} max="2000" value={orcHealth} ></progress>
                        <button className={classes.buttonOrcLvl2} onClick={handleDwarfAttack}></button>
                    </div>
                </div>
            </div>
            <div className={classes.flexSkilsOrcs}>
                <div className={classes.blockSkilContagiousBite}>
                    {showSkilContagiousBite && <button title="Заразный укус - наносит средний урон противнику."></button>}
                    {showSkilContagiousBite && <p>Заразный укус</p>} 
                </div>
                <div className={classes.blockSkilFetters}>
                    {showSkilFetters && <button title="Охотничьи путы - наносит слабый урон противнику в течение 5 секунд."></button>}
                    {showSkilFetters && <p>Охотничьи путы</p>}
                </div>
            </div>
            <ModalRules/>
            <div className={classes.flexSkilsDwarves}>
            <div className={classes.blockSkilDwarfPoultice}>
                    {dwarvesPoulticeImg && <button  onClick={handlePoultice} title="Лечебный гриб - восстанавливает здоровье."></button>}
                    {dwarvesPoulticeImg && <p>Фиал с водой</p>}
                </div>
                <div className={classes.blockSkilAngryDwarf}>
                    {skilAndryDwarfImg && <button onClick={handleAngryDwarf} title="Гнев гнома - увеличивает урон от обычных атак."></button>}
                    {skilAndryDwarfImg && <p>Гнев гнома</p>}
                </div>
                <div className={classes.blockSkilFrozenGround}>
                    {skilFrozenGroundImg && <button onClick={handleFrozenGround} disabled={frozenGround === -1 || frozenGroundActive} title="Мёрзлая земля - даёт постоянную неуязвимость к обычным атакам если находится в снегах, иначе даёт её на 3 раунда."></button>}
                    {skilFrozenGroundImg && <p>Мёрзлая земля</p>}
                </div>
            </div>
            <div className={classes.damageMultiplier}>
                    {damageMultiplier}x
                    <div className={classes.titleSkilsMultiplier}>Множитель урона</div> 
            </div>
        </div>
    );
};
