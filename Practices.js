import { useState } from "react";

// home
export function Home(props) {
  const { name } = props;
  return (
    <>
      <section id="hero">
        <div className="network-bg">
          <div className="network-line"></div>
          <div className="network-line"></div>
          <div className="network-line"></div>
          <div className="network-line"></div>
          <div className="network-line"></div>
          <div className="network-line"></div>
          <div className="network-line"></div>
          <div className="network-line"></div>
          <div className="network-dot"></div>
          <div className="network-dot"></div>
          <div className="network-dot"></div>
          <div className="network-dot"></div>
          <div className="network-dot"></div>
          <div className="network-dot"></div>
          <div className="network-dot"></div>
          <div className="network-dot"></div>
          <div className="network-dot"></div>
          <div className="network-dot"></div>
          <div className="network-dot"></div>
          <div className="network-dot"></div>
        </div>

        <div className="peace-bg">
          <div className="breathing-circle"></div>
          <div className="breathing-circle"></div>
          <div className="breathing-circle"></div>
          <div className="breathing-circle"></div>
        </div>
        <div className="floating-elements">
          <div className="zen-stone"></div>
          <div className="zen-stone"></div>
          <div className="zen-stone"></div>
        </div>
        <div className="mandala-bg">
          <div className="mandala-circle"></div>
          <div className="mandala-circle"></div>
          <div className="mandala-circle"></div>
        </div>
        <div className="hero-content">
          <h1>Find Your Inner Peace</h1>
          <p>
            Journey towards mental wellness through mindfulness, meditation, and
            self-discovery
          </p>
          <a href="#about" className="cta-button active">
            Begin Your Journey
          </a>
        </div>
      </section>
    </>
  );
}
// About
export function About(props) {
  const { aboutSection1, aboutSection2, aboutSection3 } = props;

  console.log("aboutSection3", aboutSection3);
  return (
    <>
      <section id="about">
        <h2 className="section-title">Discover Mindfulness</h2>
        <p className="section-subtitle">
          Transform your mind, transform your life
        </p>

        <div class="about-floating-cards">
          {aboutSection1.map((data) => (
            <>
              <div class="floating-card">
                <div class="card-icon">
                  <div class="icon-wrapper">{data?.logo}</div>
                </div>
                <h3>{data?.title}</h3>
                <p>{data?.description}</p>
              </div>
            </>
          ))}

          {/*  <div class="floating-card">
                <div class="card-icon">
                    <div class="icon-wrapper">⚡</div>
                </div>
                <h3>Instant Calm</h3>
                <p>Access immediate stress relief through proven breathing techniques that activate your parasympathetic nervous system.</p>
            </div>
            
            <div class="floating-card">
                <div class="card-icon">
                    <div class="icon-wrapper">🎯</div>
                </div>
                <h3>Peak Performance</h3>
                <p>Achieve flow states more easily and unlock your full potential in work, creativity, and personal growth.</p>
            </div> */}

          {/* section 2 */}
        </div>

        <div class="stats-banner">
          <div class="stat-block">
            <div class="stat-value">{aboutSection2?.StressReduction}%</div>
            <div class="stat-desc">Stress Reduction</div>
          </div>
          <div class="stat-block">
            <div class="stat-value">{aboutSection2?.BetterFocus}X</div>
            <div class="stat-desc">Better Focus</div>
          </div>
          <div class="stat-block">
            <div class="stat-value">{aboutSection2?.HappyMembers}K+</div>
            <div class="stat-desc">Happy Members</div>
          </div>
          <div class="stat-block">
            <div class="stat-value">{aboutSection2?.UserRating}★</div>
            <div class="stat-desc">User Rating</div>
          </div>
        </div>

        {/* Section 3 */}

        <div class="feature-showcase">
          <div class="showcase-content">
            <h3>Why Choose Inner Peace?</h3>
            <ul class="feature-list">
              {aboutSection3.map((data3) => (
                <>
                  <li>
                    <span class="feature-check">✓</span>
                    <span>{data3?.description}</span>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

// Practice
export function Practices(props) {
  const { practicesSection1, practicesSection2 } = props;

  return (
    <>
      <section id="practices">
        <div class="practices-container">
          <h2 class="section-title"> Mindfulness Practices</h2>
          <p class="section-subtitle">
            Master these core practices to build your mindfulness toolkit
          </p>

          <div class="practice-layout">
            <div class="timeline-track">
              <div class="timeline-progress"></div>

              <div class="timeline-points">
                {practicesSection1.map((data) => (
                  <>
                    <div class="timeline-point active">
                      <div class="futuristic-label">
                        <span class="label-text">{data?.title}</span>
                      </div>
                      <div class="timeline-indicator"></div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            {/*  practice section 2 */}

            <div class="practice-content-area">
              <div class="practice-card-new">
                {practicesSection2.map((data) => (
                  <>
                    <div class="practice-header">
                      <div class="practice-icon-new">{data?.logo}</div>
                      <div class="practice-info">
                        <h3>{data?.title}</h3>
                        <span class="practice-duration">{data?.timeline}</span>
                      </div>
                    </div>
                    <p class="practice-description">{data?.description}</p>

                    <div class="practice-benefits">
                      <a href="#" class="benefit-tag">
                     {data?.benefit1}
                      </a>
                      <a href="#" class="benefit-tag">
                        {data?.benefit2}
                      </a>
                      <a href="#" class="benefit-tag">
                        {data?.benefit3}
                      </a>
                      <a href="#" class="benefit-tag">
                      {data?.benefit4}
                      </a>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
// Recources

export function Resources(props) {
  const { resourcesSection1, resourcesSection2, resourcesSection3 } = props;
  const [showTab, setShowTab] = useState("meditations");

  return (
    <>
      <section id="resources">
        <h2 className="section-title">Resources & Tools</h2>
        <p className="section-subtitle">
          Everything you need to support your mindfulness practice
        </p>

        <div className="resource-tabs">
          <button
            className={`tab-btn ${showTab === "meditations" ? "active" : ""}`}
            onClick={() => setShowTab("meditations")}
          >
            Meditations
          </button>
          <button
            className={`tab-btn ${showTab === "courses" ? "active" : ""}`}
            onClick={() => setShowTab("courses")}
          >
            Courses
          </button>
          <button
            className={`tab-btn ${showTab === "tools" ? "active" : ""}`}
            onClick={() => setShowTab("tools")}
          >
            Tools
          </button>
        </div>
        {showTab === "meditations" ? (
          <>
            <div id="meditations" className="tab-content active">
              <div className="resource-list">
                {resourcesSection1.map((data) => (
                  <div className="resource-card">
                    <div className="resource-image">
                      <div
                        className="resource-thumbnail"
                        style={{
                          backgroundImage: `url(${data?.imageurl})`,
                        }}
                      ></div>
                    </div>

                    <div className="resource-body">
                      <h3>{data?.title}</h3>
                      <p>{data?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>{" "}
          </>
        ) : showTab === "courses" ? (
          <>
            <div className="tab-content active">
              <div className="resource-list">
                  {resourcesSection2.map((data) => (  
                     <>
                <div className="resource-card">
                  <div className="resource-image">
 <div
                        className="resource-thumbnail"
                        style={{
                          backgroundImage: `url(${data?.imageurl})`,
                        }}
                      ></div>                  </div>
                  <div className="resource-body">
                    <h3>{data?.title}</h3>
                    <p>
                     {data?.description}
                    </p>
                  </div>
                </div>
                </> ))}
                {/* <div className="resource-card">
                  <div className="resource-image">
                    <div className="resource-thumbnail leadership-course"></div>
                  </div>
                  <div className="resource-body">
                    <h3>Mindful Leadership</h3>
                    <p>
                      Develop presence and emotional intelligence for effective
                      leadership.
                    </p>
                  </div>
                </div> */}
                {/* <div className="resource-card">
                  <div className="resource-image">
                    <div className="resource-thumbnail beginner-course"></div>
                  </div>
                  <div className="resource-body">
                    <h3>Beginner's Journey</h3>
                    <p>
                      30-day introduction to mindfulness with daily lessons and
                      practices.
                    </p>
                  </div> 
                </div>*/}
              </div>
            </div>
          </>
        ) : (
          <>
            <div id="tools" className="tab-content active">
              <div className="resource-list">
              {resourcesSection3.map((data) => (   
                <>
                <div className="resource-card">
                   
              
                  <div className="resource-image">
                  <div
                        className="resource-thumbnail"
                        style={{
                          backgroundImage: `url(${data?.imageurl})`,
                        }}
                      ></div>
                  </div>
                  <div className="resource-body">
                    <h3>{data?.title}</h3>
                    <p>
                     {data?.description}
                    </p>
                  </div>
                    </div>
                   
        
              </>   ))}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
