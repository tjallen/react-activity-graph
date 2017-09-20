import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';
import styled from 'styled-components';
import hexToRGBA from 'hex-to-rgba';

export default class Day extends Component {
  static propTypes = {
    children: PropTypes.any,
    color: PropTypes.string,
    tooltip: PropTypes.bool,
    value: PropTypes.any,
    maxValue: PropTypes.any,
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
    const { color, maxValue } = this.props;
    const value = this.props.value || 0;
    const opacity = 1 / (maxValue / value);
    const rgbaColor = hexToRGBA(color, opacity);
    const StyledTooltip = styled(Tooltip)`
      color: #fff;
      background-color: #242424;
      width: 100px;
      text-align: center;
      display: none;
      padding: 3px;
      border-radius: 3px;
    `;
    const StyledDay = styled.div`
      background-color: ${rgbaColor};
      font-size: 10px;
      border: 1px solid white;
      height: 12px;
      width: 12px;
      color: #fff;
      &:hover {
        cursor: pointer;
        background-color: #ffffff;
        border-color: ${this.props.color}
      }
     `;
    const Wrapper = styled.div`
      & ${StyledDay}:hover ${StyledTooltip} {
        display: block;
        position: relative;
        top: -25px;
        left: -50px;
        z-index: 99;
      }
    `;
    return (
      <Wrapper>
        <StyledDay>
          {/* {this.props.children === null ? 0 : this.props.children} */}
          {this.props.tooltip &&
            <StyledTooltip {...this.props}>{value}</StyledTooltip>
          }
        </StyledDay>
      </Wrapper>

    );
  }
}
