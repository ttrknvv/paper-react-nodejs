import "../../../styles/stylesForComponents/authorization/inputDataComponent/inputDataComponent.css"

export default function InputData({nameInput, textForInput}) {
    return (
        <div id="input-div">
            <p>{textForInput}</p>
            <input type="text" id="input-data-component" name={nameInput} />
        </div>
    )
}