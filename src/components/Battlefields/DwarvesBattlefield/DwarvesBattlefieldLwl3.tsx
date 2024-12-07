import classes from "../../Styles/BattlefieldsStyles.module.css";
import { OrcsUnitLwl3 } from "../Units/OrcsUnits/OrcsUnitLwl3";
import { DwarvesUnitLwl3 } from "../Units/DwarvesUnits/DwarvesUnitLwl3";
import { OrcsUnitLwl4 } from "../Units/OrcsUnits/OrcsUnitLwl4";
import { HomeButton } from "../../Button/HomeButton/HomeButton";
import { BackButton } from "../../Button/BackButton/BackButton";


export const DwarvesBattlefieldLwl3 = () => {
    return (
    <div className={classes.dwarvesBattlefield}>
        <div className={classes.buttonDwarvesBattlefield}><HomeButton/><span>Battlefield</span><BackButton/></div>
        <div>
            <OrcsUnitLwl4/>
        </div>
        <div className={classes.unitsFlex}>
            <OrcsUnitLwl3/>
            <OrcsUnitLwl3/>
            <OrcsUnitLwl3/>
            <OrcsUnitLwl3/>
            <OrcsUnitLwl3/>
        </div>
        <div className={classes.unitsFlex}>
            <DwarvesUnitLwl3/>
            <DwarvesUnitLwl3/>
            <DwarvesUnitLwl3/>
            <DwarvesUnitLwl3/>
            <DwarvesUnitLwl3/>
        </div>
    </div>)
}