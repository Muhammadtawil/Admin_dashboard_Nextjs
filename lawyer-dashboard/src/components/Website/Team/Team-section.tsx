"use client"
import style from "./Team.module.scss";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useTranslations } from "next-intl";

const TeamCards = ({ teamData }: { teamData: any[] }) => {
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;
const t=useTranslations('webTeam')
  return (
    <section className={`${style.teamStyle} section-white`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">{t('title') }</h2>
            <p className="section-subtitle">{t('description')}</p>
          </div>
          <div className="team-grid " >
            {teamData.map((member: any, index: any) => (
              <div key={index} className="team-item ">
                <img src={member.userImgUrl} className="team-img" alt="pic" />
                <h3>{member.userName}</h3>
                <div className="team-info">
                  <p>{member.userPosition}</p>
                </div>
                <p>
                  Johnathan is our co-founder and has developed search strategies for a variety of clients from international brands to medium-sized businesses for over five years.
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
