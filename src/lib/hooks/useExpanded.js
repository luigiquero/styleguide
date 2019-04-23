import { useState, useMemo } from 'react';

const useExpanded = (initialValue, onUpdate = () => {}) => {
  const [expanded, setExpanded] = useState(initialValue);

  return useMemo(() => {
    const update = (value) => {
      setExpanded(value);
      onUpdate(value);
    };

    const expand = () => {
      if (expanded) return;

      update(true);
    };

    const collapse = () => {
      if (!expanded) return;

      update(false);
    };

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
