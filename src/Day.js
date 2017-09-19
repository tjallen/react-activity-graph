import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';
import styled from 'styled-components';

export default class Day extends Component {
  static propTypes = {
    children: PropTypes.any,
    color: PropTypes.string,
    tooltip: PropTypes.bool,
  }
  static defaultProps = {
    tooltip: true,
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const StyledTooltip = styled.div`
      color: #000;
      width: 100px;
      border: 1px solid red;
      background-color: lightgray;
      text-align: center;
      display: none;
    `;
    const StyledDay = styled.div`
      background-color: ${this.props.color};
      font-size: 10px;
      border: 1px solid white;
      height: 12px;
      width: 12px;
      color: #fff;
      &:hover {
        cursor: pointer;
        border: 1px solid grey;
      }
     `;
    const Wrapper = styled.div`
      & ${StyledDay}:hover ${StyledTooltip} {
        display: block;
        position: absolute;
      }
    `;
    const props = this.props;
    return (
      <Wrapper>
        <StyledDay>
          {this.props.children === null ? 0 : this.props.children}
          {this.props.tooltip &&
            <StyledTooltip {...props} />
          }
        </StyledDay>
      </Wrapper>

    );
  }
}
