import React from 'react';
import { BookingDetailRow } from "./booking-detail-row";

export function BookingDetailStatus({ label, value, status }) {
    const textColor = getTextColor();
    const backgroundColor = getBackgroundColor();

    return <BookingDetailRow label={label} value={value} textColor={textColor} backgroundColor={backgroundColor} hasBackground={true} />  
    
    function getTextColor(){
        if(status === "approved") {
            return "#5E4386";
        }
    }

    function getBackgroundColor(){
        if(status === "approved") {
            return "#F5EFFF";
        }
    }
}