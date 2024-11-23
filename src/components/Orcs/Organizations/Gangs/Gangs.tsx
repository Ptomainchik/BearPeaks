import React, { useState } from "react"
import Modal from 'react-modal';
import classes from '../../Styles/BlackForest.module.css'
import LeaderOfTheBandits from '../../../../images/Orcs/OrcsOrganizations/LeaderOfTheBandits.jpg'
import MasterOfTheMarauders from '../../../../images/Orcs/OrcsOrganizations/MasterOfTheMarauders.jpg'
import ChiefOfThieves from '../../../../images/Orcs/OrcsOrganizations/ChiefOfThieves.jpg'

export const Gangs = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const openModal = () => {
      setModalIsOpen(true);
    };
    
    const closeModal = () => {
      setModalIsOpen(false);
    };
    
    return (
      <div>
        <button onClick={openModal} className={classes.iconsGangsModalOrganization} title="Банды"/>
        <Modal ariaHideApp={false} style={{ overlay: {backgroundColor: 'rgba(158, 4, 4, 0.7)'}, content: {border: '2px solid black' }}}
        className={classes.gangsModal} isOpen={modalIsOpen}>
          {GangsDescription}
          <button className={classes.buttonCloseGangsModal} onClick={closeModal}>Закрыть</button>
        </Modal>
      </div>
    )}


    const GangsDescription =  (
        <div>
            <div className={classes.contentModal}>
                <img title="Родзарик" className={classes.imageHeadOrganizations} src={LeaderOfTheBandits} alt="Orc leader of the bandits"/>
                <span>Родзарик - вождь разбойников и всех банд.</span>
            </div>
            <div className={classes.contentModal}>  
                <img title="Фругеш" className={classes.imageMemberOrganizations} src={MasterOfTheMarauders} alt="Orc master of marauders"/>
                <span>Фругеш - хозяин мародёров.</span>
            </div>    
            <div className={classes.contentModal}>
                <img title="Хармук" className={classes.imageMemberOrganizations} src={ChiefOfThieves} alt="Orc chief of thieves"/>
                <span>Хармук - глава воров.</span>
            </div>
        </div>
      
    )
    