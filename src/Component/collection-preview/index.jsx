import React from "react"
import "./collection-preview.scss"
import CollectionItem from "../collection-item"


function CollectionPreview({title, items}) {
    return (
        <div className="collection-preview">
            
                <h1>{title.toUpperCase()}</h1>

                <div className="preview">
                    {
                        items.filter((item, index) => index < 4)
                            .map(item => (
                            <CollectionItem key={item.id} item={item} />
                            
                        ))
                    }
                </div>
        </div>
    )
}

export default CollectionPreview