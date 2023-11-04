import { getTeam } from '@/server/web/services/Team/Team';
import async from '../blogs/blogsComponent';
import TeamCards from './Team-section';




export default async function Team() {
  const teamData=await getTeam()
  return (
<>
<TeamCards teamData={teamData}/>
    </>
  )
}
