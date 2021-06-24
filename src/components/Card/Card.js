import styles from './Card.scss';
import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component{
    static propTypes = {
        cards: PropTypes.array,
        subtitle: PropTypes.string,
    }

    render(){
        return(
        <section className={styles.component}>
            
            {this.props.subtitle}
        </section>
        )
    }
}

export default Card;