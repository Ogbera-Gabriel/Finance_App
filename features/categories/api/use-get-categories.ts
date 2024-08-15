import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";
import { useAuth } from "@clerk/nextjs";


export const useGetCategories = () => {
    const {isLoaded, userId} = useAuth();
    const query = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            if (!userId) {
                throw new Error("User not authenticated");
            }
            const response = await client.api.categories.$get();

            if (!response.ok) {
                throw new Error("Failed to get categories");
            }

            const { data } = await response.json();
            return data;
        },
        enabled: isLoaded && !!userId
    });

    return query;
};