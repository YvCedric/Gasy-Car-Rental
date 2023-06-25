const cities = [
  {
    label: "Antananarivo",
    latlng: [-18.91, 47.53],
  },
  {
    label: "Toamasina",
    latlng: [-18.15, 49.4],
  },
  {
    label: "Antsirabe",
    latlng: [-19.87, 47.03],
  },
  {
    label: "Fianarantsoa",
    latlng: [-21.45, 47.08],
  },
  {
    label: "Mahajanga",
    latlng: [-15.72, 46.32],
  },
  {
    label: "Toliara",
    latlng: [-23.35, 43.67],
  },
  {
    label: "Antsiranana",
    latlng: [-12.28, 49.29],
  },
];

const useCities = () => {
  const getAll = () => cities;

  const getByLabel = (value: string) => {
    return cities.find((item) => item.label === value);
  };

  return {
    getAll,
    getByLabel,
  };
};

export default useCities;
