import React from 'react'
import "./collection-overview.scss"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import CollectionPreview from "../collection-preview"
import { selectCollectionForPreview } from "../../redux/shopReducer/shopSelector"




function CollectionOverview({collections}) {
    return (
        <div className="collections-overview">
             {
                collections.map(({id, ...otherCollections}) => (
                    <CollectionPreview key={id} {...otherCollections} />
                )) 
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview)