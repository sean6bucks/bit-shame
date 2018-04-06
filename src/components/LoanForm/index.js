import React, { Component } from "react";
import FlatButton from "material-ui/FlatButton";
import styled from "styled-components";
import { InstagramLoginButton } from "react-social-login-buttons";

import { colors } from "../globals";

import FacebookConnectContainer from "../../containers/FacebookConnectContainer";

const StyledInputBox = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    width: 100%;
`;

const StyledInput = styled.input`
    line-height: 20px;
    font-size: 18px;
    margin-right: 5px;
    padding: 15px;
    flex: 1;
    border: 2px solid ${colors.lightGrey};
    border-radius: 10px;
    outline: none;
    &:focus {
        border: 2px solid ${colors.darkGrey};
    }
`;
const StyledSymbol = styled.span`
    padding-top: 10px;
    width: 20px;
    color: #000;
    font-size: 26px;
`;
const StyledSocial = styled.div`
    margin-top: 10px;
`;

// Global functions
export const formatCurrencyString = string => {
    const removed_symbols = string.replace(/[$€£¥\s]+/g, "");
    const number_parts = removed_symbols.split(/[.,]/);
    // IF NO DECIMALS OR COMMAS JUST RETURN
    if (number_parts.length === 1) {
        return number_parts.join("");
    }
    // IF LAST SECTION IS LESS THAN 3 ASSUME "cents" AND REMOVE
    if (number_parts[number_parts.length - 1].length <= 2) {
        number_parts.pop();
    }
    return number_parts.join("");
};

const numToCurrencyString = (num, locale = "nl-NL", currency = "EUR") => {
    return num.toLocaleString(locale, { currency: currency });
};

// Components

class CurrencyInput extends Component {
    state = {
        input: 1.0,
        min: 0
    };

    handleChange = ({ target }) => {
        if (!target) return;
        if (target.value !== this.state.input) {
            const value = target.value < 0 ? 0 : target.value;
            this.updateInput(value);
        }
    };

    updateInput = (input = "") => {
        this.setState({ input }, () => {
            this.props.handleChange(input);
        });
    };

    componentWillMount() {
        // SET DEFAULTS ON MOUNT
        if (this.props.minValue) {
            this.setState({ min: this.props.minValue });
        }
        if (this.props.symbol) {
            this.setState({ symbol: this.props.symbol });
        }
        if (this.props.round) {
            this.setState({ round: this.props.round });
        }
    }

    componentDidMount() {
        // AFTER MOUNT UPDATE WITH ANY DEFAULT VALUE
        // SET INITIAL VALUE
        if (this.props.value) {
            // SET INT VALUE TO CURRENCY STRING AND CHECK AGAINST STATE
            const val_string = numToCurrencyString(this.props.value);
            this.updateInput(val_string);
        }
    }

    componentWillUpdate(nextProps, nextState) {
        // IF VALUE UPDATED FROM OUTSIDE ELEMENT > UPDATE STATE
        if (nextProps.value !== this.props.value) {
            this.updateInput(numToCurrencyString(nextProps.value));
        }
    }

    render() {
        return (
            <StyledInputBox>
                <StyledSymbol>₿</StyledSymbol>
                <StyledInput
                    type="number"
                    value={this.state.input}
                    onFocus={this.handleFocus}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                />
            </StyledInputBox>
        );
    }
}

const LoanForm = ({
    loading,
    error,
    updateAmount,
    handleSubmit,
    handleSuccessLogin
}) => {
    return (
        <form style={{ borderRadius: 2 }}>
            <div style={{ padding: 30 }}>
                <h2 style={{ color: "#000" }}>
                    Fill in the amount of Bitcoins
                </h2>
                <CurrencyInput handleChange={updateAmount} min="0" />
                <StyledSocial>
                    <FacebookConnectContainer
                        handleSuccessLogin={handleSuccessLogin}
                    />
                </StyledSocial>
                <StyledSocial>
                    <InstagramLoginButton />
                </StyledSocial>
            </div>
        </form>
    );
};

export default LoanForm;
