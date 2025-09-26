import { useState } from "react";
import ErrorIcon from "/images/error.svg";
import styles from "./InputField.module.css";

const InputField = ({
    label,
    type = "text",
    max = 80,
    value,
    onChange,
    error,
    setError,
    hint,
    errorText = "Name is too long",
}) => {
    const [focused, setFocused] = useState(false);

    const handleChange = (e) => {
        let val = e.target.value;
        const valid =
            (type === "text" && val.length > max) ||
            (type === "number" && val > max);
        setError(valid);

        onChange(val);
    };

    return (
        <div className={styles.field}>
            <div
                className={`${styles.inputWrapper} ${
                    focused ? styles.focused : ""
                } ${error ? styles.error : ""}`}
            >
                <input
                    className={styles.input}
                    type={type}
                    value={!value ? "" : value}
                    onChange={handleChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder={label}
                />
                {value > 0 && type === "number" && focused && (
                    <div className={styles.hiddenWrapper}>
                        <span className={styles.hidden}>{value}</span>/{max}
                    </div>
                )}
                <label
                    className={`${styles.label} ${
                        focused || value ? styles.labelFloat : ""
                    } ${
                        error
                            ? styles.labelError
                            : focused
                            ? styles.labelActive
                            : ""
                    }`}
                >
                    {label}
                </label>
                {error && (
                    <img src={ErrorIcon} alt="error" className={styles.icon} />
                )}
            </div>
            {error ? (
                <p className={styles.errorText}>{errorText}</p>
            ) : (
                <p className={styles.hint}>{hint}</p>
            )}
        </div>
    );
};

export default InputField;
