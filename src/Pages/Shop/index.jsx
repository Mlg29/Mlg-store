import React from "react"
import "./shop.scss"
import { Route } from "react-router-dom"
import CollectionOverview from "../../Component/collection-overview"
import Collection from "../collection"



function ShopPage({ match }) {

        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={Collection} />
            </div>
        )
    }


export default ShopPage