import React from 'react';
import FeatherIcon from 'feather-icons-react'; 

export default class MessageBar extends React.Component {
    messageBarType(type) {
        switch (type) {
            case "generic":
                return "message__bar"
                break;
            case "success":
                return "message__bar message__bar--success"
                break;
            case "warning":
                return "message__bar message__bar--warning"
                break;
            case "error":
                return "message__bar message__bar--error"
                break;
            default:
                return "message__bar"
        }
    }

    render() {
        return (
            <div className={this.messageBarType(this.props.type)}>
                <FeatherIcon icon="info" className="message__bar__info" />
                <p className="message__bar__message">{this.props.message}</p>
                <FeatherIcon icon="x" style={this.props.type === 'generic' ? {display: 'none'} : undefined} className="message__bar__close" />
            </div>
        );
    };
}