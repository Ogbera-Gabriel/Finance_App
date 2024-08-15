import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono";
import { useAuth } from "@clerk/nextjs";


export const useGetAccounts = () => {
    const {isLoaded, userId} = useAuth();
    const query = useQuery({
        queryKey: ["accounts"],
        queryFn: async () => {
            if (!userId) {
                throw new Error("User not authenticated");
            }

            const response = await client.api.accounts.$get();

            if (!response.ok) {
                throw new Error("Failed to get accounts");
            }

            const { data } = await response.json();
            return data;
        },
        enabled: isLoaded && !!userId,
    });

    return query;
};