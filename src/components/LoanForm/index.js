import React, { Component } from "react";
import { Card } from "material-ui/Card";
const styles = {};
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

const setValidValue = (int, { min = 0, round = 1 }) => {
    return isNaN(int) || int < min ? min : roundValue(int, round);
};

const roundValue = (value, round) => {
    return Math.round(value / round) * round;
};

const currencyStringToInt = string => {
    return parseInt(formatCurrencyString(string), 10);
};

const numToCurrencyString = (num, locale = "nl-NL", currency = "EUR") => {
    return num.toLocaleString(locale, { currency: currency });
};

// Components

class CurrencyInput extends Component {
    state = {
        focused: false,
        input: "",
        symbol: "€",
        min: 0
    };

    parseCurrencyValue = input => {
        // FORM VALUE TO NUMBER AND CHECK FOR FORMAT
        const currencyInt =
            typeof input === "string" ? currencyStringToInt(input) : input;
        return setValidValue(currencyInt, this.state);
    };

    handleFocus = () => {
        this.setState({ focused: true });
    };

    handleBlur = ({ target }) => {
        this.setState({ focused: false }, () => {
            const value = this.parseCurrencyValue(target.value);
            if (value !== this.props.value) this.props.onChange(value);
            if (numToCurrencyString(value) !== this.state.input) {
                this.setState({
                    input: numToCurrencyString(value)
                });
            }
        });
    };

    handleChange = ({ target }) => {
        if (!target) return;
        if (target.value !== this.state.input) {
            this.updateInput(target.value);
        }
    };

    updateInput = (input = "") => {
        this.setState({ input });
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
        const input_style = this.state.focused
            ? Object.assign({}, styles.input, styles.focused)
            : styles.input;
        return (
            <div style={styles.input_box}>
                <span style={styles.symbol}>{this.state.symbol}</span>
                <input
                    value={this.state.input}
                    style={input_style}
                    onFocus={this.handleFocus}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                />
            </div>
        );
    }
}

export const Label = ({ text }) => {
    return <h4 style={{ marginBottom: 5 }}>{text}</h4>;
};

export const Fieldset = ({ children, label }) => {
    return (
        <div style={{ margin: "15px 0" }}>
            {label ? <Label text={label} /> : null}
            {children}
        </div>
    );
};

// NOTE: REACT COMPONENT REQUIRED FOR RADIUM
class Spinner extends Component {
    render() {
        return <span style={styles.spinner} />;
    }
}
// Spinner = Radium(Spinner);

// NOTE: REACT COMPONENT REQUIRED FOR RADIUM
class SubmitButton extends Component {
    render() {
        const {
            label = "Submit",
            loading = false,
            disabled = false,
            style,
            handleClick
        } = this.props;

        const submit_style = Object.assign(
            {},
            styles.submit_button,
            style,
            disabled || loading ? styles.disabled : {}
        );
        return (
            <span style={submit_style} onClick={handleClick}>
                {label}
            </span>
        );
    }
}
// SubmitButton = Radium(SubmitButton);

const LoanForm = ({
    children,
    submit,
    submitLabel,
    submitStyle,
    submitDisabled,
    loading,
    style
}) => {
    return (
        <form style={style}>
            {children}
            <div style={styles.submit}>
                {loading ? <Spinner /> : null}
                <SubmitButton
                    label={submitLabel}
                    loading={loading}
                    disabled={submitDisabled}
                    style={submitStyle}
                    handleClick={submit}
                />
            </div>
        </form>
    );
};

export default LoanForm;
