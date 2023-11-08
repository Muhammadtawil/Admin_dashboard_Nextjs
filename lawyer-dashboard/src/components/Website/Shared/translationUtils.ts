// // translationUtils.js
// import i18n from 'i18next';

// export const fetchTranslations = async (language:any, contentKeys:any) => {
//   const response = await fetch(`/api/translations?language=${language}&keys=${contentKeys.join(',')}`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch translations');
//   }
//   const translations = await response.json();

//   // Add the translations to i18next
//   i18n.addResources(language, 'translation', translations);
// };
