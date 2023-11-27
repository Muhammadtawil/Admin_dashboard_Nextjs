"use client"
import style from "./Team.module.scss";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const TeamCards = ({ teamData ,translatedTeam}: { teamData: any[],translatedTeam:any[] }) => {
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;
  const t = useTranslations('webTeam')
  const path = usePathname();
  const arabic = path.includes('ar')
  const teamsData = arabic ? teamData : translatedTeam;
  return (
    <section className={`${style.teamStyle} section-white`}>
         <div className="container">
            <div className={arabic ? "main" : "mainsEn"}>
      <span className={arabic ? "main" : "mainsEn"}>{t('title')}</span>
      <h2 className={arabic ? "mains" : "mainsEng"}>  {t('firstTitle')}</h2>
        </div>
        </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="section-subtitle">{t('description')}</p>
          </div>
          <div className="team-grid " >
            {teamsData.map((member: any, index: any) => (
              <div key={index} className="team-item ">
                <img key={index} src={member.userImgUrl} className="team-img" alt="pic" />
                <h3 style={{padding:"10px"}}>{member.userName}</h3>
                <div className="team-info">
                  <p>{member.userPosition}</p>
                </div>
                <p>
                  {member.userBio?member.userBio:""}
                </p>
                <ul className="team-icon">
                  <li>
                    <a href="#" className="facebook">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest">
                      <FaXTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dribble">
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCards;
