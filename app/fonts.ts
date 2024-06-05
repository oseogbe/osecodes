import { League_Spartan, Outfit, Poppins } from "next/font/google";

export const poppins = Poppins({ 
    subsets: ["latin"], 
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] 
});

export const outfit = Outfit({ 
    subsets: ["latin"], 
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] 
});

export const spartan = League_Spartan({ 
    subsets: ["latin"], 
    weight: ["400", "500","600","700"] 
});