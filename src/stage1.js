import React, { useEffect, useState } from 'react';
import { Button, List } from 'antd';
import './Stage1.css';

export default function Stage1 () {

    const veglist = ['Carrot', 'Cucumber'];
    const spicelist = ['Salt', 'Pepper', 'Chilli', 'Herbs', 'Curry'];
    const fruitlist = ['Apple', 'Banana', 'Pear', 'Watermelon', 'Grape', 'Strawberry', 'Mango', 'Blackberry'];
    const [listSelect, setList] = useState("");
    useEffect(() => {
        setList(veglist);
    }, [])


    function renderList (listSelect) {
        return (
            <div className='list'>
                <List
                    dataSource={listSelect}
                    renderItem={(item) => (
                        <List.Item
                            className={`highlight-false ${item}`}
                            onClick={(e) => {
                                if (e.target.className.includes('highlight-false')) {
                                    e.target.className = e.target.className.replace('highlight-false', 'highlight-true');
                                }
                                else {
                                    e.target.className = e.target.className.replace('highlight-true', 'highlight-false');
                                }
                            }}
                        >
                            {item}
                        </List.Item>
                    )}
                >

                </List>
            </div>
        )
    };

    return (
        <div style={{ margin: "auto", width: "50%" }}>
            <div className='header'>
                <p className='Inv'>Inventory</p>
            </div>
            <br/>
            <div>
                <div className='listSelect'>
                    <Button onClick={() => setList(veglist)}>
                        (1) Vegetables
                    </Button>
                    <Button onClick={() => setList(spicelist)}>
                        (2) Spices
                    </Button>
                    <Button onClick={() => setList(fruitlist)}>
                        (3) Fruits
                    </Button>
                </div>
                <br />
                {renderList(listSelect)}
            </div>

        </div>
    );
}
