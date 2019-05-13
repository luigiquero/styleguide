import { useState, useMemo } from 'react';

const useExpanded = (initialValue, onUpdate = () => {}) => {
  const [expanded, setExpanded] = useState(initialValue);

  return useMemo(() => {
    const update = (value) => {
      if (value === expanded) return;

      setExpanded(value);
      onUpdate(value);
    };

    const expand = () => update(true);

    const collapse = () => update(false);

    const toggle = () => update(!expanded);

    return {
      expanded,
      expand,
      collapse,
      toggle,
    };
  }, [expanded, onUpdate]);
};

export default useExpanded;
