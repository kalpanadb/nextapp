"use client"
import UpCollapse from '@/ui-component/upCollapse/UpCollapse';
import React, { useState } from 'react';


const Collapse = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleCollapse = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <UpCollapse expanded={isExpanded} onCollapseHandler={handleCollapse} title="Book">
                <p>old is gold</p>
            </UpCollapse>
        </div>
    );
};

export default Collapse;
