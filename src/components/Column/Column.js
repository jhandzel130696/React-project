import styles from './Column.scss';
import React from 'react';
import PropTypes from 'prop-types';
//import Creator from '../Creator/Creator.js';
//import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore.js';
import Icon from '../Icon/Icon';
class Column extends React.Component {
 static propTypes={
   name:PropTypes.string,
   cards: PropTypes.array,
   subtitle: PropTypes.string,
   icon: PropTypes.string,
 }
 

 
 render(){
   return(
     <section className={styles.component}>
       <h3 className={styles.title}>
         {this.props.name}
         <span className={styles.icon}> 
           <Icon name = {this.props.icon} />
         </span>
       </h3>
       <div className={styles.column}> 
         {this.state.cards.map(({key,title}) => (
           <Card key={key} subtitle={title} />
         ))}
       </div>
       <div className={styles.creator}>
         <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
       </div>
     </section>
   );
 }
}

export default Column;