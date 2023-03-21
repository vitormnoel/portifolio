function TextComponent({text, ...props}){
    return(
        <p className="text-base font-normal" {...props}>{text}&nbsp; <span className="bg-yellow-200">{props.span}</span> {props.after}</p>
    )
}

export default TextComponent;