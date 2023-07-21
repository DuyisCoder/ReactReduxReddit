import '../Edit/Edit.css'
import '../Post/Post.css'

function Input(props) {
    const {label,data,setData,inputType,classStyle} =props;
    return (
        <>
            <label>{label}</label>
            {inputType === "textarea" ? (
                <textarea type="text" className={classStyle} placeholder={data}
                 onChange={(e)=>setData(e.target.value)}></textarea>
            ) : (
                <input type="text" placeholder={data} onChange={(e)=>setData(e.target.value)} />
            )}
        </>
      );
}
export default Input;