export type Maybe<T> = T | null;

export type Connection<T> = {
  edges: Array<Edge<T>>;
};

export type Edge<T> = {
  node: T;
};

export type Cart = {
  id?: string;
  checkoutUrl: string;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money;
  };
  lines: CartItem[];
  totalQuantity: number;
};

export type CartProduct = {
  id: string;
  handle: string;
  title: string;
  featuredImage: Image;
};

export type CartItem = {
  id: string;
  quantity: number;
  cost: {
    totalAmount: Money;
  };
  merchandise: {
    id: string;
    title: string;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    product: CartProduct;
  };
};

export type Collection = {
  handle: string;
  title: string;
  description: string;
  seo: SEO;
  updatedAt: string;
  path: string;
};

export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type Menu = {
  title: string;
  path: string;
};

export type Money = {
  amount: string;
  currencyCode: string;
};

export type Page = {
  id: string;
  title: string;
  handle: string;
  body: string;
  bodySummary: string;
  seo?: SEO;
  createdAt: string;
  updatedAt: string;
};

export type Product = {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: ProductOption[];
  priceRange: {
    maxVariantPrice: Money;
    minVariantPrice: Money;
  };
  featuredImage: Image;
  seo: SEO;
  tags: string[];
  updatedAt: string;
  variants: ProductVariant[];
  images: Image[];
};

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
};

export type SEO = {
  title: string;
  description: string;
};



export type ClientReview = {
  id: string; // Unique identifier for the review
  author: string; // Name of the reviewer
  rating: number; // Rating out of 5
  message: string; // The review text
  date: string; // The date the review was submitted
  productId: string; // Reference to the related product (optional)
  response?: string; // Response from the company (optional)
};


export type Destination = {
  id: string; // Unique identifier for the destination
  name: string; // Name of the destination
  description: string; // Short description of the destination
  location: string; // City or region
  country: string; // Country of the destination
  images: Image[]; // List of images for the destination
  activities: string[]; // List of activities to do in this destination
  rating: number; // Average rating of the destination (optional)
  reviewsCount: number; // Number of reviews the destination has received (optional)
  featured: boolean; // Whether this destination is featured or not
  seo: SEO; // SEO related metadata for the destination
  createdAt: string; // Date when the destination was added
  updatedAt: string; // Date when the destination information was last updated
  luxurious:boolean;
};