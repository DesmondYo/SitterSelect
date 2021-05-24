import React from 'react';
import {BookingDetailRow} from './booking-detail-row';
import {StatusBadge} from './status-badge';

export function BookingDetailStatus({label, value, status}) {
  return (
    <BookingDetailRow
      label={label}
      value={value}
      CustomComponent={status ? () => <StatusBadge status={status} /> : null}
    />
  );
}
