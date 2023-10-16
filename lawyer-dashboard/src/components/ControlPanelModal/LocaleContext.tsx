// // LocaleContext.js
// "use client";
// import React, { createContext, useContext, useState } from "react";

// interface LocaleContextType {
//   locale: string;
//   setLocale: (locale: string) => void;
// }

// const LocaleContext = createContext();

// export function LocaleProvider({ children }: any) {
//   const [locale, setLocale] = useState("enUS"); // Default locale is English

//   return (
//     <LocaleContext.Provider value={{ locale, setLocale }}>
//       {children}
//     </LocaleContext.Provider>
//   );
// }

// export function useLocale() {
//   return useContext(LocaleContext);
// }
