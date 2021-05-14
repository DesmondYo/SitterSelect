import React from 'react';
import {SitterStatusDetail} from './sitter-status-detail.js';

export function ClientBookingStatus({
  label,
  value,
  status,
  source,
  text,
  date,
  time,
  purpledot,
  ApprovedPress,
}) {
  const textColor = getTextColor();
  const backgroundColor = getBackgroundColor();
  return (
    <SitterStatusDetail
      label={label}
      source={source}
      text={text}
      date={date}
      time={time}
      value={value}
      purpledot={purpledot}
      ApprovedPress={ApprovedPress}
      textColor={textColor}
      backgroundColor={backgroundColor}
      hasBackground={true}
    />
  );
  function getTextColor() {
    if (status === 'approved') {
      return '#5E4386';
    } else if (status === 'declined') {
      return '#c52222';
    } else if (status === 'pending') {
      return '#c5b422';
    } else {
      return null;
    }
  }

  function getBackgroundColor() {
    if (status === 'approved') {
      return '#F5EFFF';
    } else if (status === 'declined') {
      return '#fde7e7';
    } else if (status === 'ending') {
      return '#fdfbe7';
    } else {
      return null;
    }
  }
}
