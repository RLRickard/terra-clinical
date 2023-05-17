import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DetailList.module.scss';
import DetailListItem from './DetailListItem';
import { LevelContext } from './LevelContext';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The detail view list title to be displayed above the list item(s).
   */
  title: PropTypes.string,

  /**
   * The detail item(s) to display information. Must be either a
   * DetailListItem element or array of DetailListItem elements.
   */
  children: PropTypes.oneOfType([
    PropTypes.objectOf(DetailListItem),
    PropTypes.arrayOf(PropTypes.objectOf(DetailListItem)),
  ]),
};

const defaultProps = {
  title: undefined,
  children: undefined,
};

const DetailList = ({ title, children, ...customProps }) => {
  let titleContent;
  const level = useContext(LevelContext);
  const HeaderLevel = `h${level}`;
  if (title) {
    titleContent = (<HeaderLevel className={cx('title')}>{title}</HeaderLevel>);
  }

  return (
    <div {...customProps} data-terra-clincial-detail-list className={customProps.className}>
      {titleContent}
      <ul>
        {children.map((name) => (
          <li className={cx('list')} key={name.id}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

DetailList.propTypes = propTypes;
DetailList.defaultProps = defaultProps;

export default DetailList;
