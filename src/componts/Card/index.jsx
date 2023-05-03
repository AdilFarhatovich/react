import css from "./Card.module.css"

export const Card = (props) => {
    const {full_name,postion,id}=props
    const avatar_style = {
        border:'1px solid black',
                height:"100px",
                width:'100px',
                borderRadius:'5px',
                backgroundColor:'gray',
                dislpay:'flex',
                JustifyContent:"center"
    }
    return(
        <div className={css.card}>
            <div style={avatar_style}></div>
                <div className="description">
                    <h2>{full_name}</h2>
                    <b>{postion}</b>
                    <p>{id}</p>
                </div>
        </div>
    )
}