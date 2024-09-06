import { api } from "@/lib/axios";

export const fetchPosts = async () => {
  return api.get("/posts");
};
