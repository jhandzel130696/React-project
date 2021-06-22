import styles from './Column.scss';
import React from 'react';
import PropTypes from 'prop-types';
class Column extends React.Component {
 static propTypes={
    animals:PropTypes.string,
    plants:PropTypes.string,
    minerals:PropTypes.string,
  }
    render(){
        return(
            <section className={styles.component}>
                <h3 className={styles.title}>
                    {this.props.animal}
                    {this.props.plants}
                    {this.props.minerals}
                </h3>
            </section>
        )
    }
}

export default Column;