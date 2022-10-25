export type KittenCardProps = {
  name: string;
  category: string;
  price: number;
  image_url: string;
  id: string;
};

export type SortProps = {
  sortType: (data: string) => void;
  buttonsList: string[];
  buttonName: string;
  defaultActiveButton?: string;
};
