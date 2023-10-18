export const Note = (props) =>{
   const{body, title} = props;
   return(
    <li>
        <p>{title}</p>
        <small>{body}</small>
    </li>
   )
}