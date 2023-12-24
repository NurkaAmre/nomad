interface HeroType {
  id: number;
  name: string;
  image: string;
}

interface PopularPlacesType {
  id: number;
  title: string;
  image: string;
}

type TourItemType = {
  id: number;
  image: string;
  author: string;
  title: string;
  topic: string;
  description: string;
};

type TourListType = TourItemType[];
