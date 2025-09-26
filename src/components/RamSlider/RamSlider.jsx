import Line from "/images/line.svg";
import Vector from "/images/thumb/vector.svg";
import Indicator from "/images/thumb/indicator.svg";
import styles from "./RamSlider.module.css";

const RamSlider = ({ value, max = 50 }) => {
    const percent = Math.min(100, Math.max(0, (value / max) * 100));

    return (
        <div className={styles.sliderWrapper}>
            <div className={styles.trackBar}>
                <div className={styles.trackBase}></div>
                <div className={styles.trackGreen}></div>
                <div className={styles.trackYellow}></div>
                {value > 0 && value <= max && (
                    <div
                        className={styles.thumb}
                        style={{ left: `calc(${percent}% - 10px)` }}
                    >
                        <img
                            src={Vector}
                            alt="vector"
                            className={styles.vector}
                        />
                        <img
                            src={Indicator}
                            alt="indicator"
                            className={styles.indicator}
                        />
                        <p className={styles.thumbLabel}>{value}GB</p>
                    </div>
                )}
            </div>
            <div className={styles.labels}>
                <span>0GB</span>
                <span>16GB</span>
                <span>32GB</span>
                <span>50GB</span>
            </div>

            <img src={Line} alt="line" className={styles.line} />
            <p className={styles.recommended}>Recommended</p>
        </div>
    );
};

export default RamSlider;
