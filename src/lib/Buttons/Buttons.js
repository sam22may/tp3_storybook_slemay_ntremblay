import * as React from 'react';
import {Button} from 'antd';
import PropTypes from 'prop-types';

const Buttons = ({size, type}) => (
  <Button type={type} size={size}>
    {type}-{size}
  </Button>
);

Buttons.propTypes = {
  type: PropTypes.oneOf(['primary', 'default', 'dashed', 'text', 'link']).isRequired,
  size: PropTypes.oneOf(['large', 'default', 'small']).isRequired,
};

export default Buttons;
