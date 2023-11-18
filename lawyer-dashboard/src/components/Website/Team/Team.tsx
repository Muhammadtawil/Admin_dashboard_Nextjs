import { getTeam } from '@/server/web/services/Team/Team';
import async from '../blogs/blogsComponent';
import TeamCards from './Team-section';
import { Translator } from 'google-translate-api-x';





export default async function Team() {
  const teamData = await getTeam()
  const translatorToEnglish = new Translator({ from: 'ar', to: 'en', forceBatch: false});
  const EnglishtranslatedServices = await Promise.all(
    teamData.map(async (member: any) => {
      const translatedName = await translatorToEnglish.translate(member.userName);
      const translatedBio = await translatorToEnglish.translate(member.userBio);
      const translatedPosition = await translatorToEnglish.translate(member.userPosition);

 

      // Ensure that the translated properties are plain strings
      const plainTranslatedService = {
        ...member,
        userName: translatedName ,
        userBio: translatedBio,
        userPosition:translatedPosition,
      };

      return plainTranslatedService;
    })
  );
  const EnglishTeamWithStrings = EnglishtranslatedServices.map((member: any) => ({
    ...member,
    userName: String(member.userName.text),
    userBio: String(member.userBio.text),
    userPosition:String(member.userPosition.text)
    
  }));
  return (
<>
      <TeamCards teamData={teamData} translatedTeam={EnglishTeamWithStrings}/>
    </>
  )
}
