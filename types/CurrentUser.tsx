export type CurrentUser = {
  id: string;
  email: string;
  roles: {
    id: string;
    key: string;
    value: string;
  }[];
  rooms: {
    id: string;
  }[];
};
