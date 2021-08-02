import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as waitingActions from "../../store/modules/waiting";
import WaitingList from "../WaitingList";

class WaitingListContainer extends Component {
  handleChange = (e) => {
    //인풋 변경 이벤트
    const { WaitingActions } = this.props;
    WaitingActions.changeInput(e.target.value);
  };

  handleSubmit = (e) => {
    //등록 이벤트
    e.preventDefault();
    const { WaitingActions, input } = this.props;
    WaitingActions.create(input); //등록
    WaitingActions.changeInput(""); //인풋 최화
  };

  handleEnter = (id) => {
    //입장
    const { WaitingActions } = this.props;
    WaitingActions.enter(id);
  };

  handleLeave = (id) => {
    //나가기
    const { WaitingActions } = this.props;
    WaitingActions.leave(id);
  };
  render() {
    const { input, list } = this.props;
    return (
      <WaitingList
        input={input}
        waitingList={list}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        onEnter={this.handleEnter}
        onLeave={this.handleLeave}
      />
    );
  }
}

const mapStateToProps = ({ waiting }) => ({
  input: waiting.get("input"),
  list: waiting.get("list"),
});

const mapDispatchToProps = (dispatch) => ({
  WaitingActions: bindActionCreators(waitingActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaitingListContainer);
