import style from "@/styles/css/settings.module.css";

export default function Settings() {
    return (
        <>
            <div className={style.container}>
                <div className={style.main}>
                    <div className={style.setting}>
                        <p>Setting 1</p>
                        <input type="checkbox" className={style.checkbox}></input>
                    </div>
                </div>

                <div className={style.back} onClick={() => {window.location.href = "/"}}>Back</div>
            </div>
        </>
    )
}