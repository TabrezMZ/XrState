import React, { createContext, useState, ReactNode } from "react";
import { properties as initialProperties } from "../constants/properties";

type Property = typeof initialProperties[0];

interface PropertyContextType {
  properties: Property[];
  toggleLike: (id: string | number) => void;
}

export const PropertyContext = createContext<PropertyContextType>({
  properties: [],
  toggleLike: () => {},
});

export const PropertyProvider = ({ children }: { children: ReactNode }) => {
  const [properties, setProperties] = useState(initialProperties);

  const toggleLike = (id: string | number) => {
    setProperties((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, liked: !p.liked } : p
      )
    );
  };

  return (
    <PropertyContext.Provider value={{ properties, toggleLike }}>
      {children}
    </PropertyContext.Provider>
  );
};
