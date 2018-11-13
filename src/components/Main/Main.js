import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import "./Main.css";
import { SlackWindow } from "../SlackWindow/SlackWindow";

import Modal from "react-responsive-modal";
import {
  getChannelList,
  openPopup,
  closePopup,
  postChannelSelected
} from "./modules/mainActions";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.popout = this.popout.bind(this);
    this.popoutClosed = this.popoutClosed.bind(this);
    this.channelSelected = this.channelSelected.bind(this);
    this.state = { isPoppedOut: false };
    this.onPostChannel = this.onPostChannel.bind(this);
  }

  popout() {
    this.props.open();

    this.props.fetchChannelList();
  }

  popoutClosed() {
    this.props.close();
  }
  onPostChannel() {
    const val = this.state.selectedChannel;

    this.props.postChannel(val);
    this.forceUpdate();

    if (this.props.response === 200) this.popoutClosed();
  }

  channelSelected(value) {
    this.setState({ selectedChannel: value });
  }

  render() {
    return (
      <div className="Main">
        {this.props.response && (
          <div className="Dialog">
            <h1 className="text-style-1">Video Clip Shared With Slack</h1>
          </div>
        )}
        <Button className="Button" bsSize="large" active onClick={this.popout}>
          Start
        </Button>

        {this.props.popout && (
          <Modal open={this.props.popout} onClose={() => {}}>
            <div className="Share-video-clip">Share Video Clips</div>
            <div>
              <SlackWindow
                data={this.props.channels}
                handleClick={this.onPostChannel}
                handleChange={this.channelSelected}
              />
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    popout: state.main.isPoppedOut,
    channels: state.main.channelList
      ? state.main.channelList.data.channels
      : null,
    response: state.main.response ? state.main.response.status : null
  };
};
const matchDispatchToProps = dispatch => ({
  fetchChannelList: () => dispatch(getChannelList()),
  postChannel: val => dispatch(postChannelSelected(val)),
  open: () => dispatch(openPopup()),
  close: () => dispatch(closePopup())
});
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Main);
