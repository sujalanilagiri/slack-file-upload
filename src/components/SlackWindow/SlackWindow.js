import React, { Component } from "react";
import { connect } from "react-redux";
import { FormGroup, FormControl } from "react-bootstrap";
import "./SlackWindow.css";
import { Button } from "react-bootstrap";

export class SlackWindow extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedChannel: "" };
  }

  onPickChannel(event) {
    var index = event.nativeEvent.target.selectedIndex;
    var selectedValue = event.nativeEvent.target[index].text;
    this.props.handleChange(selectedValue);
    this.setState({ selectedChannel: selectedValue });
  }

  render() {
    const { data, handleClick } = this.props;
    const btn_class = this.state.selectedChannel
      ? "EnabledButton"
      : "DisbaledButton";
    return (
      <div className="Rectangle-20">
        <div>
          <br />
          <div className="Select-slack-channel">Select Slack Channel</div>
          <br />
          <div className="-copy">
            To share this clip, add email addresses seperated by comma ,then
            click "Send"
          </div>

          <FormGroup controlId="formControlsSelect">
            <FormControl
              componentClass="select"
              placeholder="select"
              className="BG"
              onChange={this.onPickChannel.bind(this)}
              inputRef={el => (this.inputEl = el)}
            >
              <option>Select</option>
              {data
                ? data.map((channel, index) => {
                    return (
                      <option value={channel} key={channel}>
                        {String(channel.name)}
                      </option>
                    );
                  })
                : null}
            </FormControl>
          </FormGroup>
          <br />
          <Button
            className="EnabledButton"
            bsSize="large"
            onClick={handleClick}
            disabled={!this.state.selectedChannel}
          >
            Share With Slack
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.main.channelList ? state.main.channelList.data.channels : null,
    selectedVal: state.main.selectedValue ? state.main.selectedValue : null
  };
};

export default connect(mapStateToProps)(SlackWindow);
