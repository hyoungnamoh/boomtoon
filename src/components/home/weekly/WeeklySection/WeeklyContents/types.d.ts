export type WeeklyContent = {
  id: number;
  alias: string;
  title: string;
  isAdult: boolean;
  isComplete: boolean;
  orderNo: number;
  thumbnails: {
    imagePath: string;
    type: string;
  }[];
  badge: {
    newest: boolean;
    adult: boolean;
    scheduled: boolean;
    up: boolean;
    completed: boolean;
    recommended: boolean;
    discount: number;
    free: number;
    freetime: boolean;
  };
  viewCount: number;
  tag: string;
  updatedAt: number;
  creators: string;
};
