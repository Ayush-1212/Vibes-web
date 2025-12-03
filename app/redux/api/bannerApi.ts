import { bannerApiUrls } from "@/app/constants/apiUrls";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";


// 🎯 Define Banner type
export interface Banner {
    id: string;
    title: string;
    image_url: string;
    mobile_image_url: string;
    link_url: string | null;
    is_active: boolean;
    show_order: number;
    createdAt: string;
    updatedAt: string;
}

// 🎯 Define the API response type
interface BannerResponse {
    statusCode: number;
    success: boolean;
    message: string;
    data: Banner[];
}

//  Create API slice
export const bannersApi = createApi({
    reducerPath: "bannerApi",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getAllBanners: builder.query<BannerResponse, void>({
            query: () => bannerApiUrls.getAllBanners,
        }),
    }),
});

export const { useGetAllBannersQuery } = bannersApi;
