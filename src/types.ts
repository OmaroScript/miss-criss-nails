export interface ServiceItem {
  id: string;
  number: string;
  category: string;
  name: string;
  description: string;
  price: string;
  duration: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  technique: string;
  image: string;
}

export interface BookingSubmission {
  name: string;
  email: string;
  serviceId: string;
  date: number; // day in October
  time: string;
}
