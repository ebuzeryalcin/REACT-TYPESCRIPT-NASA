export interface NasaData {
    center: string;
    date_created: string;
    description: string;
    media_type: string;
    nasa_id: string;
    photographer: string;
    title: string;
    keywords?: string[];
    location?: string;
  }
  
  export interface NasaLinks {
    href: string;
    rel: string;
    render: string;
  }
  
  export interface CardData {
    data: NasaData[];
    href: string;
    links: NasaLinks[];
  }
  
  interface Metadata {
    total_hits: number;
  }
  
  export interface Collection {
    href: string;
    items: CardData[];
    version: string;
    metadata?: Metadata;
  }
  
  export interface BackendResponse {
    collection: Collection;
  }
  
  export interface ExifData {
    "EXIF:ApertureValue": number;
    "EXIF:Artist": string;
    "EXIF:CFAPattern": string;
    "EXIF:ColorSpace": string;
  }
  