import styles from './Card.scss';
import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component{
    static propTypes = {
      cards: PropTypes.array,
      title: PropTypes.string,
    }

    render(){
      const {title} = this.props;
      return(
        <section className={styles.component}>
            
          {this.props.title}
        </section>
      );
    }
}

export default Card;