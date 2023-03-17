function TextComponent({text, ...props}){
    return(
        <p className="text-base font-normal" {...props}>{text} <span className="text-slate-500">{props.span}</span> {props.after}</p>
    )
}

export default TextComponent;