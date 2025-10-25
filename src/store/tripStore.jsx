import {create} from 'zustand';
export const useTripStore = create((set)=>({
    tripData:null,
    setTripData:(data)=>set({tripData:data}),
}))