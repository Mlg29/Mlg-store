import React from "react"
import "./shop.scss"
import { Route } from "react-router-dom"
import CollectionOverview from "../../Component/collection-overview"
import Collection from "../collection"
import { firestore, convertCollectionsSnapshotToMap } from "../../Firebase/firebase.utils"
import { connect } from "react-redux"
import { updateCollection } from "../../redux/shopReducer/shop.action"
import Spinner from "../../Component/spinner"



const CollectionOverviewSpinner = Spinner(CollectionOverview)
const CollectionSpinner = Spinner(Collection)
class ShopPage extends React.Component {
    state = {
        loading: true
    }

    unSubscribeFromSnapshot = null 

    componentDidMount() {
        const { updateCollection } = this.props
        const collectionRef = firestore.collection('collections')

        collectionRef.onSnapshot(async snapShot => {
           const collectionsMap = convertCollectionsSnapshotToMap(snapShot)
            updateCollection(collectionsMap)
            this.setState({loading: false})
        })
    }

 render() {
     const { match } = this.props
     const { loading } = this.state
     return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewSpinner isLoading={loading} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionSpinner isLoading={loading} {...props} />} />
        </div>
    )
 }
}

const mapDispatchToProps = dispatch => ({
    updateCollection: collectionsMap => dispatch(updateCollection(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage)