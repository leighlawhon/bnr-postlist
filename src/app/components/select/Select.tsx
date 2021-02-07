import React, { useState, useEffect } from 'react';

export interface SelectItem {
  label: string,
  value: string,
  id: string
}
interface SelectState {
  options: SelectItem[]
}
export function Select(items: SelectState) {
  return (
    <select>
      {items.options.length > 0 ? items.options.map((option) => {
        return (<option key={option.id} value={option.value}>{option.label}</option>)
      }) : null}
    </select>
  )
}