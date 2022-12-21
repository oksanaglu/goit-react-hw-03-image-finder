import { Component } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalStyled } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    componentDidMount() {
        console.log('Modal componentDidMount');

        window.addEventListener('keydown', this.handleKeyDown);

        
    }

    componentWillUnmount() {
        console.log('Modal componentWillUnmount');

        window.removeEventListener('keydown', this.handleKeyDown);

    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = e => {
        // console.log('Click on backdrop');
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };

    render() {
        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
                <ModalStyled>{this.props.children}</ModalStyled>
            </Overlay>,
            modalRoot,
        );
    }

}


export default Modal;