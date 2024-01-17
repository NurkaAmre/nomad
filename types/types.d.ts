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
  id: string;
  image: string;
  author: string;
  title: string;
  topic: string;
  longDescription: string;
  duration: string;
  location: string;
  price: number;
  description: string;
};

type TourListType = TourItemType[];

interface Place {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
}
