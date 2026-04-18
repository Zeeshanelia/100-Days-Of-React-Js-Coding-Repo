import styles from "../component/Display.module.css"

const Display = ({displayValue}) => {
    return (
        <>
        <input className={styles.display} type="text" value={displayValue} readOnly/>
        </>
    )
}
export default Display