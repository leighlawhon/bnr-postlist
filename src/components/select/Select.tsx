import React, { useEffect } from 'react';

export interface SelectItem {
  label: string,
  value: string,
  id: string
}
interface SelectState {
  options: SelectItem[],
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select(props: SelectState) {

  return (
    <select onChange={props.onChange}>
      {props.options.length > 0 ? props.options.map((option) => {
        return (<option key={option.id} value={option.value}>{option.label}</option>)
      }) : null}
    </select>
  )
}