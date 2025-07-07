import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

export type CabinType = {
    id: Number;
    image: Text;
    name: Text;
    maxCapacity: Number;
    discount: Number;
    status: boolean;
    regularPrice: Number;
    description: Text;
    createdAt: Timestamp;
};