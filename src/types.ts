export interface ArchetypeCards {
  data: {
    id: number;
    name: string;
    card_images: {
      image_url_small: string;
    }[];
  }[];
}