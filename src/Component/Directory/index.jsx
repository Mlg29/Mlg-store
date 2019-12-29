import React from "react"
import "./directory.scss"
import { connect } from "react-redux"
import MenuItem from "../Menu-item"
import { selectDirectorySection } from "../../redux/directoryReducer/directorySelector"
import { createStructuredSelector } from "reselect"



function Directory({sections}) {
        return (
            <div className="directory-menu">
                {sections.map(({title,imageUrl, id, size, linkUrl}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                ))}
            </div>
        )
    }


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
}) 
export default connect(mapStateToProps)(Directory)