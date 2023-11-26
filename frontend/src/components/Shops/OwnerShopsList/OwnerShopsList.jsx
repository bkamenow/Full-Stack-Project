import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { getOwnerShops } from "../../../services/shopService";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CreateItem from "../../Items/CreateItem";

export default function OwnerShopsList() {
    const userId = localStorage.getItem("userId");
    const [shops, setShops] = useState([]);
    const [shopId, setShopId] = useState(null);
    const [shopName, setShopName] = useState(null);
    const [showAddItem, setShowAddItem] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getOwnerShops(userId);
                setShops(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const addItemClickHandler = (shopId, shopName) => {
        setShowAddItem(true);
        setShopId(shopId);
        setShopName(shopName);
    };

    const hideAddItem = () => {
        setShowAddItem(false);
    };

    return (
        <>
            {showAddItem && (
                <CreateItem
                    onClose={hideAddItem}
                    onCreate={hideAddItem}
                    shopId={shopId}
                    shopName={shopName}
                />
            )}
            <div className='background'>
                <div className='background-overlay'></div>
                <div className='shop-list-container items owner-shops'>
                    {shops.map((shop) => (
                        <Card style={{ width: "25rem" }} key={shop.id}>
                            <Card.Img
                                variant='top'
                                src={shop.image_url}
                                alt={shop.name}
                            />
                            <Card.Body>
                                <Card.Title>{shop.name}</Card.Title>
                                <Card.Text>
                                    <b>{shop.type}</b>
                                    <br />
                                    {shop.description}
                                </Card.Text>
                                <Button
                                    variant='dark'
                                    onClick={() =>
                                        addItemClickHandler(shop.id, shop.name)
                                    }
                                >
                                    Add Item
                                </Button>
                                <Button
                                    variant='dark'
                                    as={Link}
                                    to={`/items/${shop.id}`}
                                >
                                    View Items
                                </Button>
                                <Button variant='dark'>Edit</Button>
                                <Button variant='danger'>Delete</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}
