import Modal from 'react-modal';
import classes from "../../../Styles/BattlefieldsStyles.module.css";
import OrcsWin from "../../../../images/Battlefields/OrcsBattlefield/OrcsWin.webp"
import { NextLevelButton } from '../../../Button/NextLevelButton/NextLevelButton';

export const ModalDwarvesWin123Lvl = () =>{

    return (
        <div>
           <Modal ariaHideApp={false} style={{ overlay: {backgroundColor: 'rgba(30, 46, 70, 0.7)'}, content: {border: '2px solid black' }}}
               className={classes.dwarvesWin123Lvl} isOpen={true}>
                <div className={classes.blockModalWinDwarves123Lvl}>
                    <h2>Victory</h2>
                    <NextLevelButton/>
                    <h5>Next Level</h5>
                </div>
                <img className={classes.blockModalWinDwarves123Lvl} src={OrcsWin} alt="Win" />
            </Modal>
       </div>
    )
}
