import React from "react"
import "./form-input.scss"


function FormInput({handleChange, label, ...otherProps}) {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps} />

            {
                label ?
                    (<lable className={`${otherProps.value.length ? 'shrink' : ''}form-input-label`}>
                        {label}
                    </lable>
                    ): null
            } 
        </div>
    )
}

export default FormInput