

import { getTeam } from "@/server/web/services/Team/Team";
import React from "react";

const Team = async () => {
  const teamsData = await getTeam();
  return (
    <>
      <section className="team-area pb-70">
        <div className="container">
          <div className="section-title home-four-section-title">
            <span>Team</span>
            <h2>Meet Our Expert Team</h2>
            <p>Professional Stuffs Ready to Help Your Business</p>
          </div>

          <div className="row justify-content-center">
            {teamsData &&
              teamsData.map((team: any, i: number) => (
                <div
                  className="col-lg-3 col-sm-6"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={100 || 0} // Use optional chaining to access aosDelay
                  key={i}
                >
                  <div className="single-team active">
                    <div className="team-single-img">
                      <img src={team.userImgUrl} alt="Image" />{" "}
                      {/* Use optional chaining and provide a default value */}
                      <div className="team-img">
                        <img src="/images/team/team-shape.png" alt="Image" />
                      </div>
                    </div>

                    <div className="team-content">
                      <h3>{team.userName || ""}</h3>{" "}
                      {/* Use optional chaining and provide a default value */}
                      <span>{team.userPosition || ""}</span>{" "}
                      {/* <div className="social-media-icons">
                        <Link href={team.userFacebookUrl} target="_blank">
                          <i className="bx bxl-facebook"></i>
                        </Link>
                        <Link href={team.userTwitterUrl} target="_blank">
                          <i className="bx bxl-twitter"></i>
                        </Link>
                        <Link href={team.userLinkedInUrl} target="_blank">
                          <i className="bx bxl-linkedin"></i>
                        </Link>
                      </div> */}
                      {/* Use optional chaining and provide a default value */}
                      {/* <ul>
                        {value?.socialLinks?.map(
                          (
                            social,
                            i 
                          ) => (
                            <li key={i}>
                              <Link href={social?.url || ""} target="_blank">
                         
                                <i className={social?.iconName || ""}></i>{" "}
                            
                              </Link>
                            </li>
                          )
                        )}
                      </ul> */}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
